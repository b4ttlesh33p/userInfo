import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BaseStepProps } from "../StepsModal";

interface AgeStepProps extends BaseStepProps {}

export const AgeStep = ({ handleDisableNext, editStepsData }: AgeStepProps) => {
    const [age, setAge] = useState('')

    const handleSetAge = (age: string) => {
        setAge(age)
        editStepsData('age', age)
    }

    useEffect(() => {
        if (!age) {
            handleDisableNext(true)
        } else {
            handleDisableNext(false)
        }
    })

    return <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly', height: '100%', width: '100%' }} id='age-step'>
        <TextField id="outlined-basic" label="Age" type="number" variant="outlined" onChange={(e) => handleSetAge(e.target.value)} />
    </Box>
}