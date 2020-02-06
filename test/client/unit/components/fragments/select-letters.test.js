import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { sleep } from '../../../../helpers/wrapper';

// State
import { defaultState } from '../../../../../src/client/reducers';

// Components
import SelectLetters from '../../../../../src/client/components/fragments/Select-letters';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const identify = jest.fn();
const dispatch = jest.fn();
window.analytics = { identify };
const useDispatch = jest.fn();

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
    wrapper = shallow(<Provider store={store}><SelectLetters /></Provider>);
    expect(wrapper).toMatchSnapshot();
    done();
  });
  it('Test selected', async (done) => {
    const setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    setState.ui.selected = ['t'];
    let store = mockStore(setState);
    wrapper = mount(<Provider store={store}><SelectLetters /></Provider>);
    expect(wrapper.find('button[data-value="t"]').props().className.indexOf('disabled') !== -1).toBe(true);
    done();
  });
  it('Test selecting value', async (done) => {
    // const dispatch = jest.fn();
    const useDispatch = jest.fn();
    const dispatch = useDispatch;
    const setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    setState.ui.selected = ['t'];
    let store = mockStore(setState);
    let key = 't';
    wrapper = mount(<Provider store={store}><SelectLetters /></Provider>);
    expect(wrapper.find(`button[data-value="${key}"]`).props().className.indexOf('disabled') !== -1).toBe(true);
    wrapper.find(`button[data-value="${key}"]`).simulate('click');

    key = 'e';
    wrapper.find(`button[data-value="${key}"]`).simulate('click');
    setState.ui.selected = ['e'];
    wrapper = mount(<Provider store={store}><SelectLetters /></Provider>);
    expect(wrapper.find(`button[data-value="${key}"]`).props().className.indexOf('disabled') !== -1).toBe(true);
    done();
  });
});
