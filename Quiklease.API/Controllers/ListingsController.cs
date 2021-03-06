using System;
using System.Collections.Generic;
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
    [Route("api/[controller]")]
    [ApiController]
    public class ListingsController : ControllerBase
    {
        
        private readonly IQuikleaseRepository _repo;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;
        public ListingsController(IQuikleaseRepository repo, IMapper mapper,
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

        [HttpGet]
        public async Task<IActionResult> GetListings() {
            var listings = await _repo.GetListings();
            var listingstoreturn = _mapper.Map<IEnumerable<ListingForListDto>>(listings);
            return Ok(listingstoreturn);
        }

        [HttpGet("mylistings/{userid}")]
        public async Task<IActionResult> GetUserListings(int userid) {
            if(userid != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) {
                return Unauthorized();
            }
            var listings = await _repo.GetUserListings(userid);
            var listingstoreturn = _mapper.Map<IEnumerable<ListingForListDto>>(listings);
            return Ok(listingstoreturn);
        }

        [HttpGet("{id}", Name="GetListing")]
        public async Task<IActionResult> GetListing(int id) {
            var listing = await _repo.GetListing(id);
            var listingtoreturn = _mapper.Map<ListingForDetailDto>(listing);
            return Ok(listingtoreturn);
        }

        [HttpPost]
        public async Task<IActionResult> AddListing(ListingForAddDto l) {
            int userid = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            
            var userfromrepo = await _repo.GetUser(userid);
            
            var listingtocreate = _mapper.Map<Listing>(l);
            if (userfromrepo != null){
                userfromrepo.Listings.Add(listingtocreate);
            }

            if (await _repo.SaveAll()) {
                return CreatedAtRoute("GetListing", new { id=listingtocreate.Id}, listingtocreate);
            }
            return BadRequest("Could not add listing");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateListing(int id, ListingForUpdateDto listing)
        {
            var listingfromrepo = await _repo.GetListing(id);

            _mapper.Map(listing, listingfromrepo);

            if (await _repo.SaveAll()) {
                return NoContent();
            }
            else {
                throw new Exception($"updating user {id} failed on save");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteListing(int id)
        {
            var listingfromrepo = await _repo.GetListing(id);
            ICollection<Photo> photos = listingfromrepo.Photos;
            foreach(var photoFromRepo in photos) {
                if (photoFromRepo.PublicId != null) {
                    var deleteParams = new DeletionParams(photoFromRepo.PublicId);
                    var result = _cloudinary.Destroy(deleteParams);
                    if(result.Result == "ok") 
                    {
                        listingfromrepo.Photos.Remove(photoFromRepo);
                    }
                }
                if (photoFromRepo.PublicId == null) {
                    _repo.Delete(photoFromRepo);
                }
            }

            _repo.Delete(listingfromrepo);

            if(await _repo.SaveAll()) {
                return Ok();
            }
            return BadRequest("Failed to delete listing");

        }

    }
}