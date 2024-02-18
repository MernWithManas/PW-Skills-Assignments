const username = ["Manas", "Anas", "Asad", "Mithun", "Alakh"];

function isUserPresent(user) {
    if (username.includes(user)) {
        console.log(`Yes, ${user} is a valid user.`);
        return true;
    }   else {
        console.log(`No, ${user} is not a valid user.`);
        return true;
    }
}

isUserPresent("Mithun");
isUserPresent("Someone");