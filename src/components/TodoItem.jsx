import TodoList from "./TodoList";
import "../styles.css";

export default function TodoItem(props) {
  return (
    <div className="item">
      <TodoList list={props.item} />
    </div>
  );
}
