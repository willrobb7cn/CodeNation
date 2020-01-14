// for ( i=0 ; i<10 ; i++){
//         console.log(i)
//     }

// let favDrinks = ["coke","lemo","beer","vodka"]
// for ( i=0 ; i<favDrinks.length; i++ ){
//     console.log(favDrinks[i])
// }


// let favFilms = ["Step Brothers","Ratatoulie","Shawshank Redemption","The Blind Side","The Terminal"]

// favFilms.push("Toy Story","Shrek")
// // console.log(favFilms)

// for (i=0 ; i< favFilms.length; i++){
//     console.log(favFilms[i])
// }

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Heart";

// while(currentCard != "Spade"){

// console.log(currentCard);
// currentCard = cards[Math.floor(Math.random()*4)];

// }

// console.log(currentCard);




// let arr = []

// let favFilms = ["Ghostbusters", "Stepbrothers", "Ghostbusters", "Rocky"]

// for (i = 0; i < favFilms.length; i++) {
//     arr.push(favFilms[i])
// }


// function filmCheck() {

//     if (arr[2] === "Ghostbusters") {
//         console.log("The 3rd film in the array is Ghostbustors")
//     } else {
//         console.log("Not this time")
//     }
// }

// filmCheck()






let time = 1930
let weekday = true
dayOfTheWeek = ["mon","tue","wed","thu","fri","sat","sun"]
currentDay = dayOfTheWeek[Math.floor(Math.random() * 7)]

// console.log(currentDay)

while ( (currentDay == "mon" || currentDay == "tue" || currentDay == "wed" || currentDay == "thu" || currentDay == "fri") && ((time > 0600 && time < 0801) || (time > 1800 && time < 2001 )) ){
    console.log("The heating is on")
    currentDay = dayOfTheWeek[Math.floor(Math.random() * 7)]
}console.log("the heating is off")

// while (weekday === true && ((time > 0600 && time < 0801) || (time > 1800 && time < 2001 ))){
//     console.log("The heating is on")
// }
// console.log("The heating is off")

