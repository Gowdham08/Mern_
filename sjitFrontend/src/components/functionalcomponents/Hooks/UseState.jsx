
import React, { useState ,useEffect } from 'react';
const UseState =()=>{
    var stateVar = 0
    var [num,setNum]= useState(stateVar)  

    function handleDecrement(){
        setNum(num-1);
    }
    function handleReset(){
        setNum(stateVar);
    }
    function handleIncrement(){

        setNum(num+1);
    }
    return(
        <div>
            <h1>
                This is useState Example
            </h1>
            <h2><i>State initial value is {stateVar}</i></h2>
        <button onClick={handleDecrement}>-</button>
        <h2><i>Updating State: {num}</i></h2>
        <button onClick={handleIncrement}>+</button >  
        <br /><button onClick={handleReset}><b>Reset</b></button>
        </div>

    )
}
export default UseState;