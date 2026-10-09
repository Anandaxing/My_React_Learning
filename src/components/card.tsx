import { useState } from "react";

const CardComponent = () => {
  const [like, setLike] = useState(false);

  function likeButtonHandler() {
    setLike(!like);

    setTimeout(() => {
      console.log("Waiting for 2 seconds");
    }, 2000);
  }
  
  return (
    <>
      <div className="cardComponent">
        <h1>This is a card component</h1>
        <p style={{ fontSize: "32px" }}>{like ? "♥" : "♡"}</p>
        <button onClick={() => likeButtonHandler()}>{!like ? "Like" : "Liked"}</button>
      </div>
    </>
  );
};

export default CardComponent;

