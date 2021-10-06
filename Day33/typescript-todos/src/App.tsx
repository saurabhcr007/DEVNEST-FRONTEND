import { FC, useState } from 'react';
import ThemeContext from './ThemeContext';
import './App.css';
import { ThemeToggle } from './ThemeToggle';
import { TodoList } from './TodoList';

interface todoType{
  title:string,
  done:boolean
};
const App: FC =()=> {
  const [theme, setTheme] = useState<boolean>(false);
  const [todos,setTodos] = useState<todoType[]>([]);
  const [input, setInput] = useState<string>("")
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={theme?"App Dark":"App"}>
      <div className="form">
      <input type="text" onChange={(e)=>{
        setInput(e.target.value);
      }} />
      <button onClick={()=>{
        setTodos([...todos,{title:input,done:false}])
      }}>Add Todo</button>
      </div>
      <div className="todos">
        {todos.map((todo,index)=>{
          return<TodoList key={index} title={todo.title} done={todo.done}/>
        })}
      </div>

      <ThemeToggle/>
    </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
