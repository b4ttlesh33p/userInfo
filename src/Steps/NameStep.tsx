import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BaseStepProps } from "../StepsModal";

interface NameStepProps extends BaseStepProps {}

export const NameStep = ({ handleDisableNext, editStepsData }: NameStepProps) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSetFirstName = (name: string) => {
        setFirstName(name)
        editStepsData('firstName', name)
    }

    const handleSetLastName = (name: string) => {
        setLastName(name)
        editStepsData('lastName', name)
    }

    useEffect(() => {
        if (!firstName || !lastName) {
            handleDisableNext(true)
        } else {
            handleDisableNext(false)
        }
    })

    return <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly', height: '100%', width: '100%' }} id='name-step'>
        <TextField id="outlined-basic" type="text" label="First Name" variant="outlined" onChange={(e) => handleSetFirstName(e.target.value)} />
        <TextField id="outlined-basic" type="text" label="Last Name" variant="outlined" onChange={(e) => handleSetLastName(e.target.value)} />
    </Box>
}