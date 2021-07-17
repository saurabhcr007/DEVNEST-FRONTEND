import React from "react";
import {useState} from "react";
import List from "./property";

var foodname = "";
var calories = 0;

function Card() {
    const [food, setfood] = useState("");
    const [calo, setcalo] = useState(0);
    const submit = (Props) => { 
        foodname = food;
        calories = calo;
        Props.add(foodname,calories);
        food="";
        calo=0;
    };
    return (
        <div>
            <label>
                <input value={food} type="text" id="text" onChange={() => setfood(target.value)}></input>
            </label>
            <label>
                <input value={calo} type="number" id="number" onChange={() => setcalo(target.value)}></input>
            </label>
            <button onClick={submit} id="submit">darj kare</button>
        </div>
    );
};

export default Box = (Props) =>{
    const [ename,updatename] = usestate(" ");
    const [ecalo,updatecalo] = usestate(0);
    return (
        <div className="box">
            {Props.edit ? (
                <div className="edit">
                    <div className="ename">
                        <input type="text" onChange={(e) => updatename(e.target.value)}></input>
                    </div>
                    <div className="ecalo">
                        <input type="number" onChange={(e)=>updatecalo(e.target.value)}></input>
                    </div>
                    <button className="esubmit" onclick={()=>{Props.change(Props.i, Props.name, Props.calo); Props.update(Props.i,Props.ename, Props.ecalo);}}>jama kare</button>
                </div>
            ):(
                <div>
                    {Props.name}
                    <div>
                        <i className="sampaadit" onClick={()=>{Props.change(Props.i, Props.name, Props.calo);}}></i>
                    </div>
                    <div>
                        apne {Props.cal} calories prapt kiya hai aaj
                        <div>
                            <i className="kachara" onClick={()=>{deleteIndex = Props.i; Props.del(deleteIndex);}}></i>
                        </div>
                    </div>
                </div>
            )}    
        </div>
    );
};

const App = () => {
    var [cards, setCards] = useState([]);
  
    const Add = (newkhana, newkhujana) => {
      if (newkhana && newkhujana) {
        setCards([
          ...cards,
          { name: newkhana, val: newkhujana, editing: false },
        ]);
      }
    };

    const Del = (deleteIndex) => {
        const newCards = cards.filter((el, index) => index !== deleteIndex);
        setCards(newCards);
      };
    
      const Edit = (index, name, calories) => {
        let updatedListItem = [...cards];
    
        if (updatedListItem[index].editing === false)
          updatedListItem[index].editing = true;
        else updatedListItem[index].editing = false;
    
        setCards(updatedListItem);
      };
    
      const Update = (index, name, calories) => {
        let updatedListItem = [...cards];
        updatedListItem[index].name = name;
        updatedListItem[index].val = calories;
        console.log("Updated");
        setCards(updatedListItem);
      };
    
      return (
        <div className="container">
          <Card add={Add} key="form" />
          <List cards={cards} del={Del} key="list" change={Edit} update={Update} />
        </div>
    );
};

export default App;