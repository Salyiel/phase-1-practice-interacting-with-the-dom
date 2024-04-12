const interval = document.querySelector('#counter')

let startCount = 0

timer.addEventListener('DOMContentLoaded',(function () {
    setInterval(function (){
        count += 1;
        startCount.textContent = count;
    }, 1000)

}));

// const pause = document.getElementById("pause");



document.addEventListener('DOMContentLoaded', (event) => {
    intervalID = setInterval(startCount, 1000);
})

const pause = document.getElementById("pause");