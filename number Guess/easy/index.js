'use strict';

// let rand = 10;
let comment = document.getElementById("t_f");
// const secritNumber = document.querySelector(".s_number").textContent = "40";
let secritNumber = document.querySelector(".s_number");
let moode = document.querySelector(".mode");
let score = document.querySelector(".score");
let hscore = document.querySelector(".h_score");
//controle background color on every check
let scoreCount = 30;
//easy
let again = document.querySelector(".again");
let bgc = document.querySelector(".main");
    let rand = Math.floor(Math.random() * 30) + 1;
   
    
    let ebc = (document.querySelector(".spn1").style.color = "#F9DB24");
    bgc.style.background = "#863893";
    let butn = document.querySelector(".check");
    moode.textContent = "Between 0 to 30 🤩";
    butn.addEventListener("click", function () {
      let getd = document.querySelector("#geted").value;
  
      if (getd > rand) {
        bgc.style.background = "red";
        comment.textContent = " Your answer is Big 😎 Do Again!";
        scoreCount = scoreCount - 1;
        score.textContent = scoreCount;
        hscore.textContent = scoreCount;
      } else if (getd < rand) {
        bgc.style.background = "brown";
        comment.textContent = " Your answer is small 😎 Do Again";
        scoreCount = scoreCount - 1;
        score.textContent = scoreCount;
        hscore.textContent = scoreCount;
      } else {
        bgc.style.background = "green";
        comment.textContent = "Good Your answer is correct 👍";
        secritNumber.textContent = rand;
        again.style.display ="block";
        scoreCount = scoreCount;
        score.textContent = scoreCount;
        hscore.textContent = scoreCount;
      }
    });
   
