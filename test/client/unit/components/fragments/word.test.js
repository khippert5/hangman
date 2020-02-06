import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// State
import { defaultState } from '../../../../../src/client/reducers';

// Components
import WordContainer from '../../../../../src/client/components/fragments/word';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const identify = jest.fn();
const dispatch = jest.fn();
window.analytics = { identify };

describe('Test word preview render', () => {
  let wrapper;
  const newState = defaultState;

  it('It renders successfully', async (done) => {
    const setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    const store = mockStore(setState);
    wrapper = shallow(<Provider store={store}><WordContainer /></Provider>);
    expect(wrapper).toMatchSnapshot();
    done();
  });
  it('It renders differences', async (done) => {
    const setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    setState.ui.selected = ['t'];
    let store = mockStore(setState);
    wrapper = mount(<Provider store={store}><WordContainer /></Provider>);
    expect(wrapper.find('.isLetter').length > 0).toBe(true);
    done();
  });
});
