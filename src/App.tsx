import './App.css';
import Jumbotron from './components/jumbotron';
import Article from './components/article';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommentsPage from './pages/Comments.page';
import RQCommentsPage from './pages/RQComments.page';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CardComponent from './components/card';
import Layout from './components/layout';
import Child from './components/child';
import ToolBar from './toolbar/toolbar';

const reactQuery = new QueryClient();

function App() {

  function onSmash() {
    alert("The function has been called");
  }

  const HomePage = (
    <div className="mainContainer">
      <h1>Hello world</h1>
      <Layout>
        <Jumbotron />
        <Article />
        <CardComponent />
        <Child onSmash={onSmash} /> 
        <ToolBar onClick={(e: any) => {
          // stop propagation is used to prevent duplicated calls to the same method in nested components
          e.stopPropagation();
          alert("You have clicked the toolbar component")
        }} />
      </Layout>
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
