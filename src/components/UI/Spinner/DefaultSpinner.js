import React from "react";
import RotateSpinner from "./RotateSpinner";
import { ReactComponent as Spinner } from "./spinner.svg";
const DefaultSpinner = () => {
  return <RotateSpinner component={Spinner} />;
};

export default DefaultSpinner;
