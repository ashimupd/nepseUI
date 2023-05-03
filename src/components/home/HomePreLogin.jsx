import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Carousel from '../carousel/Carousel';
import images from '../../images/images';
import { items } from './CarouselData';
import OutlinedTimeLine from './OutlinedTimeline';
//import { useUserContext } from '../userContetx';

const HomePreLogin = () => {
  return (
    <>
      <>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Nepinusa is a community backed by 6 years of experience of studying, living & working in the US that aims to help Nepali students navigate their higher education, career & life in the US.
        </Typography>
        <Divider sx={{ mb: 2 }} />
      </>
      <Box
        sx={{
          backgroundColor: '#F2F2F2',
          padding: '50px',
          backgroundImage: `url(${images.nepaliGirl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: 800,
        }}
      ></Box>
      <Box>
        <OutlinedTimeLine />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Carousel items={items} />
      </Box>
    </>
  );
};
export default HomePreLogin;
