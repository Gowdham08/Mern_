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
            <td> <label>Gender: </label></td>
            <td><input type="radio" name="Gender"></input></td>
            <td><label>Male</label></td>
            <td><input type="radio" name="Gender"></input></td>
            <td><label>Female</label></td>
            <td><input type="radio" name="Gender"></input></td>
            <td><label>Other</label></td>
            <td><input type="radio"></input></td>
            </tr>
            <tr>
                <button type="submit">Login</button>
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

