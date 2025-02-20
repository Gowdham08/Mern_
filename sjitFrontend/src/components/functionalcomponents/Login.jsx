import { Link } from "react-router-dom";
import "../css//form.css";
function Login(){
    return(
        <div class="outer">
        <h1><center>Login  Page</center></h1>
        <center>
            <form action="">
        <table>
        <tr>
                <td><label>Email</label> </td>
                <td><input type="email"></input></td>
            </tr>
            <tr>
            <td> <label>Password</label></td>
            <td> <input type="password"></input></td>
            </tr>
            <tr>
                <button type="submit" >Login</button>
            </tr>
        </table>
        </form>
        <p> Create an Account <Link to="/signup">Signup</Link> </p>
        </center>
        </div>
    )
}
export default Login;

