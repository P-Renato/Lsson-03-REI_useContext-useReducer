import React, { useContext, useState } from "react";
import { stateContext } from "../context/StateContextProvider";

function NewToDo() {

     // open the context and extract data out of it
  const context = useContext(stateContext);
  if(!context){
    throw new Error("New ToDo must be used within the Context")
  }
  const {state, dispatch} = context;

  // local state variable to get form data
  const [fd, setFD] = useState({
    id: state.todos.length,
    title: "",
    deadline: "",
    status: "",
  });

 

  // handle form changes
  function changeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFD({
        ...fd,
        [event.target.name]: event.target.value})
  }

  // handle form submit
  function submitHandler(event: React.FormEvent) {
    event.preventDefault()
    dispatch({ type: "ADD_TODO", payload: fd });
  }
  return (
    <div>
      <h3>Create new Todo</h3>
      <form onSubmit={submitHandler}>
        <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder="Title" 
            onChange={changeHandler}
        />
        <input
          type="date"
          name="deadline"
          id="deadline"
          placeholder="Deadline"
          onChange={changeHandler}
        />
        <select name="status" id="status" onChange={changeHandler}>
          <option>SELECT STATUS</option>
          <option value="ONGOING">ONGOING</option>
          <option value="CANCELLED">CANCELLED</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        <input type="submit" value="add" />
      </form>
    </div>
  );
}

export default NewToDo;
