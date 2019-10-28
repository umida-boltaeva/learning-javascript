var plantNeedsWater = function (day) {
    if (day === 'Wednesday' || day === 'Thursday') {
        return true;
    } else if (day === 'Monday') {
        return 'Wait for Wednesday!';
    } else {
        return 'invalid day';
    }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));