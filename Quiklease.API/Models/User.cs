using System.Collections.Generic;

namespace Quiklease.API.Models
{
    public class User
    {
        public int Id {get; set;}
        public string UserName {get;set;}
        public byte[] PasswordHash {get; set;}
        public byte[] PasswordSalt {get; set;}
        public string FullName { get; set; }
        public ICollection<Listing> Listings {get; set;}
    }
}