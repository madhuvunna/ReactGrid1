//import logo from './logo.svg';
import './App.css';

//import UserComponent from './components/UserComponent';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Navbar from "./layout/Navbar";
import AddCustomers from './Components/AddCustomers';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { } from 'react-bootstrap';
//import Button from './components/Button';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h4>CustomerDetails</h4>
      <AddCustomers></AddCustomers>
     
    </div>
  );
}

export default App;
