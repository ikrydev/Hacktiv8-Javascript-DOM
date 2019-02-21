// Javascript Basic DOM by Hacktiv8 x DEVC

//VARIABLE AND DATA TYPE
var angka = 2;
var text = 'Hallo Text';
var boolean = true;

console.log(angka, text, boolean);

// Operator
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 <= 2);
console.log(1 == 'text');
console.log(1 != 2);
console.log(2 == 2);
console.log(2 == '2');
console.log(2 === '2');
console.log(2 !== '2');

//DOM
document.querySelector('h1').style.color = 'blue';

//Conditional
if (2 > 1) {
    "Yup Benar 2 Lebih dari 1";
} else {
    "Salah";
}

//Looping
for (var i = 0; i < 10; i++) {
    console.log('Looping for 10x');
}

// Math Methods

//Pembulatan Keatas
console.log(Math.ceil(2.2));
//Pembulatan Ke Bawah
console.log(Math.floor(2.2));
//Pembulatan Berdasarkan Koma Di Belakang
console.log(Math.round(2.2));
//Pemangkatan
console.log(Math.pow(2, 4));
// Random
console.log(Math.random() * 10);