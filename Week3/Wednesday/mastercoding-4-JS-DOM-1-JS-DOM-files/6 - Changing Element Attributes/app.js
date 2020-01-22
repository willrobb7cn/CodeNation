const input = document.getElementById("input")
const button = document.getElementById("submit")
const image  = document.getElementById("image")

button.addEventListener("click", ()=>{
    console.log(image)
    // image.src = "https://am22.akamaized.net/tms/cnt/uploads/2018/06/Screen-Shot-2018-06-13-at-2.37.42-PM.jpg"
    image.src = input.value
})
