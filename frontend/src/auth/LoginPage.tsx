import coverImage from '../assets/loginPageCoverImage.png';
import listImg from '../assets/List_Add.png'
import PrimaryButton from '../components/PrimaryButton';
const LoginPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-background my-8'>
        <div className='bg-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl bg-[#F4EFFA]'>
            {/* Form Section */}
            <div className="w-full md:w-1/2">
                <div className='flex flex-row items-center justify-left h-10 mb-6 gap-4'>
                <h2 className="text-2xl font-bold font-body text-[#2F184B] ">Login</h2>
                <img src={listImg} alt="" />
            </div>
            <form >
                <label htmlFor="">Email Address</label>
                <input type="email" 
                    className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
                    placeholder='Enter Your Email Address' 
                />
                <label htmlFor="">Password</label>
                <input type="password" 
                    className='w-full p-2 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
                    placeholder='Enter Your Password' 
                />
                <div className="flex items-center justify-between mb-8">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </label>
                <a href="/useremailverification" className="text-primary text-sm">Forgot Password?</a>
                </div>
                <div className="flex justify-center mb-8">
                <PrimaryButton label='Login' type='submit' className='border-2 bg-[#2F184B] text-[#F4EFFA] hover:bg-[#F4EFFA] hover:text-[#2F184B]' />
                </div>
            </form>
            
            <p className="mt-4 text-center text-sm">
                Don’t have an account? <a href="/signup" className="text-primary underline">Sign up</a>
            </p>
            </div>

            {/* Image Section */}
            <div className="hidden md:flex items-center justify-center w-1/2">
            <img src={coverImage} alt="Doctor" className="max-w-full" />
            </div>
        </div>
        </div>
    )
}

export default LoginPage