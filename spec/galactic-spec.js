import { AgeCalculator } from './../src/galactic-age.js';

describe('Age', function () {
  const testBirthday = new AgeCalculator('July 17, 1990');
  const age = testBirthday.checkBirthdate();

  it('Should test an accurate age based on inputed birth date', function () {
    expect(testBirthday.checkBirthdate()).toEqual(28);
  });

  it('Should test for and reject an age based on a future date', function () {
    const testFutureBirthday = new AgeCalculator('August 25, 2049');
    const futureAge = testFutureBirthday.checkBirthdate();
    expect(testFutureBirthday.checkValidAge()).toEqual('invalid date inputted');
  });

  //Galactic age conversions
  it('Should test if age converted in Mercury years (0.24 Earth years) is accurate', function () {
    expect(testBirthday.galacticAge(age, 'Mercury')).toEqual(116);
  });

  it('Should test if age converted in Venus years (0.62 Earth years) is accurate', function () {
    expect(testBirthday.galacticAge(age, 'Venus')).toEqual(45);
  });

  it('Should test if age converted in Mars years (1.88 Earth years) is accurate', function () {
    expect(testBirthday.galacticAge(age, 'Mars')).toEqual(14);
  });

  it('Should test if age converted in Jupiter years (1.88 Earth years) is accurate', function () {
    expect(testBirthday.galacticAge(age, 'Jupiter')).toEqual(2);
  });

  //Life expectency conversions
  it('Should test if years left on Mercury years (average age 80) is accurate', function () {
    expect(testBirthday.lifeExpectency(age, 80, 'Mercury')).toEqual(216);
  });

  it('Should test if years left on Venus years (average age 80) is accurate', function () {
    expect(testBirthday.lifeExpectency(age, 80, 'Venus')).toEqual(83);
  });

  it('Should test if years left on Mars years (average age 80) is accurate', function () {
    expect(testBirthday.lifeExpectency(age, 80, 'Mars')).toEqual(27);
  });

  it('Should test if years left on Jupiter years (average age 80) is accurate', function () {
    expect(testBirthday.lifeExpectency(age, 80, 'Jupiter')).toEqual(4);
  });
});
