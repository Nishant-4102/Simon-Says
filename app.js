let body = document.querySelector("body");
let h2 = document.querySelector("h2")
let level = 0;
let colors = ["red", "green", "yellow", "blue"];
let sysSeq = [];
let userSeq = [];
let highscr = document.querySelector(".hs");




body.addEventListener("keypress", function() {
    if(level == 0){
        levelUp();        
    }
})

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}



function levelUp () {
    level++;
    h2.innerText = `Level ${level}`;    
    
    let ranDig = Math.floor(Math.random()*4);
    let ranCol = colors[ranDig];    
    let colCls = document.querySelector(`.${ranCol}`);
    flash(colCls);

    sysSeq.push(ranCol); 
    console.log(sysSeq); 
    userSeq = [];  
}

function btnPress () {
    console.log(this);    
    let btn = this;
    flash(this);
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    check(userSeq.length-1);
}

function check(idx) {
    if(userSeq[idx] === sysSeq[idx]){
        if(userSeq.length == sysSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        highscr.innerText = level;
        h2.innerHTML = `Wrong ! <br> press any key to try again ! <br> Your final score was <b>${level}</b>`;
        sysSeq = [];
        userSeq = [];
        level = 0;
        body.classList.add("flashr")
        setTimeout(function() {
        body.classList.remove("flashr");
    }, 150);
        reset();
    }
}





function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}


function reset() {
    started == false;
    sysSeq = [];
    userSeq = [];
    level = 0;
}