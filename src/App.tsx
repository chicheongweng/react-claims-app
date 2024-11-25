import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Claims from './components/Claims';
import Policies from './components/Policies';
import Support from './components/Support';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Login from './components/Login';
import { AuthProvider } from './AuthContext';
import './App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <CustomNavbar />
          <header className="App-header">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/support" element={<Support />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/" element={
                <>
                  <h1>Welcome to the Insurance Claims App</h1>
                  <p>Submit your insurance claims easily and quickly.</p>
                </>
              } />
            </Routes>
          </header>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;