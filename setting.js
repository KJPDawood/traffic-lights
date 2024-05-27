var btn = document.getElementById("btn")
var red = document.getElementById("red")
var yellow = document.getElementById("yellow")
var green = document.getElementById("green")
count = true
btn.addEventListener("click" ,function(){
    if (count === true) {
        btn.innerHTML = "Stop"
        red.style.backgroundColor = "red"
        count = false
        setTimeout(() => {
            red.style.backgroundColor = "rgb(70, 17, 17)"
            yellow.style.backgroundColor = "yellow"
        }, 15000);
        setTimeout(() => {
            yellow.style.backgroundColor = "rgb(85, 85, 16)"
            green.style.backgroundColor = "rgb(0, 255, 0)"
        }, 20000);
    }else if (count === false) {
        btn.innerHTML = "Start"
        yellow.style.backgroundColor = "rgb(85, 85, 16)"
        green.style.backgroundColor = "rgb(10, 58, 10)"
        red.style.backgroundColor = "rgb(70, 17, 17)"
        count = true
    }
})