import './App.css';
import Jumbotron from './components/jumbotron';
import Article from './components/article';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommentsPage from './pages/Comments.page';
import RQCommentsPage from './pages/RQComments.page';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const reactQuery = new QueryClient();

function App() {

  const HomePage = (
    <div className="mainContainer">
      <h1>Hello world</h1>
      <Jumbotron />
      <Article />
    </div>
  )

  return (
    <>
      <QueryClientProvider client={reactQuery}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={HomePage} />
            <Route path="/comments" Component={CommentsPage} />
            <Route path="/rq-comments" Component={RQCommentsPage} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App;
