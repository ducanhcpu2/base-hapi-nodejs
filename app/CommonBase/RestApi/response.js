

const message = {
    200 : "Success!",
    500: "Server error."
}
response = function(code) {
    return message[code]
}

module.exports = {
    response
}
