const placeHolder = document.getElementById("placeholder")
const input = document.getElementById("input")
const submit = document.getElementById("submit")
const list = document.getElementById("list")

submit.addEventListener("click", ()=>{
    placeHolder.style.color = "goldenrod"
    // placeHolder.textContent = `<li> ${input.variable}</li>`
    list.innerHTML = `<li> ${input.value}</li>`
})