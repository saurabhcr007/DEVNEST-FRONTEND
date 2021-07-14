import React from "react";
import './index.css';

function App () {
    return(
    <div id="main_box">
        <Food name="gasgula" cal="50"/>
        <Food name="chola bhatura" cal="70"/>
        <Food name="chilli potato" cal="60"/>
        <Food name="pasta" cal="20"/>
        <Food name="maggi" cal="40"/>
        <Food name="chola kulcha" cal="45"/>
        <Food name="apple" cal="10"/>
        <Food name="peanut butter" cal="80"/>
    </div>
    )
}


function Food (props) {
    var {name,cal}=props;
    return(
        <div id="food">
            <h2>{name}</h2>
            <p>you have gain {cal} cals today by {name}</p>
        </div>
    )
}

export default App;