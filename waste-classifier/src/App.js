import React from 'react';
import UploadForm from './components/UploadForm';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Garbage Classifier</h1>
                <UploadForm />
            </header>
        </div>
    );
}

export default App;
