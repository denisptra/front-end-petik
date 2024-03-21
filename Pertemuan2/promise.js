function download() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Download selama 3 detik");
        }, 3000);
    });
}

function verify() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Verify selama 2 detik");
        }, 2000);
    });
}

function notify() {
    console.log("Download Selesai");
}

function main() { 
    download().then((hasil) => {
        console.log(hasil);

        verify()
            .then((hasil) => {
                console.log(hasil);

                notify();
            })
            .catch((error) => {
                console.log(error);
            });
    });
}

// keyword async memberi tahu bahwa ada oprasi asynchronous di dalamnya
// async function main() {
//     // solusinya pengganti then catch promise bisa mengguanakan pengganti async await
//     console.log(await download());
//     console.log(await verify());
//     notify();
// }

// main();