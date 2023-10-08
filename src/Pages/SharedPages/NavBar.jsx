import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navOptions=<>
     <li> <input type="text" placeholder="Jewelry Name" className="input input-bordered input-info w-full max-w-xs" /></li>
    <li className='lg:text-white text-cyan-700'><Link to='/'>Home</Link> </li>
    <li className='lg:text-white text-cyan-700'><Link to='/add-jewelry'>Add Jewelry</Link> </li>
    <li className='lg:text-white text-cyan-700'><Link to='/all-jewelry'>All Jewelry</Link> </li>
    <li className='lg:text-white text-cyan-700'><Link to='/my-jewelry'>My Jewelry</Link> </li>
   
    {/* <Link to='/dashboard/myCart'>

<div className="badge badge-secondary p-3 my-3"> <FaShoppingCart/> +{cart?.length || 0}</div>
</Link>
   
    <>
    {
     user ?  <li><button onClick={handleLogOut} className="btn btn-ghost">LogOut</button> </li>: <li><Link to='/login'>Login</Link> </li>
    }
    </> */}
   
  
 </>
    return (
       <>
  <div className='bg-cyan-400  flex flex-row justify-between px-4 items-center '>
  <p className='p-2 text-md hidden md:block'>
    Purchases made on this site will ship to B.D. addresses only. Do you want to shop the B.D. site?
  </p>
 
   
  <details>
          <summary>
            Choose Location
          </summary>
          <ul className="p-2 bg-cyan-400">
            <li><a>Bangladesh</a></li>
            <li><a>Dubai</a></li>
            <li><a>Soudi Arabia</a></li>
            <li><a>India</a></li>
          </ul>
        </details>


</div>



        <div className="navbar fixed w-full z-30 bg-opacity-50  text-white  bg-black ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Jewelry Shop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Sign Up</a>
  </div>
</div>
       </>
    );
};

export default NavBar;