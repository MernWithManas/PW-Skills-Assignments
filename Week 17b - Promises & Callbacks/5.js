function greet(name){
    return new Promise((resolve) => {
        let greeting = `Hello, ${name} !`;
        resolve(greeting);
    });
}

greet("Manas").then((greeting) => console.log(greeting));
