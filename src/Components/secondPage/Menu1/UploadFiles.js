import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './uploadfiles.css';

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
    <div className="upload-container">
      <h3>Menu 1 - Upload Files</h3>
      <form onSubmit={handleSubmit}>
        <div className="upload-inputs">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" id="fileInput" onChange={handleFileChange} />
          </Form.Group>
        </div>
        <div className="upload-inputs">
          <label>
            Domestic Watch List:
            <input type="checkbox" checked={isDomestic} onChange={handleCheckboxChange} />
          </label>
        </div>
        <div className="upload-button-container"> {/* New container to center the button */}
          <button type="submit" className="upload-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UploadFiles;
