const faker = require("faker");
const roles = require("../1-roles/roles");
const teams = require("../3-teams/teams");
const {generateHashSalt} = require("../../passport/helpers");

const [agent, manager, admin] = roles;
const [billingTeam, fulfillmentTeam, accountsTeam] = teams;

const numBillingAgents = 1;
const numFulfillmentAgents = 1;
const numAccountsAgents = 1;

const numManagers = 1;
const numAdmins = 1;

const users = [];
const photos = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
];

function createUsers(numUsers, role, team = null) {
    for (let i = 0; i < numUsers; i++) {
        let user = {};
        const {salt, hash} = generateHashSalt('secret');

        user.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        user.email = faker.internet.exampleEmail().toLowerCase();
        user.phone = faker.phone.phoneNumber();
        user.photo = photos.pop();
        user.hash = hash;
        user.salt = salt;
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