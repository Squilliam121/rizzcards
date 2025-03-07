// Elements
const header = document.getElementById("HEADER");
const description = document.getElementById("DESCRIPTION");
const image = document.getElementById("IMAGE");
const stats = document.getElementById("STATS");
const dropdown = document.getElementById("dropdown");
const cardelement = document.getElementById("card");
const greenbutton = document.getElementsByClassName("green")[0]
const greenbutton2 = document.getElementsByClassName("green")[1]
const greenbutton3 = document.getElementsByClassName("green")[2]
const redbutton = document.getElementsByClassName("red")[0]
const redbutton2 = document.getElementsByClassName("red")[1]
const redbutton3 = document.getElementsByClassName("red")[2]
const blackbutton = document.getElementsByClassName("black")[0]
const blackbutton2 = document.getElementsByClassName("black")[1]
const blackbutton3 = document.getElementsByClassName("black")[2]
const tallbutton = document.getElementsByClassName("tall")[0]
const tallbutton2 = document.getElementsByClassName("tall")[1]
const tallbutton3 = document.getElementsByClassName("tall")[2]
// Variables
let card = "Jambo"
let pack = "red"
cardelement.style.backgroundColor = "rgb(233, 141, 141)";

// Button Click
function selectLachie(){
    card = "Lachie";
}

function selectEJ(){
    card = "EJ";
}

function selectOllie(){
    card = "Ollie";
}

function selectJambo(){
    card = "Jambo";
}

function selectGabe(){
    card = "Gabe";
}

function selectAnthony(){
    card = "Anthony";
}

function selectMatthew(){
    card = "Matthew";
}

function selectYuty(){
    card = "Yuty";
}

function selectStorm(){
    card = "Storm";
}

function selectWilliam(){
    card = "William";
}

function selectJam(){
    card = "Jam";
}

