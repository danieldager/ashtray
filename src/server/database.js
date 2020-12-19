const sqlite3 = require('sqlite3').verbose();

export const database = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.log('Failed to connect to the database', err)
    } else {
        console.log('Succesfully connected to the database');
        database.run(`CREATE TABLE Posts (
            id INT PRIMARY KEY AUTOINCREMENT
            title VARCHAR(50)
            body VARCHAR(500)
        )`,
        (err) => {
            if (err) {
                console.log('Table already exists')
            }
        });
    }
});




