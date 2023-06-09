import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
const AddTodoForm=({onAddTodo})=>{

const [todoTitle, setTodoTitle] = useState(); 
const handleTitleChange=(e)=>{
     
    const newTodoTitle=e.target.value;   
     setTodoTitle(newTodoTitle);
     console.log(todoTitle);
}

const handleAddTodo=(e)=>{
    e.preventDefault();
    const todoObj={
        id:Date.now(),
        title:todoTitle
    };
    onAddTodo(todoObj);
    setTodoTitle("");
}

 return (
    <form onSubmit={handleAddTodo}>
      {/* called component of input */}
        <InputWithLabel
            id="search" 
            name="Search"
            placeholder="Search here ... "
            inputValue={todoTitle}
            onInputChange={handleTitleChange}
        ><b>Title </b></InputWithLabel>
         
        <button type="submit">Add</button>
    </form>
 )
}
export default AddTodoForm