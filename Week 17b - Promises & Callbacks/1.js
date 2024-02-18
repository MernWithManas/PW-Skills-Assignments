let doubled = (array, multiply) => {
        let multiplication = phoneNumber.map((number) => {
            return multiply(number);
        });
        return multiplication;
}

function multiply(number) {
    return number * 2 ;
}

let phoneNumber = [8, 3, 2, 7, 7]

let newNumber = doubled(phoneNumber, multiply);

console.log(newNumber);


