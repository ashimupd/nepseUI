import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Box } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import HomePreLogin from './HomePreLogin';
import HomePostLogin from './HomePostLogin';
import AdminHome from './AdminHome';
import { useUserContext } from '../userContetx';

const Home = () => {
  const { userData: user } = useUserContext();
  const homePageToDisplay = user?.isAdmin ? <AdminHome /> : user?.id > 0 ? <HomePostLogin /> : <HomePreLogin />;
  return <>{homePageToDisplay}</>;
};

export default Home;
