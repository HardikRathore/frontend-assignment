import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";

export const Input = (props) => {
  const [value, setValue] = useState("");
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
        <Typography>
          {props.object.label}
          {props.object.validate.required && <>*</>}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          placeholder={props.object.placeholder}
          required={props.object.validate.required}
          value={value}
          onChange={handleChange}
          style={{ background: "white" }}
        />
      </Grid>
    </Grid>
  );
};
