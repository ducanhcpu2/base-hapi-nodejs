

const message = {
    200 : "Success!",
    500: "Server error.",
    400: "Bad Request.",
    2: "lỗi token!"
}
response = function(code) {
    return message[code]
}

module.exports = {
    response
}
