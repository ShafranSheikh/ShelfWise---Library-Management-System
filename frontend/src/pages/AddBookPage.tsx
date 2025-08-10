import { useState } from 'react'
import listImg from '../assets/List_Add.png'
import PrimaryButton from '../components/PrimaryButton';
import coverImage from '../assets/CoverImage.png'
import axios from 'axios';
const AddBookPage = () => {
  const [errors, setErrors] = useState<{
    title?: string;
    author?: string;
    aboutAuthor?: string;
    image?: string;
    bookDescription?: string;
  }>({
    title: '',
    author: '',
    aboutAuthor: '',
    image: '',
    bookDescription: ''
  });
  const validate = () => {
      const errors ={} as Record<string, string>;
      if(!formData.title.trim()){
        errors.title = 'Title is required';
      }
      if(!formData.author.trim()){
        errors.author = 'Author is required';
      }
      if(!formData.aboutAuthor.trim()){
        errors.aboutAuthor = 'About author is required';
      }
      if(!formData.bookDescription.trim()){
        errors.bookDescription = 'Book description is required';
      }
      if(!formData.image){
        errors.image = 'Book cover image is required';
      }
      return errors;
    }
  const [formData, setFormData] = useState<{
      title: string;
      author: string;
      aboutAuthor: string;
      image: File | null;
      bookDescription: string;
  }>({
      title: '',
      author: '',
      aboutAuthor: '',
      image: null,
      bookDescription: ''
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name === 'image' && 'files' in event.target) {
      const files = (event.target as HTMLInputElement).files;
      setFormData({ ...formData, [name]: files && files[0] ? files[0] : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('author', formData.author);
    formDataToSend.append('aboutAuthor', formData.aboutAuthor);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }
    formDataToSend.append('bookdescription', formData.bookDescription);
    try{
      await axios.post('http://localhost:5008/api/book', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      alert('Book Added successfully');
      window.location.reload();
    }catch (error){
      console.error('Error adding book:', error);
      alert('Failed to add book. Please try again.');
    }
    
}
  return (
    <div className='min-h-screen flex items-center justify-center bg-background my-8'>
      <div className='bg-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl bg-[#F4EFFA]'>
        <div className="w-full md:w-1/2">

        <div className='flex flex-row items-center justify-left h-10 mb-6 gap-4'>
          <h2 className="text-2xl font-bold font-body text-[#2F184B] ">Add New Book</h2>
          <img src={listImg} alt="" />
        </div>

        <form action="" className='font-body' onSubmit={handleFormSubmit}>

          <label htmlFor="">Book Title</label>
          <input type="text"
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter book title' 
            onChange={handleChange}
            name='title'
            value={formData.title}
          />
          {errors.title && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.title}</p>}

          <label htmlFor="">Author</label>
          <input type="text" 
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter author name'
            onChange={handleChange}
            name='author'
            value={formData.author}
          />  
          {errors.author && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.author}</p>}

          <label htmlFor="">About author</label>
          <textarea 
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4] resize-none' 
            placeholder='Write about the author' 
            rows={5}
            onChange={handleChange}
            name='aboutAuthor'
            value={formData.aboutAuthor}
          />
          {errors.aboutAuthor && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.aboutAuthor}</p>}

          <label htmlFor="">Book Cover Image</label>
          <input type="file"
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]'
            onChange={handleChange}
            name='image'
            accept="image/png, image/jpeg"
          />
          {errors.image && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.image}</p>}

          <label htmlFor="">Book Description</label>
          <textarea 
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4] resize-none' 
            placeholder='Write a brief description of the book' 
            rows={4}
            onChange={handleChange}
            name='bookDescription'
            value={formData.bookDescription}
          />
          {errors.bookDescription && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.bookDescription}</p>}

          <div className="flex justify-center mb-8">
              <PrimaryButton label='Add Book' type='submit' className='border-2 bg-[#2F184B] text-[#F4EFFA] hover:bg-[#F4EFFA] hover:text-[#2F184B]' />
            </div>
        </form>
        </div>  
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={coverImage} alt="cover" className="max-w-full" />
        </div>
      </div>
    </div>
  )
}

export default AddBookPage