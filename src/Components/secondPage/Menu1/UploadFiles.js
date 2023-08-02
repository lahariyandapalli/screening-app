import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './uploadfiles.css';
import { Container,Button } from 'react-bootstrap';

function UploadFiles() {
  const [file, setFile] = useState(null);
  const [isDomestic, setIsDomestic] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleCheckboxChange = (e) => {
    setIsDomestic(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform file upload and handle domestic/international indicator logic here
    // For demonstration purposes, we will just log the values
    console.log('Selected File:', file);
    console.log('Is Domestic:', isDomestic);
  };

  return (
    <Container>
    <div className='menu1'>
     <h4>MENU-1 UPLOAD FILES</h4>
     <form onSubmit={handleSubmit}>
     <Form.Group controlId="formFile" className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label="Domestic Watch List"
          />
        </div>
      ))}
      <Button variant="primary">Submit</Button>
     </form>
    </div>
    </Container>
    
    // <div className="upload-container" >
      
    //   <form onSubmit={handleSubmit}>
    //     <div className="upload-inputs">
    //       <Form.Group controlId="formFile" className="mb-3">
    //         <Form.Control type="file" id="fileInput" onChange={handleFileChange} />
    //       </Form.Group>
    //     </div>
    //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check label=" Domestic Watch List" type="checkbox"  />
    //   </Form.Group>
    //     {/* <div className="upload-inputs">
    //       <label>
    //         Domestic Watch List:
    //         <input type="checkbox" checked={isDomestic} onChange={handleCheckboxChange} />
    //       </label>
    //     </div> */}
    //     <div className="upload-button-container"> {/* New container to center the button */}
    //       <button type="submit" className="upload-button">Submit</button>
    //     </div>
    //   </form>
    // </div>
  
  );
}

export default UploadFiles;
