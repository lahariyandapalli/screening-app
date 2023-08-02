import React, { useState } from 'react';
import './SearchMenu2.css';

function SearchMenu2() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // Add your implementation for searching and displaying results here

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to submit the search criteria and display results
  };

  return (
    <div className="search-menu2-container">
      <h3>Menu 3 - Search</h3>
      <form onSubmit={handleSubmit} className="search-menu2-inputs">
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <button type="submit" className="search-menu2-button">Submit</button>
      </form>
      {/* Add code to display search results here */}
    </div>
  );
}

export default SearchMenu2;
