
import React, { useContext } from 'react'
import { stateContext } from '../context/StateContextProvider'

function Todos() {
    const context = useContext(stateContext);
    if(!context){
        throw new Error('The context contains null');
    }

    const {state, dispatch } = context;


  return (
    <div>
        <h2>List of Todos</h2>
        {state.todos.map(todo=> (
            <div>
                <p className="deadine">{todo.deadline}</p>
                <p className="title">{todo.title}</p>
                <p className="status">{todo.status}</p>
                <button>Completed</button>
            </div>
        ))}
    </div>
  )
}

export default Todos