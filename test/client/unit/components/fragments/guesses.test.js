import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// State
import { defaultState } from '../../../../../src/client/reducers';

// Component
import GuessContainer from '../../../../../src/client/components/fragments/guesses';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const identify = jest.fn();
const dispatch = jest.fn();
window.analytics = { identify };

describe('Test guess render', () => {
  let wrapper;
  const newState = defaultState;

  it('It renders successfully', async (done) => {
    const setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    const store = mockStore(setState);
    wrapper = shallow(<Provider store={store}><GuessContainer /></Provider>);
    expect(wrapper).toMatchSnapshot();
    done();
  });
  it('It renders differences', async (done) => {
    const setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    let store = mockStore(setState);
    wrapper = mount(<Provider store={store}><GuessContainer /></Provider>);
    expect(wrapper.find('span').text()).toEqual('6');

    setState.ui.incorrect = 6
    store = mockStore(setState);
    wrapper = mount(<Provider store={store}><GuessContainer /></Provider>);
    expect(wrapper.find('span').text()).toEqual('4');

    setState.ui.incorrect = 10
    store = mockStore(setState);
    wrapper = mount(<Provider store={store}><GuessContainer /></Provider>);
    expect(wrapper.find('span').text()).toEqual('0');
    done();
  });
});
