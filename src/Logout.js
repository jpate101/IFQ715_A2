import React, { useState } from 'react';

function Logout() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log('Login Data:', formData);
    const url = `https://d2h6rsg43otiqk.cloudfront.net/prod/user/login`;//-this one qworks
    if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
        setErrorMessage("Logout is complete");
      } else {
        setErrorMessage("You must log in first.");
      }
  };

  const [errorMessage, setErrorMessage] = useState(""); // Use errorMessage state

  return (
    <div>
      <h2>Logout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <button type="submit">Logout</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      
      
    </div>

    
  );
}

export default Logout;