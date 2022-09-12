import { useState, useEffect } from "react";
import { Group } from "./Group";

export const Ignore = (props) => {
  const [result, setResult] = useState({});
  const handleSubmit = (key, value) => {
    setResult({ ...result, [key]: value });
  };
  const [show, setShow] = useState(false);
  const selectToShow = () => {
    var tempObject = props.superResult;
    var keys = props.object.conditions[0].jsonKey;
    keys.split(".").map((k, i, values) => {
      if (tempObject === undefined) {
        return;
      }
      tempObject = tempObject[k];
    });
    setShow(props.object.conditions[0].value === tempObject);
  };
  useEffect(() => {
    props.handleSubmit(props.object.jsonKey, result);
    selectToShow();
  }, [result, props.superResult]);
  return (
    <>
      {props.isVisible && show && (
        <Group
          object={props.object}
          handleSubmit={handleSubmit}
          superResult={props.superResult}
        />
      )}
    </>
  );
};
