import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const UniversitySelected = ({ data }) => {
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography variant="h6">University Selected</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((uni, index) => (
              <TableRow key={index}>
                <TableCell>
                  <a href={uni.url} target="_blank" rel="noreferrer">
                    {uni.name}
                  </a>
                </TableCell>
                <TableCell>
                  <Select value={uni.status}>
                    <MenuItem value={'None'}>None</MenuItem>
                    <MenuItem value={'Applied'}>Applied</MenuItem>
                    <MenuItem value={'Accepted'}>Accepted</MenuItem>
                    <MenuItem value={'Rejected'}>Rejected</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

UniversitySelected.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default UniversitySelected;
