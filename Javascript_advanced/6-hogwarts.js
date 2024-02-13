// Create one variable named harry, that is an instance of studentHogwarts:
    // Set the name of the object to Harry
    // Reward the student four times
    // Log to the console the name and score

// Create one variable named draco, that is an instance of studentHogwarts:
    // Sets the name of the object to Draco
    // Reward the student one time
    // Penalize the student three times
    // Log to the console the name and score

let privateScore = 0;
let name = null;

function changeScoreBy(points) {
    privateScore += points;
};

const studentHogwarts = {
    setName: function(newName) {
        name = newName;
    },
    rewardStudent: function() {
        changeScoreBy(1);
    },
    penalizeStudent: function() {
        changeScoreBy(-1);
    },
    getScore: function() {
        return `${name}: ${privateScore}`;
    }
};

let harry = Object.create(studentHogwarts);
harry.setName('Harry');
for(let i=0; i <4; i++) {
    harry.rewardStudent();
};
console.log(harry.getScore());

let draco = Object.create(studentHogwarts);
draco.setName('Draco');
draco.rewardStudent();
for(let i=0; i <3; i++) {
    draco.penalizeStudent();
};
console.log(draco.getScore());