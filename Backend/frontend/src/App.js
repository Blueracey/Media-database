import React from 'react';
import './App.css';
import AddReview from './components/AddReview';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Media Review Database</h1>
                <AddReview />
            </header>
        </div>
    );
}

export default App;
