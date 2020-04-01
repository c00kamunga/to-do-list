import React, { useState } from 'react';




function App() {
  const [newToDo, setNewToDo] = useState('')
  return (
    <div className="App">
<h1>
  To Do List
</h1>

<form>
  <input placeholder="your to-do..."/>
  <ul>
    <li>Buy Milk</li>
    <li>Buy Cheese</li>
  </ul>
</form>
    </div>
  );
}

export default App;
