import { Box } from "@mui/material";
import React from "react";


export const Body = ({children}: {children: JSX.Element}) => {
    return <Box id="modal-body" sx={{maxHeight: '100%', width: '100%', flexGrow: 1}}>
        {children}
    </Box>
}