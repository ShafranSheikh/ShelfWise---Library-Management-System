import { useNavigate } from 'react-router-dom';
interface CardProps {
    imageurl?: string;
    title?: string;
    author?: string;
    bookId?: number; // Optional, if you want to pass book ID for navigation
}
const Card = ({imageurl, title, author, bookId}:CardProps) => {
    const navigate = useNavigate();
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-5'>
        {imageurl ? (
        <img className='rounded-t-lg w-full h-60 object-cover' src={imageurl} alt={title || 'Book cover'} />
        ) : (
            <div className='rounded-t-lg w-full h-60 bg-gray-200 flex items-center justify-center text-gray-500 text-sm'>
            No Image Available
            </div>
        )}
        <div className='p-5'>
            <h5 className=' mb-2 text-2xl font-semibold  tracking-tight text-gray-900 dark:text-white '>{title}</h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{author}</p>
            <button onClick={()=>navigate(`/bookdetails/${bookId}`)} className=' w-full inline-flex items-center justify-center px-3 py-2 bg-[#C8B1E4] text-sm font-medium text-center text-[#2F184B]  rounded-lg  hover:bg-[#2F184B] hover:text-[#C8B1E4] transition-colors duration-300'>
                View
            </button>
        </div>    
    </div>
)
}

export default Card