import { useState } from 'react';
import axios from 'axios';
import coverImage from '../assets/loginPageCoverImage.png';
import listImg from '../assets/List_Add.png';
import PrimaryButton from '../components/PrimaryButton';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // State to manage form errors
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
        
    }>({
        email: '',
        password: ''
    });
    const validate = () => {
        const errors ={} as Record<string, string>;
        if(!email.trim()){
            errors.email = 'Email is required';
        } else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email address is invalid';
        }
        if(!password.trim()){
            errors.password = 'Paswword is required';
        }
        return errors;
    }
    // Function to handle form input changes
    const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }
    try {
        const response = await axios.post('http://localhost:5008/api/user/login', { email, password });
        const { token } = response.data;

        if (token) {
            localStorage.setItem('token', token);  
            alert('Login successful!');
            window.location.href = '/';
        } else {
            alert('Login failed: No token received.');
        }
        } catch (error: any) {
        console.error('Error during login:', error);
        alert(error.response?.data || 'Login failed. Please check your credentials and try again.');
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background my-8">
        <div className="bg-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl bg-[#F4EFFA]">
            <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-left h-10 mb-6 gap-4">
                <h2 className="text-2xl font-bold font-body text-[#2F184B]">Login</h2>
                <img src={listImg} alt="List Icon" />
            </div>
            <form onSubmit={handleLogin}>
                <label>Email Address</label>
                <input
                type="text"
                className="w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.email}</p>}

            <label>Password</label>
            <input
                type="password"
                className="w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.password}</p>}

            <div className="flex items-center justify-between mb-8">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </label>
                <a href="/error" className="text-primary text-sm">
                    Forgot Password?
                </a>
                </div>
                <div className="flex justify-center mb-8">
                <PrimaryButton label="Login" type="submit" className="border-2 bg-[#2F184B] text-[#F4EFFA] hover:bg-[#F4EFFA] hover:text-[#2F184B]" />
                </div>
            </form>
            <p className="mt-4 text-center text-sm">
                Don’t have an account? <a href="/signup" className="text-primary underline">Sign up</a>
            </p>
        </div>

        <div className="hidden md:flex items-center justify-center w-1/2">
            <img src={coverImage} alt="Login Cover" className="max-w-full" />
            </div>
        </div>
        </div>
    );
};

export default LoginPage;
