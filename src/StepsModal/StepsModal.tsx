import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";
import { saveToLocalStorage } from "./utils";

export interface BaseStepProps {
    handleDisableNext: (shouldDisableNext: boolean) => void,
    editStepsData: (key: string, value: any) => void,
    stepsData: Record<string, any>
}
type Step = (props: BaseStepProps) => JSX.Element

interface StepsModalProps {
    steps: Step[],
    title?: string,
    open: boolean,
    onClose: () => void
}

const outerModalBoxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const innerModalBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
  
export const StepsModal = ({open, onClose, title, steps}: StepsModalProps) => {
    const [ currentStep, setCurrentStep] = useState(0)
    const [ disableNext, setDisableNext] = useState(false)
    const [ stepsData, setStepsData ] = useState({})

    const editStepsData = (key: string, value: any) => {
        setStepsData({...stepsData, [key]: value})
    }
    const handleOnClose = () => {
        
        onClose()
        setCurrentStep(0)
    }

    const handleBackClick = () => {
        setCurrentStep(currentStep - 1)
    }

    const handleNextClick = () => {
        setCurrentStep(currentStep + 1)
    }

    const handleFinishClick = () => {
        saveToLocalStorage('userInfo', stepsData)
        handleOnClose()
    }

    const Step = steps[currentStep]

    return <Modal open={open && !!steps.length} onClose={handleOnClose}>
        <Box sx={outerModalBoxStyle}>
            <Box sx={innerModalBoxStyle}>
                <Header title={title} onClose={handleOnClose}/>
                <Body>
                    <Step 
                        handleDisableNext={setDisableNext}
                        editStepsData={editStepsData}
                        stepsData={stepsData}
                    />
                </Body>
                <Footer 
                    currentStep={currentStep}
                    totalSteps={steps.length}
                    OnNextClick={handleNextClick}
                    OnBackClick={handleBackClick}
                    OnFinishClick={handleFinishClick}
                    disableNext={disableNext}
                />
            </Box>
        </Box>
    </Modal>
}