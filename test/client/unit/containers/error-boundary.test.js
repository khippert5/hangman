import React from 'react';
import { mount, shallow } from 'enzyme';
import mockConsole from 'jest-mock-console';

import ErrorBoundary from '../../../../src/client/containers/error-boundary';
import SystemErrorMessage from '../../../../src/client/components/system-error';

describe('Test application render', () => {
  let wrapper;
  beforeEach(() => {
    mockConsole(); // Restore the console
  });

  afterEach(() => {
    mockConsole(); // Restore the console
  });

  it('Successful render', async (done) => {
    wrapper = shallow(<ErrorBoundary />);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('Catches an error', async (done) => {
    const TestComponent = () => { throw new Error('Error found'); }
    wrapper = mount(<ErrorBoundary>
      <TestComponent />
    </ErrorBoundary>);
    expect(wrapper.find(SystemErrorMessage).length).toEqual(1);
    done();
  });

});
