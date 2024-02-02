const button = document.querySelectorAll("button");
const display = document.querySelector(".display");

let buttons = button.forEach(item => {
    item.addEventListener("click", focus)
});

function focus(event){
    if(event.target.innerHTML == "C"){
        display.innerHTML = "";
    }else if(event.target.innerHTML == "="){
        display.innerHTML = eval(display.innerHTML);
    }else{
        display.innerHTML += event.target.innerHTML;
    }
};
