const nilai = prompt("Masukkan Nilai Kamu :");

// hanya menggunakan satu baris saja
// if (nilai > 70) console.log("Mengikuti Ujian");

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80 && nilai <= 89) {
    console.log("B");
} else if (nilai >= 70 && nilai <= 79) {
    console.log("C");
} else if (nilai >= 60 && nilai <= 69) {
    console.log("D");
};