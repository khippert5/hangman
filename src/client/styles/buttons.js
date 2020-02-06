import styled from 'styled-components';

import COLORS from './configs/colors';

export const Button = styled.button`
  background: ${COLORS.orange};
  border: 1px solid ${COLORS.orange}
  border-radius: 3px;
  color: #FFF;
  padding: 3px 15px;
  margin-right:10px
  margin-bottom:15px;

  &:hover {
    background: #FFF;
    color: ${COLORS.orange};
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
`;

export default Button;
