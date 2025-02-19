import { Link } from "react-router-dom";
import "../css/NavBar.css";
const NavBar = () => {
return (
   <header>
      <nav>
      <li> <Link to ='/home'>Home</Link>  </li>
      <li> <Link to ='/about'>About</Link> </li>
      <li> <Link to='/gallery'>Gallery</Link> </li>
      <li> <Link to='/contact'>Contact</Link> </li>
      <li> <Link to='/signup'>Signup</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <div>
      <span>Hook</span>
      <ol>
         <li><Link to='/use-state'>Usestate</Link> </li>
         <li><Link to='/use-effect'>UseEffect</Link> </li>
      </ol>
      </div>
      </nav>
   </header>
   )
}
export default NavBar;
