import styled from 'styled-components';
import { Button as Base } from '@buffetjs/core';

const Button = styled(Base)`
  width: 80%;
  text-transform: ${({ textTransform }) => textTransform};
  background-color: green;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0 !important;
  height: 40px !important;
  font-size:1.7rem !important;
  margin: 10px 0 0 0;
`;

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  textTransform: 'none',
};

export default Button;
