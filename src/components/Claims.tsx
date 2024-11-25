import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Claims: React.FC = () => {
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      alert('You must be logged in to view this page');
      navigate('/login');
    }
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    return null;
  }

  return (
    <div>
      <h2>Claims</h2>
      <p>Submit your insurance claims easily and quickly.</p>
    </div>
  );
}

export default Claims;