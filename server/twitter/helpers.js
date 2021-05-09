import twitterClient from './client';

const twClient = twitterClient;

const issueTypes = {
    'account': 'this relates to an account problem.',
    'invoices': 'this is a billing issue.',
    'feedback': 'you would like to leave some feedback.',
    'order': 'the problem relates to an existing order.',
    'refunds': 'you are inquiring about a refund.',
    'delivery': 'you want to know the status of your delivery.',
    'newsletter': 'you are looking for information about our newsletter.',
    'shipping': 'you have a question related to shipping.',
    'contact': 'you would like to speak to a human.',
    'payment': 'your question relates to payments.',
    'cancellation_fee': 'you have a question about the cancellation fee.'
}

const welcomeMessageBody = {
    welcome_message: {
        name: 'welcome_classification',
        message_data: {
            text: undefined,
            quick_reply: {
                type: 'options',
                options: [
                    {
                        label: 'Yes',
                        metadata: 'correct_issue_type'
                    },
                    {
                        label: 'No',
                        metadata: 'incorrect_issue_type'
                    }
                ]
            }
        }
    }
}

function welcomeMessageText(recipient, tweetText, tag, reference) {
    return `Hello ${recipient.name.split(" ")[0]}, we'd like to acknowledge your request for support. Please note, your reference number is ${reference}.\n\n${tweetText}\n\nBased on the information you provided, we think ${issueTypes[tag.name]} If this is correct please choose Yes, otherwise choose No.`;
}

// creates a personalised welcome message for the customer
async function createWelcomeMessage({recipient, tweetText, tag, reference}) {
    try {
        welcomeMessageBody.welcome_message.message_data.text = welcomeMessageText(recipient, tweetText, tag, reference);

        return await twClient.createWelcomeMessage(welcomeMessageBody);
    } catch (err) {
        console.error(err);
    }
}

function createDeeplink(recipient_id, welcome_message_id) {
    return `https://twitter.com/messages/compose?recipient_id=${recipient_id}&welcome_message_id=${welcome_message_id}`;
}

function createDefaultTweet(screen_name, deeplink) {
    return `Hello @${screen_name} 👋 I'll be happy to check this for you. Please click the button below to start a conversation. ${deeplink}`;
}

function createDefaultMessage(agent) {
    return `Thank you for confirming, ${agent.name.split(" ")[0]} from our ${agent.team} team will assist you shortly.`;
}

function cleanTweet(text) {
    // global, case insensitive, multiline
    const flags = 'gim';
    // regular expressions for 2 or more spaces, urls, username mentions and hashtags
    const spaces = new RegExp('\\s{2,}', flags);
    const urls = new RegExp('https?:\/\/[www]?[a-zA-Z0-9_-]+[.a-zA-Z]+([\/a-z0-9A-Z-?=_]+)', flags);
    const mentions = new RegExp('(\@[a-zA-Z0-9_%]*)', flags);
    const hashtags = new RegExp('\\B#([a-z0-9]{2,})(?![~!@#$%^&*()=+_`\\-\\|\\/\'\\[\\]\\{\\}]|[?.,]*\\w)', flags);

    // replace any matches with empty string
    text = text.replace(spaces, '');
    text = text.replace(urls, '');
    text = text.replace(mentions, '');
    text = text.replace(hashtags, '');

    // remove any remaining leading/trailing whitespace
    text = text.trim();
    return text;
}

export {
    createWelcomeMessage,
    createDeeplink,
    createDefaultTweet,
    createDefaultMessage,
    cleanTweet
};