import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockUniDetailsData } from '../../Mocks/mocks';
import { Box, Button, Backdrop, CircularProgress, Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import ArticleWithCarousel from '../article/ArticleWithCarousel';
import { CheckCircle } from '@mui/icons-material';

const College = () => {
  const { id } = useParams();
  const [collegeData] = useState(() => {
    // This will be replaced by the actual API call
    return mockUniDetailsData;
  });
  const [showApplyFeedback, setApplyFeedback] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false); //By default, it's false
  const [open, setOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  console.log(collegeData);
  // console.log(mockUniDetailsData);
  console.log(id);

  const handleApply = () => {
    // call API to record user has applied.
    // Get userId from context
    setApplyFeedback(true);
    // If error set Error to true
    //setError(true);

    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setApplied(true);
    }, 2000);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <Container maxWidth="md" id={id}>
      <ArticleWithCarousel title={collegeData?.title} imageList={collegeData?.images} content={collegeData?.content} />

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" onClick={handleApply} startIcon={applied && showApplyFeedback && !error ? <CheckCircle /> : null} disabled={applied && showApplyFeedback && !error}>
          {applied && showApplyFeedback && !error ? 'Applied' : 'Apply'}
        </Button>
        <Backdrop open={open} sx={{ zIndex: 1301 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
            {!error ? 'Your response has been recorded!' : 'There was an error submitting the form! Please try again at a later time'}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default College;
