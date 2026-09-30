import { useState, useEffect } from "react";
import axios from "axios";

export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface PostComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

const CommentsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/comment").then((res) => {
      setData(res.data);
      setIsLoading(false);
    }).catch((error) => {
      setError(error.message);
    })
  }, []);

  if (isLoading) {
    return (
      <h2>
        Fetching your data...
      </h2>
    )
  }

  if (error) {
    return (
      <h2>
        Data fetching has failed {error}
      </h2>
    )
  }
  
  return (
      <>
        <h1>List of all comments</h1>
        {
          data.map((comment: PostComment, index: number) => (
            <div key={index} style={{
              display: "flex",
              flexDirection: "column",
              margin: "8px 0"
            }}>
              <h1>{comment.body}</h1>
              <div>
                <p>Username: {comment.user.username}</p>
                <p>Likes: {comment.likes}</p>
              </div>
            </div>
          ))
          }
      </>
  );
};

export default CommentsPage;