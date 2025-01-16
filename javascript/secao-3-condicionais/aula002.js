// fasly e truthy
// falsy = false, 0, "", NaN, null, undefined
// truthy = Todos os outros diferentes do [ falsy ]

if (null) {
    console.log("Bom dia!")
} else {
    console.log("Boa noite!")
}

if (!null) {
    console.log("Falsy or False")
}