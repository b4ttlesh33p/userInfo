import { Box, Button, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

interface HeaderProps {
    title?: string,
    onClose: () => void
}

const style = {
    display: 'flex', 
    height: '7%', 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
}

export const Header = ({ title, onClose }: HeaderProps) => {
    return <Box sx={style} id="modal-header">
        <Typography id="modal-modal-title" variant="h6">{title}</Typography>
        <Button onClick={onClose}><CloseIcon/></Button>
    </Box>
}