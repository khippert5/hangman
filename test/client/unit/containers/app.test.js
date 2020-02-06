import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {canvas as mockCanvas } from 'canvas';

// State
import { defaultState } from '../../../../src/client/reducers';

// Container
import App from '../../../../src/client/containers/App';

// Styles
import Button from '../../../../src/client/styles/buttons';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const identify = jest.fn();
const dispatch = jest.fn();
window.analytics = { identify };
window.HTMLCanvasElement.prototype.getContext = jest.fn();
global.console = {
  ...global.console,
  warn: (val) => {},
  error: (val) => {},
}

describe('Test application render', () => {
  let wrapper;
  const newState = defaultState;

  it('It renders successfully', async (done) => {
    const setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    const store = mockStore(setState);
    const component = renderer
      .create(<Provider store={store}><App store={store} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
  it('Test no error on button click', async (done) => {
    let setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    setState.ui.incorrect = 5
    let store = mockStore(setState);
    wrapper = mount(<Provider store={store}><App store={store} /></Provider>);
    wrapper.find('button.new').simulate('click');
    wrapper.find('button.reset').simulate('click');

    setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    setState.ui.success = true;
    store = mockStore(setState);
    wrapper = mount(<Provider store={store}><App store={store} /></Provider>);
    wrapper.find('button.new').simulate('click');

    setState = newState;
    setState.ui.solution = {
      word: 'test',
      hint: 'Test solution',
    };
    setState.ui.success = null;
    setState.ui.incorrect = 10;
    store = mockStore(setState);
    wrapper = mount(<Provider store={store}><App store={store} /></Provider>);
    wrapper.find('button.new').simulate('click');
    wrapper.find('button.reset').simulate('click');

    done();
  });
});
