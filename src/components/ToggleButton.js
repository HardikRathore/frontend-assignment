import React from "react";
import { Typography, Stack } from "@mui/material";
import { Toggle } from "./Toggle";

export const ToggleButton = (props) => {
  return (
    <Stack direction="row" spacing={2} style={{ marginLeft: -8 }}>
      <Toggle onClick={props.handleToggle} />
      <Typography alignSelf="center">Show/Hide Advanced Options</Typography>
    </Stack>
  );
};
