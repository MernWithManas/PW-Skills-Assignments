let name = "Manas";
let email = "yesthisismanas@gmail.com";
let age = "21";

if (typeof name !== "string") {
    console.log("Name should be a string")
} else if (typeof email !== "string") {
    console.log("Email should be a string")
} else if (typeof age !== "number") {
    console.log("Age should be a number")
} else {
    console.log("Everything looks fine.")
}