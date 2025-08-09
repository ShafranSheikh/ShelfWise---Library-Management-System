import Card from '../components/Card'
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  aboutAuthor: string;
  bookDescription: string;
  imageUrl?: string
}
const HomePage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5008/api/book');
      const booksWithImages = response.data.map((book: any) => {
        let imageUrl = '';
        if (book.image) {
          imageUrl = `data:image/png;base64,${book.image}`;
        }
        return { ...book, imageUrl };
      });
      setBooks(booksWithImages);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  fetchBooks();
}, []);
  return (
    <>
      <div className='bg-background '>
        <div className='bg-card p-2 rounded-xl shadow-sm w-full max-w-7xl mx-auto my-8'>
          <h1 className='text-3xl font-body font-bold text-center mb-8 text-[#2F184B]'>Welcome to ShelfWise</h1>
          <p className='text-center font-body text-gray-700 mb-8'>Explore our collection of books</p>
        </div>
      </div>
      <div className='min-h-screen flex items-center justify-center bg-background '>    
        <div className='bg-card p-8 rounded-xl shadow-lg w-full max-w-7xl  my-4 mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {books.length > 0 ? (
            books.map((book : Book) => (
              <Card key={book.id} imageurl={book.imageUrl} title={book.title} author={book.author} bookId={book.id}/>
            ))
          ) : (
            <p className='text-center col-span-full text-gray-500'>No books available</p>
          )}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage