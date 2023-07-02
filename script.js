const container = document.querySelector(".container");
const text = document.getElementById("text");


let totalTime = 7500; //一周の時間
let breatheTime = (totalTime / 5) * 2; //止める時間
let holdTime = totalTime / 5 //待つ時間

function meisouAnimation() {
    // ~秒経ったら中の処理を行う
    text.innerText = "吸って";
    container.className = "container grow";
    setTimeout(() => {
        text.innerText = "止めて";

        setTimeout(() => {
            // 一つ目の処理が終わった後に実行
            text.innerText = "吐いて";
            container.className = "container shrink";
        }, holdTime);
    }, breatheTime);
}

meisouAnimation();

// ~秒経ったら中の処理を繰り返し行う
setInterval(() => {
    meisouAnimation();
}, totalTime);
