const TodoList = ({ item , handleUpdate,RemoveHandle}) => {
  if(item.length===0){
    return <h1>empty</h1>
  }
  return (
    <main id="listWrapper">
      {item.map((obj,i) => {
        let { title, todo,id} = obj;
        return (
          <article id="todoWraper" key={i}>
            <h1>your title :-  {title}</h1>
            <p>your todo :-{todo}</p>
            <section>
              <button onClick={()=>handleUpdate(id)}>Update</button>
              <button onClick={()=>RemoveHandle(id)}>Remove</button> 
            </section>
          </article>
        );
      })}
    </main>
  );
};
export default TodoList;
