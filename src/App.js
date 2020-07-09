import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const LINK_TITLE = "My Instagram"
  const[counter, setCounter] = useState(0)
    return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4>{counter}</h4>
          <button onClick={() =>{setCounter(counter + 1)}}>Like</button>
          <button onClick={() =>{setCounter(counter - 1)}}>Dislike</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p> Nikolay Nelidov.</p>
        <p> 22 y.o. Moscow, Russia. </p>
        <p> e-mail: nelidovn@yandex.ru </p>

      
        <a
          className="telegram-link"
          href="https://instagram.com/nelidov"
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
