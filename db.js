const Sequelize = require('sequelize');
//create the database connection. we'll export this out so we can use it in other places in the app
//be sure to edit to change 'natemaddrey' to your specific username
//'music-api' is the name of the database

const sequelizeConnection = new Sequelize('postgres://crazykiwi@localhost:5432/music-db');
// const sequelizeConnection = new Sequelize('postgres://tionna@localhost:5432/music-db');


//Test to see if the connection worked
sequelizeConnection
.authenticate()
.then((data) => console.log('Sequelize connection successful'))
.catch((err) => console.log('Unable to connect to the database:', err));

//export out the databsae connection to be used elsewhere (for example, creating models and accessing our database in our API)
module.exports = sequelizeConnection;
