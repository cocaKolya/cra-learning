import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const LINK_TITLE = "My Telegram"
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
        <p>
          Nikolay Nelidov.
          22 y.o. Moscow, Russia
          e-mail: nelidovn@yandex.ru

        </p>
        <a
          className="telegram-link"
          href="https://telegram.org/cocakolya"
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
