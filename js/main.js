// content modal

function popupShow(){
    document.getElementById('popup-wrap').classList.remove("hiddenModal");
    document.getElementById('popup-wrap').classList.add("showModal");
}

function popupHidden(){
    document.getElementById('popup-wrap').classList.remove("showModal");
    document.getElementById('popup-wrap').classList.add("hiddenModal");
}

const progressBar = document.querySelector('.progress-bar');

const progressBarStates = [0, 7, 27, 34, 68, 80, 95, 100];

let time = 0;
let endState = 100;

progressBarStates.forEach(state => {
    let randomTime = Math.floor(Math.random() * 3000);
    setTimeout(() => {
        if(state == endState){
            gsap.to(progressBar, {
                x: `${state}%`,
                duration: 2,
            });
        }else{
            gsap.to(progressBar, {
                x: `${state}%`,
                duration: 2,
            });
        }
    }, randomTime + time);
    time += randomTime;
})

