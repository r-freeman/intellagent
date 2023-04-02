const bson = require("bson");

const tags = [
    {
        _id: new bson.ObjectId("60318ca16eaa2755044b2a1b"),
        name: 'feedback',
        description: 'This is the feedback tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbe5"),
        name: 'order',
        description: 'This is the order tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbe6"),
        name: 'contact',
        description: 'This is the contact tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbe7"),
        name: 'payment',
        description: 'This is the payment tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbe8"),
        name: 'cancellation_fee',
        description: 'This is the cancellation fee tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbe9"),
        name: 'account',
        description: 'This is the account tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbea"),
        name: 'invoices',
        description: 'This is the invoices tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbeb"),
        name: 'refunds',
        description: 'This is the refunds tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbec"),
        name: 'delivery',
        description: 'This is the delivery tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbed"),
        name: 'newsletter',
        description: 'This is the newsletter tag'
    },
    {
        _id: new bson.ObjectId("60327a8b54d114303876bbee"),
        name: 'shipping',
        description: 'This is the shipping tag'
    },
];

module.exports = tags;