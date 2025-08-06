import listImg from '../assets/List_Add.png'
import PrimaryButton from '../components/PrimaryButton';
import coverImage from '../assets/CoverImage.png'
const AddBookPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background my-8'>
      <div className='bg-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl bg-[#F4EFFA]'>
        <div className="w-full md:w-1/2">

        <div className='flex flex-row items-center justify-left h-10 mb-6 gap-4'>
          <h2 className="text-2xl font-bold font-body text-[#2F184B] ">Add New Book</h2>
          <img src={listImg} alt="" />
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
          <div className="flex justify-center mb-8">
              <PrimaryButton label='Add Book' type='submit' className='border-2 bg-[#2F184B] text-[#F4EFFA] hover:bg-[#F4EFFA] hover:text-[#2F184B]' />
            </div>
        </form>
        </div>  
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={coverImage} alt="Doctor" className="max-w-full" />
        </div>
      </div>
    </div>
  )
}

export default AddBookPage