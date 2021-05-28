import React, {useState} from 'react'
import './App.css';
import Form from '../Form';
import TodoList from '../TodoList'

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] =useState([])


  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>

      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
