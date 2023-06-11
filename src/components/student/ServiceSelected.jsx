import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const ServicesSelected = ({ data }) => {
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography variant="h6">Services Selected</Typography>
      {data.map((service, index) => (
        <Box key={index}>
          <Typography>
            <Checkbox checked={service.completed} /> {service.name}
          </Typography>
          <Typography variant="body2">{service.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

ServicesSelected.propTypes = {
  data: PropTypes.shape({
    map: PropTypes.func,
  }),
};

export default ServicesSelected;
