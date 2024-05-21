import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button } from '@mui/material';
import { StepsModal } from './StepsModal';
import { NameStep } from './Steps/NameStep';
import { AgeStep } from './Steps/AgeStep';
import { SummaryStep } from './Steps/SummaryStep';

function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const steps = [
    NameStep,
    AgeStep,
    SummaryStep
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <Button variant='contained' onClick={handleOpenModal}>Open modal</Button>
          <StepsModal 
            open={isModalOpen} 
            onClose={handleCloseModal} 
            title='this is the title'
            steps={steps}
          />
        </Box>
      </header>
    </div>
  );
}

export default App;
