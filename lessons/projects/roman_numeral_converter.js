let numToRoman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};

function convertToRoman(num) {
    let res = '';
    let digit, pow10 = 1;
    while(num > 0) {
        digit = num % 10;
        switch(digit) {
            case 1:
                res = numToRoman[pow10] + res;
                break;
            case 2:
                res = numToRoman[pow10] + numToRoman[pow10] + res;
                break;
            case 3:
                res = numToRoman[pow10] + numToRoman[pow10] + numToRoman[pow10] + res;
                break;
            case 4:
                res = numToRoman[pow10] + numToRoman[5 * pow10] + res;
                break;
            case 5:
                res = numToRoman[5 * pow10] + res;
                break;
            case 6:
                res = numToRoman[5 * pow10] + numToRoman[pow10] + res;
                break;
            case 7:
                res = numToRoman[5 * pow10] + numToRoman[pow10] + numToRoman[pow10] + res;
                break;
            case 8:
                res = numToRoman[5 * pow10] + numToRoman[pow10] + numToRoman[pow10] + numToRoman[pow10] + res;
                break;
            case 9:
                res = numToRoman[pow10] + numToRoman[10 * pow10] + res;
                break;
        }
        num = Math.floor(num / 10);
        pow10 = 10 * pow10;
    }

    return res;
}

console.log(convertToRoman(1369));
