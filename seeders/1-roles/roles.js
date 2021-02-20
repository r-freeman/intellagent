const bson = require('bson');

// ids are hardcoded here because modules are loaded synchronously
// and we can't get the roles asynchronously from the users seeder
const roles = [
    {
        _id: new bson.ObjectID("60318ca16eaa2755044b2a1b"),
        name: "agent",
        description: "This is the role for the agent user"
    },
    {
        _id: new bson.ObjectID("60318ca16eaa2755044b2a1c"),
        name: "manager",
        description: "This is the role for the manager user"
    },
    {
        _id: new bson.ObjectID("60318ca16eaa2755044b2a1d"),
        name: "admin",
        description: "This is the role for the admin user"
    }
]

module.exports = roles;