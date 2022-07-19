let wrapper = document.querySelector(".wrapper");
let generateBtn = wrapper.querySelector(".form button");
let qrInput = wrapper.querySelector(".form input");
let qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click" , () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&size=150x150`;
    qrImg.addEventListener("load" , () => {
        wrapper.classList.add("active")
        generateBtn.innerText = "Generate QR Code";
    })
});
qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});