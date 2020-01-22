// let paragraphs = document.getElementsByTagName("p")

// for (const paragraph of paragraphs) {
//     console.log(paragraph)
// }


let list = document.getElementsByTagName("li")

for(const li of list){
    li.style.color = "orange"
    console.log(li)
}

list = document.getElementsByClassName("not-orange")

for(const li of list){
    li.style.color = "red"
    console.log(li)
}

