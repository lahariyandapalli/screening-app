import React, { useState } from 'react';
import './SearchMenu2.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      <Form onSubmit={handleSubmit} className="search-menu2-inputs">
        <Form.Group controlId="firstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
          />
        </Form.Group>
        <Button type="submit" className="search-menu2-button">Submit</Button>
      </Form>
      {/* Add code to display search results here */}
    </div>
  );
}

export default SearchMenu2;
