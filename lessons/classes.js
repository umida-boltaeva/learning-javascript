class Surgeon {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
console.log(surgeonDurant.department);