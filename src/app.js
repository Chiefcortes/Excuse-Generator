/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
//console.log(Math.floor(Math.random() * when.length));
//console.log(when[Math.floor(Math.random()) * when.length)])
//console.log(action[Math.floor(Math.random() * when.length)])

let generateExcuse = () => {
  var whoexcuse = who[Math.floor(Math.random() * who.length)];
  var excuse = action[Math.floor(Math.random() * action.length)];
  var whatexcuse = what[Math.floor(Math.random() * what.length)];
  var excuse2 = when[Math.floor(Math.random() * when.length)];
  return whoexcuse + " " + excuse + " " + whatexcuse + " " + excuse2;
};

console.log(generateExcuse());
document.getElementById("excuse").innerHTML = generateExcuse();
