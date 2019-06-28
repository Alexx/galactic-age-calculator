import { AgeCalculator } from './galactic-age.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function () {
  var userBirthdate = new AgeCalculator();
  console.log(userBirthdate.checkBirthdate());
});
