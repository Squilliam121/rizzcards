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
let selectedPack = ""
cardelement.style.backgroundColor = "rgb(233, 141, 141)";

// Button Click
function selectLachie(){
    card = "Lachie";
    if (card === "Lachie") {
        image.src = "assets/lachie.jpg";
        header.textContent  = "Lachie";
        description.textContent = "Lachie is a goober. He is known for his work on the 'VLUZZ' project, as well as many other homosexual things.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 8/10<br>GYATT: 0/10<br>TUFF: 2/10<br>TOTAL: 10/40";
    }
}

function selectEJ(){
    card = "EJ";
    if (card === "EJ") {
        image.src = "assets/ej.jpg";
        header.textContent  = "EJ";
        description.textContent = "Ej is the love of Jam. She has competed in the Squid Games 3 times, and she has indeed 'played these games before.'";
        stats.innerHTML = "GFSTATUS: -10/10 (she is the gf)<br>RIZZ: 9/10<br>TUFF: 4/10<br>GYATT: <em>REDACTED</em><br>TOTAL: 3/40";
    }
}

function selectOllie(){
    card = "Ollie";
    if (card === "Ollie") {
        image.src = "assets/ollie.jpg";
        header.textContent  = "Ollie";
        description.textContent = "Ollie is known as the short one. Smurf, minion, and dwarf are names he has had to live with. Nowadays, he is addicted to being a fighter pilot.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 3/10<br>GYATT: 7/10<br>TUFF: 1/10<br>TOTAL: 11/40";
    }
}

function selectJambo(){
    card = "Jambo";
    if (card === "Jambo") {
        image.src = "assets/jambo.png";
        header.textContent  = "Jambo";
        description.textContent = "Jambo is an interesting guy. He loves women a lot, but always seems to date the wrong ones. He hasn't touched grass in years, and has an unhealthy addiction to Discord.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 5/10<br>GYATT: 6/10<br>TUFF: 4/10<br>TOTAL: 15/40";
    }
}

function selectGabe(){
    card = "Gabe";
    if (card === "Gabe") {
        image.src = "assets/gabe.png";
        header.textContent  = "Gabe";
        description.textContent = "Gabe is the pookie of all pookies. He is very kind (totally) and nice(totally). He is also curvy af - sadly he is getting de-curve surgery :((((. Also image placeholder is that bc it looks like him :D";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 10/10<br>GYATT: 8/10<br>TUFF: 6/10<br>TOTAL: 24/40";
    }
}

function selectAnthony(){
    card = "Anthony";
    if (card === "Anthony") {
        image.src = "assets/anthony.jpg";
        header.textContent  = "Anthony";
        description.textContent = "Anthony is a cutie patooti. His hair is fluffy, and he eats the tastiest of burgers. He is a TikTok editor - the best one out of all of us - yet he lost an editing comp to a Hitler edit :/";
        stats.innerHTML = "GFSTATUS: 10/10<br>RIZZ: 10/10<br>GYATT: 10/10<br>TUFF: 10/10<br>TOTAL: 40/40";
    }
}

function selectMatthew(){
    card = "Matthew";
    if (card === "Matthew") {
        image.src = "assets/matthew.jpg";
        header.textContent  = "Matthew";
        description.textContent = "Matthew is an epik guy. His rizz is off the charts, being able to pull any lady he sees. He is also a famous movie star, known for his work in the famous 'Matthew Movie'!";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 11/10<br>GYATT: 7/10<br>TUFF: 10/10<br>TOTAL: 28/40";
    }
}

function selectYuty(){
    card = "Yuty";
    if (card === "Yuty") {
        image.src = "assets/gurjot.jpeg";
        header.textContent  = "Yuty";
        description.textContent = "Gurjot, most commonly known as 'Yuty', is a pookie I met on roblox. Sure, he is prolly a 50 year old indian guy, but we atleast know for sure he is an indian guy! He is also a BallsDex sweat.";
        stats.innerHTML = "GFSTATUS: 10/10<br>RIZZ: 6/10<br>GYATT: 6/10<br>TUFF: 9/10<br>TOTAL: 31/40";
    }
}

function selectStorm(){
    card = "Storm";
    if (card === "Storm") {
        image.src = "assets/storm.png";
        header.textContent  = "Storm";
        description.textContent = "Storm is SUCH a cutie patooti. Even more than Anthony. While he didn't make it to the 'Pook Pack', he is still very rizzy. He is also the recruiter from Squid Game.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 9/10<br>GYATT: 9/10<br>TUFF: 8/10<br>TOTAL: 26/40";
    }
}

function selectWilliam(){
    card = "William";
    if (card === "William") {
        image.src = "assets/william.jpg";
        header.textContent  = "William";
        description.textContent = "William is a really cool guy. He has triangle shaped curly hair and makes really cool pixel art because he's really cool. - Written by friend (not me)";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 8/10<br>GYATT: 8/10<br>TUFF: 11/10<br>TOTAL: 27/40";
    }
    
}

function selectJam(){
    card = "Jam";
    if (card === "Jam") {
        image.src = "assets/jam.jpg";
        header.textContent  = "Jam";
        description.textContent = "Jam is a very smexy dude. He is also very good at kicking things. He has also sold his soul to the Gaijan Snail. He also has an unhealthy addiction to football and running";
        stats.innerHTML = "GFSTATUS: 10/10<br>RIZZ: 8/10<br>GYATT: 10/10<br>TUFF: 9/10<br>TOTAL: 37/40";
    }
}

function selectJake(){
    card = "Jake";
    if (card === "Jake") {
        image.src = "assets/jake.jpg";
        header.textContent  = "Jake";
        description.textContent = "Jake is known as the really tall one. Like, REALLY tall. Tallest out of our group. Sure, Yuty says he is 5'11, but we can't know for certain. Jake is the POOK.";
        stats.innerHTML = "GFSTATUS: 0/10<br>RIZZ: 6/10<br>GYATT: 11/10<br>TUFF: 8/10<br>TOTAL: 25/40";
    }
}

// Pack Function
function Packk(){
    // Testing what pack we are on
    if (selectedPack === "Green Pack") {
        cardelement.style.backgroundColor = "rgb(141, 233, 179)";
        pack = "green";
        card = "Lachie";
        selectLachie();
    }

    if (selectedPack === "Red Pack") {
        cardelement.style.backgroundColor = "rgb(233, 141, 141)";
        pack = "red";
        card = "Jambo";
        selectJambo();
    }

    if (selectedPack === "Black Pack") {
        cardelement.style.backgroundColor = "rgb(114, 114, 114)";
        pack = "black";
        card = "Matthew"
        selectMatthew();
    }
    if (selectedPack === "Tall Pack") {
        cardelement.style.backgroundColor = "rgb(255, 0, 238)";
        pack = "tall";
        card = "William"
        selectWilliam();
    }
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
};

// Pack Update
dropdown.addEventListener("change", function() {
    selectedPack = event.target.value
    Packk(this.value);
    console.log(selectedPack)
});
