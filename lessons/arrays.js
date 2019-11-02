let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';
condiments = ['Mayo'];

console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
// Following code wouldn't work because it is a type of constant
// utensils = ['Spoon'];

console.log(utensils);