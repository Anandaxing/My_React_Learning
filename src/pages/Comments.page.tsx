import { useState, useEffect } from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const reactQuery = new QueryClient();

const CommentsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/comments").then((res) => {
      setData(res.data);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return (
      <h2>
        Fetching your data...
      </h2>
    )
  }
  
  return (
    <QueryClientProvider client={reactQuery}>
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
    </QueryClientProvider>
  );
};

export default CommentsPage;