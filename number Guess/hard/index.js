
let comment = document.getElementById("t_f");
let secritNumber = document.querySelector(".s_number");
let moode = document.querySelector(".mode");
let score = document.querySelector(".score");
let hscore = document.querySelector(".h_score");
//controle background color on every check
let scoreCount = 30;
//easy
let again = document.querySelector(".again");
let bgc = document.querySelector(".main");
    bgc.style.background ="#36454F";
    // hard.style.color="#F9DB24";
    moode.textContent="Between 0 to 100 🙄";
    let rendh = Math.floor(Math.random() * 100) + 1;

    let butn = document.querySelector(".check");
    butn.addEventListener("click",function(){
        let hardget =document.querySelector("#geted").value;
        if (hardget > rendh){
          bgc.style.background="red";
          comment.textContent =" Your answer is Big 😎 Do Again!";
          scoreCount = scoreCount - 5;
          if(scoreCount <= 0){
            score.textContent = "Game over!";
            hscore.textContent = "try again!";
            alert("Game over! try again!");   
        }
        else{
            score.textContent = scoreCount;
            hscore.textContent = scoreCount;
        }   
        }
        else if(hardget < rendh){
            bgc.style.background="brown";
            comment.textContent =" Your answer is small 😎 Do Again";
            scoreCount = scoreCount - 5;
            if(scoreCount <= 0){
                score.textContent = "Game over!";
                hscore.textContent = "try again!";
                secritNumber.textContent = rendh;
                alert("Game over! try again!");   
            }
            else{
                score.textContent = scoreCount;
                hscore.textContent = scoreCount;
            } 
        }
        else{
            bgc.style.background="green";
            comment.textContent ="Good Your answer is correct 👍";
            secritNumber.textContent = rendh;
            scoreCount = scoreCount;
            again.style.display="block";
            score.textContent = scoreCount;
            hscore.textContent = scoreCount;
        }
    });
   
   
   




