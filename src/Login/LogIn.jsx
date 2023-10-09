import { Link, useLocation, useNavigate } from "react-router-dom";
import facebook from '../assets/icons/fb.png'
import google from '../assets/icons/google.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";


const LogIn = () => {
    const { signInUser, fbLogin, googleLogin } = useContext(AuthContext)
// console.log(user)
    
    const location = useLocation();
    const navigate = useNavigate()

    // console.log(location)
    const handleLogin = (e) => {
        e.preventDefault()
        const from = new FormData(e.currentTarget)
        const email = from.get('email')
        const password = from.get('password')

       
        // user sign in
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Login successful');
                navigate(location?.state? location.state :'/')
            })
            .catch(error => {
                console.error(error.message);
                toast.error("Oops!! password or email doesn't match. please valid password or email" );
               
            })

        
    }

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    const handleFbLogin = ()=>{
        fbLogin()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <div>

            <div className=" w-3/4 md:1/2 lg:w-1/3 mx-auto ">
                <div className="px-10 border mt-10 rounded shadow-slate-600">
                    <h2 className="my-6 text-3xl font-bold text-center underline">Please Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300  focus:outline-none focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="password" id="floating_password" className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300  focus:outline-none focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 flex justify-between">

                            <div className="my-4 space-x-2 flex">
                                <input type="checkbox" name="terms" id="" />
                                <label htmlFor="terms"><p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                                    I agree the
                                    <a
                                        className="font-medium transition-colors hover:text-pink-500"
                                        href="#"> &nbsp;Terms and Conditions
                                    </a>
                                </p></label>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                        <button type="submit" className="btn w-full text-lg font-medium bg-pink-500 text-white normal-case ">Submit</button>
                    </form>
                    <h2 className="my-4 text-base font-medium text-center">Don’t have an account? <Link className="text-pink-500" to='/register'> Create an account</Link></h2>
                </div>
                <div className="flex my-5 items-center justify-evenly">
                    <hr className="w-2/5 border" />
                    <span className="text-base font-medium">or</span>
                    <hr className="w-2/5 border" />
                    
                </div>
                <div className="space-y-3 mb-10">
                    <div onClick={handleFbLogin} className="flex border rounded-3xl p-3 gap-5 items-center cursor-pointer">
                        <img className="w-5 h-5 ml-5" src={facebook} alt="" />
                        <h2 className="text-lg font-medium">Continue with facebook</h2>
                    </div>
                    <div onClick={handleGoogleLogin} className="flex border rounded-3xl p-3 gap-5 items-center cursor-pointer">
                        <img className="w-5 h-5 ml-5" src={google} alt="" />
                        <h2 className="text-lg font-medium">Continue with Google</h2>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default LogIn;