function emailTest (email) {
    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if (valid) {
        return true;
    } else return false;
}

module.exports = emailTest;