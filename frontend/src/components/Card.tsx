interface CardProps {
    imageurl?: string;
    title?: string;
    author?: string;
}
const Card = ({imageurl, title, author}:CardProps) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-5'>
        <a href="#">
            <img className='rounded-t-lg' src={imageurl} alt="" />
        </a>
        <div className='p-5'>
            <a href="#">
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
            </a>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{author}</p>
            <button className=' w-full inline-flex items-center justify-center px-3 py-2 bg-[#C8B1E4] text-sm font-medium text-center text-[#2F184B]  rounded-lg  hover:bg-[#2F184B] hover:text-[#C8B1E4] transition-colors duration-300'>
                View
            </button>
        </div>    
    </div>
)
}

export default Card