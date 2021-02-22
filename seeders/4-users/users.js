const faker = require('faker');
const roles = require('../1-roles/roles');
const teams = require('../3-teams/teams');

const [agent, manager, admin] = roles;
const [billingTeam, fulfillmentTeam, accountsTeam] = teams;

const numBillingAgents = 10;
const numFulfillmentAgents = 10;
const numAccountsAgents = 10;

const numManagers = 5;
const numAdmins = 1;

const users = [];

function createUsers(numUsers, role, team = null) {
    for (let i = 0; i < numUsers; i++) {
        let user = {};

        user.name = faker.name.findName();
        user.email = faker.internet.exampleEmail();
        user.phone = faker.phone.phoneNumber();
        user.password = '$2b$10$liAPhwoKUFg7ij55UwLdm.AUSCEfCMQME/oxtophd5n58shY0KNq2';
        user.role = role._id;
        user.team = team ? team._id : null;

        users.push(user);
    }
}

// invoke createUsers for each role
createUsers(numBillingAgents, agent, billingTeam);
createUsers(numFulfillmentAgents, agent, fulfillmentTeam);
createUsers(numAccountsAgents, agent, accountsTeam);

createUsers(numManagers, manager);
createUsers(numAdmins, admin);

module.exports = users;