import { useQuery } from "@tanstack/react-query";
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

export default function RQCommentsPage() {
  const {isLoading, data} = useQuery({
    queryKey: ['user-comments'], 
    queryFn: () => {
      return axios.get("http://localhost:3001/comments");
    }
  });

  if(isLoading) return <h1>Fetching data...</h1>
  console.log(data);
  
  return (
      <>
        {
          data?.data.map((comment: PostComment, index: number) => (
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