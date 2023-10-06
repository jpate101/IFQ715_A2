import React, { useState } from 'react';

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log('Login Data:', formData);
    const url = `https://d2h6rsg43otiqk.cloudfront.net/prod/user/login`;//-this one qworks

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'X-API-KEY': 'EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.message);
        } else {
          localStorage.setItem("token", data.token);
          //console.log(data.token);
          setErrorMessage("login successful");
          
        }
      });
  };

  const [errorMessage, setErrorMessage] = useState(""); // Use errorMessage state

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      
      
    </div>

    
  );
}

export default Login;