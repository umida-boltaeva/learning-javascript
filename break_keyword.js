let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
for (let i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
    if (groceryList[i] === 'pasta') {
        break;
    }
}
console.log('that is the end of the list');