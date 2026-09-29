import './App.css';
import Jumbotron from './components/jumbotron';
import Article from './components/article';

function App() {

  return (
    <>
      <div className="mainContainer">
        <h1>Hello world</h1>
        <Jumbotron />
        <Article />
      </div>
    </>
  )
}

export default App;
