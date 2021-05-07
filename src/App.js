import logo from './logo.svg';
import './App.css';
import {Balance} from './components/Balance';
import axios from 'axios';

const api = axios.create({
  baseURL: ''
})

function App() {
  return (
    <div className="container">
        <Balance/>
    </div>
  );
}

export default App;
