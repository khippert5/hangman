// @flow

import styled from 'styled-components';

import COLORS from './configs/colors';
import RULES from './configs/rules';
import BREAKPOINTS from '../constants/breakpoints';

export const AppWrapper = styled.div`
  padding: 16px;
  @media screen (max-width: ${BREAKPOINTS.phone}px) {
    padding: 6px;
  }
`;

export const AppContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  width: 100%;

  * {
    line-height: 1.45em;
  }
`;

export const DevTag = styled.p`
  font-size: 0.9em;
  float: right;
  margin: 20px 0;
  span {
    font-weight: 600;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  > * {
    width: 100%;
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
      text-align: right;
    }
  }

  @media screen and (max-width:${BREAKPOINTS.phone}px) {
    flex-direction: column;
  }
`;

export const GuessLine = styled.p`
  font-size: 1.25em;
  font-weight: 600;

  span {
    color: ${(props: { color: string }) => COLORS[props.color]}
    font-size: inherit;
  }
`;

export const Letter = styled.button`
  background: ${(props: { isSelected: boolean}) => (props.isSelected ? COLORS.disabledGrey : '#FFF')};
  border: 1px solid ${(props: { isSelected: boolean}) => (props.isSelected ? COLORS.disabledGrey : COLORS.orange)};
  border-radius: 3px;
  ${(props: { isSelected: boolean}) => !props.isSelected && 'box-shadow: 1px 1px 4px #CCC;'}
  color: ${(props: { isSelected: boolean}) => (props.isSelected ? COLORS.disabledText : COLORS.orange)};
  font-weight: 600;
  padding: 5px;
  margin: 10px 5px 5px 0;
  width: 33px;
  text-transform: uppercase;
  &:focus, &:hover {
    outline: none;
  }
  ${(props: { isSelected: boolean}) => (!props.isSelected && `
    &:hover {
      background: ${COLORS.orange};
      color: #FFF;
      box-shadow: initial;
      cursor: pointer;
    }`
  )}
`;

export const LetterSelectContainer = styled.div`
  align: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

export const Message = styled.p`
  font-size: 1em;
  margin-bottom: ${RULES.marginBottom};
  margin-top: 15px;
  ${(props: { messageStyle: string }) => (props.messageStyle === 'error' && `color: ${COLORS.error};`)}
  ${(props: { messageStyle: string }) => (props.messageStyle === 'correct' && `color: ${COLORS.green};`)}
  ${(props: { messageStyle: string }) => (props.messageStyle !== 'correct' && props.messageStyle !== 'error' && `color: ${COLORS.black};`)}
  font-weight: 600;
`;

export const SubTitle = styled.h3`
    font-size: 1.75em;
    font-weight: 400;
    margin-bottom: ${RULES.marginBottom};
`;

export const Title = styled.h2`
  font-size: 2.75em;
  margin-bottom: ${RULES.marginBottom};
`;
