import { useState } from "react";
import "../styles.css";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, text]);
    handleClear();
  };
  const handleClear = () => {
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container">
      <h1>My Todo App</h1>
      <TodoItem item={todos} />
      <input
        value={text}
        className="input"
        placeholder="Please add Something"
        onChange={handleChange}
      />
      <button className="btn" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
