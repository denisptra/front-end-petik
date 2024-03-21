// Destructing Object
const user = {
    name: "Budi Santoso",
    age: 20,
    major: "Informatics"
}

// ada berbagai macam cara:
//1.destructing objek berdasarkan key
// const { name, age, major } = user;
// console.log(name);

// 2. Cara yang yang ini digunakan untuk custom nama variable
const nama = user.name;
const umur = user.age;
const jurusan = user.major;

console.log(jurusan);