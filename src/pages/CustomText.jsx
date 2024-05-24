import { Typography } from "@mui/material";
import React from "react";

const CustomText = ({ title }) => {
  return (
    <Typography variant="h6" mt={4}>
      {title}
    </Typography>
  );
};

export default CustomText;
