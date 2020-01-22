let heading = document.getElementById("heading")
let heading2 = document.getElementById("heading2")
let heading3 = document.getElementById("heading3")

// const func = () => {
//     console.log(this)
//     this.style.color = "red"
// } // "this" refers to the whole window due to how the function is defined

function funct() {
    console.log(this)
    this.style.color = "red"
}

// heading.addEventListener("click",() => {// anonymous function so when heading is clicked it runs function
//     heading.style.color = "red"
// })

heading.addEventListener("click",funct)
heading2.addEventListener("click",funct)
heading3.addEventListener("click",funct)

