import { useState, useCallback } from "react";

type ChildProps = {
  callback: Function;
  text: string;
};

function ChildArticle(props: ChildProps) {
  const { callback, text } = props;
  console.log(typeof callback, typeof text);
  return (
    <>
      <div>
        <h1>Child article</h1>
        <input type="text" value={text} onChange={(e) => callback(e.target.value)} />
        <p>{text}</p>
      </div>
    </>
  )
}

export default function Article() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    console.log("COUNT IS ADDING: ", count);
  }, [count]); // Renews the function memory allocation for every updates to the count variable

  /*
    useCallback is used to prevent unecessary function rendering by inserting the reload respect to specific variables.
    
        ┌──────────────────────────────┐
        │   Parent Component Renders   │
        └──────────────┬───────────────┘
                      │
        Has the [variable] changed?
                      │
        ┌─────────────┴─────────────┐
      No│                           │ Yes
        ▼                           ▼
      [ Recycle Old Reference ]     [ Create Brand-New Reference ]
      (Child component skips render)    (Child component re-renders)
  */
  
  return (
    <>
      <div>
        <article>
          <button onClick={() => {
            setCount(count + 1);
            handleClick();
          }}>Click here count: {count}</button>
          <ChildArticle callback={setText} text={text} />
        </article>
      </div>
    </>
  );
};