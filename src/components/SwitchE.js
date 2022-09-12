import React, { useLayoutEffect } from "react";
import { Checkbox, Typography, Stack } from "@mui/material";

export const SwitchE = (props) => {
  const [value, setValue] = React.useState(props.object.validate.defaultValue);
  useLayoutEffect(() => {
    props.handleSubmit(props.object.jsonKey, value);
  }, []);
  const handleChange = (event) => {
    props.handleSubmit(props.object.jsonKey, event.target.checked);
    setValue(event.target.checked);
  };
  return (
    <Stack direction="row" style={{ marginLeft: -10 }}>
      <Checkbox
        defaultChecked={props.object.validate.defaultValue}
        value={value}
        onChange={handleChange}
        required={props.object.validate.required}
      />
      <Typography style={{ alignSelf: "center" }}>
        {props.object.label}
        {props.object.validate.required && <>*</>}
      </Typography>
    </Stack>
  );
};
