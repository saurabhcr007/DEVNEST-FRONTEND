import './App.css';

function App() {

  interface user{
    firstName:String,
    lastName:String,
    age:Number
  };

  const User:user={
    firstName:"Aurthur",
    lastName:"Morgan",
    age:35
  };

  return (
    <div className="App">
      <h2>{User.firstName} </h2>
      <h2 style={{display:"inline-block"}}>{User.lastName}</h2>
      <h3>{User.age}</h3>
    </div>
  );
}

export default App;
