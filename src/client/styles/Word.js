// @flow

import styled from 'styled-components';

import COLORS from './configs/colors';
import BREAKPOINTS from '../constants/breakpoints';

export const WordContainer = styled.div`
  margin: 15px 0;
`;

export const WordBox = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  justify-content: ${(props: { isSuccess: boolean }) => (!props.isSuccess ? 'space-evenly' : 'center')};
  margin: 15px auto;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const WordLetter = styled.div`
  ${(props: { isSuccess: boolean }) => (!props.isSuccess ? `
    border-bottom: 1px solid ${COLORS.disabledText};
    margin-right: 8px;
    padding: 10px 10px 5px;
    width: 33px;`
    : `font-weight: 600;
    margi-right: auto;
    padding: 10px 3px 5px;
    width: initial;`)}
  text-transform: uppercase;
`;

export const WordMap = styled.div`
  margin: 5px auto;
  width: 50%;

  @media screen and (max-width: ${BREAKPOINTS.phone}px) {
    width: 80%;
  }
`;
