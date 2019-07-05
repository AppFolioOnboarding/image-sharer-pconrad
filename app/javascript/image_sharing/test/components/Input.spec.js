/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';

import Input from '../../src/components/Input.js';
import App from "../../src/components/App";
import feedbackStore from "../../src/components/feedbackStore";
import {action} from "mobx";

describe('<Input />', () => {
  describe('render', () => {
    const theOnChange = (e) => {}
    const wrapper = mount(
      <Input title={'the-title'} name={'the-name'}
             defaultValue={'the-default-value'}
             onChange={theOnChange}
      />);
    it('has an outer div', () => {
       expect(wrapper.find(Input).find('div').prop('className')).to.equal("form-group");
     });
    it('puts the field name where it should be', () => {
      expect(wrapper.find(Input).find('input').prop('id')).to.equal("the-name");
      expect(wrapper.find(Input).find('input').prop('id')).to.equal("the-name");
    });
    it('puts the field title where it should be', () => {
      expect(wrapper.find(Input).find('label').text()).to.equal("the-title");
    });
    it('calls the right function', () => {
      expect(wrapper.find(Input).find('input').prop('onChange')).to.equal(theOnChange);
    });
  });
});
