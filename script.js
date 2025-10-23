// import CryptoJS from "https://cdn.jsdelivr.net/npm/crypto-js@4.2.0/+esm";

function encryptData(plainText, secretKey) {
    const key = CryptoJS.enc.Utf8.parse(secretKey);
    const encrypted = CryptoJS.AES.encrypt(plainText, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
return encrypted.toString();
}

function decryptData(cipherText, secretKey) {
    const key = CryptoJS.enc.Utf8.parse(secretKey);
    const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

window.encrypt = function() {
    const plainText = document.getElementById("inputMessage").value;
    const key = document.getElementById("inputKey").value;
    const encryptedMessage = encryptData(plainText, key);
    document.getElementById("outputDisplay").innerText = encryptedMessage;
}

window.decrypt = function() {
    const cipherText = document.getElementById("inputMessage").value;
    const key = document.getElementById("inputKey").value;
    const decryptedMessage = decryptData(cipherText, key);
    document.getElementById("outputDisplay").innerText = decryptedMessage;
}


