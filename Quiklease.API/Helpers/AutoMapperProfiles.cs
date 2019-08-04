using System.Linq;
using AutoMapper;
using Quiklease.API.Dtos;
using Quiklease.API.Models;

namespace Quiklease.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Listing, ListingForListDto>()
            .ForMember(dest => dest.PhotoUrl, opt => {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).PhotoUrl);
            });
            CreateMap<Photo, PhotoForDetailDto>();
            CreateMap<UserForRegisterDto, User>();
        }
    }
}