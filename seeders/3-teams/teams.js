const bson = require('bson');
const tags = require('../2-tags/tags');

// filters out tag ids from an array of tag names
function filterTagIds(tagNames) {
    return tags.filter(tag => tagNames.includes(tag.name)).map(tag => tag._id);
}

// get the tag ids relating to billing team
const billingTagIds = filterTagIds(['payment', 'refunds', 'cancellation_fee', 'invoices']);

// get the tag ids relating to fulfillment team
const fulfillmentTagIds = filterTagIds(['shipping', 'delivery', 'order']);

// get the tag ids relating to general team
const generalTagIds = filterTagIds(['account', 'feedback', 'newsletter', 'contact']);

const teams = [
    {
        name: 'billing',
        description: 'This is the billing team',
        tags: billingTagIds
    },
    {
        name: 'fulfillment',
        description: 'This is the fulfillment team',
        tags: fulfillmentTagIds
    },
    {
        name: 'general',
        description: 'This is the general team',
        tags: generalTagIds
    }
];

module.exports = teams;
