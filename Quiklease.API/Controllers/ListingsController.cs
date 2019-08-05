using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Quiklease.API.Data;
using Quiklease.API.Dtos;
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
        public ListingsController(IQuikleaseRepository repo, IMapper mapper) {
            _repo = repo;
            _mapper = mapper;
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

    }
}