import coverImage from '../assets/signupCoverImage.png';
import listImg from '../assets/List_Add.png'
import PrimaryButton from '../components/PrimaryButton';
const SignupPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background my-8'>
      <div className='bg-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl bg-[#F4EFFA]'>
        <div className="w-full md:w-1/2">

        <div className='flex flex-row items-center justify-left h-10 mb-6 gap-4'>
            <h2 className="text-2xl font-bold font-body text-[#2F184B] ">Sign Up</h2>
            <img src={listImg} alt="" />
        </div>

        <form action="" className='font-body'>

            <label htmlFor="">First Name</label>
            <input type="text"
            className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter first name' 
        />

        <label htmlFor="">Last Name</label>
        <input type="text" 
            className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter last name' 
        />

        <label htmlFor="">Age</label>
        <input type="number" 
            className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter age' 
        />

        <label htmlFor="">Email Address</label>
        <input type="email" 
            className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter email address' 
        />

        <label htmlFor="">Password</label>
        <input type="password" 
            className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter password' 
        />

        <div className="flex justify-center mb-8">
            <PrimaryButton label='Sign up' type='submit' className='border-2 bg-[#2F184B] text-[#F4EFFA] hover:bg-[#F4EFFA] hover:text-[#2F184B]' />
            </div>
        </form>
        <p className="mt-4 text-center text-sm">
            Already have an account? <a href="/login" className="font-display underline">Login</a>
        </p>
        </div>  
        <div className="hidden md:flex items-center justify-center w-1/2">
            <img src={coverImage} alt="Doctor" className="max-w-full" />
        </div>
      </div>
    </div>
  )
}

export default SignupPage