import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography, Box, Button, Container } from '@mui/material';
import PropTypes from 'prop-types';

const CustomStepper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

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
            <StepLabel
              StepIconComponent={step?.icon?.type}
              sx={{
                '& .MuiStepIcon-root': {
                  color: 'primary.main',
                },
                '&.MuiStepLabel-active': {
                  color: 'primary.main',
                },
                '&.MuiStepLabel-completed': {
                  color: 'primary.main',
                },
              }}
            >
              {step?.title}
            </StepLabel>
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
              <Button variant="contained" onClick={handleNext} color="primary">
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
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
