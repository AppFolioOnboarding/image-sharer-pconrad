/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';

import App from '../../src/components/App.js';


describe('<App />', () => {
  describe('render', () => {
    const wrapper = mount(<Provider stores={{}}><App /></Provider>);
    it('renders a header', () => {
      expect(wrapper.find('Header').text()).to.equal('Tell us what you think');
    });
    it('renders a footer', () => {
      expect(wrapper.find('footer').text()).to.equal('Copyright: AppFolio Inc. Onboarding');
    });
  });
});

describe('<App />', () => {
  describe('render', () => {
    const wrapper = mount(<Provider stores={{}}><App /></Provider>);
    it('renders a header', () => {
      expect(wrapper.find('Header').text()).to.equal('Tell us what you think');
    });
    it('renders a footer', () => {
      expect(wrapper.find('footer').text()).to.equal('Copyright: AppFolio Inc. Onboarding');
    });
  });
});
