import React from 'react';
import styled from 'styled-components';

import { sharedLabelCss } from '../InputTitle/InputTitle';

export const TextLabelWrapper = styled.label`
  display: block;
  font-weight: 600;
  ${sharedLabelCss}
`;

export type TextLabelProps = {
  value: string;
};

export const TextLabel: React.FC<TextLabelProps> = ({ value }) => {
  return <TextLabelWrapper>{value}</TextLabelWrapper>;
};
