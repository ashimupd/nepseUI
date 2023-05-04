import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Paper } from '@mui/material';
import { useHomePageContext } from '../home/HomePostLoginContext';

const CheckboxList = ({ checkboxData }) => {
  const [selected, setSelected] = useState([]);
  const { setUserUniSelection } = useHomePageContext();

  const handleChange = (event, id, title) => {
    console.log({ id, title });
    if (event.target.checked) {
      setUserUniSelection((prevSelected) => [...prevSelected, { id, title }]);
      setSelected((prevSelected) => [...prevSelected, id]);
    } else {
      setUserUniSelection((prevSelected) => prevSelected.filter((item) => item !== id));
      setSelected((prevSelected) => prevSelected.filter((item) => item !== id));
    }
  };

  return (
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
            <FormControlLabel key={index} control={<Checkbox checked={selected.includes(item?.id)} onChange={(event) => handleChange(event, item?.id, item?.name)} />} label={item?.name} />
          ))}
        </FormGroup>
      </FormControl>
    </Paper>
  );
};

CheckboxList.propTypes = {
  checkboxData: PropTypes.array,
};

export default CheckboxList;
