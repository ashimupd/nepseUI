import { useState, useEffect } from 'react';
import CustomStepper from '../customStepper/CustomStepper';
import CheckboxList from '../checkboxList/CheckboxList';
import { School, Assignment, MenuBook, CheckCircle } from '@mui/icons-material';
import { universityList, serviceList } from '../../Mocks/mocks';
import StudentInfo from '../studentInfo/StudentInfo';
import ServiceList from '../serviceList/ServiceList';
import Summary from '../summary/Summary';
import { HomePostLoginContextProvider } from './HomePostLoginContext';

const HomePostLogin = () => {
  const [univList, setUnivList] = useState([]);
  const [serveList, setServiceList] = useState([]);

  useEffect(() => {
    // api call to get list of uni
    // api call to get List of Service
    setUnivList(universityList);
    setServiceList(serviceList);
  }, [univList]);

  const steps = [
    { title: 'Choose University', icon: <School />, component: <CheckboxList checkboxData={universityList} /> },
    { title: 'Fill Application', icon: <Assignment />, component: <StudentInfo /> },
    { title: 'Select Services', icon: <MenuBook />, component: <ServiceList services={serveList} /> },
    { title: 'Summary', icon: <CheckCircle />, component: <Summary /> },
  ];

  return (
    <HomePostLoginContextProvider>
      <CustomStepper steps={steps} />;
    </HomePostLoginContextProvider>
  );
};

export default HomePostLogin;
