import React, { useState } from 'react';
import './SearchMenu2.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function SearchMenu2() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // Add your implementation for searching and displaying results here

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to submit the search criteria and display results
  };

  return (
    <Container>
    <div className='menu1'>
     <h4>MENU-3 SEARCH</h4>
     <form onSubmit={handleSubmit}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name" />
      </Form.Group>
      <Button variant="primary">Submit</Button>
     </form>
    </div>
    </Container>
    // <div className="search-menu2-container">
    //   <h3>Menu 3 - Search</h3>
    //   <form onSubmit={handleSubmit} className="search-menu2-inputs">
    //     <label>
    //       First Name:
    //       <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    //     </label>
    //     <label>
    //       Last Name:
    //       <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    //     </label>
    //     <button type="submit" className="search-menu2-button">Submit</button>
    //   </form>
    //   {/* Add code to display search results here */}
    // </div>
  );
}

export default SearchMenu2;
