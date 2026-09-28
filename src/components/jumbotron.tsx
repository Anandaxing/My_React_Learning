import { useState, useMemo } from "react";

export default function Jumbotron() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Regular function without using useMemo
  // function heavyCalculation() {
  //   console.log("Heavy calculation is running");
  //   return text.toLowerCase();
  // }
  // const result = heavyCalculation();

  /*
    Without using useMemo: everytime another event is triggered, no matter what the state variables are, will also get re-rendered
  */

  // Caching using useMemo
  const result = useMemo(() => {
    console.log("Heavy calculation is running");
    return text.toLowerCase();
  }, [text]); // Triggered only when the text is changed
  
  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
      }}>
        <h1>This is a jumbotron</h1>
        <button
          style={{
            width: "128px",
            height: "48px",
          }}
          onClick={() => setCount(count + 1)}>
          {count}
        </button>

        <input value={text} onChange={(event) => setText(event.target.value)} />
        <p>{result}</p>
      </div>
    </>
  );
};