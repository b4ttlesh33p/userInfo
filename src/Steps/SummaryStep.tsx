import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BaseStepProps } from "../StepsModal";

interface SummaryProps extends BaseStepProps {}

export const SummaryStep = ({stepsData}: SummaryProps) => {
    const rows = Object.entries(stepsData).map(([key, value]) => ({name: key, value}))

    return <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly', height: '100%', width: '100%' }} id='summary-step'>
          <TableContainer component={Paper}>
      <Table
       sx={{ minWidth: 650 }}
        aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
}