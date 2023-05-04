import React, { useState } from 'react';
import { List, ListItem, ListItemText, Checkbox, Typography, Box, ListItemIcon } from '@mui/material';
import PropTypes from 'prop-types';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { useHomePageContext } from '../home/HomePostLoginContext';

const ServiceList = ({ services }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const { setUserServiceSelection } = useHomePageContext();

  const handleToggle = (event, id, name, price) => {
    if (event.target.checked) {
      setUserServiceSelection((prevSelected) => [...prevSelected, { id, name, price }]);
      setSelectedServices((prevSelected) => [...prevSelected, id]);
    } else {
      setUserServiceSelection((prevSelected) => prevSelected.filter((item) => item !== id));
      setSelectedServices((prevSelected) => prevSelected.filter((item) => item !== id));
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        {services.map((service) => (
          <ListItem key={service?.id} disablePadding>
            <ListItemIcon>
              <DesignServicesIcon color="primary" />
            </ListItemIcon>
            <Checkbox
              edge="start"
              checked={selectedServices.indexOf(service?.id) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': `service-${service?.id}` }}
              onClick={() => handleToggle(event, service?.id, service?.name, service?.price)}
              color="primary"
            />
            <ListItemText
              id={`service-${service?.id}`}
              primary={
                <Typography>
                  {service?.name} - ${service?.price}
                </Typography>
              }
              secondary={service?.description}
            />
            <ListItemIcon>{service?.icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

ServiceList.propTypes = {
  services: PropTypes.array,
};

export default ServiceList;
