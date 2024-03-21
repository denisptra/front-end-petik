const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// Filter, map , reduce
// mencari angka > 3 

/**
 * Filter 
 */

// // ada 2  cara untuk melakukan filter

// // ini no.1
// const filterNumber = numbers.filter((number) => number > 3);

// // ini no.2
// const filterNumber = numbers.filter((number) => {
//     return number > 3;
// });
// console.log(filterNumber);

/**
 * Map
 */

// const mapNumber = numbers.map((number) => number * 2);
// console.log(mapNumber);

/**
 * Reduce
 */

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
    );

    // accumulator = nilai hasil penjumlahan
    // currentValue = nilai saat ini
console.log(sum);