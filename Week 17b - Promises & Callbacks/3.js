let person = {
    firstName: "Manas Kumar",
    lastName: "Sahu",
    age : 21
}

function ageInDays(person, callback) {
    let fullName = `${person.firstName} ${person.lastName}`;
    let ageInDays = person.age * 365;
    callback(fullName, ageInDays);
}

function logResult(fullName, ageInDays) {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
}

ageInDays(person, logResult);