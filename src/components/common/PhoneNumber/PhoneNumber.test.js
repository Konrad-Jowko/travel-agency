import React from 'react';
import {shallow} from 'enzyme';
import PhoneNumber from './PhoneNumber';

const shifts = {
  Amanda: 'Amanda, 678.243.8455',
  Tobias: 'Tobias, 278.443.6443',
  Helena: 'Helena, 167.280.3970',
  Night: 'The office opens at 8:00 UTC',
};

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct information at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<PhoneNumber />);
    const renderedDescription = component.find('span').text();

    expect(renderedDescription).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct information ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<PhoneNumber />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);

    const renderedDescription = component.find('span').text();
    expect(renderedDescription).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component PhoneNumber', () => {
  it('should render without crashing', () => {
    expect(shallow(<PhoneNumber />)).toBeTruthy();
  });
  it('should correctly render <span>', () => {
    const component = shallow(<PhoneNumber />);

    expect(component.exists('span')).toEqual(true);
  });
});
describe('Component PhoneNumber with mocked Date', () => {
  checkDescriptionAtTime('08:30:58', shifts.Amanda);
  checkDescriptionAtTime('14:44:59', shifts.Tobias);
  checkDescriptionAtTime('20:00:00', shifts.Helena);
  checkDescriptionAtTime('01:30:00', shifts.Night);
});
describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('07:59:58', 5, shifts.Amanda);
  checkDescriptionAfterTime('11:59:58', 60, shifts.Tobias);
  checkDescriptionAfterTime('15:59:59', 2, shifts.Helena);
  checkDescriptionAfterTime('21:59:30', 120, shifts.Night);
});
