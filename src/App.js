import { useState, useEffect, useRef } from "react";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const Reiniciar = () => {
    count.current = 0;
    setInputValue('')
  }

  return (
    <>
    <div className="main-container">
      <input
        type="text"
        value={inputValue}
        name="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <button type="button" onClick={Reiniciar}>Reiniciar</button>
    </div>
    </>
  );
}

export default App;
