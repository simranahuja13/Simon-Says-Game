let gameSeq = [];
let userSeq = [];
let level = 0;
let btns = ["yellow", "purple", "red", "green"]
let started = false;
let h2 = document.querySelector("h2")
document.addEventListener('keypress', function (e) {
    if (started === false && e.key === "Enter") {
        console.log("game is started");
        started = true;
     levelUp();

    }
})
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 350)
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`
    // let btn = document.querySelector("")

    //random button choose
    let randomIndex = Math.floor(Math.random() * 4)
    let randomColor = btns[randomIndex];
    // console.log(randomColor)
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomBtn)
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);


}

function checkBtn(index) {
    console.log(`Current ${level}`);

    if (userSeq[index] === gameSeq[index]) {
        console.log("same value");
        if (userSeq.length === gameSeq.length) {
           setTimeout(levelUp , 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over 😔 ! Your Score was <i>${level}</i> <br> Press Enter Key to Start 😎`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="rgba(0, 0, 0, 0.267)";
        },300)
       reset();
    }
}
function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}
function btnPressed() {
    let btn = this;
    userFlash(btn)
    userColor = btn.getAttribute("id")
    // console.log(userColor)
    userSeq.push(userColor)
    console.log(userSeq)

    checkBtn(userSeq.length - 1)
}
let allBtns = document.querySelectorAll(".btn")
for (button of allBtns) {
    button.addEventListener("click", btnPressed)
}

