import React, { useState } from 'react';
import { Alert, Stepper, Step, StepLabel, Typography, Box, Button, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { useUserContext } from '../userContetx';
import { useHomePageContext } from '../home/HomePostLoginContext';

const CustomStepper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { userData: user } = useUserContext();
  const { userUniSelection: universities, userServiceSelection: services } = useHomePageContext();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => (
          <Step key={step?.title}>
            <StepLabel StepIconComponent={step?.icon?.type}>{step?.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === steps?.length ? (
          <Box>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed</Typography>
            <Button onClick={handleReset} color="primary">
              Reset
            </Button>
          </Box>
        ) : (
          <Container maxWidth="sm">
            <Box mt={5}>{steps[activeStep].component}</Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button disabled={activeStep === 0} onClick={handleBack} color="primary">
                Back
              </Button>
              <Button variant="contained" onClick={handleNext} disabled={(!user.hasFilledApplication && activeStep === 1) || (!universities.length && activeStep === 0)} color="primary">
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
            <Box mt={2}>{!user.hasFilledApplication && activeStep === 1 ? <Alert severity="warning">Fill and submit the application to move forward!</Alert> : null}</Box>
            <Box mt={2}>{!universities.length && activeStep === 0 ? <Alert severity="warning">Select at least one university to move forward!</Alert> : null}</Box>
            <Box mt={2}>{!services.length && activeStep === 2 ? <Alert severity="warning">You haven{"'"}t selected any service but you can still apply for free!</Alert> : null}</Box>
          </Container>
        )}
      </Box>
    </Box>
  );
};

CustomStepper.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default CustomStepper;
