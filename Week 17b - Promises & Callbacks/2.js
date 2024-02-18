function manipulateString(string, callback) {
    let manipulated = string.toUpperCase();
    callback(manipulated);
}

function logString(manipulated) {
    console.log(`The manipulated string is: ${manipulated}`);
}

manipulateString("hello world!", logString);