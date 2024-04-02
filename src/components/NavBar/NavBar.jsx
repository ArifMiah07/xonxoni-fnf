import {Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="w-[350px] sm:w-[640px] md:w-[768px] lg:w-[1216px] mx-auto navbar mb-1 bg-gradient-to-r from-[#ced4da] from-10% via-[#dee2e6] via-30% to-[#ced4da] to-90% hover:from-pink-500 hover:to-yellow-500 border-b border-gray-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-12 shadow bg-base-100 rounded-box w-52 flex flex-col gap-5">
                        
                    <NavLink to="/" className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Home</NavLink>
                    <NavLink to={`/meetups`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Meetups</NavLink>
                    <NavLink to={`/members`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Members</NavLink>
                    <NavLink to={`/blogs`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Blogs</NavLink>
                    <NavLink to={`/about`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>About</NavLink>
                    <NavLink to={`/search`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Search</NavLink>
                    <NavLink to={`/log-in`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Log In</NavLink>
                    <NavLink to={`/sign-in`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Sign In</NavLink>
                    </ul>
                </div>
                <div>
                    <img src="xfnf-logo.png" className="w-8" alt="" />
                </div>
                <a className=" btn btn-ghost font-medium text-lg lg:text-xl">XONXONI FNF</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5 items-center ">
                    <NavLink to={`/`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Home</NavLink>
                    <NavLink to={`/meetups`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Meetups</NavLink>
                    <NavLink to={`/members`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Members</NavLink>
                    <NavLink to={`/blogs`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Blogs</NavLink>
                    <NavLink to={`/about`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>About</NavLink>
                    <NavLink to={`/search`} className={({isActive})=> isActive ? 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-gray-700 border border-blue-100 rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Search</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <Link to={`/log-in`}><button className="hidden sm:block text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log In</button></Link>
                <Link to={`/sign-in`}>
                    <button className="hidden sm:block text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign In</button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;