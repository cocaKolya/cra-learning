import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const LINK_TITLE = " Hello world!"
  const[counter, setCounter] = useState(0)
    return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4>{counter}</h4>
          <button onClick={() =>{setCounter(counter + 1)}}>Increment</button>
          <button onClick={() =>{setCounter(counter - 1)}}>Decrement</button>
        </div>
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
      
          {LINK_TITLE}
        </a>
      </header>
    </div>
  );
}

export default App;
