'use client';

import React, { useState } from 'react';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';

const WorkoutDropdown: React.FC = () => {
  const [selectedWorkout, setSelectedWorkout] = useState<string>('');

  const handleSelect = (eventKey: string | null) => {
    if (eventKey) {
      setSelectedWorkout(eventKey);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
      <div className="d-flex align-items-center">
        <Dropdown onSelect={handleSelect} className="me-3">
          <DropdownButton variant="outline-dark" title={selectedWorkout || 'Select workout type'}>
            <Dropdown.Item eventKey="Push">Push</Dropdown.Item>
            <Dropdown.Item eventKey="Pull">Pull</Dropdown.Item>
            <Dropdown.Item eventKey="Legs">Legs</Dropdown.Item>
            <Dropdown.Item eventKey="Full body">Full body</Dropdown.Item>
            <Dropdown.Item eventKey="Cardio">Cardio</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </Container>
  );
};

export default WorkoutDropdown;
