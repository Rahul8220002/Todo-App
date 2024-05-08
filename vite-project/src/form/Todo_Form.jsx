
const Todo_Form = ({title,todo,handleChange,handleSubmit}) => {
  return (
    <main id="formWrapper">
      <form action="">
        <div className="form-group">
          <label htmlFor="">title</label>
          <br /> 
          <input type="text" placeholder="add title" name="title" id="title" value={title} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="">todo</label>
          <br />
          <input type="text" placeholder="add title" name="todo" id="title" value={todo} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <button onClick={handleSubmit}>Add task</button>

        </div>
      </form>
    </main>
  );
};
export default Todo_Form;
