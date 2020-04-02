import React, { useState } from 'react';




function App() {
  const [newToDo, setNewToDo] = useState('')
const [todos, setTodos] = useState([])


function handleNewToDoChange(e){
  e.preventDefault()
  setNewToDo(e.target.value)
}

function handleNewToDo(e){
e.preventDefault()
if (newToDo === '') return
setTodos([...todos,{id: Date.now(), text: newToDo}])
e.target.reset()
}

  return (
    <div className="App">
<h1>
  To Do List
</h1>

<form onSubmit={handleNewToDo}>
  <input placeholder="your to-do..." onChange={handleNewToDoChange}/>
  <ul>
   {todos.map((todo) => (
    <li>
      {todo.text}
    </li>
   ))}
  </ul>
</form>
    </div>
  );
}

export default App;
