using System.ComponentModel.DataAnnotations;

namespace Quiklease.API.Dtos
{
    public class UserForLoginDto
    {
        public string Username { get; set; }

        public string Password { get; set; }
    }
}