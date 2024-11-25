import React from 'react';
import CustomNavbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <CustomNavbar />
      <header className="App-header">
        <h1>Welcome to the Insurance Claims App</h1>
        <p>Submit your insurance claims easily and quickly.</p>
      </header>
    </div>
  );
}

export default App;