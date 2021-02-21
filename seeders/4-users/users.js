const bson = require('bson');
const faker = require('faker');
const roles = require('../1-roles/roles');

const [agent, manager, admin] = roles;
const numAgents = 30;
const numManagers = 5;
const numAdmins = 1;

const users = [];

function createUsers(numUsers, role) {
    for (let i = 0; i < numUsers; i++) {
        let user = {};

        user.name = faker.name.findName();
        user.email = faker.internet.exampleEmail();
        user.phone = faker.phone.phoneNumber();
        user.password = 'secret';
        user.role = new bson.ObjectId(role._id);

        users.push(user);
    }
}

// invoke createUsers for each role
createUsers(numAgents, agent);
createUsers(numManagers, manager);
createUsers(numAdmins, admin);

module.exports = users;