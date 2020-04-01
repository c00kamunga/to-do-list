import React, { useState } from 'react';




function App() {
  const [newToDo, setNewToDo] = useState('')
const [todos, setTodos] = useState([])


function handleNewToDoChange(e){
  e.preventDefault()
  setNewToDo(e.target.value)
}

  return (
    <div className="App">
<h1>
  To Do List
</h1>

<form>
  <input placeholder="your to-do..." onChange={handleNewToDoChange}/>
  <ul>
    <li>Buy Milk</li>
    <li>Buy Cheese</li>
  </ul>
</form>
    </div>
  );
}

export default App;
