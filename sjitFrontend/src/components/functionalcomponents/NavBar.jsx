import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "../css/NavBar.css";
const NavBar = () => {
   var [dropdown,showDropdown] =useState(false)
return (
   <header>
      <nav>
      <li> <Link to ='/home'>Home</Link>  </li>
      <li> <Link to ='/about'>About</Link> </li>
      <li> <Link to='/gallery'>Gallery</Link> </li>
      <div  className="dropdown" onMouseEnter={() => showDropdown(!dropdown) } onMouseLeave={()=> showDropdown(!dropdown)}>
      <span>Hook</span>
      { dropdown &&(<ol className="dropdown-list">
         <li className="dropdown-link"><Link to='/use-state'>Usestate</Link> </li>
         <li className="dropdown-link"><Link to='/use-effect'>UseEffect</Link> </li>
         <li className="dropdown-link"><Link to='/use-effect-api'>UseEffectApi</Link></li>
         <li className="dropdown-link"><Link to='/use-ref'>UseRef</Link></li>
         <li className="dropdown-link"><Link to='/use-memo'>UseMemo</Link></li>

      </ol>)}
      </div>
      <li> <Link to='/contact'>Contact</Link> </li>
      <li> <Link to='/signup'>Signup</Link></li>
      <li><Link to='/login'>Login</Link></li>
      </nav>
   </header>
   )
}
export default NavBar;
