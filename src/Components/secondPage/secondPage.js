// src/SecondPage.js
import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import './secondPage.css';
import UploadFiles from './Menu1/UploadFiles'; // Corrected import path
import SearchMenu1 from './Menu2/SearchMenu1'; // Corrected import path
import SearchMenu2 from './Menu3/SearchMenu2'; // Corrected import path

function SecondPage() {
  return (
    <Container>
    <div className="violet-background" >
      <div className="container-fluid bg-white">
         {/* Add the bg-white class for white background */}
        <div className="container mt-5">
          <Tabs defaultActiveKey="upload" id="uncontrolled-tab-example">
            <Tab eventKey="upload" title="Menu 1">
              <UploadFiles />
            </Tab>
            <Tab eventKey="search1" title="Menu 2">
              <SearchMenu1 />
            </Tab>
            <Tab eventKey="search2" title="Menu 3">
              <SearchMenu2 />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default SecondPage;
