import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Grid,
  Button,
  FormGroup,
  TextField,
  Typography,
  Stack,
  Card,
} from "@mui/material";
import { Input } from "./components/Input";
import { Radio } from "./components/Radio";
import { Select } from "./components/Select";
import { SwitchE } from "./components/SwitchE";
import { Ignore } from "./components/Ignore";
import { Group } from "./components/Group";
import { ToggleButton } from "./components/ToggleButton";

const App = () => {
  const [input, setInput] = useState("");
  const [obj, setObj] = useState([]);
  const [result, setResult] = useState({});
  const [visible, setVisible] = useState(false);
  const handleToggle = () => {
    setVisible(!visible);
  };
  const handleSubmit = (key, value) => {
    setResult({ ...result, [key]: value });
  };
  const convertForm = () => {
    setObj(
      eval(input).sort((a, b) => {
        return a.sort - b.sort;
      })
    );
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          style={{
            padding: 30,
            height: "100vh",
          }}
        >
          <Stack spacing={2}>
            <Typography
              style={{ fontWeight: "bold", fontSize: 25, alignSelf: "center" }}
            >
              Add Your JSON Here
            </Typography>
            <TextField
              onChange={(e) => setInput(e.target.value)}
              fullWidth
              multiline
              inputProps={{
                style: {
                  height: "75vh",
                },
              }}
            />
            <Button
              onClick={convertForm}
              variant="contained"
              style={{ marginTop: 20, textTransform: "none", width: "30%" }}
            >
              Convert To Form
            </Button>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            padding: 30,
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <FormGroup>
            <Stack spacing={2}>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                Find Your Form Here
              </Typography>
              {obj && (
                <>
                  {obj.map((item) => (
                    <Card
                      sx={{ boxShadow: 0, border: 1, borderColor: "#cccccc" }}
                      style={{
                        padding: 15,
                        marginTop: 20,
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <>
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
                          <>
                            <Group
                              object={item}
                              handleSubmit={handleSubmit}
                              superResult={result}
                            />
                          </>
                        )}
                        {item.uiType == "Ignore" && (
                          <Ignore
                            object={item}
                            isVisible={visible}
                            handleSubmit={handleSubmit}
                            superResult={result}
                          />
                        )}
                      </>
                    </Card>
                  ))}
                </>
              )}
              <ToggleButton handleToggle={handleToggle} />
              <Stack direction="row" spacing={4}>
                <Button
                  onClick={() => alert(JSON.stringify(result, null, 2))}
                  variant="contained"
                  style={{ marginTop: 20, textTransform: "none", width: "30%" }}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
