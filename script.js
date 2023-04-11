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

const res1 = removeUnnecessarySpaces("   HTML");
const res2 = removeUnnecessarySpaces("CSS ");
const res3 = removeUnnecessarySpaces("  JS  ");
const res4 = removeUnnecessarySpaces("    ");
const res5 = removeUnnecessarySpaces("  Hello   World  ");
console.log(`"${res1}"`);
console.log(`"${res2}"`);
console.log(`"${res3}"`);
console.log(`"${res4}"`);
console.log(`"${res5}"`);