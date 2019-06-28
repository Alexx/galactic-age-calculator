import { AgeCalculator } from './../src/galactic-age.js';

describe('Age', function () {

  it('Should return an age based on inputed birth date', function () {
    const testBirthday = new AgeCalculator('July 17, 1990');
    expect(testBirthday.checkBirthdate()).toEqual(28);
  });

});
