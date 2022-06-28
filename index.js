
let btn = document.querySelector(".btn");
btn.addEventListener('click',()=>{


    let randomNumber1 = Math.floor(Math.random() * 6)+1;
    let randomImgSource1 = "images/dice"+randomNumber1+".png";
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute('src',randomImgSource1);

    let randomNumber2 = Math.floor(Math.random() * 6)+1;
    let randomImgSource2 = "images/dice"+randomNumber2+".png";
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute('src',randomImgSource2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } 
    else{
        document .querySelector("h1").innerHTML="🚩 Draw! 🚩";
    }
});