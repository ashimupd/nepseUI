import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Box } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import HomePreLogin from './HomePreLogin';
import HomePostLogin from './HomePostLogin';
import { useUserContext } from '../userContetx';

const Home = () => {
  const { userData: user } = useUserContext();

  return <>{user.id <= 0 ? <HomePreLogin /> : <HomePostLogin />}</>;
};

export default Home;
