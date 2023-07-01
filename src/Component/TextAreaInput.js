import React from 'react';
import { TextField, FormHelperText } from '@material-ui/core';

const TextAreaInput = ({
  name,
  label,
  value,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div>
      <TextField
        name={name}
        label={label}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={!!error}
        helperText={error && <FormHelperText>{error}</FormHelperText>}
      />
    </div>
  );
};

export default TextAreaInput;
