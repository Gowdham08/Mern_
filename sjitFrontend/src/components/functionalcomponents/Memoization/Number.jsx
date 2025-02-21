import React, { useState } from 'react';
import{memo} from 'react';
 const Number =() =>{
    var [number,setNum]=useState(0);
    return(
    <div>
        <h3>This is the Example for Memo Number:</h3>
        <input type="number" value={number} onChange={(e)=> setNum(e.target.value)} />
        <h4>
            {number}
        </h4>
    </div>
)
}
export default memo(Number);