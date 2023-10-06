import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    function navLanding() {
        //alert('Button clicked!');
    }

    return (
        <div className="button-container">
          <div className="left-buttons">
            <Link to="/">
                <button onClick={navLanding} className="styled-button">Landing</button>
            </Link>
            <Link to="/Rankings">
              <button className="styled-button">Rankings by Year</button>
            </Link>
            <Link to="/Search">
              <button className="styled-button">Search For Country</button>
            </Link>
            <Link to="/Factors">
              <button className="styled-button">Factors</button>
            </Link>
          </div>
          <div className="right-buttons">
            <Link to="/Registration">
              <button className="styled-button">Register</button>
            </Link>
            <Link to="/login">
                <button className="styled-button">Login</button>
            </Link>
            <Link to="/Logout">
                <button className="styled-button">Logout</button>
            </Link>
          </div>
        </div>
      );
}

export default Header;