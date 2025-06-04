import { Link } from 'react-router-dom'
import { BiUser } from 'react-icons/bi'
import {AiOutlineLock} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [capVal, setCapVal] = useState(null);
    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Vul zowel e-mail als wachtwoord in.");
            return;
        }
        navigate('/dashboard');
    };

    return (
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur bg-opacity-30 relative w-80">
            <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="relative my-6">
                    <input
                        id="email"
                        type="email"
                        placeholder=" "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="peer w-full px-0 pt-4 pb-1 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500"
                    />
                    <label
                        htmlFor="email"
                        className="absolute text-sm text-white left-0 top-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
                    >
                        Your Email
                    </label>
                    <BiUser className="absolute top-4 right-0 text-white"/>
                </div>
                <div className="relative my-6">
                    <input
                        id="password"
                        type="password"
                        placeholder=" "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="peer w-full px-0 pt-4 pb-1 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500"
                    />
                    <label
                        htmlFor="password"
                        className="absolute text-sm text-white left-0 top-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
                    >
                        Your Password
                    </label>
                    <AiOutlineLock className="absolute top-4 right-0 text-white"/>
                </div>
                <div className="flex justify-between items-center text-white text-sm my-4">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" id="remember"/>
                        <span>Remember Me</span>
                    </label>
                    <span className="text-blue-400 cursor-pointer hover:underline">Forgot Password?</span>
                </div>
                <button disabled={!capVal}
                    className="w-full mb-4 text-[18px] mt -6 rounded-full bg-white text-emerald-500 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
                    type="submit">Login
                </button>
                <div className="text-center text-sm text-white mt-4">
                    New Here? <Link to="/register" className="text-blue-400 hover:underline">Create an Account</Link>
                </div>
                <div className="w-full flex justify-center mt-4 scale-[0.90] origin-center">
                    <ReCAPTCHA
                        sitekey="6Lf05FUrAAAAANtRW7RkpmMVTOS4xPYZQfCExpps"
                        onChange={(val) => setCapVal(val)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Login
