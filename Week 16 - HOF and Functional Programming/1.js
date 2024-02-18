let input = "L.V Prasad"

function reversed() {
    return [...input].reverse().join("")
}

setTimeout(() => {
    console.log(reversed());
}, 2000);