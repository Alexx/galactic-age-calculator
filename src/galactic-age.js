export class AgeCalculator {
  constructor(date) {
    this.birthdate = date;

  }

  checkBirthdate() {
    const todaysDate = new Date();
    const inputtedBirthday = new Date(this.birthdate);

    let age = todaysDate.getFullYear() - inputtedBirthday.getFullYear();

    const currentMonth = todaysDate.getMonth();
    const currentDay = todaysDate.getDay();

    const birthMonth = inputtedBirthday.getMonth();
    const birthDay = inputtedBirthday.getDay();

    const passedMonth = currentMonth - birthMonth;
    const passedDay = currentDay - birthDay;

    if (passedMonth < 0 || (passedMonth === 0 && todaysDate < inputtedBirthday)) {
      return age - 1;
    } else {
      return age;
    }
  }

  checkValidAge(age) {
    if (age < 0) {
      return 'invalid date inputted';
    }
  }

  galacticAge(age, planet) {
    let newAge;
    switch (planet) {
      case 'Mercury':
        newAge = (age / 0.24);
        break;
      case 'Venus':
        newAge = (age / 0.62);
        break;
      case 'Mars':
        newAge = (age / 1.88);
        break;
      case 'Jupiter':
        newAge = (age / 11.86);
        break;
      default:
        newAge = 'Never heard of that planet...';
    }
    return Math.floor(newAge);

  }

  lifeExpectency(age, averageLife, planet) {
    let yearsLeft;
    switch (planet) {
      case 'Mercury':
        yearsLeft = ((averageLife - age) / 0.24);
        break;
      case 'Venus':
        yearsLeft = ((averageLife - age) / 0.62);
        break;
      case 'Mars':
        yearsLeft = ((averageLife - age) / 1.88);
        break;
      case 'Jupiter':
        yearsLeft = ((averageLife - age) / 11.86);
        break;
      default:
        yearsLeft = 'Never heard of that planet...';
    }
    return Math.floor(yearsLeft);
  }
}
