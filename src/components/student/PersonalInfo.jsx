// PersonalInfo.js
import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const PersonalInfo = ({ data }) => {
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {data?.profilePicture ? <img src={data?.profilePicture} alt="Profile" style={{ height: '100px', marginRight: '20px' }} /> : <Avatar sx={{ height: 100, width: 100, marginRight: 2 }}>A</Avatar>}
        <div>
          <Typography variant="h6">Personal Info</Typography>
          <Typography>Legal First Name: {data?.legalFirstName}</Typography>
          <Typography>Legal Last Name: {data?.legalLastName}</Typography>
          <Typography>Gender: {data?.gender}</Typography>
          <Typography>Date of Birth: {data?.dob}</Typography>
        </div>
      </Box>
    </Box>
  );
};

PersonalInfo.propTypes = {
  data: PropTypes.shape({
    dob: PropTypes.string,
    gender: PropTypes.string,
    legalFirstName: PropTypes.string,
    legalLastName: PropTypes.string,
    profilePicture: PropTypes.string,
  }),
};

export default PersonalInfo;
