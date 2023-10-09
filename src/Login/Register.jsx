import { Link } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const Register = () => {
    const [success, setSuccess] = useState('')
    const [errorPass, setErrorPass] = useState('')
    const { createUser } = useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault()
        const from = new FormData(e.currentTarget)
        const name = from.get('first_name')
        const lastName = from.get('last_name')
        const email = from.get('email')
        const password = from.get('password')
        console.log('register submit', name, lastName, email, password)

        // password validation
        setErrorPass('')
        setSuccess('')

        if (password.length < 6) {
            setErrorPass('Password should be 6 character')
            return;
        }
        else if (!/.*[A-Z].*/.test(password)) {
            setErrorPass('Please, at least one capital latter')
            return;
        }
        else if (!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-].*/.test(password)) {
            setErrorPass('Please, at least one special character')
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                    ;
                setSuccess('Congrats!! User Create Successfully')

            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div>

            <div className=" w-3/4 md:1/2 lg:w-1/3 mx-auto ">
                <div className="px-10 border mt-10 rounded shadow ">
                    <h2 className="my-6 text-3xl text-center underline text-gray-600 font-bold">Create An Account</h2>
                    <form onSubmit={handleRegister}>
                        <div className="relative  z-0 w-full mb-6 group">
                            <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                        </div>
                        {
                            errorPass && <p className=" text-sm py-2 text-red-700 text-center">{errorPass}</p>
                        }
                        <button type="submit" className="btn w-full text-lg font-medium bg-pink-500 text-white normal-case hover:text-gray-600 ">Submit</button>
                    </form>
                    <h2 className="my-4 ">Already have an account? <Link className="text-pink-500 hover:text-blue-500" to='/login'>LogIn</Link></h2>
                </div>
                {
                    success && <p className=" text-2xl text-center text-cyan-700">{success}</p>
                }
            </div>
            {
                success && <div><p>{success}</p><ToastContainer /></div>
            }
        </div>
    );
};

export default Register;