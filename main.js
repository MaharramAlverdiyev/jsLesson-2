
// if else konstruksiyasi
var num = 1
if (num > 0) {
    console.log('1 musbet ededdir');
} else {
    console.log('musbet eded deyil');
}

var num = 0
if (num <= 0) {
    console.log('sifira beraberdir');
} else {
    console.log('beraber deyil');
}

var num = -3
if (num < 0) {
    console.log('-3 menfi ededdir');
}

console.log("-----------------------------------------------");


// switch case konstruksiyasi

// var marks = prompt("Derslerden neche aldiniz neticenizi yazin!");
// switch (marks) {
//     case "ela":
//         console.log(5);
//         break
//     case "orta":
//         console.log(4);
//         break
//     case "kafi":
//         console.log(3);
//         break
//     case "qeyri-kafi":
//        console.log(2);
//        break
//     default: 
//     console.log('bele bir netice movcud deyil');
// }




var tekEded = 3
if (tekEded % 2 != 0) {
    console.log('3 tek ededdir');
} else {
    console.log('3 cut ededdir');
}

var cutEded = 8
if (cutEded % 2 == 0){
    console.log('8 cut ededdir');
}else {
    console.log('8 tek ededdir');
}

console.log('-----------------------');

var number = 3 > 0 ? console.log('musbet') : console.log('menfi');
var number = 0 >= 0 ? console.log('sifira beraber') : console.log('menfi');
var number = -3 > 0 ? console.log('musbet') : console.log('menfi');


console.log('-----------------------------');

var num = 8 
if (num != 10) {
    console.log('eded 10a beraber deyil');
}

console.log('--------------------');

var num = 7 
if (num >= 5) {
    console.log('eded 5den boyukdur');
}

var num = 7 
if (num <= 10) {
   console.log('eded 10dan kicikdir');
}

console.log('-------------------------');

var salam = false 

!salam
console.log('boolean example ' + !salam);

console.log('--------------------------');

let number1 = 5
number2 = 6 
number3 = 7 
number4 = 6 

if (number1 == number3 || number2 == number4) {
    console.log('netice dogrudur');
}

if (number1 < number3 && number1 < number4) {
    console.log('netice dogrudur');
}

if (number1 > number3 && number2 == number4) {
    console.log('netice dogrudur');
}else {
    console.log('netice yanlishdir');
}

console.log('------------------');





