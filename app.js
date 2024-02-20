let qrInput = document.getElementById("qr-input");
let qrImg = document.getElementById("qr-img");
let qrBtn = document.getElementById("qr-btn");

console.log(qrBtn, qrImg, qrInput)/

qrBtn.addEventListener("click", () => {
    
    let inputValue = qrInput.value;
    
    if(!inputValue){
        alert("Please Enter Value First")
    }else{

        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        qrImg.alt = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    
    }



})