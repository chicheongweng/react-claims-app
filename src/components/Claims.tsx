import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Claims.css'; // Import the CSS file for styling

const Claims: React.FC = () => {
  const { loggedInUser } = useAuth();
  const navigate = useNavigate();
  const [claimDetails, setClaimDetails] = useState({
    policyNumber: '',
    claimAmount: '',
    description: ''
  });

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setClaimDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Claim submitted:', claimDetails);
    alert('Claim submitted successfully!');
    setClaimDetails({
      policyNumber: '',
      claimAmount: '',
      description: ''
    });
  };

  return (
    <div className="claims-container">
      <h2>Claims</h2>
      <p>Submit your insurance claims easily and quickly.</p>
      <form className="claim-form" onSubmit={handleSubmit}>
        <label htmlFor="policyNumber">Policy Number</label>
        <input
          id="policyNumber"
          name="policyNumber"
          type="text"
          value={claimDetails.policyNumber}
          onChange={handleChange}
          required
        />
        <label htmlFor="claimAmount">Claim Amount</label>
        <input
          id="claimAmount"
          name="claimAmount"
          type="number"
          value={claimDetails.claimAmount}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={claimDetails.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Claims;