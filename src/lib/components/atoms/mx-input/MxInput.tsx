import { TextBox, ITextBoxOptions } from 'devextreme-react/text-box';
import React from 'react';

// import { Container } from './styles';

export const MxInput: React.FC<ITextBoxOptions> = (props) => {
  return <TextBox className="mx-input">{props.children}</TextBox>;
};
