using System;
using System.Collections.Generic;
using Quiklease.API.Models;

namespace Quiklease.API.Dtos
{
    public class ListingForDetailDto
    {
        public int Id {get; set;}
        public DateTime PostedDate {get; set;}
        public DateTime ExpiryDate {get; set;}
        public string Address {get; set;}
        public string Phone {get; set;}
        public string Title { get; set; }
        public string Description {get; set;}
        public string PhotoUrl {get; set;}
        public decimal Price {get; set;}
        public int Likes {get; set;}
        public ICollection<PhotoForDetailDto> Photos {get; set;}
        public User User {get; set;}
        public int UserId {get; set;}
        public DateTime RentFrom {get; set;}
        public DateTime RentUntil {get; set;}
        public int RoomsAvailable {get; set;}
        public string BuildingType {get; set;}
    }
}