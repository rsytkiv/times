const getS = selector => document.querySelector(selector)
setInterval(() => {
    let data = new Date()
    let dd = data.getDate()
    let mt = data.getMonth() + 1
    let ye = data.getFullYear()
    let hh = data.getHours()
    let mm = data.getMinutes()
    let ss = data.getSeconds()
    if (dd < 10) dd = '0' + dd
    if (mt < 10) mt = '0' + mt
    if (ss < 10) ss = '0' + ss
    if (mm < 10) mm = '0' + mm
    if (hh < 10) hh = '0' + hh
    getS('.data').innerHTML = `${dd}.${mt}.${ye}`
    getS('.oclock').innerHTML = `${hh}:${mm}:${ss}`
})
let hours = '00'
let min = '00'
let sec = '00'
let milsec = '00'
let time



getS('.start').addEventListener('click', () => {
    goTime()
    getS('.reset').classList.remove('hover')
    getS('.stop').classList.remove('hover')
    getS('.start').classList.add('hover')
    getS('.start').disabled = true;
    getS('.loop').disabled = false;
    getS('.stop').disabled = false
})
getS('.stop').addEventListener('click', () => {
    clearInterval(time)
    getS('.loop').classList.remove('hover')
    getS('.start').classList.remove('hover')
    getS('.stop').classList.add('hover')
    getS('.reset').disabled = false;
    getS('.start').disabled = false;
    getS('.loop').disabled = false;
    getS('.stop').disabled = true
})
getS('.reset').addEventListener('click', () => {
    hours = '00'
    min = '00'
    sec = '00'
    milsec = '00'
    getS('.start').classList.remove('hover')
    getS('.stop').classList.remove('hover')
    getS('.loop').classList.remove('hover')
    getS('.reset').classList.add('hover')
    getS('.area-second').innerHTML = ''
    getS('.seconds').innerHTML = `${hours}:${min}:${sec}:${milsec}`
    getS('.reset').disabled = true;
    getS('.start').disabled = false;
    getS('.loop').disabled = true;
    getS('.stop').disabled = true
})
getS('.loop').addEventListener('click', () => {
    let tit = document.createElement('h1')
    if (hours < 10) {
        if (min < 10) {
            if (sec < 10) {
                if (milsec < 10) {
                    tit.textContent = `${hours}:${min}:${sec}:${milsec}`
                }
                tit.textContent = `${hours}:${min}:${sec}:${milsec}`
            } else {
                if (milsec < 10) {
                    tit.textContent = `${hours}:${min}:${sec}:${milsec}`
                }
                tit.textContent = `${hours}:${min}:${sec}:${milsec}`
            }
        } else {
            if (sec < 10) {
                if (milsec < 10) {
                    tit.textContent = `${hours}:${min}:${sec}:${milsec}`
                }
                tit.textContent = `${hours}:${min}:${sec}:${milsec}`
            } else {
                if (milsec < 10) {
                    tit.textContent = `${hours}:${min}:${sec}:${milsec}`
                }
                tit.textContent = `${hours}:${min}:${sec}:${milsec}`
            }
        }
    } else {
        if (milsec < 10) {
            milsec = '0' + milsec
        }
        tit.textContent = `${hours}:${min}:${sec}:${milsec}`
    }
    getS('.area-second').append(tit)
    getS('.start').classList.remove('hover')
    getS('.stop').classList.remove('hover')
    getS('.loop').classList.add('hover')
    getS('.reset').classList.remove('hover')
})






function goTime() {
    time = setInterval(() => {
        milsec++
        if (milsec > 9) {
            milsec = 00
            sec++
            if (sec > 59) {
                sec = 00
                min++
                if (min > 59) {
                    min = 00
                    hours++
                }
                if (min < 10) {
                    min = '0' + min
                }
            }
            if (sec < 10) {
                sec = '0' + sec
            }
        }

        getS('.seconds').innerHTML = `${hours}:${min}:${sec}:${milsec+'0'}`
    }, 100)
}


getS('.minus').addEventListener('click', () => {
    let m = +getS('.big-num').innerHTML - 1
    if (getS('.big-num').innerHTML <= 10 && getS('.big-num').innerHTML > 0) {
        getS('.big-num').innerHTML = '0' + m
    } else {
        getS('.big-num').innerHTML = m
    }
    getS('.plus').classList.remove('hover')
    getS('.minus').classList.add('hover')
})
getS('.plus').addEventListener('click', () => {
    let p = +getS('.big-num').innerHTML + 1
    if (getS('.big-num').innerHTML < 9 && getS('.big-num').innerHTML >= 0) {
        getS('.big-num').innerHTML = '0' + p
    } else {
        getS('.big-num').innerHTML = p
    }
    getS('.plus').classList.add('hover')
    getS('.minus').classList.remove('hover')


})


let leftNum = getS('.big-num').innerHTML;

let rightNum = 0;
let timer_down;
getS('.startT').addEventListener('click', function () {
    if (getS('.big-num').innerHTML < 10) {
        getS('.left').innerHTML = '0' + (getS('.big-num').innerHTML)
    } else {
        getS('.left').innerHTML = getS('.big-num').innerHTML
    }
    getS('.left').innerHTML = getS('.big-num').innerHTML
    start2Timer();
    getS('.startT').disabled = true;
    getS('.stopT').disabled = false;
    getS('.resetT').disabled = true;
    getS('.startT').classList.add('hover')
    getS('.resetT').classList.remove('hover')
    getS('.stopT').classList.remove('hover')




});

getS('.stopT').addEventListener('click', function () {
    clearTimeout(timer_down);
    getS('.startT').disabled = false;
    getS('.stopT').disabled = true;
    getS('.resetT').disabled = false;
    getS('.startT').classList.remove('hover')
    getS('.resetT').classList.remove('hover')
    getS('.stopT').classList.add('hover')



});

getS('.resetT').addEventListener('click', function () {
    leftNum = 0;
    rightNum = 0;
    document.querySelector('.left').innerHTML = '00';
    document.querySelector('.right', ).innerHTML = '00';
    getS('.startT').classList.remove('hover')
    getS('.resetT').classList.add('hover')
    getS('.stopT').classList.remove('hover')
});

function start2Timer() {
    leftNum = getS('.left').innerHTML;
    timer_down = setTimeout(function () {
        rightNum--;
        if (rightNum < 0) {
            rightNum = 59
            leftNum--;
            if (leftNum < 10) {
                leftNum = "0" + leftNum;
            }
            getS('.left').innerHTML = leftNum;
            if (leftNum == 0) {
                location.reload()
            }
        }
        if (rightNum < 10) {
            rightNum = "0" + rightNum;
        }
        getS('.right').innerHTML = rightNum;
        start2Timer();
    }, 1000);
}
