function numberTest(num) {
    if (!isNaN(num) && num !== "") return true;
    else return false;
}

module.exports = numberTest;