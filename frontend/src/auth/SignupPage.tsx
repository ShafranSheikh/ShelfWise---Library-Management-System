import { useState } from 'react';
import axios from 'axios';
import coverImage from '../assets/signupCoverImage.png';
import listImg from '../assets/List_Add.png'
import PrimaryButton from '../components/PrimaryButton';
const SignupPage = () => {
    const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    }>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: 0,
  });
  const [errors, setErrors] = useState<{
        firstName?: string;
        lastName?: string;
        email?: string;
        password?: string;
        age?: number;
    }>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: 0
    });
    const validate = () => {
        const errors ={} as Record<string, string>;
        if(!formData.firstName.trim()){
            errors.firstName = 'First name is required';
        }
        if(!formData.lastName.trim()){
            errors.lastName = 'Last name is required';
        }
        if(!formData.email.trim()){
            errors.email = 'Email is required';
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email = 'Email address is invalid';
        }
        if(!formData.password.trim()){
            errors.password = 'Paswword is required';
        }
        if(isNaN(formData.age) || formData.age <= 0){
            errors.age = 'Age must be a valid positive number';
        }
        return errors;
    }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }
    try {
      const response = await axios.post('http://localhost:5008/api/user/register', formData);
      console.log(response.data);
      alert('Signup successful!');
      window.location.href = '/login'; // Redirect to login page after successful signup
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed. Please try again.');
    }
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-background my-8'>
      <div className='bg-card p-8 rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl bg-[#F4EFFA]'>
        <div className="w-full md:w-1/2">

        <div className='flex flex-row items-center justify-left h-10 mb-6 gap-4'>
            <h2 className="text-2xl font-bold font-body text-[#2F184B] ">Sign Up</h2>
            <img src={listImg} alt="" />
        </div>

        <form action="" className='font-body' onSubmit={handleSubmit}>

            <label htmlFor="">First Name</label>
            <input type="text"
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter first name'
            onChange={handleChange}
            name="firstName"
            value={formData.firstName} 
        />
        {errors.firstName && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.firstName}</p>}

        <label htmlFor="">Last Name</label>
        <input type="text" 
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter last name' 
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
        />
        {errors.lastName && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.lastName}</p>}

        <label htmlFor="">Age</label>
        <input type="number" 
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter age'
            onChange={handleChange}
            name="age"
            value={formData.age} 
        />
        {errors.age && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.age}</p>}

        <label htmlFor="">Email Address</label>
        <input type="email" 
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter email address' 
            onChange={handleChange}
            name="email"
            value={formData.email}
        />
        {errors.email && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.email}</p>}

        <label htmlFor="">Password</label>
        <input type="password" 
            className='w-full p-2 mb-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8B1E4]' 
            placeholder='Enter password'
            onChange={handleChange}
            name="password"
            value={formData.password} 
        />
        {errors.password && <p className="text-red-600 text-left font-body text-sm mb-4">{errors.password}</p>}

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