import PropTypes from 'prop-types';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ApplicationDetails = ({ data }) => {
  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography variant="h6">Application Details</Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <CalendarTodayIcon sx={{ mr: 1 }} />
        High School Graduation Date: {data.graduationDate}
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <TrendingUpIcon sx={{ mr: 1 }} />
        High School GPA: {data.gpa}
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <SchoolIcon sx={{ mr: 1 }} />
        High School Major: {data.highSchoolMajor}
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <SchoolIcon sx={{ mr: 1 }} />
        Intended University First Major: {data.intendedFirstMajor}
      </Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <SchoolIcon sx={{ mr: 1 }} />
        Intended University Second Major: {data.intendedSecondMajor}
      </Typography>
    </Box>
  );
};

ApplicationDetails.propTypes = {
  data: PropTypes.shape({
    gpa: PropTypes.any,
    graduationDate: PropTypes.any,
    highSchoolMajor: PropTypes.any,
    intendedFirstMajor: PropTypes.any,
    intendedSecondMajor: PropTypes.any,
  }),
};

export default ApplicationDetails;
