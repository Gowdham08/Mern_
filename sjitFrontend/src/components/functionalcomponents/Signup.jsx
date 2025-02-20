import React, { useState ,useEffect } from 'react';
import { Link } from "react-router-dom";
function Signup(){
    return(
        <div>
        <h1><center>SignUp</center></h1>
        <center> <form>
            <table>
            <tr>
                <td><label>FirstName</label> </td>
                <td><input type="text"></input></td>
            </tr>
            <tr>
            <td> <label>LastName</label></td>
            <td> <input type="text"></input></td>
            </tr>
            <tr>
            </tr>
            <tr>
            <td><label>DOB</label></td>
            <td><input type="date"></input></td>
            </tr>
            <tr>
            <td> <label htmlFor="Gender">Gender: </label></td>
            <input type="radio" name="gender" value="Male" id="male"></input>Male
            <input type="radio" name="gender" value="Female" id="female"></input>Female
            <input type="radio" name="gender" value="Other" id="other"></input>Other
            </tr>
            <tr>
                <button type="submit">Signup</button>
            </tr>
            </table>
        </form>
        <div>
        Already having an account? <Link to="/login">Login</Link>
        </div>
        </center>
        </div>
    )
}
export default Signup;

