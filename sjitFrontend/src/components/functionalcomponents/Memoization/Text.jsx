import React, { useState } from 'react';
import{memo} from 'react';
 const Text =() =>{
    var [text,setText]=useState("");
    return(
    <div>
        <h3>This is the Example for Memo Text:</h3>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <h2>
            {
                text
            }
        </h2>
    </div>
)
}
export default memo(Text);