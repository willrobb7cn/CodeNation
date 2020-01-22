const image = document.getElementById("cat")
const button = document.getElementById("submit")
image.style.display = "none"

button.addEventListener("click", () => {
   
if (image.style.display == "none") {
    image.style.display = "block"
    button.textContent = "Hide"
} else {
    
        image.style.display = "none"
        button.textContent = "Show"
    
}
})


// console.log(image.style)