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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure global CSS is imported

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
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 text-center">
                      <h1>Welcome to the Insurance Claims App</h1>
                      <p>Submit your insurance claims easily and quickly.</p>
                    </div>
                  </div>
                </div>
              } />
            </Routes>
          </header>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;