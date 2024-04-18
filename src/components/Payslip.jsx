import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography,ThemeProvider, Box } from '@mui/material';
import {Grid} from '@mui/material';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  return (
    
     <Grid>
       <Typography variant='h3' align='center'>Payslip</Typography>

       <Box component="main" sx={{ m:1, p: 3, alignContent:"left",backgroundColor:"pink",borderRadius:"20px",width:130,height:130}}>
        <Typography align='left'>CompanyAddress</Typography>
        <Typography>phoneno:</Typography>
        <Typography>fax:</Typography>
        <Typography>Website:</Typography>
       </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ScaleofPayment </StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Days&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Description&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Amount&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      
        
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
   
  );
}