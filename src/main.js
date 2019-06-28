import { AgeCalculator } from './galactic-age.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function displayGalacticAges(person, age, averageLife, planets) {
  planets.forEach(function (planet) {
    console.log('Your age on planet ' + planet + ' is ' + person.galacticAge(age, planet) + '.');

    const yearsLeft = person.lifeExpectency(age, averageLife, planet);

    if (yearsLeft > 0) {
      const literal = `You have approximately ${yearsLeft} years left to live on ${planet}.`;
      console.log(literal);
    } else {
      const literal = `You have lived ${Math.abs(yearsLeft)} years past your expected life expectency!`;
      console.log(literal);
    }
  });
}

$(document).ready(function () {
  const planetsList = ['Mercury', 'Venus', 'Mars', 'Jupiter'];

  //Enter your birthdate below
  const userBirthDate = 'July 17, 1990';

  //Enter your expected life span below
  const averageLifeSpan = 80;

  const user = new AgeCalculator(userBirthDate);
  const userAge = user.checkBirthdate();

  if (user.checkValidAge(userAge)) {
    displayGalacticAges(user, userAge, averageLifeSpan, planetsList);
  }
});
