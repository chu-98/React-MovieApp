import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = event => setToDo(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    // 비었을 때는 변하지 않게끔
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]); // '...'은 배열을 그대로 가져온다
    setToDo(""); // Submit하고 null로 바꿔주는 역할
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Do({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
