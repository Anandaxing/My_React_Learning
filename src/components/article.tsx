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

  /*
 Javascript assumes function as an object and storing it in a reserved memory address.
 In react the function will later be re-rendered whenever there's a state changed in the program.
  */
  
  const handleClick = useCallback(() => {
    setCount(count + 1);
    console.log("COUNT IS ADDING: ", count);
  }, [count]); // Renews the function memory allocation for every updates to the count variable 
  
  return (
    <>
      <div>
        <article>
          <button onClick={() => {
            handleClick();
          }}>Click here count: {count}</button>
          <ChildArticle callback={setText} text={text} />
        </article>
      </div>
    </>
  );
};