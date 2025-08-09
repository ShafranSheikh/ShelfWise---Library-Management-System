using System.ComponentModel.DataAnnotations;
namespace backend.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; } = string.Empty;
        [Required]
        public string Author { get; set; } = string.Empty;
        [Required]
        public string AboutAuthor { get; set; } = string.Empty;
        [Required]
        public string BookDescription { get; set; } = string.Empty;
        [Required]
        public byte[] Image { get; set; } = Array.Empty<byte>();  
    }
}
