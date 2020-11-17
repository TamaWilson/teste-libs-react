import React, { FC } from 'react';

import styled from 'styled-components';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

// import { Container } from './styles';

export const SimpleInput: FC<TextFieldProps> = (props: TextFieldProps) => {
  return (
    <StyledTextInput
      {...props}
      placeholder="Escolha uma coisa"
      variant="outlined"
      inputProps={{
        ...props.inputProps
      }}
    />
  );
};

const StyledTextInput = styled((props: TextFieldProps) => (
  <TextField {...props}></TextField>
))`
  && .MuiInputBase-root {
    padding: 8px;
    cursor: pointer;
  }
  && :hover fieldset {
    border: 2px solid #b4bbc2;
    cursor: pointer;
  }
  && .MuiOutlinedInput-input {
    padding: 8px;
    cursor: pointer;
  }
  && .Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 2px solid #0066b2;
    cursor: text;
  }
  && .MuiInputBase-input:focus {
    cursor: text;
  }
`;
