using System;

namespace Quiklease.API.Dtos
{
    public class PhotoForDetailDto
    {
        public int Id {get; set;}
        public string PhotoUrl {get; set;}
        public DateTime DateAdded {get; set;}
        public bool IsMain {get; set;}
        
    }
}