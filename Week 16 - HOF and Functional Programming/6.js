
function validLinkedinProfile(url) {
    let regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (url = regex) {
        console.log("This is a valid LinkedIn Profile")
    } else {
        console.log("Invalid Profile !!");
    }
}

validLinkedinProfile("https://www.linkedin.com/in/manas-kumar-sahu-abb383155/")