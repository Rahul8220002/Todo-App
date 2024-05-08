const TodoList = ({ item }) => {
  if(item.length===0){
    return <h1>empty</h1>
  }
  return (
    <main id="listWrapper">
      {item.map((obj,i) => {
        let { title, todo } = obj;
        return (
          <article id="todoWraper" key={i}>
            <h1>your title :-  {title}</h1>
            <p>your todo :-{todo}</p>
            <section>
              <button>Update</button>
              <button>Remove</button> 
            </section>
          </article>
        );
      })}
    </main>
  );
};
export default TodoList;
