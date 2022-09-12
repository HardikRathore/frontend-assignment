import React, { useEffect, useState } from "react";
import { Typography, Card } from "@mui/material";
import { Input } from "./Input";
import { Radio } from "./Radio";
import { Select } from "./Select";
import { SwitchE } from "./SwitchE";
import { Ignore } from "./Ignore";
import { ToggleButton } from "./ToggleButton";

export const Group = (props) => {
  const [ignoreElem, setIgnoreElem] = useState(false);
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState({});
  const handleSubmit = (key, value) => {
    setResult({ ...result, [key]: value });
    props.handleSubmit(props.object.jsonKey, result);
  };
  const handleToggle = () => {
    setVisible(!visible);
  };
  const handleIgnoreElem = () => {
    props.object.subParameters.map((item) => {
      if (item.uiType == "Ignore") {
        setIgnoreElem(true);
        return;
      }
    });
  };
  useEffect(() => {
    handleIgnoreElem();
    props.handleSubmit(props.object.jsonKey, result);
  }, [result]);
  return (
    <>
      <Typography>{props.object.label}</Typography>
      {props.object.subParameters && (
        <>
          {props.object.subParameters.map((item) => (
            <>
              <Card
                sx={{ boxShadow: "none" }}
                style={{
                  marginTop: 20,
                  backgroundColor: "#f5f5f5",
                }}
              >
                {item.uiType == "Input" && (
                  <Input object={item} handleSubmit={handleSubmit} />
                )}
                {item.uiType == "Radio" && (
                  <Radio object={item} handleSubmit={handleSubmit} />
                )}
                {item.uiType == "Select" && (
                  <Select object={item} handleSubmit={handleSubmit} />
                )}
                {item.uiType == "Switch" && (
                  <SwitchE object={item} handleSubmit={handleSubmit} />
                )}
                {item.uiType == "Group" && (
                  <Group
                    object={item.subParameters}
                    handleSubmit={handleSubmit}
                    superResult={props.superResult}
                  />
                )}
                {item.uiType == "Ignore" && (
                  <Ignore
                    object={item}
                    isVisible={visible}
                    handleSubmit={handleSubmit}
                    superResult={props.superResult}
                  />
                )}
              </Card>
            </>
          ))}
        </>
      )}
      {ignoreElem && <ToggleButton handleToggle={handleToggle} />}
    </>
  );
};
