// import NavBar from "../NavBar/NavBar";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="lg:w-[1170px]">
            {/* className="flex items-center w-full justify-center bg-cyan-400 px-4 py-6 text-center" */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
                </div>
            {/* <nav>
                <div className="navbar mb-1 bg-gradient-to-r from-[#ced4da] from-10% via-[#dee2e6] via-30% to-[#ced4da] to-90% hover:from-pink-500 hover:to-yellow-500">
                <div className="navbar-start">
                <div className="dropdown">
                    <div id="menu-btn" tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <div id="menu-index" className=" ">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/meetups">Meetups</NavLink>
                            <NavLink to="/members">Members</NavLink>
                            <NavLink to="/blogs">Blogs</NavLink>
                            <Link to="about">About</Link>
                            <NavLink to="/search">Search</NavLink>
                    </div>
                </div>
                <a className="btn btn-ghost text-xl">XONXONI F&F</a>
                </div>
                    <div className="navbar-center hidden ml-6 lg:flex">
                        <div className="flx p-5 gap-6">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/meetups">Meetups</NavLink>
                            <NavLink to="/members">Members</NavLink>
                            <NavLink to="/blogs">Blogs</NavLink>
                            <Link to="about">About</Link>
                            <NavLink to="/search">Search</NavLink>
                        </div>
                    </div>
                    <div className="navbar-end">
                    <a className="btn btn-primary">Sign In</a>
                    </div>
                </div>
            </nav> */}
        </div>
    );
};

export default Header;