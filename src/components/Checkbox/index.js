/* eslint-disable react/jsx-props-no-spreading */
// Toggle Component
// --------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckBox = ({ label, ...rest }) => (
  <FormControlLabel control={<Checkbox {...rest} />} label={label} />
);

CheckBox.propTypes = {
  label: PropTypes.string,
};

CheckBox.defaultProps = {
  label: "",
};

export default CheckBox;
