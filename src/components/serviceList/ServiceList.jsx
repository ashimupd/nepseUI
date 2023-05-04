import React, { useState } from 'react';
import { List, ListItem, ListItemText, Checkbox, Typography, Box, ListItemIcon } from '@mui/material';
import PropTypes from 'prop-types';
import { useHomePageContext } from '../home/HomePostLoginContext';

const ServiceList = ({ services, title }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const { setUserServiceSelection } = useHomePageContext();

  const handleToggle = (event, selId, name, price) => {
    setSelectedServices((prevSelected) => {
      if (prevSelected?.filter(({ id }) => id === selId).length > 0) {
        const newState = prevSelected.filter((item) => item?.id !== selId);
        setUserServiceSelection(newState);
        return newState;
      }
      const newState = [...prevSelected, { id: selId, name, price }];
      setUserServiceSelection(newState);
      return newState;
    });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          {services.map((service) => (
            <ListItem key={service?.id} disablePadding>
              <ListItemIcon>{service?.icon}</ListItemIcon>
              <Checkbox
                edge="start"
                checked={selectedServices?.filter(({ id }) => id === service?.id).length}
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
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

ServiceList.propTypes = {
  services: PropTypes.array,
  title: PropTypes.string,
};

export default ServiceList;
