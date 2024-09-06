import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <button onClick={handleLogout} style={styles.button}>
      Logout
    </button>
  );
};

// Inline styles
const styles = {
  button: {
    backgroundColor: '#FF4D4D', // Red background
    color: 'white',             // White text
    border: 'none',             // Remove border
    borderRadius: '5px',        // Rounded corners
    padding: '10px 20px',       // Padding
    fontSize: '16px',           // Text size
    cursor: 'pointer',          // Pointer on hover
    transition: 'background-color 0.3s', // Smooth transition on hover
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
  },
  buttonHover: {
    backgroundColor: '#FF3333', // Darker red on hover
  }
};

export default Logout;
