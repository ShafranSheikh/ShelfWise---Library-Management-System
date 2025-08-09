using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
namespace backend.Controllers
{
    public class BookFormDto
    {
        public string? Title { get; set; }
        public string? Author { get; set; }
        public string? AboutAuthor { get; set; }
        public string? BookDescription { get; set; }
        public IFormFile? Image { get; set; }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly BookService _bookService;

        public BookController(BookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetAll()
        {
            var books = await _bookService.GetAllAsync();
            return Ok(books);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetById(int id)
        {
            var book = await _bookService.GetByIdAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        [HttpPost]
        public async Task<IActionResult> PostForm(
            [FromForm] BookFormDto form)
        {
            if (string.IsNullOrEmpty(form.Title))
            {
                return BadRequest(new { error = "Title is required" });
            }
            if (string.IsNullOrEmpty(form.Author))
            {
                return BadRequest(new { error = "Author Name is required" });
            }
            if (string.IsNullOrEmpty(form.AboutAuthor))
            {
                return BadRequest("About Author is required");
            }
            if (string.IsNullOrEmpty(form.BookDescription))
            {
                return BadRequest(new { error = "Book Description is Required" });
            }
            if (form.Image == null)
            {
                return BadRequest(new { error = "Image is required" });
            }

            var book = new Book
            {
                Title = form.Title,
                Author = form.Author,
                AboutAuthor = form.AboutAuthor,
                BookDescription = form.BookDescription,
            };
            if (form.Image != null && form.Image.Length > 0)
            {
                using var ms = new MemoryStream();
                await form.Image.CopyToAsync(ms);
                book.Image = ms.ToArray();
            }

            await _bookService.AddAsync(book);
            return Ok(new { message = "New Book Added Successfully" });
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateBook(
            int id,
            [FromForm] BookFormDto form)
        {
            var existingBook = await _bookService.GetByIdAsync(id);
            if (existingBook == null)
            {
                return NotFound(new { error = "Book Data Not Found" });
            }

            existingBook.Title = string.IsNullOrWhiteSpace(form.Title) ? existingBook.Title : form.Title;
            existingBook.Author = string.IsNullOrWhiteSpace(form.Author) ? existingBook.Author : form.Author;
            existingBook.AboutAuthor = string.IsNullOrWhiteSpace(form.AboutAuthor) ? existingBook.AboutAuthor : form.AboutAuthor;
            existingBook.BookDescription = string.IsNullOrWhiteSpace(form.BookDescription) ? existingBook.BookDescription : form.BookDescription;

            if (form.Image != null && form.Image.Length > 0)
            {
                using var ms = new MemoryStream();
                await form.Image.CopyToAsync(ms);
                existingBook.Image = ms.ToArray();
            }


            await _bookService.UpdateAsync(existingBook);
            return Ok(new { message = "Book Details Updated" });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var existingBook = _bookService.GetByIdAsync(id);
            if(existingBook == null)
            {
                return NotFound(new{ error = "Book Not Found" });
            }
            await _bookService.DeleteAsync(id);
            return Ok(new { message = "Book Deleted successfully" });
        }
    }
}
