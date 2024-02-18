let usdStore = [
    {
        Product: "Biscuit",
        usdPrice: "1"
    },
    {
        Product: "Headphone",
        usdPrice: "53"
    },
    {
        Product: "DataCard",
        usdPrice: "6"
    },
    {
        Product: "Macbook",
        usdPrice: "1136"
    },
    {
        Product: "Blazer",
        usdPrice: "24"
    }
]

let usdToInrPrice = 80;

function inrConverter(usdPrice) {
    return usdPrice * usdToInrPrice;
}

let inrStore = usdStore.map((assets) => ({
    ...assets,
    inrPrice: inrConverter(assets.usdPrice)
}))

console.log(inrStore);