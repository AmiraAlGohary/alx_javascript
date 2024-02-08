const request = require('request');

const url = process.argv[2];


request.get(url, (error, response, body) => {
    if (error) {
        console.error('error:', error)
        return;
    }
    
    const todos = JSON.parse(body);
    const completedTasksByUserId = {};

    todos.forEach(todo => {
        if (todo.completed) {
            const userId = todo.userId;
            completedTasksByUserId[userId] = (completedTasksByUserId[userId] || 0) + 1;
        }
    });

    console.log(completedTasksByUserId);

});

// Object.keys(completedTasksByUserId).forEach(userId => {
//     console.log(`${userId}: ${completedTasksByUserId[userId]}`);
// });