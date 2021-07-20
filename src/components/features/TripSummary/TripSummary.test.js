import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render corect address', () => {
    const dummyId = 'abc';
    const dummyAddress = '/trip/' + dummyId;
    const component = shallow(<TripSummary id={dummyId} tags={['one', 'two', 'three']} name='Adam'
      cost='12800' days={20} image='image.jpg' />);
    const renderedAddress = component.find('Link').prop('to');

    expect(renderedAddress).toEqual(dummyAddress);
  });

  it('should render corect <img> src and alt', () => {
    const dummySrc = 'image.jpg';
    const dummyAlt = 'It is an image!';
    const component = shallow(<TripSummary id={'abc'} tags={['one', 'two', 'three']} image={dummySrc} name={dummyAlt} cost='12800' days={20} />);
    const renderedSrc = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');

    expect(renderedSrc).toEqual(dummySrc);
    expect(renderedAlt).toEqual(dummyAlt);
  });

  it('should correctly render name, cost and days props', () => {
    const dummyName = 'Adam';
    const dummyCost = '12800';
    const dummyDays = 20;
    const component = shallow(<TripSummary id='abc' tags={['one', 'two', 'three']} image='image.jpg' name={dummyName}
      cost={dummyCost} days={dummyDays} />);
    const renderedName = component.find('img').prop('alt');
    const renderedDays = component.find('.details').childAt(0);
    const renderedCost = component.find('.details').childAt(1);

    expect(renderedName).toEqual(dummyName);
    expect(renderedDays.html()).toEqual('<span>' + dummyDays + ' days</span>');
    expect(renderedCost.html()).toEqual('<span>from ' + dummyCost + '</span>');
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary id={null} tags={['one', 'two', 'three']} name='Adam'
      cost='12800' days={20} image='image.jpg' />)).toThrow();

    expect(() => shallow(<TripSummary id='abc' tags={['one', 'two', 'three']} name={null}
      cost='12800' days={20} image='image.jpg' />)).toThrow();

    expect(() => shallow(<TripSummary id='abc' tags={['one', 'two', 'three']} name='Adam'
      cost={null} days={20} image='image.jpg'/>)).toThrow();

    expect(() => shallow(<TripSummary id='abc' tags={['one', 'two', 'three']} name='Adam'
      cost='12800' days={null} image='image.jpg'/>)).toThrow();

    expect(() => shallow(<TripSummary id='abc' tags={['one', 'two', 'three']} name='Adam'
      cost='12800' days={20} image={null}/>)).toThrow();
  });

  it('should render correct tags', () => {
    const dummyTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary id='abc' tags={dummyTags} image='image.jpg' name='Adam' cost='12800' days={20} />);
    const tags = component.find('.tag');

    expect(tags.at(0).text()).toEqual(dummyTags[0]);
    expect(tags.at(1).text()).toEqual(dummyTags[1]);
    expect(tags.at(2).text()).toEqual(dummyTags[2]);

  });

  it('should not render "tag" class divs when "tags" prop is empty', () => {
    const emptyArray = [];

    expect(shallow(<TripSummary id='abc' image='image.jpg' name='Adam' cost='12800' days={20} />).find('.tags').exists()).toEqual(false);
    expect(shallow(<TripSummary id='abc' tags={emptyArray} image='image.jpg' name='Adam' cost='12800' days={20} />).find('.tags')).toEqual({});

  });

});
