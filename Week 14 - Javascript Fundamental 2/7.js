function generateOtp() {
    const minNumber = 1000;
    const maxNumber = 9999;
    const otp = Math.floor(Math.random() * (maxNumber-minNumber)+ minNumber);
    return otp.toString();
}

console.log(`Here is your otp: ${generateOtp()}`);