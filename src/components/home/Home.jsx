import React from "react";
import { Box, Typography } from "@mui/material";
import OutlinedTimeline from "./OutlinedTimeline";
// eslint-disable-next-line no-unused-vars
import images from "../../images/images";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F2",
        padding: "50px",
      }}
    >
      <OutlinedTimeline />
      <Box
        sx={{
          marginTop: "50px",
          minHeight: "300px",
        }}
      >
        <Typography
          color="secondary.main"
          variant="h3"
          component="div"
          align="center"
          sx={{ marginTop: "60px", marginBottom: "50px" }}
        >
          We are here to help!
        </Typography>
        <Typography color="#666" variant="h5" component="p" align="center">
          With Nepinusa, we provide high-quality, contextual education and
          career counseling at scale. We aim to reach thousands of Nepali
          students applying to the US, help them navigate through the
          application process & life in the US. We are building a community & we
          want you to be a part of it.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
