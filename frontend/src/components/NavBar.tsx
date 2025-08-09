import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import logoName from '../assets/ShelfWise.png'
const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  useEffect(() =>{
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token); // Check if token exists to determine login status
  },[])
  const handleLogout = ( ) => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsLoggedIn(false); // Update login status
    window.location.href = '/login'; // Redirect to homepage
  }
  const navigate = useNavigate();
  return (
    <nav className='bg-[#532B88] shadow-md px-6 py-4 flex justify-between items-center'>
      <div className='flex flex-row items-center space-x-4'>
        <img onClick={()=> navigate('/')} src={logo} alt="" className='h-10' />
        <img onClick={()=> navigate('/')} src={logoName} />
      </div>
      <ul className='flex space-x-9 font-bold '>
        <li  className='font-display text-[#F4EFFA]'><a href="/">Home</a></li>
        <li className='font-display text-[#F4EFFA]'><a href="/addbook">Add Book</a></li>
        {isLoggedIn ? (
          <>
            <button className='font-display text-[#F4EFFA]' onClick={handleLogout}>Sign out</button>
          </>
        ):(
          <>
            <li  className='font-display text-[#F4EFFA]'><a href="/login">Login</a></li>
          </>
        )}
        
      </ul>
    </nav>
  )
}

export default NavBar