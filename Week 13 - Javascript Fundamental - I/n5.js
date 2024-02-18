let delivery = "overnight";

switch (delivery){
    case "standard":
        console.log("Estimated delivery 3-5 days.")
        break;
    case "express":
        console.log("Estimated delivery 1-2 days.")
        break;
    case "overnight":
        console.log("Estimated delivery tomorrow.")
        break;
    default:
        console.log("Package type incorrect ! Try again.")
}
