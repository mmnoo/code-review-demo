// exercize ignores validation

const numberToHex = number => Math.round(number).toString(16);
const hexToNumber = hex => parseInt(hex, 16);
const sumReducer = (accumulator, number) => accumulator + number;
const average = (...numbers) => numbers.reduce(sumReducer)/numbers.length;
const averageRounded = (...numbers) => Math.round(average(...numbers));
const splitHexColor = (color) => [color.slice(0, 2), color.slice(2, 4), color.slice(4, 6)];
const averageHexColor = (color1, color2) => {
    const rgb1 = splitHexColor(color1).map(color => hexToNumber(color));
    const rgb2 = splitHexColor(color2).map(color => hexToNumber(color));
    const redHex = numberToHex(averageRounded(rgb1[0], rgb2[0]));
    const greenHex = numberToHex(averageRounded(rgb1[1], rgb2[1]));
    const blueHex = numberToHex(averageRounded(rgb1[2], rgb2[2]));

    return redHex + greenHex + blueHex;
}

const testNumberToHex1 = numberToHex(255);
const testNumberToHex2 = numberToHex(43.4);
const testNumberToHex3 = numberToHex(43.6);
console.assert(testNumberToHex1 === 'ff', testNumberToHex1);
console.assert(testNumberToHex2 === '2b', testNumberToHex2);
console.assert(testNumberToHex3 === '2c', testNumberToHex3);

const testHexToNumber1 = hexToNumber('ff');
const testHexToNumber2 = hexToNumber('2b');
const testHexToNumber3 = hexToNumber('2c');
console.assert(testHexToNumber1 === 255, testHexToNumber1);
console.assert(testHexToNumber2 === 43, testHexToNumber2);
console.assert(testHexToNumber3 === 44, testHexToNumber3);

const testAverage1 = average(1, 2, 3, 4, 5);
const testAverage2 = average(-1, 2, 3, 4, 5);
console.assert(testAverage1 === 3, testAverage1);
console.assert(testAverage2 === 2.6, testAverage2);

const testAverageRounded1 = averageRounded(-1, 2, 3, 4, 5);
const testAverageRounded2 = averageRounded(-1, 2, 3, 4, 4);
console.assert(testAverageRounded1 === 3, testAverageRounded1);
console.assert(testAverageRounded2 === 2, testAverageRounded2);

const testSplitHexColor1 = splitHexColor('017b5f');
console.assert(testSplitHexColor1[0] === '01', testSplitHexColor1);
console.assert(testSplitHexColor1[1] === '7b', testSplitHexColor1);
console.assert(testSplitHexColor1[2] === '5f', testSplitHexColor1);

const testAverageHexColor1 = averageHexColor('ff2b2c', 'fe2a2b');
const testAverageHexColor2 = averageHexColor('3300ff', '99cc33');
const testAverageHexColor3 = averageHexColor('336699', 'ff00ff');

console.assert(testAverageHexColor1 === 'ff2b2c', testAverageHexColor1);
console.assert(testAverageHexColor2 === '666699', testAverageHexColor2);
console.assert(testAverageHexColor3 === '9933cc', testAverageHexColor3);

