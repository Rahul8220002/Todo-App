import { useState } from "react";
import TodoForm2 from "./TodoForm2";

const TodoForm = () => {
  let [todo, setTodo] = useState("");
  let [newTodo, setNewTodo] = useState(["sample task"]);

  let handleChange = (e) => {
    setTodo(e.target.value);
    
  };

  let hanleSubmit = () => {
    setNewTodo ([...newTodo,todo])
    setTodo("")
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "400px", height: "300px", backgroundColor: "#a32c2c",border:"1px solid black" }}>
        <form action="">
          <h3>addTask</h3>
          <input
            type="text"
            value={todo}
            placeholder="enter your task"
            onChange={handleChange}
            style={{ width: "250px", height: "30px", padding:"5px",borderRadius:"15px" }}
          />
        </form>
        <br />
        <button
          style={{ backgroundColor: "black", color: "White", padding: "12px" }}
          onClick={hanleSubmit}
        >
          submit
        </button>
      </div>
      <div style={{ width: "400px", height: "300px", backgroundColor: "#a32c2c",border:"1px solid black" }}>
        <h2>Add Notes</h2>
        <TodoForm2 newTodolist={newTodo.map((element,id)=>{
             return <li kay={id}>{element}</li>
        })}/>
      </div>
    </div>
  );
};
export default TodoForm;
