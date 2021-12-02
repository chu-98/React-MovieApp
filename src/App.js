import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./CSS/App.module.css";

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);

  function Hello() {
    return <h1>Hello</h1>;
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
