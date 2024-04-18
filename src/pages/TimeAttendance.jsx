import React from 'react';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TimeAttendance() {
  return (
    <>
    <Navbar/>
    <Box height={30}  />
    <Box sx={{ display: 'flex' }}>
    <Sidenav />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>TimeAttendance</h1>
      </Box>
    </Box>
    </>
    
  );
}