import React, { useContext } from "react";
import { NavLink } from "react-router";
import siteLog  from '../../assets/logo.png'; 
import { AuthContext } from "../../Authentication/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {

  const {user , handleLogOut} = useContext(AuthContext);

  const handleLogout = () => {
    handleLogOut()
    .then(()=>{
      toast.success("You've logged out successfully!");
    })
    .catch(()=>{
      toast.error("Something went wrong:)")
    })
  }

  const links = 
    <>
        <li><NavLink to='/'>Home</NavLink></li>
        {
          // for job seekers 
          (user && user?.email) && <li><NavLink to='/myApplications'>My Applications</NavLink></li>
        }
        {
          // for job recruiters
          (user && user?.email) && 
          <>
              <li><NavLink to='/addJobs'>Add Job</NavLink></li>
              <li><NavLink to='/myPostedJobs'>My Posted Jobs</NavLink></li>
          </>
        }
        
    </>

  return (
    <div className="navbar bg-base-100 shadow-sm p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
        <div className="bg-[#67AE6E] rounded-2xl p-1 flex gap-1 justify-center items-center">
          <img className="hidden lg:block" src={siteLog} alt="siteLogo" />
          <NavLink className="p-1 lg:p-0 text-green-100 text-xl font-bold rounded-2xl" to="/">QuickHired</NavLink>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      {
        user ? 
        <div className="navbar-end">
          <button onClick={handleLogout} className="w-[85px] btn hover:rounded-xl text-white text-xl font-bold p-4 bg-[#67AE6E]">Logout</button>
        </div>
        :
        <div className="navbar-end flex gap-3">
          <NavLink to='/login' className="btn hover:rounded-xl text-white text-xl font-bold p-4 bg-[#67AE6E]">Login</NavLink>
          <NavLink to='/register' className="btn hover:rounded-xl text-white text-xl font-bold p-4 bg-[#67AE6E]">Register</NavLink>
        </div>
      }
    </div>
  );
};

export default Navbar;
