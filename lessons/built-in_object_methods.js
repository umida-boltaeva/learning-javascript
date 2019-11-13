const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

const robotKeys = Object.keys(robot);

console.log(robotKeys);


// const robotEntries = Object.entries(robot);
for (let [key, value] of Object.entries(robot)) {
    console.log(`${key}: ${value}`);
}

// console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({
    robot
}, {
    laserBlaster: true,
    voiceRecognition: true
});

console.log(newRobot);