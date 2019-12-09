function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(2);

console.log(myHouse instanceof House);