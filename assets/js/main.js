
const offset = 0
const limit = 0
const url = `https://pokeapi.co/api/v2/pokemon?offSet=${offset}&limit=${limit}`

fetch(url).then(function (response) {
    console.log(response)
})

const x = 10 + 10
console.log(x)
