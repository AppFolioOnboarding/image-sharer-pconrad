/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Submit from '../../src/components/Submit';


describe('<Submit />', () => {
  describe('render', () => {
    const theOnClick = (e) => {}
    const wrapper = mount(
      <Submit onClick={theOnClick}
      />);
    it('has an outer div', () => {
      expect(wrapper.find(Submit).find('div').prop('className')).to.equal("submit");
    });
    it('is called submit and is of type submit', () => {
      expect(wrapper.find(Submit).find('input').prop('value')).to.equal("Submit");
      expect(wrapper.find(Submit).find('input').prop('type')).to.equal("submit");
    });
    it('calls the right function', () => {
      expect(wrapper.find(Submit).find('input').prop('onClick')).to.equal(theOnClick);
    });
  });
});
