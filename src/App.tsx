import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLParagraphElement>(null);
  const [result, setResult] = useState(0);

  function plus(e: React.MouseEvent) {
    e.preventDefault();
    if (inputRef.current) {
      setResult((result) => result + Number(inputRef.current?.value));
    }
  }

  function minus(e: React.MouseEvent) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current?.value ?? 0));
    // Add the code for the minus function
  }

  function times(e: React.MouseEvent) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current?.value ?? 0));
    // Add the code for the plus function
  }

  function divide(e: React.MouseEvent) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current?.value ?? 1));
    // Add the code for the divide function
  }

  function resetInput(e: React.MouseEvent) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = "0";
    }
    // Add the code for the resetInput function
  }

  function resetResult(e: React.MouseEvent) {
    e.preventDefault();
    setResult(0);
    // Add the code for the resetResult function
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <div>
        <h1>{result}</h1>
      </div>
      <form>
        <p ref={resultRef}>{/* add the value of the current total */}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
