function removeUnnecessarySpaces(str) {
    const len = str.length;
    let startIndex = 0;
    let endIndex = len - 1;
    let resultStr = "";

    while (str[startIndex] == " ") startIndex++;
    while (str[endIndex] == " ") endIndex--;

    while (startIndex <= endIndex) {
        if (str[startIndex] != " " || str[startIndex + 1] != " ") {
            resultStr += str[startIndex];
        }
        startIndex++;
    }

    return resultStr;
}