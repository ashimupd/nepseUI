import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Typography, FormControl, FormControlLabel, FormGroup, Paper } from '@mui/material';
import { useHomePageContext } from '../home/HomePostLoginContext';
import { NavLink } from 'react-router-dom';

const CheckboxList = ({ checkboxData, title }) => {
  const [selected, setSelected] = useState([]);
  const { setUserUniSelection } = useHomePageContext();

  const handleChange = (event, selId, title) => {
    setSelected((prevSelected) => {
      if (prevSelected?.filter(({ id }) => id === selId).length > 0) {
        const newState = prevSelected.filter((item) => item?.id !== selId);
        setUserUniSelection(newState);
        return newState;
      }
      const newState = [...prevSelected, { id: selId, title }];
      setUserUniSelection(newState);
      return newState;
    });
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 2,
        }}
        elevation={4}
      >
        <FormControl component="fieldset">
          <FormGroup column>
            {checkboxData.map((item, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox checked={selected?.filter(({ id }) => id === item?.id).length} onChange={(event) => handleChange(event, item?.id, item?.name)} />}
                label={
                  <Button
                    component={NavLink}
                    to={`/colleges/${item?.id}`} // Customize the path as needed
                    color="primary"
                    size="small"
                  >
                    {item?.name}
                  </Button>
                }
              />
            ))}
          </FormGroup>
        </FormControl>
      </Paper>
    </>
  );
};

CheckboxList.propTypes = {
  checkboxData: PropTypes.array,
  title: PropTypes.string,
};

export default CheckboxList;
