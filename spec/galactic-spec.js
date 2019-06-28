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
    expect(testBirthday.mercuryAge(age)).toEqual(6.72);
  });

});
