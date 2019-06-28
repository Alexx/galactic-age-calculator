import { AgeCalculator } from './galactic-age.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function displayGalacticAges(person, age, averageLife, planets) {
  planets.forEach(function (planet) {
    console.log('Your age on planet ' + planet + ' is ' + person.galacticAge(age, planet) + '.');

    let yearsLeft = person.lifeExpectency(age, averageLife, planet);

    if (yearsLeft > 0) {
      console.log('You have approximately ' + yearsLeft + ' years left to live on ' + planet + '.');
    } else {
      console.log('You have lived ' + Math.abs(yearsLeft) + ' past your expected life expectency!');
    }
  });
}

$(document).ready(function () {
  const planetsList = ['Mercury', 'Venus', 'Mars', 'Jupiter'];

  //Enter your birthdate below
  const userBirthDate = 'July 17, 1890';

  //Enter your expected life span below
  const averageLifeSpan = 80;

  let user = new AgeCalculator(userBirthDate);
  const age = user.checkBirthdate();

  displayGalacticAges(user, age, averageLifeSpan, planetsList);
});
