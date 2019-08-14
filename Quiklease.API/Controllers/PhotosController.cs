using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Quiklease.API.Data;
using Quiklease.API.Dtos;
using Quiklease.API.Helpers;
using Quiklease.API.Models;

namespace Quiklease.API.Controllers
{
    [Authorize]
    [Route("api/listings/{listingId}/photos")]
    [ApiController]

    public class PhotosController : ControllerBase
    {
        private readonly IQuikleaseRepository _repo;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        public PhotosController(
            IQuikleaseRepository repo,
            IMapper mapper,
            IOptions<CloudinarySettings> cloudinaryConfig) {
                this._cloudinaryConfig = cloudinaryConfig;
                this._mapper = mapper;
                this._repo = repo;

                Account acc = new Account(
                    _cloudinaryConfig.Value.CloudName,
                    _cloudinaryConfig.Value.ApiKey,
                    _cloudinaryConfig.Value.ApiSecret
                );

            _cloudinary = new Cloudinary(acc);
        }
        
        [HttpPost]
        public async Task<IActionResult> AddPhotoForListing(int listingId, [FromForm]PhotoForCreationDto photoForCreationDto) 
        {

            var listingfromrepo = await _repo.GetListing(listingId);

            var file = photoForCreationDto.File;
            var uploadResults = new ImageUploadResult();

            if (file.Length > 0) {
                using (var stream = file.OpenReadStream()) {
                    var uploadParams = new ImageUploadParams()
                    {
                        File = new FileDescription(file.Name, stream),
                        Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face")
                    };
                    uploadResults = _cloudinary.Upload(uploadParams);
                }
            }

            photoForCreationDto.PhotoUrl = uploadResults.Uri.ToString();
            photoForCreationDto.PublicId = uploadResults.PublicId;

            var photo = _mapper.Map<Photo>(photoForCreationDto);

            if(!listingfromrepo.Photos.Any(u => u.IsMain)) {
                photo.IsMain = true;
            }
            if(listingfromrepo.Photos.Count == 0) {
                listingfromrepo.PhotoUrl = photo.PhotoUrl;
            }

            listingfromrepo.Photos.Add(photo);

            if (await _repo.SaveAll()) {
                var photoToReturn = _mapper.Map<PhotoForReturnDto>(photo);
                return CreatedAtRoute("GetPhoto", new { id=photo.Id}, photoToReturn);
            }
            return BadRequest("Could not add photo");
            
        }

        [HttpGet("{id}", Name="GetPhoto")]
        public async Task<IActionResult> GetPhoto(int id) {
            var photoFromRepo = await _repo.GetPhoto(id);
            var photo = _mapper.Map<PhotoForReturnDto>(photoFromRepo);
            return Ok(photo);
        }


        [HttpPost("{id}/setMain")]
        public async Task<IActionResult> SetMainPhoto(int listingId, int id) {

            var listing = await _repo.GetListing(listingId);
            if(!listing.Photos.Any(p => p.Id == id)) {
                return Unauthorized();
            }

            var photoFromRepo = await _repo.GetPhoto(id);
            if(photoFromRepo.IsMain) {
                return BadRequest("This is already the main photo");
            }
            var currentMainPhoto = await _repo.GetMainPhotoForListing(listingId);

            currentMainPhoto.IsMain = false;

            photoFromRepo.IsMain = true;

            var listingFromrepo = await _repo.GetListing(listingId);
            listingFromrepo.PhotoUrl = photoFromRepo.PhotoUrl;

            if (await _repo.SaveAll()) {
                return NoContent();
            }
            else {
                return BadRequest("Could not set photo to main");
            }

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoto(int listingId, int id) {

            var listing = await _repo.GetListing(listingId);
            if(!listing.Photos.Any(p => p.Id == id)) {
                return Unauthorized();
            }

            var photoFromRepo = await _repo.GetPhoto(id);
            if(photoFromRepo.IsMain) {
                return BadRequest("You can't delete your main photo");
            }

            if (photoFromRepo.PublicId != null) {
                var deleteParams = new DeletionParams(photoFromRepo.PublicId);
                var result = _cloudinary.Destroy(deleteParams);
                if(result.Result == "ok") 
                {
                    listing.Photos.Remove(photoFromRepo);
                }
            }
            if (photoFromRepo.PublicId == null) {
                _repo.Delete(photoFromRepo);
            }

            
            if(await _repo.SaveAll()) {
                return Ok();
            }
            return BadRequest("Failed to delete photo");

        }



    }
}