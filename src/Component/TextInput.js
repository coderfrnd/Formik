import React from 'react';
import { TextField } from '@material-ui/core';

const TextInput = ({ label, ...props }) => {
  return <TextField label={label} {...props} />;
};

export default TextInput;
