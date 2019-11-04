const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(number => {
    return number < 250;
});
console.log(smallNumbers);
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
});
console.log(longFavoriteWords);
console.log(favoriteWords);