using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Quiklease.API.Data;
using Quiklease.API.Dtos;

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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetListing(int id) {
            var listing = await _repo.GetListing(id);
            var listingtoreturn = _mapper.Map<ListingForDetailDto>(listing);
            return Ok(listingtoreturn);
        }

    }
}