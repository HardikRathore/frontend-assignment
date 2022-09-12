import React, { useState, useLayoutEffect } from "react";
import { Grid, TextField, Typography, MenuItem } from "@mui/material";

export const Select = (props) => {
  const arr = props.object.validate.options;
  const [value, setValue] = useState(props.object.validate.defaultValue);
  useLayoutEffect(() => {
    props.handleSubmit(props.object.jsonKey, value);
  }, []);
  const handleChange = (event) => {
    props.handleSubmit(props.object.jsonKey, event.target.value);
    setValue(event.target.value);
  };
  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={6}
        style={{
          alignSelf: "center",
        }}
      >
        <Typography style={{ alignSelf: "center" }}>
          {props.object.label}
          {props.object.validate.required && <>*</>}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="outlined-select-currency"
          select
          value={value}
          onChange={handleChange}
          fullWidth
          style={{ background: "white" }}
        >
          {arr.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};
