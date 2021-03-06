using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Quiklease.API.Data;
using Quiklease.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Quiklease.API.Dtos;
using AutoMapper;

namespace Quiklease.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
       private readonly IAuthRepository _repo;
       private readonly IConfiguration _config;
       private readonly IMapper _mapper;
       public AuthController(IAuthRepository repo, IConfiguration config,
       IMapper mapper)
       {
           _repo = repo;
           _config = config;
           _mapper = mapper;
       }

       [HttpPost("register")]
       public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
       {
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            if (await _repo.UserExists(userForRegisterDto.Username)) {
                return BadRequest("User already exisits");
            }
            var usertocreate = _mapper.Map<User>(userForRegisterDto);
            var createdUser = await _repo.Register(usertocreate, userForRegisterDto.Password);
            
            return CreatedAtRoute("GetUser", new {Controller="Users", id=createdUser.Id}, createdUser);
       }

       [HttpPost("login")]
       public async Task<IActionResult> Login(UserForLoginDto userforlogindto)
       {
            var userfromrepo = await _repo.Login(userforlogindto.Username.ToLower(), userforlogindto.Password);
            if (userfromrepo == null) 
            {
                return Unauthorized();
            }
            
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userfromrepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userfromrepo.UserName)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };
            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);


            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });

       }
    }
}