const list = document.querySelectorAll("li:nth-child(even)")
console.log(list)
console.log(list.length)
for (const li of list) {
    li.style.color = "lightgreen"
}