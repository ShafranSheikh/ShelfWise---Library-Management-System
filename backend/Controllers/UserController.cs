using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    public class LoginRequest
    {
        public string email { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
    }

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly JwtService _jwtService;

        public UserController(UserService userService, JwtService jwtService)
        {
            _userService = userService;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> PostForm([FromBody] UserModel user)
        {
            try
            {
                await _userService.SaveUserAsync(user);
                return Ok(new { message = "User Registration successful" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[Register Error] {ex}");
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginData)
        {
            if (loginData == null || string.IsNullOrWhiteSpace(loginData.email) || string.IsNullOrWhiteSpace(loginData.password))
            {
                return BadRequest("Email and Password are required.");
            }
            try
            {
                var user = await _userService.GetByEmailAsync(loginData.email);
                if (user == null || !BCrypt.Net.BCrypt.Verify(loginData.password, user.password))
                {
                    return Unauthorized("Invalid username or password");
                }

                var token = _jwtService.GenerateToken(user);
                return Ok(new { token });
            }
            catch (Exception ex)
            {
                Console.WriteLine("Login error: " + ex);
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
