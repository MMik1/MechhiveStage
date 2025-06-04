import {BiUser} from "react-icons/bi";
import {AiOutlineLock} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {useState} from "react";


const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [capVal, setCapVal] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Vul zowel e-mail als wachtwoord in.");
            return;
        }
        navigate('/dashboard');
    };

    return (
        <div
            className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur bg-opacity-30 relative w-80">
            <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
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
                        type={showPassword ? "text" : "password"}
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
                   <iconButton

                   type="button"
                   onClick={() => setShowPassword(prev => !prev)}
                   > <AiOutlineLock className="absolute top-4 right-0 text-white"/> </iconButton>
                </div>
                <div className="relative my-6">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder=" "
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        className="peer w-full px-0 pt-4 pb-1 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500"
                    />
                    <label
                        htmlFor="password"
                        className="absolute text-sm text-white left-0 top-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
                    >
                        Comfirm Password
                    </label>
                    <iconButton

                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                    ><AiOutlineLock className="absolute top-4 right-0 text-white"/></iconButton>
                </div>
                <button disabled={!capVal}
                        className="w-full mb-4 text-[18px] mt -6 rounded-full bg-white text-emerald-500 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
                        type="submit">Register
                </button>
                <div className="text-center text-sm text-white mt-4">
                    Already Create an Account? <Link to="/Login" className="text-blue-400 hover:underline">Login</Link>
                </div>
                <div className="w-full flex justify-center mt-4 scale-[0.90] origin-center">
                    <ReCAPTCHA
                        sitekey="6Lf05FUrAAAAANtRW7RkpmMVTOS4xPYZQfCExpps"
                        onChange={(val) => setCapVal(val)}
                    />
                </div>
            </form>
        </div>
    );
};

export default Register;