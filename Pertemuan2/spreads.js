/**
 * Spread syntax digunakan untuk memisahkan array atau obejct menjadi 1 item (single value)
 * notasinya adalah ... (titik tiga)
 */

const fruits = ["Apel", "Anggur"];

const newFruits = [...fruits, "Mangga", "lemon"];

//ini jika tidak menggunakan spread oprattor maka akan mejandi array
console.log(fruits); 
// hasil  : [ 'Apel', 'Anggur' ]

//ini jika menggunakan spread oprator dengan menggunakan ... (titik tiga) di belakang nya
console.log(...fruits); 
// hasil : Apel Anggur

// ini jika ingin menambahkan atau menggabungkan keduanya dengan menggunakan spread oprator
console.log(newFruits);


// SPREADS OBEJCT


const user = {
    name: "Budi Santoso",
    major: "Informatics"
};

const newUser = {
    ...user,
    age: 20
};

console.log(newUser);