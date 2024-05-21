import { Box, Button, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

interface FooterProps {
    currentStep: number,
    totalSteps: number,
    OnBackClick: () => void,
    OnNextClick: () => void,
    OnFinishClick: () => void
    disableNext?: boolean
}

export const Footer = ({ currentStep, totalSteps, OnBackClick, OnNextClick, OnFinishClick, disableNext }: FooterProps) => {
    const shouldDisableBackButton = currentStep === 0
    const isLastStep = currentStep === (totalSteps - 1)

    return <Box sx={{ display: 'flex', height: '7%', width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} id="modal-footer">
        <Button 
            onClick={OnBackClick} 
            variant="contained" 
            disabled={shouldDisableBackButton}
        >
            Back
        </Button>
        {isLastStep ? 
            <Button 
                onClick={OnFinishClick} 
                variant="contained"
            >
                Finish
            </Button> : 
            <Button 
                onClick={OnNextClick} 
                variant="contained"
                disabled={disableNext}
            >
                Next
            </Button>}
    </Box>
}