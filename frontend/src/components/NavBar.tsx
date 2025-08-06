
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import logoName from '../assets/ShelfWise.png'
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className='bg-[#532B88] shadow-md px-6 py-4 flex justify-between items-center'>
      <div className='flex flex-row items-center space-x-4'>
        <img onClick={()=> navigate('/')} src={logo} alt="" className='h-10' />
        <img onClick={()=> navigate('/')} src={logoName} />
      </div>
      <ul className='flex space-x-9 font-bold '>
        <li onClick={()=> navigate('/')} className='font-display text-[#F4EFFA]'><a href="/">Home</a></li>
        <li onClick={()=> navigate('/addbook')} className='font-display text-[#F4EFFA]'><a href="/addbook">Add Book</a></li>
        <li onClick={()=> navigate('/bookdetails:bookId')} className='font-display text-[#F4EFFA]'><a href="/bookdetails">Book Details</a></li>
      </ul>
    </nav>
  )
}

export default NavBar