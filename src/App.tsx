import './App.css';
import Jumbotron from './components/jumbotron';
import Article from './components/article';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommentsPage from './pages/Comments.page';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/comments" Component={CommentsPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
