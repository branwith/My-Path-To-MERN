// import logo from './logo.svg';
// import './App.css';
import FunctionalComp from './components/FunctionalComp';
import {ClassComp,ClassComp1} from './components/ClassComp';
import Click from './components/Click';
import UpdatedCount from './components/Count';
function App() {
  return (
    <div>
      <h1>Hello there!</h1>
      <h2>I'm on my way to MERN</h2>
      <FunctionalComp />
      <ClassComp />
      <ClassComp1 />
      <Click />
      <UpdatedCount />
    </div>
  );
}

export default App;
