import React, { useEffect } from 'react';
import logo from './assets/yoohoo.png';
import './App.css';

function App() {
  useEffect(() => document.title="PeterZone", []);

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AH JEEZ
        </p>
      </header>
    </div>
  );
}

export default App;
