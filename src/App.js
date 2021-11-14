import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  const handleAgeClick = () => {
    setAge(age + 1);
  }

  const handleOrangeClick = () => {
    setFruit('orange');
  }
  const handleTodosClick = () => {
    setTodos([{text: 'Learn Cooking'}]);
  }

  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <p>This your age: {age}</p>
        <button onClick={handleAgeClick}>Add 1 year</button>
        <br />
        <p>You like this fruit: {fruit}</p>
        <button onClick={handleOrangeClick}>Change fruit</button>
        <br />
        <p>My work for today</p>
        {todos.map((todo, i) => <div key={i}>{todo.text}</div>)}
        <br />
        <button onClick={handleTodosClick}>Next task</button>
      </header>
    </div>
  );
}

export default App;
