import { AgeCalculator } from './galactic-age.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function displayGalacticAges(person, age, averageLife, planets) {
  planets.forEach(function (planet) {
    console.log('Your age on planet ' + planet + ' is ' + person.galacticAge(age, planet) + '.');
    console.log('You have approximately ' + person.lifeExpectency(age, averageLife, planet) + ' years left to live on ' + planet + '.');
  });
}

$(document).ready(function () {
  const planetsList = ['Mercury', 'Venus', 'Mars', 'Jupiter'];
  let user = new AgeCalculator('July 17, 1990');
  const age = user.checkBirthdate();
  const averageLifeSpan = 80;

  displayGalacticAges(user, age, averageLifeSpan, planetsList);
});
