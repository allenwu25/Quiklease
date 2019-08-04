using System.ComponentModel.DataAnnotations;

namespace Quiklease.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
        
        [Required]
        public string FullName {get; set;}
    }
}