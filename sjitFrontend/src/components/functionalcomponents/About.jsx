import { useState} from 'react';
function About(){
    var stateVar = 0
    var [num,setNum]= useState(stateVar)  //"useState()" local hook'
    // var String="hello";
    // var [str,setStr]= useState(String)
    function handleDecrement(){
        setNum(num-1);
    }
    function handleReset(){
        setNum(stateVar);
    }
    function handleIncrement(){

        setNum(num+1);
    }
    // function handleChange(){
    //     setStr();
    // }
    
    return(
        <div>
        <h1>About Page</h1>
        <h2><i>State initial value is {stateVar}</i></h2>
        <button onClick={handleDecrement}>-</button>
        <h2><i>Updating State: {num}</i></h2>
        <button onClick={handleIncrement}>+</button >  
        {/* button onClick={()=>
        {
            setNum(num+1);
            }
        } */}
        <br /><button onClick={handleReset}><b>Reset</b></button>
        {/* <h2>Type the Words: {}</h2>
        <button onChange={handleChange}></button> */}
        </div>
    )
}
export default About;
