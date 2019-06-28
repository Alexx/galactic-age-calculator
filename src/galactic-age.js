export class AgeCalculator {
  constructor(date) {
    this.date = date;

  }

  checkBirthdate(date) {
    const todaysDate = new Date();
    const inputtedBirthday = new Date(this.date);

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
}
