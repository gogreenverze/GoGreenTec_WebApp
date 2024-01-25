import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({
    label,
    onChange,
    value,
    validationRegex,
    errorMessage,
    multiline,
    rows
}) => {
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const newValue = e.target.value;
        const sanitizedValue = newValue.startsWith('0') ? newValue.substring(1) : newValue;

        if (sanitizedValue.match(validationRegex) || sanitizedValue === "" || validationRegex.test(sanitizedValue)) {
            setError(false);
            onChange(sanitizedValue); 
        } else {
            setError(true);
        }
    };

    

    return (
        <TextField
        size="small"
        label={label}
        fullWidth
        variant="outlined"
        sx={{
            '& label': {
              color: '#fff', // Customize label color when focused
            },
            '& label.Mui-focused': {
                color: '#66CD0D', // Customize label color when focused
              },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#66CD0D', // Customize underline color when focused
            },
          }}
        type="text"
        autoComplete="off"
        error={error}
        helperText={error ? errorMessage : ''}
        onChange={handleChange}
        value={value}
        multiline={multiline}
        rows={rows}
        />
    );
};

export default CustomTextField;
