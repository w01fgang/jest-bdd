var English = require('yadda').localisation.English;
import Wall from './wall'; // The library that you wish to test

module.exports = (function() {
  let wall;
  return English.library()
    .given("$NUM green bottles are standing on the wall", function(number, next) {
       wall = new Wall(number);
       next();
    })
    .when("$NUM green bottle accidentally falls", function(number, next) {
       wall.fall(number);
       next();
    })
    .then("there are $NUM green bottles standing on the wall", function(number, next) {
       expect(wall.bottles).toBe(+number);
       next();
    });
})();
