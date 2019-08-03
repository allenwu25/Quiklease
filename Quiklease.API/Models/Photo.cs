using System;

namespace Quiklease.API.Models
{
    public class Photo
    {
        public int Id {get; set;}
        public string PhotoUrl {get; set;}
        public DateTime DateAdded {get; set;}
        public bool IsMain { get; set; }
        public int PublicId {get; set;}
        public Listing Listing {get; set;}
        public int ListingId {get; set;}
    }
}