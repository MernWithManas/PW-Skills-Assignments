const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },
];

let theResult = (name) => {
    for (let theName of students) {
        if  (theName.name === name) {
            return theName.marks > 90
            ? console.log(`Congratulations ${theName.name}! You have cleared the exam`)
            : console.log(`${theName.name}! You have successfully failed`);
        }
    }
    console.log(`Invalid User !`);
};

theResult("Farman");
theResult("Shivam");
theResult("Andrew");