// App.js
import React from 'react';
import './App.css';
import RequestForm from './RequestForm/RequestForm'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Request Form App</h1>
        {/* RequestForm  Component */}
        <RequestForm />
      </header>
    </div>
  );
}

export default App;
