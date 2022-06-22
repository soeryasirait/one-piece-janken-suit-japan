let skorLuffy = 0;
let skorPlayer = 0;
let timeOut = "";

let luffy = document.getElementById("luffy");

let splashScreen = document.getElementsByClassName("splash")[0];
let startGame = document.getElementsByClassName("start")[0];
let displaySkorLuffy = document.getElementsByClassName("skor-luffy")[0];
let displaySkorPlayer = document.getElementsByClassName("skor-player")[0];

let reset = document.getElementById("reset");
let back = document.getElementById("back");
let batu = document.getElementById("batu");
let kertas = document.getElementById("kertas");
let gunting = document.getElementById("gunting");

let modal1 = document.getElementById("modal-cara-1");
let modal2 = document.getElementById("modal-cara-2");
let modal3 = document.getElementById("modal-cara-3");

let panduan = document.getElementById("panduan");
let nextPage2 = document.getElementById("nextPage2");
let nextPage3 = document.getElementById("nextPage3");
let backPage1 = document.getElementById("backPage1");
let backPage2 = document.getElementById("backPage2");

let span1 = document.getElementsByClassName("page1")[0];
let span2 = document.getElementsByClassName("page2")[0];
let span3 = document.getElementsByClassName("page3")[0];

if (localStorage.getItem("skorLuffy")) {
    skorLuffy = localStorage.getItem("skorLuffy");
    displaySkorLuffy.innerHTML = skorLuffy;
}

if (localStorage.getItem("skorPlayer")) {
    skorPlayer = localStorage.getItem("skorPlayer");
    displaySkorPlayer.innerHTML = skorPlayer;
}

startGame.addEventListener("click", () => {
    splashScreen.style.top = "-120vh";
    splashScreen.style.transition = ".75s";
});

batu.addEventListener("click", () => {
    janken(0);
});

kertas.addEventListener("click", () => {
    janken(1);
});

gunting.addEventListener("click", () => {
    janken(2);
});

reset.addEventListener("click", () => {
    if (confirm("Apakah anda yakin untuk memulai ulang permainan ini?")) {
        skorLuffy = 0;
        skorPlayer = 0;
        displaySkorLuffy.innerHTML = skorLuffy;
        displaySkorPlayer.innerHTML = skorPlayer;
        localStorage.clear();
    };
});

back.addEventListener("click", () => {
    if (confirm("Anda yakin ingin keluar dari permainan ini?")) {
        splashScreen.style.top = "0";
        splashScreen.style.transition = ".75s";
        skorLuffy = 0;
        skorPlayer = 0;
        displaySkorLuffy.innerHTML = skorLuffy;
        displaySkorPlayer.innerHTML = skorPlayer;
        localStorage.clear();
    };
});

function janken(tangan) {
    let jariLuffy = Math.floor(Math.random() * 3);

    switch (jariLuffy) {
        case 0:
            luffy.style.backgroundImage = "url(assets/img/luffy-batu.png)";
            break;
        case 1:
            luffy.style.backgroundImage = "url(assets/img/luffy-kertas.png)";
            break;
        default:
            luffy.style.backgroundImage = "url(assets/img/luffy-gunting.png)";
            break;
    }

    luffy.classList.remove("goyang");

    switch (tangan) {
        case 0:
            if (jariLuffy == 0) {
                result("draw");
            } else if (jariLuffy == 1) {
                result("luffy");
            } else {
                result("player");
            }
            break;
        case 1:
            if (jariLuffy == 0) {
                result("player");
            } else if (jariLuffy == 1) {
                result("draw");
            } else {
                result("luffy");
            }
            break;
        default:
            if (jariLuffy == 0) {
                result("luffy");
            } else if (jariLuffy == 1) {
                result("player");
            } else {
                result("draw");
            }
            break;
    }
}

function result(who) {
    clearTimeout(timeOut);

    switch (who) {
        case "luffy":
            skorLuffy++;
            localStorage.setItem("skorLuffy", skorLuffy);
            displaySkorLuffy.innerHTML = skorLuffy;
            console.log("Luffy Menang");
            break;
        case "player":
            skorPlayer++;
            localStorage.setItem("skorPlayer", skorPlayer);
            displaySkorPlayer.innerHTML = skorPlayer;
            console.log("Anda Menang");
            break;
        default:
            console.log("Seri");
            break;
    }

    timeOut = setTimeout(() => {
        luffy.style.removeProperty("background-image");
        luffy.classList.add("goyang");
    }, 3000);
}

panduan.onclick = function() {
    modal1.style.display = "block";
}

nextPage2.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "block";
}

nextPage3.onclick = function() {
    modal2.style.display = "none";
    modal3.style.display = "block";
}

backPage2.onclick = function() {
    modal3.style.display = "none";
    modal2.style.display = "block";
}

backPage1.onclick = function() {
    modal2.style.display = "none";
    modal1.style.display = "block";
}

span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event1) {
    if (event1.target == modal1) {
        modal1.style.display = "none";
    }
}

window.onclick = function(event2) {
    if (event2.target == modal2) {
        modal2.style.display = "none";
    }
}

window.onclick = function(event3) {
    if (event3.target == modal3) {
        modal3.style.display = "none";
    }
}