import { Box } from "@mui/material";
import React from "react";
import logo from "./../../assets/images/skutotech.png";
import "./MainPage.scss";
import "typeface-quicksand";
import Laptop from "./../../assets/images/laptop.jpg"

const MainPage = () => {
  return (
    <>
      <Box className="skutotech">
        <Box className="first-container">
          <Box component="img" src={logo} />
          <p className="text-one">Website Under Maintenance</p>
          <p className="text-two">For any enquiry, you can reach us on</p>
          <a href="mailto:info@skutotechsolutions.com" className="text-link">
            info@skutotechsolutions.com
          </a>
        </Box>
        <Box
          className="second-container"
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            component="img"
            src={Laptop}
          />
        </Box>
      </Box>
    </>
  );
};

export default MainPage;
