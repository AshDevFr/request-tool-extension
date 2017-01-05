import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import ToggleSwitch from './ToggleSwitch';

describe('ToggleSwitch', () => {
  it('contains spec with an expectation', () => {
    expect(shallow(<ToggleSwitch />).find('div.toggle-switch')).to.have.length(1);
    expect(shallow(<ToggleSwitch />).find('input.cmn-toggle.cmn-toggle-round')).to.have.length(1);
  });

  it('should call the action', () => {
    const onClick = sinon.spy();
    const wrapper = mount(
      <ToggleSwitch action={onClick} />
    );
    wrapper.find('input').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });
});