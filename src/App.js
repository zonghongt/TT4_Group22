import logo from './logo.svg';
import './App.css';
import {Balance} from './components/Balance';
// import {Transfer} from './components/Transfer';
import axios from 'axios';

//how to call API 

function App() {
  return (
    <div className="container">
        <Balance/>
    </div>
  );
}

export default App;
