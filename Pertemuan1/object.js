// membuat object : {}
const user = {
    name: "Ucup",
    age: 20,
    major: "Web Development"
};

//cara pemanggilannya
// console.log(user.name); //ini adalah cara yang digunakan Javascript modern lebih simple sama seperti di PHP yaitu menggunakan tanda panah user->name
// console.log(user["age"]);

// Looping object menggunakan  for...in
for (const key in user) console.log(user[key]);