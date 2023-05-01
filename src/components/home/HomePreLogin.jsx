import React from "react";
// eslint-disable-next-line no-unused-vars
import { Box, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import OutlinedTimeline from "./OutlinedTimeline";
// eslint-disable-next-line no-unused-vars
import images from "../../images/images";
import { useUserContext } from "../userContetx";

const HomePreLogin = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F2",
        padding: "50px",
        backgroundImage: `url(${images.nepaliGirl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        minHeight: 800,
        objectFit: "contain",
      }}
    ></Box>
  );
};
export default HomePreLogin;
