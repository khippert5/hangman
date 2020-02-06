import React from 'react';
import { useSelector } from 'react-redux';

import { Message } from '../../styles';

export const Messages = () => {
  const { error, correct } = useSelector((state) => state.ui);
  if (error) return <Message messageStyle='error'>{error}</Message>;
  if (correct) return <Message messageStyle='correct'>{correct}</Message>;
  return <Message messageStyle='void'>Use your keyboard or click on a letter to get started</Message>;
};

export default Messages;
