import React from 'react';
import { useState } from "react";


function Card () {
    const [key, setkey] = useState(0);
    function Sum () {
        setkey(key+1)
    }
    return(
    <div id="main_box">
        <button onClick = {Sum}>{key}</button>
    </div>
    )
}

export default Card;