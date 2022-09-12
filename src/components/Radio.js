import React, { useLayoutEffect } from "react";
import { Button, Stack } from "@mui/material";

export const Radio = (props) => {
  const [value, setValue] = React.useState(props.object.validate.defaultValue);
  useLayoutEffect(() => {
    props.handleSubmit(props.object.jsonKey, value);
  }, []);
  const handleChange = (event) => {
    props.handleSubmit(props.object.jsonKey, event.target.name);
    setValue(event.target.name);
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        {props.object.validate.options.map((item, index) => (
          <Button
            variant="outlined"
            name={item.value}
            onClick={handleChange}
            style={{
              textTransform: "none",
              color: "black",
              borderColor: "black",
              backgroundColor: "white",
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};
