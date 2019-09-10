const repeatString = function (str, times) {
    let repeatedString = "";
    if (times < 0) {
        return "ERROR"
    }
    while (times > 0) {
      repeatedString = repeatedString + str;
      times--;
    }
    return repeatedString;
}
module.exports = repeatString