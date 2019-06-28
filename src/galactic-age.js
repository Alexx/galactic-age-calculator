export class AgeCalculator {
  constructor(date) {
    this.date = date;

  }

  checkBirthdate(date) {
    const todaysDate = new Date();
    const inputtedBirthday = new Date(this.date);

    const currentYear = todaysDate.getFullYear();
    const currentMonth = todaysDate.getMonth();
    const currentDay = todaysDate.getDay();

    const birthYear = inputtedBirthday.getFullYear();
    const birthMonth = inputtedBirthday.getMonth();
    const birthDay = inputtedBirthday.getDay();
    
    let age = currentYear - birthYear;

    return age;
  }

}
