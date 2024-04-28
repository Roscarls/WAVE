// Matrix
let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "HBD WaV-e Za 007. HB.D. WaVe Z* 007 HBD Wa_Ve za 007 {HBD} Weav Za 007+ H^BD WaVe Za 007 HBD; WAVE zA oo7"
let matrix = str.split("");
let font = 12;
let col = width / font;
let arr = [];

for(let i = 0; i < col; i++){
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgb(0,0,0,0.05)";
    ctx.fillRect(0,0, width, height);
    ctx.fillStyle = "#00FF00";
    ctx.font = '${font}px system-ui'

    for(let i = 0; i < arr.length; i++){
        let txt = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;
        }
        arr[i]++;
    }
}

setInterval(draw, 20);

window.addEventListener("resize", () => location.reload())

// Loading bar
const progressBar = document.getElementsByClassName('progress-bar')[0]
const clickHere = document.getElementsByClassName('clickhere')[0]

const intervalId = setInterval(() =>{
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0

    if (width >= 100){
        progressBar.remove();
        clickHere.style.visibility = 'visible';
        clearInterval(intervalId);
    } else {
        progressBar.style.setProperty('--width', width + .1)
    }
}, 0.1)

//Show content
function handleClickHere(){
    progressBar.remove();
    clickHere.remove();
    canvas.remove();

    var audio = document.getElementById("Audioo");
    audio.volume -= 0.25;
    audio.play();

    var Album = document.getElementById("Album");
    var albumDisplay = getComputedStyle(Album).getPropertyValue('display');
    if(albumDisplay === "none"){
        Album.style.display = "block";
    }else {
        Album.style.display = "none";
    }
}

clickHere.addEventListener('click', handleClickHere)


