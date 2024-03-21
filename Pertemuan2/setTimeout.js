function download(callbackVerify) {
    setTimeout(() => {
        console.log("Download selama 3 detik");
        callbackVerify();
    }, 3000);
}

function verify(callbackNotify) {
    setTimeout(() => {
        console.log("Verify selama 2 detik");
        callbackNotify();
    }, 2000);
}

function notify() {
    setTimeout(() => {
        console.log("Download Selesai");
    }, 1000);
}

function main() {
    // solusinya menggunakan callback
    download(function() {
        verify(function() {
            notify();
        });
    });
}

main();