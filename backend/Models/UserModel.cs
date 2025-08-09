using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class UserModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string firstName { get; set; } = string.Empty;
        [Required]
        public string lastName { get; set; } = string.Empty;
        [Required]
        public string email { get; set; } = string.Empty;
        [Required]
        public string password { get; set; } = string.Empty;
        [Required]
        public int age { get; set; } 
    }
}
