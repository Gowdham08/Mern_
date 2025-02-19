import React, { useState ,useEffect } from 'react';
const UseEffect = () => {
    var [text, setText] = useState("Hi");
   
useEffect(()=>{
    console.log(text);
},[text]);
return(
    <section>
        <h1>This is use Effect</h1>
        Type your Text: <input type="text" value={text} onChange={(event)=> {setText(event.target.value)}}></input>
        <h2> The text is type {text}</h2>    

    </section>
)
}
export default UseEffect;