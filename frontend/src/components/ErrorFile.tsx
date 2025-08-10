import { useNavigate } from "react-router-dom";
import errorImage from '../assets/error404.png'
import PrimaryButton from "./PrimaryButton";
const ErrorFile = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <img
                src={errorImage}
                alt="Error illustration"
                className="w-64 h-64 object-contain mb-6"
            />
            <p className="text-lg text-gray-700 mb-4 text-center">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <div className="h-20 w-50 flex items-center justify-center mb-6">
                <PrimaryButton label="Go To Home" className="border-2 bg-[#2F184B] text-[#F4EFFA] hover:bg-[#F4EFFA] hover:text-[#2F184B]" type="button" onClick={()=> navigate('/')}/>
            </div>
        </div>
    );
    };

export default ErrorFile;
