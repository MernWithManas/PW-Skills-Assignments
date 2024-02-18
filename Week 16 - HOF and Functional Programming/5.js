
let regex = /^(https?:\/\/)[a-zA-Z0-9-._]+[.][a-zA-Z]+$/;

function validUrl(url) {
    if (url = regex) {
        console.log("The URL is valid");
    } else {
        console.log("The URL is invalid !");
    }
}

validUrl("https://www.youtube.com/results?search_query=regex+for+url")