import {Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                    <NavLink to="/" className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Home</NavLink>
                    <NavLink to={`/meetups`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Meetups</NavLink>
                    <NavLink to={`/members`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Members</NavLink>
                    <NavLink to={`/blogs`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Blogs</NavLink>
                    <NavLink to={`/about`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>About</NavLink>
                    <NavLink to={`/search`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Search</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost font-medium text-lg lg:text-xl">XONXONI FNF</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5 items-center ">
                    <NavLink to={`/`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Home</NavLink>
                    <NavLink to={`/meetups`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Meetups</NavLink>
                    <NavLink to={`/members`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Members</NavLink>
                    <NavLink to={`/blogs`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Blogs</NavLink>
                    <NavLink to={`/about`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>About</NavLink>
                    <NavLink to={`/search`} className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Search</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <Link to={`/log-in`}><button className="btn">Log In</button></Link>
                <Link to={`/sign-in`}><button className="btn">Sign In</button></Link>
            </div>
        </div>
    );
};

export default NavBar;