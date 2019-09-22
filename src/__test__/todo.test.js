import React from 'react';
import ReactDOM from 'react-dom';



import Todo from '../component/todo'

describe('<Counter/>', ()=> {
  it('renders without crashing', () => {
    const component = shallow(<Todo/>);
    expect(component.find('input').exists()).toBeTruthy()
  });