function selectJake(){
    card = "Jake";
}
// Main Loop
setInterval(() => {
    dropdown.addEventListener("change", function() {
        // Testing what pack we are on
        if (this.value === "Green Pack") {
            cardelement.style.backgroundColor = "rgb(141, 233, 179)";
            pack = "green";
            card = "Lachie";
        }
    
        if (this.value === "Red Pack") {
            cardelement.style.backgroundColor = "rgb(233, 141, 141)";
            pack = "red";
            card = "Jambo";
        }
    
        if (this.value === "Black Pack") {
            cardelement.style.backgroundColor = "rgb(114, 114, 114)";
            pack = "black";
            card = "Matthew"
        }
        if (this.value === "Tall Pack") {
            cardelement.style.backgroundColor = "rgb(255, 0, 238)";
            pack = "tall";
            card = "William"
        }
    });
    // Pack Visibility
    if (pack === "green"){
        greenbutton.style.display = "block";
        greenbutton2.style.display = "block";
        greenbutton3.style.display = "block";
    }else{
        greenbutton.style.display = "none";
        greenbutton2.style.display = "none";
        greenbutton3.style.display = "none";  
    }

    if (pack === "red"){
        redbutton.style.display = "block";
        redbutton2.style.display = "block";
        redbutton3.style.display = "block";
    }else{
        redbutton.style.display = "none";
        redbutton2.style.display = "none";
        redbutton3.style.display = "none";
    }
    if (pack === "black"){
        blackbutton.style.display = "block";
        blackbutton2.style.display = "block";
        blackbutton3.style.display = "block";
    }else{
        blackbutton.style.display = "none";
        blackbutton2.style.display = "none";
        blackbutton3.style.display = "none";
    }
    if (pack === "tall"){
        tallbutton.style.display = "block";
        tallbutton2.style.display = "block";
        tallbutton3.style.display = "block";
    }else{
        tallbutton.style.display = "none";
        tallbutton2.style.display = "none";
        tallbutton3.style.display = "none";
    }
    // Peoples Cards
    if (card === "EJ") {
        image.src = "assets/ej.jpg";
        header.textContent  = "EJ";
        description.textContent = "Ej is the love of Jam. She has competed in the Squid Games 3 times, and she has indeed 'played these games before.'";
        stats.innerHTML = "GFSTATUS: -10/10 (she is the gf)<br>RIZZ: 9/10<br>TUFF: 4/10<br>GYATT: <em>REDACTED</em><br>TOTAL: 3/40";
    }
    if (card === "Lachie") {
        image.src = "assets/lachie.jpg";
        header.textContent  = "Lachie";
        description.textContent = "Lachie is a goober. He is known for his work on the 'VLUZZ' project, as well as many other homosexual things.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 8/10<br>GYATT: 0/10<br>TUFF: 2/10<br>TOTAL: 10/40";
    }
    if (card === "Ollie") {
        image.src = "assets/ollie.jpg";
        header.textContent  = "Ollie";
        description.textContent = "Ollie is known as the short one. Smurf, minion, and dwarf are names he has had to live with. Nowadays, he is addicted to being a fighter pilot.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 3/10<br>GYATT: 7/10<br>TUFF: 1/10<br>TOTAL: 11/40";
    }
    if (card === "Jambo") {
        image.src = "assets/jambo.png";
        header.textContent  = "Jambo";
        description.textContent = "Jambo is an interesting guy. He loves women a lot, but always seems to date the wrong ones. He hasn't touched grass in years, and has an unhealthy addiction to Discord.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 5/10<br>GYATT: 6/10<br>TUFF: 4/10<br>TOTAL: 15/40";
    }
    if (card === "Gabe") {
        image.src = "assets/gabe.png";
        header.textContent  = "Gabe";
        description.textContent = "Gabe is the pookie of all pookies. He is very kind (totally) and nice(totally). He is also curvy af - sadly he is getting de-curve surgery :((((. Also image placeholder is that bc it looks like him :D";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 10/10<br>GYATT: 8/10<br>TUFF: 6/10<br>TOTAL: 24/40";
    }
    if (card === "Anthony") {
        image.src = "assets/anthony.jpg";
        header.textContent  = "Anthony";
        description.textContent = "Anthony is a cutie patooti. His hair is fluffy, and he eats the tastiest of burgers. He is a TikTok editor - the best one out of all of us - yet he lost an editing comp to a Hitler edit :/";
        stats.innerHTML = "GFSTATUS: 10/10<br>RIZZ: 10/10<br>GYATT: 10/10<br>TUFF: 10/10<br>TOTAL: 40/40";
    }
    if (card === "Matthew") {
        image.src = "assets/matthew.jpg";
        header.textContent  = "Matthew";
        description.textContent = "Matthew is an epik guy. His rizz is off the charts, being able to pull any lady he sees. He is also a famous movie star, known for his work in the famous 'Matthew Movie'!";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 11/10<br>GYATT: 7/10<br>TUFF: 10/10<br>TOTAL: 28/40";
    }
    if (card === "Yuty") {
        image.src = "assets/gurjot.jpeg";
        header.textContent  = "Yuty";
        description.textContent = "Gurjot, most commonly known as 'Yuty', is a pookie I met on roblox. Sure, he is prolly a 50 year old indian guy, but we atleast know for sure he is an indian guy! He is also a BallsDex sweat.";
        stats.innerHTML = "GFSTATUS: 10/10<br>RIZZ: 6/10<br>GYATT: 6/10<br>TUFF: 9/10<br>TOTAL: 31/40";
    }
    if (card === "Storm") {
        image.src = "assets/storm.png";
        header.textContent  = "Storm";
        description.textContent = "Storm is SUCH a cutie patooti. Even more than Anthony. While he didn't make it to the 'Pook Pack', he is still very rizzy. He is also the recruiter from Squid Game.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 9/10<br>GYATT: 9/10<br>TUFF: 8/10<br>TOTAL: 26/40";
    }
    if (card === "Jam") {
        image.src = "assets/jam.jpg";
        header.textContent  = "Jam";
        description.textContent = "Jam is a very smexy dude. He is also very good at kicking things. He has also sold his soul to the Gaijan Snail.";
        stats.innerHTML = "GFSTATUS: 10/10<br>RIZZ: 8/10<br>GYATT: 10/10<br>TUFF: 9/10<br>TOTAL: 37/40";
    }
    if (card === "William") {
        image.src = "assets/jam.jpg";
        header.textContent  = "William";
        description.textContent = "William is a really cool guy. He has triangle shaped curly hair and makes really cool pixel art because he's really cool. - Written by friend (not me)";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 8/10<br>GYATT: 8/10<br>TUFF: 11/10<br>TOTAL: 27/40";
    }
    if (card === "Jake") {
        image.src = "assets/jake.jpg";
        header.textContent  = "Jake";
        description.textContent = "Jake is known as the really tall one. Like, REALLY tall. Tallest out of our group. Sure, Yuty says he is 5'11, but we can't know for certain. Jake is the POOK.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 6/10<br>GYATT: 11/10<br>TUFF: 8/10<br>TOTAL: 25/40";
    }
}, 10)
