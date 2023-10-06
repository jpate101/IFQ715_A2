import React, { useState } from "react";

function Search() {
  const [country, setCountry] = useState("");
  const [showAllItems, setShowAllItems] = useState(false);
  const [rankingsData, setRankingsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // Use errorMessage state

  const handleClick = () => {
    if (country) {
      fetchRankings(country);
      setShowAllItems(true);
    }
  };

  async function fetchRankings(country) {
    const url = "https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?country=" + country;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'X-API-KEY': 'EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV',
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setRankingsData(data);

    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      <h2>happiness Rankings</h2>
      <p></p>
      <div>
        <label>Country: </label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>Show Info</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
        {showAllItems &&
          rankingsData.map((country, index) => (
            <li key={index}>
              <strong>Rank:</strong> {country.rank},{" "}
              <strong>Country:</strong> {country.country},{" "}
              <strong>Score:</strong> {country.score},{" "}
              <strong>Year:</strong> {country.year}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search;