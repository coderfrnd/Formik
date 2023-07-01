import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const Dropdown = ({ label, options, ...props }) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
