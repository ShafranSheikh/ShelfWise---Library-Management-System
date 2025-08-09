using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;
namespace backend.Services
{
    public class UserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            _context = context;
        }

        // Save user data
        public async Task SaveUserAsync(UserModel user)
        {
            // Hash the password before saving to the database
            user.password = BCrypt.Net.BCrypt.HashPassword(user.password);
            _context.Users.Add(user);
            var result = await _context.SaveChangesAsync();
            if (result == 0)
            {
                throw new Exception("Failed to save user");
            }
        }

        // Get user by email
        public async Task<UserModel?> GetByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.email == email);
        }

        //Get all user
        public async Task<List<UserModel>>GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }
    }
}
