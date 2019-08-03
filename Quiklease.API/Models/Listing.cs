using System;
using System.Collections.Generic;
using Quiklease.API.Dtos;

namespace Quiklease.API.Models
{
    public class Listing
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
        public ICollection<Photo> Photos {get; set;}
        public User User {get; set;}
        public int UserId {get; set;}
    }
}