/*import { useState } from "react";
import { v4 as uuidv4} from 'uuid' ;

export default function Todolist() {
    let [todos, setTodos] = useState([{ task : "sample-task", id: uuidv4()}]);
  let [newTodo , setNewTodo] = useState("");
  let addNewTask = ()=>
  {
    console.log("we have to a new task in todo");
    setTodos((prevTodos) =>
    {
        return [...prevTodos, {task : newTodo , id : uuidv4()}]
    });
    setNewTodo("");

  };
  let updateTodoValue = (event) =>
  {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => 
  {
    setTodos((prevTodos)=> todos.filter((prevTodo)=> prevTodo.id != id));
    console.log(copy);
     console.log(id);
  };
  let upperCaseAll = () =>
  {
setTodos((prevTodos) { => prevTodos.map((todo) =>
{
  return{
    ...todo,
    task : todo.task.toUpperCase()
  });
})
);
console.log(newArr);
  }
  
    return (
    <div>
      <input placeholder="add a task" value ={newTodo} onChange={updateTodoValue} />
      <br/>
      <button onClick = {addNewTask}> Add Task</button>
      <br />
      <br />
      <br />

      <hr></hr>
      <h4>Tasks to do</h4>
      <ul>
{
    todos.map((todo)=> 
    (
        <li key = {todo.id}>
            <span>{todo.task} </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}> Delete</button> </li>
    )
)
}




      </ul>
      <button onClick= {upperCaseAll}> UpperCase All </button>
    </div>
  );
}

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    console.log("we have to add a new task in todo");
    if (newTodo.trim() === "") return; // prevent empty tasks
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4() },
    ]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
    console.log("Deleted task id:", id);
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };
let UpperCaseOne = (id) =>
{
  setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        if(todo.id == id){
          return {
        ...todo,
        task: todo.task.toUpperCase(),
      };
    )) else{
      return todo;
    }
    );
  };
}
  return (
    <div>
      <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Tasks to do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task} </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
  
 import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone : false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), isDone : false },
    ]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== id)
    );
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
          isDone : true ,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Tasks to do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style = {todo.isDone ? {textDecoration : "line-through"};{}}>
            {" "}
            {todo.task} 
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
}
*/
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
  const [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), done: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), done: false },
    ]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== id)
    );
  };

  const upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, task: todo.task.toUpperCase() }
          : todo
      )
    );
  };

  const markOneAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, done: true }
          : todo
      )
    );
  };

  const markAllAsDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, done: true }))
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🌟 React Todo List</h2>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          placeholder="Add a task..."
          value={newTodo}
          onChange={updateTodoValue}
        />
        <button style={styles.addButton} onClick={addNewTask}>Add</button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              style={{
                ...styles.taskText,
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "green" : "#333",
              }}
            >
              {todo.task}
            </span>
            <div style={styles.buttonGroup}>
              <button style={styles.button} onClick={() => deleteTodo(todo.id)}>🗑️</button>
              <button style={styles.button} onClick={() => upperCaseOne(todo.id)}>🔠</button>
              <button style={styles.button} onClick={() => markOneAsDone(todo.id)}>✅</button>
            </div>
          </li>
        ))}
      </ul>

      <button style={styles.doneAllButton} onClick={markAllAsDone}>✅ Mark All as Done</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fefefe",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  addButton: {
    padding: "10px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  taskText: {
    fontSize: "16px",
    fontWeight: "500",
  },
  buttonGroup: {
    display: "flex",
    gap: "6px",
  },
  button: {
    padding: "6px 10px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#e0e0e0",
    cursor: "pointer",
  },
  doneAllButton: {
    marginTop: "20px",
    padding: "10px",
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
};
