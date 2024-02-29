let count = 0;
let countDOM = document.querySelector("#count");
let incrementDOM = document.querySelector("#increment");
let decrementDOM = document.querySelector("#decrement");
let resetDOM = document.querySelector("#reset");

incrementDOM.addEventListener("click", () => {
   increment(); // "increment" fonksiyonunu çağır
});

decrementDOM.addEventListener("click", () => {
    decrement();
});

resetDOM.addEventListener("click", () => {
    reset();
});

function decrement() {
    count--;
    countDOM.textContent = count;   
}

function increment() {
    count++;
    countDOM.textContent = count;
}

function reset() {
    count = 0;
    countDOM.textContent = count;   
}
