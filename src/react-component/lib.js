/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import Yadda from 'yadda';
import Wall from './Wall';


const English = Yadda.localisation.English;

module.exports = (() => {
  let wall;
  return English.library()
    .given('react component', (next) => {
      expect(Wall).toBeTruthy();
      next();
    })
    .when('component renders', (next) => {
      wall = shallow(<Wall />);
      next();
    })
    .then('$NUM div exists', (number, next) => {
      expect(wall.length).toBe(+number);
      next();
    });
})();
