import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// State
import { defaultState } from '../../../../../src/client/reducers';

// Components
import Message from '../../../../../src/client/components/fragments/Message';

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
    wrapper = shallow(<Provider store={store}><Message /></Provider>);
    expect(wrapper).toMatchSnapshot();
    done();
  });
  it('Test messsages', async (done) => {
    const setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    setState.ui.correct = 'Kuddos';
    setState.ui.selected = ['t'];
    wrapper = mount(<Provider store={mockStore(setState)}><Message /></Provider>);
    expect(wrapper.text()).toEqual(setState.ui.correct);

    setState.ui.correct = null;
    setState.ui.error = 'Oh no';
    setState.ui.selected = ['t'];
    wrapper = mount(<Provider store={mockStore(setState)}><Message /></Provider>);
    expect(wrapper.text()).toEqual(setState.ui.error);
    done();
  });
});
