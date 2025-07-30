import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Preloader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "#151a30", // Dark background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <CircularProgress
        size={70}
        thickness={4}
        sx={{
          color: "#c0b596", // Gold/Cream loader
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{ mt: 3, color: "#c0b596", fontWeight: 400 }}
      >
        Loading IndUS Synergy...
      </Typography>
    </Box>
  );
};

export default Preloader;
