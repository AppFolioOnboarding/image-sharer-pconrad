/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';

import FeedbackForm from '../../src/components/FeedbackForm.js';
import Input from '../../src/components/Input.js';
import Submit from '../../src/components/Submit.js';


describe('<FeedbackForm />', () => {
  describe('render', () => {
    const wrapper = mount(<Provider FeedbackStore={{}}><FeedbackForm /></Provider>);
    it('has two input elements', () => {
      expect(wrapper.find(Input)).to.have.length(2);
    });
    it('has an input element for name at the top', () => {
      expect(wrapper.find(Input).first().find('input').prop('id')).to.equal('name');
    });
    it('then has an input element for comment', () => {
      expect(wrapper.find(Input).last().find('input').prop('id')).to.equal('comment');
    });
    it('has a Submit element', () => {
      expect(wrapper.find('Submit')).to.have.length(1)
    });
  });
});

