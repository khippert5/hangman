import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// State
import { defaultState } from '../../../../src/client/reducers';

// Components
import SystemErrorMessage from '../../../../src/client/components/system-error';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const identify = jest.fn();
const dispatch = jest.fn();
window.analytics = { identify };

describe('Test word preview render', () => {
  let wrapper;
  const newState = defaultState;

  it('It renders successfully', async (done) => {
    wrapper = shallow(<SystemErrorMessage />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
