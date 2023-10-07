import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('sign out successfully')
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    const link = <>
        <li><NavLink to="/"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "",
                    fontWeight: isActive ? "bold" : "",
                };
            }}

        >Home</NavLink></li>
        <li><NavLink to="/service"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "",
                    fontWeight: isActive ? "bold" : "",
                };
            }}
        >Service</NavLink></li>

        <li><NavLink to="/about"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "",
                    fontWeight: isActive ? "bold" : "",
                };
            }}
        >About</NavLink></li>

        <li><NavLink to="/blogs"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "",
                    fontWeight: isActive ? "bold" : "",
                };
            }}
        >Blog</NavLink></li>

        <li><NavLink to="/contact"
            style={({ isActive }) => {
                return {
                    color: isActive ? "white" : "",
                    fontWeight: isActive ? "bold" : "",
                };
            }}>Contact</NavLink></li>

    </>
    return (
        <div className="navbar bg-[#000000bd] shadow-slate-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <Link to='/'><h2>Event.BD</h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">SignOut</button>
                        :
                        <Link to='/login' className="btn">Login</Link>
                }

                {/* <Link to='/login' className="btn">Login</Link> */}
            </div>
        </div>
    );
};

export default Navbar;