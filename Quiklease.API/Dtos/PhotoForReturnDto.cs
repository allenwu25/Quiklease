using System;

namespace Quiklease.API.Dtos
{
    public class PhotoForReturnDto
    {
        public int Id {get; set;}
        public string PhotoUrl {get; set;}
        public DateTime DateAdded {get; set;}
        public bool IsMain {get; set;}
        public string PublicId {get; set;}
    }
}