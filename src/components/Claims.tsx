import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Claims: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      alert('You must be logged in to view this page');
      navigate('/login');
    } else {
      setLoggedInUser(user);
    }
  }, [navigate]);

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