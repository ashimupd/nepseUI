import React from 'react';
import { Box, Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { School, CheckCircle } from '@mui/icons-material';
import { useHomePageContext } from '../home/HomePostLoginContext';

const Summary = () => {
  const { userUniSelection: universities, userServiceSelection: services } = useHomePageContext();
  // const [totalPrice, setTotalPirce] = useState(0);
  return (
    <Box mb={8}>
      <Typography variant="h5" gutterBottom>
        Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              University Selected
            </Typography>
            {universities.map((university) => (
              <List key={university?.id}>
                <ListItem>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText primary={university?.title} />
                </ListItem>
              </List>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Services Selected
            </Typography>
            <List>
              {services.map((service, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircle />
                  </ListItemIcon>
                  <ListItemText primary={service.name} secondary={`Price: $${service.price}`} />
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Total Price: $
                {services.reduce((accumulator, currentItem) => {
                  return accumulator + currentItem?.price;
                }, 0)}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Summary;
