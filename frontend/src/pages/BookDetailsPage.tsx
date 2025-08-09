import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import bin from '../assets/Delete.png';
import PrimaryButton from '../components/PrimaryButton';


const BookDetailsPage = () => {
  const {id} = useParams<{id: string}>();
  const [bookDetails, setBookDetails] = useState<any>(null);
  const [editmode, setEditMode] = useState(false);
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
  useEffect(()=>{
    const fetchBookDetails = async () => {
      try{
        const response = await axios.get(`http://localhost:5008/api/book/${id}`);
        const data = response.data;
        let imageUrl = '';
        if(data.image){
          imageUrl = `data:image/png;base64,${data.image}`;
        }
        setBookDetails({...data, imageUrl})
        setFormData({
          title: data.title,
          author: data.author,
          aboutAuthor: data.aboutAuthor,
          image: null, 
          bookDescription: data.bookDescription
        });
      }catch(error){
        console.error('Error fetching book details:', error);
      }
    }
    fetchBookDetails();
  },[id])
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>    
  ) => {
    const { name, value } = e.target
    if(name === 'image' && 'files' in e.target){
      const files = (e.target as HTMLInputElement).files;
      setFormData({ ...formData, [name]: files && files[0] ? files[0] : null });
    }else{
      setFormData({ ...formData, [name]: value });
    }
  }
  const updateBook = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedFormData = new FormData();
    updatedFormData.append("Title", formData.title);
    updatedFormData.append("Author", formData.author);
    updatedFormData.append("AboutAuthor", formData.aboutAuthor);
    updatedFormData.append("BookDescription", formData.bookDescription);
    if (formData.image) {
      updatedFormData.append("Image", formData.image);
    }
    try{
      await axios.put(`http://localhost:5008/api/book/${id}`, updatedFormData, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
      alert('Book details updated successfully');
      setEditMode(false);
      window.location.reload();
    }catch(error){
      console.error('Error updating book details:', error);
      alert('Failed to update book details. Please try again.');
    }
  }
  const deleteBook = async () => {
    try{
      await axios.delete(`http://localhost:5008/api/book/${id}`);
      alert('Book deleted successfully');
      window.location.href = '/';
    }catch(error){
      console.error('Error deleting book:', error);
      alert('Failed to delete book. Please try again.');
    }
  }
  return (
    <>
      {!editmode ? (
        <>
          <div className="min-h-screen flex flex-col items-center justify-center bg-background my-8">
            <div className="bg-card p-10 rounded-xl shadow-lg flex flex-col w-full max-w-5xl bg-[#F4EFFA]">
              {/* Header section */}
              <div className="w-full flex flex-row justify-between items-center">
                <h1 className="sm:text-3xl font-body font-bold text-center mb-0 text-[#2F184B] ">
                  {bookDetails?.title}
                </h1>
                <div className="space-x-4 flex p-2">
                  <button className="border-r-2 p-4 " onClick={deleteBook}>
                    <img src={bin} alt=""/>
                  </button>
                  <button onClick={() => setEditMode(true)} className="font-bold">UPDATE</button>
                </div>
              </div>

              {/* Image section inside the card */}
              <div className="mt-6 flex flex-col items-center justify-center">
                <img src={bookDetails?.imageUrl} className="max-w-sm w-full h-auto rounded-lg shadow-md" />
                <p className='my-4'>{bookDetails?.author}</p>
              </div>
              {/* Description section */}
              <div className="mt-6">
                <h2 className="text-xl font-body font-bold text-[#2F184B] mb-4">About the Book</h2>
                <p className="text-gray-700 dark:text-gray-400">
                  {bookDetails?.bookDescription}
                </p>
              </div>
              {/* Author section */}
              <div className="mt-6">
                <h2 className="text-xl font-body font-bold text-[#2F184B] mb-4">About the Author</h2>
                <p className="text-gray-700 dark:text-gray-400">
                  {bookDetails?.aboutAuthor}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='min-h-screen flex items-center justify-center bg-background my-8'>
          <div className='bg-card p-8 rounded-xl shadow-lg flex flex-col justify-center md:flex-row w-full max-w-5xl bg-[#F4EFFA]'>
            <div className="w-1/2 ">

            <div className='flex flex-row items-center justify-center h-10 mb-6'>
              <h2 className="text-2xl font-bold font-body  text-[#2F184B] ">Update Book Details</h2>
            </div>

            <form action="" className='font-body' onSubmit={updateBook}>

              <label htmlFor="">Book Title</label>
              <input type="text"
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
                placeholder='Enter book title'
                name='title'
                value={formData.title}
                onChange={handleInputChange}
              />

              <label htmlFor="">Author</label>
              <input type="text" 
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
                placeholder='Enter author name' 
                name='author'
                value={formData.author}
                onChange={handleInputChange}
              />

              <label htmlFor="">About author</label>
              <textarea 
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4] resize-none' 
                placeholder='Write about the author' 
                rows={5} 
                name='aboutAuthor'
                value={formData.aboutAuthor}
                onChange={handleInputChange}
              />

              <label htmlFor="">Book Cover Image</label>
              <input type="file"
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
                name='image'
                onChange={handleInputChange}
                
              />

              <label htmlFor="">Book Description</label>
              <textarea 
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4] resize-none' 
                placeholder='Write a brief description of the book' 
                rows={4} 
                name='bookDescription'
                value={formData.bookDescription}
                onChange={handleInputChange}
              />
              <div className="flex justify-center mb-8 gap-4">
                  <PrimaryButton label='Update Book' type='submit' className='border-2 bg-[#2F184B] text-[#F4EFFA] hover:bg-[#F4EFFA] hover:text-[#2F184B]' />
                  <PrimaryButton label='Cancel' type='button' className='border-2 border-[#2F184B] hover:bg-[#2F184B] hover:border-[#2F184B] hover:text-[#F4EFFA]' onClick={()=> setEditMode(false)} />
              </div>
            </form>
            </div>  
          </div>
        </div>
        </>
      )}
    </>
  );
}

export default BookDetailsPage