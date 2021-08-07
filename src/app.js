/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function getRandomByMax(max) {
    return Math.floor(Math.random() * (max - 0) + 0);
  }

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
  console.log("Hello Rigo from the console!");
  var iWho = getRandomByMax(who.length);
  var iAction = getRandomByMax(action.length);
  var iWhat = getRandomByMax(what.length);
  var iWhen = getRandomByMax(when.length);

  const excuse =
    who[iWho] + " " + action[iAction] + " " + what[iWhat] + " " + when[iWhen];
  this.document.getElementById("excuse").innerHTML = excuse;
};
