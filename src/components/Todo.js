import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {AiFillCloseCircle} from 'react-icons/ai';



function Todo(todos, completeToDo) {
    const [edit, setEdit] = useState({
        id:null,
        value: ''
    });


    return( todos.map((todo, index) => ( 
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' }
     key={index} >
    
    <div key={todo.id} onClick= { () => completeToDo(todo.id)} >  {todo.text}  </div>
    <div className="icons">
       <AiFillCloseCircle/>
       
    </div>        
    </div> )))
}

export default Todo
