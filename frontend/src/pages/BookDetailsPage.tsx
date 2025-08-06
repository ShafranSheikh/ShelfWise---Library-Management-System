import { useState } from 'react';
import bin from '../assets/Delete.png';
import image from '../assets/temp/img1.png'
import PrimaryButton from '../components/PrimaryButton';
const BookDetailsPage = () => {
  const [editmode, setEditMode] = useState(false);
  return (
    <>
      {!editmode ? (
        <>
          <div className="min-h-screen flex flex-col items-center justify-center bg-background my-8">
            <div className="bg-card p-10 rounded-xl shadow-lg flex flex-col w-full max-w-5xl bg-[#F4EFFA]">
              {/* Header section */}
              <div className="w-full flex flex-row justify-between items-center">
                <h1 className="text-3xl font-body font-bold text-center mb-0 text-[#2F184B]">
                  The Great Gatasby
                </h1>
                <div className="space-x-4 flex p-2">
                  <button className="border-r-2 p-4">
                    <img src={bin} alt="" />
                  </button>
                  <button onClick={() => setEditMode(true)} className="font-bold">UPDATE</button>
                </div>
              </div>

              {/* Image section inside the card */}
              <div className="mt-6 flex flex-col items-center justify-center">
                <img src={image} alt="" className="max-w-sm w-full h-auto rounded-lg shadow-md" />
                <p className='my-4'>F. Scott Fitzgerald</p>
              </div>
              {/* Description section */}
              <div className="mt-6">
                <h2 className="text-xl font-body font-bold text-[#2F184B] mb-4">About the Book</h2>
                <p className="text-gray-700 dark:text-gray-400">
                  The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.
                </p>
              </div>
              {/* Author section */}
              <div className="mt-6">
                <h2 className="text-xl font-body font-bold text-[#2F184B] mb-4">About the Author</h2>
                <p className="text-gray-700 dark:text-gray-400">
                  F. Scott Fitzgerald was an American novelist, essayist, screenwriter, and short story writer, widely regarded as one of the greatest American writers of the 20th century. His most famous work, The Great Gatsby, is considered a classic of modern American literature.
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

            <form action="" className='font-body'>

              <label htmlFor="">Book Title</label>
              <input type="text"
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
                placeholder='Enter book title' 
              />

              <label htmlFor="">Author</label>
              <input type="text" 
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
                placeholder='Enter author name' 
              />

              <label htmlFor="">About author</label>
              <textarea 
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4] resize-none' 
                placeholder='Write about the author' 
                rows={5} 
              />

              <label htmlFor="">Book Cover Image</label>
              <input type="file"
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
              />

              <label htmlFor="">Book Description</label>
              <textarea 
                className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4] resize-none' 
                placeholder='Write a brief description of the book' 
                rows={4} 
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