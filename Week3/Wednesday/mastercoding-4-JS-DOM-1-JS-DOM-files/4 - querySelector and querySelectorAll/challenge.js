//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const list = document.querySelectorAll('li')

for (i=0 ; i<colours.length ; i++) {

    list[i].style.color = colours[i]
    
}