import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// State
import { defaultState } from '../../../../../src/client/reducers';

// Components
import Footer from '../../../../../src/client/components/fragments/Footer';

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
    wrapper = shallow(<Provider store={store}><Footer /></Provider>);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
