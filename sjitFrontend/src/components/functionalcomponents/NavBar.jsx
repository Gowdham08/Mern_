import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../css/NavBar.css";
const NavBar = () => {
   var [dropdown,showDropdown] =useState(false)
   var [dropdown1,showDropdown1]=useState(false)
return (
   <header>
      <nav>
         <li> <Link to ='/home'>Home</Link>  </li>
         <li> <Link to ='/about'>About</Link> </li>
         <li> <Link to='/gallery'>Gallery</Link> </li>
        
         <div  className="dropdown" onMouseEnter={() => showDropdown(!dropdown) } onMouseLeave={()=> showDropdown(!dropdown)}>
         <span>Hook</span>
         { dropdown &&(<ul className="dropdown-list">
            <li className="dropdown-link"><Link to='/use-state'>UseState</Link> </li>
            <li className="dropdown-link"><Link to='/use-effect'>UseEffect</Link> </li>
            <li className="dropdown-link"><Link to='/use-effect-api'>UseEffectApi</Link></li>
            <li className="dropdown-link"><Link to='/use-ref'>UseRef</Link></li>
            <li className="dropdown-link"><Link to='/use-memo'>UseMemo</Link></li>
            <li className="dropdown-link"><Link to='/use-callback'>UseCallback</Link></li>
            <li className="dropdown-link"><Link to='/use-memoize'>UseMemoizeCustomHook</Link></li>
           
         </ul>)}
         </div>
         <div  className="dropdown" onMouseEnter={() => showDropdown1(!dropdown1) } onMouseLeave={()=> showDropdown1(!dropdown1)}>
         <span>Memoisation</span>
         { dropdown1 &&(<ul className="dropdown-list">
            <li className="dropdown-link"><Link to='/memo'> <i>Memo</i></Link></li> 
            <li className="dropdown-link"><Link to='/lazy'> <i>lazy</i></Link></li> 
         </ul>)}
         </div>

         <li><Link to='/hoc'>Hoc</Link></li>
         <li> <Link to='/contact'>Contact</Link> </li>
         <li> <Link to='/signup'>Signup</Link></li>
         <li><Link to='/login'>Login</Link></li>
      </nav>
   </header>
   )
}
export default NavBar;
