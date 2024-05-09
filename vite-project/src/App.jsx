import "./global.css";
import Todo_Form from "./form/Todo_Form"
import TodoList from "./todo/TodoList"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  let [state, setState]=useState({
    title:"",
    todo:"",
    item:[],
    id:uuidv4()
    
  })

  let handleChange=(e)=>{
    let {name, value}=e.target
    setState({...state,[name]:value})
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(state);
    try {
      let newitem={
        title:state.title,
        todo:state.todo,
        id:uuidv4()
      }
      if (state.title.trim()==="" || state.todo.trim()==="") {
        return alert("kya kar raha hai bhai kuchh likha to le")
        
      }
      let updateditem=[...state.item, newitem]
      console.log(updateditem);
      setState({
        item:updateditem,
        title:"",
        todo:""
      })
    } catch (error) {
      console.log("some Error hai bhai",error);
    }
    console.log(state);
    console.log(state.item);

  }
  let handleUpdate=(id)=>{
    let staticItem= state.item.filter((obj)=>{
      return obj.id !==id;
     })

     let updateItem= state.item.find((obj)=>{
      return obj.id===id
     })
     setState({
      item:staticItem,
      title:updateItem.title,
      todo:updateItem.todo,
      id:updateItem
      
     })
     console.log(uuidv4());
  }

  let RemoveHandle=((id)=>{
   let StaticItems= state.item.filter((obj)=>{
      return obj.id !==id
    })
    setState({
      item:StaticItems
    })

  })

  return (
    <>
      <main id="mainContainer">
        <article>
          <header>
            <h1>TodoApp</h1>
          </header>
          <section>
            <Todo_Form title={state.title} todo={state.todo} handleChange={handleChange} handleSubmit={handleSubmit} />
            <TodoList item={state.item} handleUpdate={handleUpdate} RemoveHandle={RemoveHandle}/>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
