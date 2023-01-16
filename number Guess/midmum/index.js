
let comment = document.getElementById("t_f");
let secritNumber = document.querySelector(".s_number");
let moode = document.querySelector(".mode");
let score = document.querySelector(".score");
let hscore = document.querySelector(".h_score");
//controle background color on every check
let scoreCount = 30;
//easy
let bgc = document.querySelector(".main");
    bgc.style.background ="#0D324D";
    // midemum.style.color="#F9DB24";
    moode.textContent="Between 0 to 60 😀";
 let butn = document.querySelector(".check");
 let again = document.querySelector(".again");
 butn.addEventListener("click",function(){
        let midget =document.querySelector("#geted").value;
        let rendm = Math.floor(Math.random() * 60) + 1;
       
        if (midget > rendm){
            bgc.style.background="red";
            comment.textContent =" Your answer is Big 😎 Do Again!";
            scoreCount = scoreCount - 3;
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
        else if(midget < rendm){
            bgc.style.background="brown";
            comment.textContent =" Your answer is small 😎 Do Again";
            scoreCount = scoreCount - 3;
            if(scoreCount <= 0){
                score.textContent = "Game over!";
                hscore.textContent = "try again!";
                secritNumber.textContent = rendm;
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
            secritNumber.textContent = rendm;
            scoreCount = scoreCount;
            again.style.display="block";
            score.textContent = scoreCount;
            hscore.textContent = scoreCount;
        }
    });
  
