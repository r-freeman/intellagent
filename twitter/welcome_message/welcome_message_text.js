const tagResponses = require('./tag_responses');

const welcomeMessageText = function (recipient, tweetText, tag, reference) {
    return `Hello ${recipient.name.split(" ")[0]}, we'd like to acknowledge your request for support. Please note, your reference number is ${reference}.\n\n${tweetText}\n\nBased on the information you provided, we think ${tagResponses[tag.name]} If this is correct please choose Yes, otherwise choose No.`;
};

export default welcomeMessageText;