let heading = document.getElementById("heading")
let button = document.getElementById("button")
let input = document.getElementById("input")



const changeColor = () => {
    heading.style.color = input.value
}


button.addEventListener("click",changeColor)