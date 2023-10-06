import React, { useState } from "react";

function Factors() {
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [showAllItems, setShowAllItems] = useState(false);
  const [rankingsData, setRankingsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // Use errorMessage state

  const handleClick = () => {
      fetchRankings(year,country);
      setShowAllItems(true);
    
  };

  async function fetchRankings(year, country) {
    //const url = "https://d2h6rsg43otiqk.cloudfront.net/prod/factors/2015?country=Iceland"

    const baseUrl = "https://d2h6rsg43otiqk.cloudfront.net/prod/factors";
    const url = `${baseUrl}/${year}?country=${country}`;
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'X-API-KEY': 'EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setRankingsData(data);
      //console.log(data);
      //console.log(url);

    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      <h2>happiness Rankings</h2>
      <p>requires you to be log in to access factors</p>
      <div>
        <label>Year: </label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label>Country: </label>
        <input
          type="text"
          id="year"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>Show Info</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
      {showAllItems && (
        <table className="centered-table">
          <thead>
            <tr>
              <th className="table-header">Rank</th>
              <th className="table-header">Country</th>
              <th className="table-header">Score</th>
              <th className="table-header">Economy</th>
              <th className="table-header">Family</th>
              <th className="table-header">Health</th>
              <th className="table-header">Freedom</th>
              <th className="table-header">Generosity</th>
              <th className="table-header">Trust</th>
            </tr>
          </thead>
          <tbody>
            {rankingsData.map((data, index) => (
              <tr key={index}>
                <td>{data.rank}</td>
                <td>{data.country}</td>
                <td>{data.score}</td>
                <td>{data.economy}</td>
                <td>{data.family}</td>
                <td>{data.health}</td>
                <td>{data.freedom}</td>
                <td>{data.generosity}</td>
                <td>{data.trust}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </ul>
    </div>
  );
}

export default Factors;