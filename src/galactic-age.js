export class AgeCalculator {
  constructor(date) {
    this.date = date;

  }

  checkBirthdate(date) {
    console.log(this.date);
    const todaysDate = new Date(this.date);
    const inputtedBirthday = new Date(this.date);
    const birthYear = inputtedBirthday.getFullYear();
    const birthMonth = inputtedBirthday.getMonth();
    const birthDay = inputtedBirthday.getDay();

    return inputtedBirthday;
  }

}
