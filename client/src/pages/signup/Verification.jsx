import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Verification = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/server/users/verify/${token}`);
        // Redirect or show success message
        console.log(response.data.message);
        if (response.data.message === 'Email verified successfully.') {
          navigate('/login');
        }
      } catch (error) {
        // Handle error
      }
    };


    verifyEmail();
  }, [token]);

  return (
    <div>
      <p>Verifying your email...</p>
    </div>
  );
};

export default Verification;