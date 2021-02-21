const tagNames = [
    'feedback', 'order', 'contact', 'payment', 'cancellation_fee',
    'account', 'invoices', 'refunds', 'delivery', 'newsletter', 'shipping'
];

const tags = tagNames.map(tag => {
    return {
        name: tag,
        description: `This is the ${tag} tag`
    }
});

module.exports = tags;