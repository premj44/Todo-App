import "../styles.css";

export default function TodoList({ list }) {
  return (
    <div className="hi">
      <ul>
        {list.map((to) => (
          <div className="items">
            <div>
              <h3>{to}</h3>
            </div>
            <div className="round"></div>
          </div>
        ))}
      </ul>
    </div>
  );
}
