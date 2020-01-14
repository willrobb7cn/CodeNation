/*
let password = "Dickhead"

if (password.length <8){
    console.log("Password is too short")
}else {
    console.log("Password is secure")
}
*/
/*
let num = 11

if (num%3==0 || num%5==0){
    console.log("Divisible by 3 or 5")
}else{
    console.log("Not divisible by 3 or 5")
}
*/




// let num = 15
// if(num%3==0 && num%5!=0){
//     console.log("Fizz")
// }else if (num%5==0 && num%3!=0){
//     console.log("Buzz")
// }else if(num%3==0 && num%5==0){
//     console.log("Fizz Buzz")
// }else{
//     console.log(num)
// }



// let num = 9876
// console.log(num.toString().split().)

// console.log(stringNum)
// let reverseNumber = stringNum.split(/(?:)/u).reverse().join('')
// console.log(reverseNumber)
// console.log(reverseNumber)
// console.log(num.reverse().)
// if(stringNum === reverseNumber){
//     console.log("This is a palindrone")
// }else {
//     console.log("not a palimdrone")
// }

// let num = 456789
// numberString = num.toString()
// function reverseString(numberString) {
//     if (numberString === "") 
//       return "";

//     else
//       return reverseString(numberString.substr(1)) + numberString.charAt(0)}
//       console.log(reverseString(7887
//         ))



// let placeOfWork = "Leeds"
// let townOfHome = "Hull"
// let time = 5600

// if(time > 0000 && time <= 0800) {
//     console.log("I'm at Home")
// }else if (time >= 0800 && time <= 0900){
//     console.log("I'm commuting")
// }else if (time >= 0900 && time <= 1700){
//     console.log("I am at work")
// }else if (time >= 1700 && time <= 1800){
//     console.log("I am commuting")
// }else if (time > 1800 && time < 2400){
//     console.log("I am at home")
// }else {
//     console.log("Please write your time in the format 0700 meaning 7am, 1700 meaning 5pm")
// }








// /*
// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
// Find the index of a last vowel in the string.
// */

// let word = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// let numOfCharacters = word.length
// console.log(numOfCharacters)


// for ( i=0 ; i<numOfCharacters ; i++){
//     // console.log(bigFuckingWord.charAt[i])
//     if (word.charAt(i)==="a" || word.charAt(i)==="e" || word.charAt(i)==="i" || word.charAt(i)==="o" || word.charAt(i)==="u"){
//         console.log(word.charAt(i) + ":" + i)
//     }else{
//         continue
//     }
//             // console.log(charAt[i])
// }






// function newSub (top1,top2,top3,top4,top5){

//     console.log(`Your sandwich will have toppings of ${top1},${top2},${top3},${top4},${top5}.\nEnjoy`)
// }


// newSub("ham","cheese","salami","lettuce","mayo")




// let list = [0,1,2,3,4]
// console.log(list)
// list.unshift(10)
// console.log(list)



// num = Math.random() * 10
// num = (Math.random() * 49 +1)
// num = Math.floor(num)
// console.log(num)

// let randomNum = []

// for (i=0; i< 6; i++) {
// console.log((Math.random() * 49 +1));
// }

/* - Challenge 1:
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Find the sum of all the multiples of 3 or 5 below 1000.
*/


// ONE
// let total = 0
// for(i=0; i <= 1000; i++){
//     if (i%3 === 0 || i%5 === 0){
//         total += i
//     }else {

//     }
// }
// console.log(total)

/*
Take this string “jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh”.

  The word “hi” appears multiple times. Find the first and last occurrence of the word hi and log them to the console.
*/
// let numberOfHi = 0
// let prevChar = []
// let bigWord = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
// for (i = 0; i < bigWord.length; i++) {
//     // console.log(arr)
//     if ( bigWord[i] === "i" && prevChar[0] === 'h'){
//         console.log(`"hi" located at character `+ [i])
//         numberOfHi ++
//     }
//     prevChar.pop()
//     prevChar.push(bigWord[i])
// }
// console.log(numberOfHi)

// /(?:)/ regular expression /(?:)/ means looking for a charachter regex

//PANENDRONE

// function palindrone(CheckIf) {
//    let reverseNumber = CheckIf.toString().split(/(?:)/).reverse().join('')
//    if (reverseNumber == CheckIf){
//        console.log("Yes, it is a palendrone.")
//    }else{
//        console.log("not a palendrone")
//    }
// }
// palindrone("noon")



/*
 If I add up the digits of the number 19082 I would get 1+9+0+8+2=20. Add the digits of the number:

  371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331.

*/


// for ()g