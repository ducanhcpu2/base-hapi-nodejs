

const message = {
    200 : "Success!",
    500: "Server error.",
    400: "Bad Request.",
    2: "lỗi token!",
    3: "sai tên đăng nhập hoặc mật khẩu",
    4: "Bạn không có quyền truy cập"
}
response = function(code) {
    return message[code]
}

module.exports = {
    response
}
