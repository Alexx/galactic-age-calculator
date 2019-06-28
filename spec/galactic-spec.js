import { AgeCalculator } from './../src/galactic-age.js';

describe('Age', function () {

  it('Should test an accurate age based on inputed birth date', function () {
    const testBirthday = new AgeCalculator('July 17, 1990');
    expect(testBirthday.checkBirthdate()).toEqual(28);
  });

  it('Should test for and reject an age based on a future date', function () {
    const testBirthday = new AgeCalculator('July 17, 2049');
    const age = testBirthday.checkBirthdate();
    expect(testBirthday.checkValidAge(age)).toEqual('invalid date inputted');
  });

  it('Should test if age converted in Mercury years (0.24 Earth years) is accurate', function () {
    const testBirthday = new AgeCalculator('July 17, 1990');
    const age = testBirthday.checkBirthdate();
    expect(Math.floor(testBirthday.mercuryAge(age))).toEqual(116);
  });

  it('Should test if age converted in Venus years (0.62 Earth years) is accurate', function () {
    const testBirthday = new AgeCalculator('July 17, 1990');
    const age = testBirthday.checkBirthdate();
    expect(Math.floor(testBirthday.venusAge(age))).toEqual(45);
  });

  it('Should test if age converted in Mars years (1.88 Earth years) is accurate', function () {
    const testBirthday = new AgeCalculator('July 17, 1990');
    const age = testBirthday.checkBirthdate();
    expect(Math.floor(testBirthday.marsAge(age))).toEqual(14);
  });

});
