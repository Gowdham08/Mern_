import { useEffect, useState, useMemo } from "react";

function slowFunction(number){
    for(var i=0;i<=1000000;i++){

    }
    return (number*2);
}
const UseMemo = () => {
    var [number, setNumber] = useState(0);
    var [theme,setTheme]=useState(false);
    var styling={
        backgroundColor: theme ? "black":"white",
        color: theme ? "white":"black",


    };
    // var slowFunction=(number)=>
    return (
    //  <>
        <div style={styling}>

    <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
            <h1>
                This is the useMemo example
            </h1>
            Number Box: <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <h2> The number is the {number}</h2>
        <h2>The number is {slowFunction(number)}</h2>
        </div>
        // </>
    )
}
export default UseMemo;