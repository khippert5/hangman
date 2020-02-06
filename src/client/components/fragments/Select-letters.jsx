// @flow
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { React$Element } from 'react-redux';

// Actions
import { letterSelect, setErrorMessage } from '../../lib/actions';

// Styles
import { Letter } from '../../styles';

// Types
import type { UiState } from '../../lib/types/reducer-states';
import type { Dispatch } from '../../lib/types/actions';

export const SelectLetter = () => {
  const dispatch: Dispatch = useDispatch();
  const ui = useSelector((state): UiState => state.ui);
  const { selected, values }: { selected: Array<string>, values: Array<string>} = ui;

  return values.map<React$Element>((v, index) => <Letter key={index} data-value={v} isSelected={selected.includes(v)} className={selected.includes(v) ? 'disabled' : null} onClick={(e) => {
    e.preventDefault();
    if (selected.includes(v)) {
      dispatch(setErrorMessage('duplicate', v));
      return;
    }
    dispatch(letterSelect(v));
  }}>{v}</Letter>);
};

export default SelectLetter;
