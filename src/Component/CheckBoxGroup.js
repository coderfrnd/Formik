import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormHelperText,
} from '@material-ui/core';

const CheckboxGroup = ({ name, label, value, error, onChange, onBlur, options }) => {
  const handleChange = (event) => {
    const { value: optionValue, checked } = event.target;
    const updatedValue = checked
      ? [...value, optionValue]
      : value.filter((v) => v !== optionValue);

    onChange({
      target: { name, value: updatedValue },
    });
  };

  return (
    <FormControl error={Boolean(error)} component="fieldset">
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                name={name}
                value={option.value}
                checked={value.includes(option.value)}
                onChange={handleChange}
                onBlur={onBlur}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxGroup;
