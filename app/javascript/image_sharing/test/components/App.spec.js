/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';

import App from '../../src/components/App.js';


describe('<App />', () => {
  describe('render', () => {
    it('renders a header', () => {
      const wrapper = mount(<Provider stores={{}}><App /></Provider>);
      expect(wrapper.find('Header').text()).to.equal('Tell us what you think');
    });
    it('renders a footer', () => {
      const wrapper = mount(<Provider stores={{}}><App /></Provider>);
      expect(wrapper.find('footer').text()).to.equal('Copyright: AppFolio Inc. Onboarding');
    });
  });
});
