import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// Theme.ts

const SelectOptions = ({ data, ...props }) => {
  return (
    <Stack sx={{ width: 'auto' }}>
      <Autocomplete
        id={props?.label || 'country'}
        options={data || []}
        disableCloseOnSelect={false}
        getOptionLabel={(option) => `${option?.country || option}`}
        renderInput={(params) => <TextField {...params} label={props?.label || 'country'} />}
        size='small'
        {...props}
      />
    </Stack>
  );
};

export default React.memo(SelectOptions);
