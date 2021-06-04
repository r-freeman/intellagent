import twitterClient from './client';
import fetch from 'node-fetch';
import defaultWelcomeMessage from './messages/default_welcome_message';
import config from './messages/config';

const twClient = twitterClient;

// creates a personalised welcome message for the customer
async function createWelcomeMessage({recipient, tweetText, tag, reference}) {
    try {
        defaultWelcomeMessage.welcome_message.message_data.text = defaultWelcomeMessage.welcome_message_text(recipient, tweetText, tag, reference);

        return await twClient.createWelcomeMessage(defaultWelcomeMessage);
    } catch (err) {
        console.error(err);
    }
}

function createDefaultWelcomeMessage({recipient, messageText, tag, reference}) {
    const message = config.default_message;
    message.event.message_create.target.recipient_id = recipient.twitter_id;
    message.event.message_create.message_data.text = config.default_message_text(recipient, messageText, tag, reference);

    return message;
}

function createDeeplink(recipient_id, welcome_message_id) {
    return `https://twitter.com/messages/compose?recipient_id=${recipient_id}&welcome_message_id=${welcome_message_id}`;
}

function createDefaultTweet(screen_name, deeplink) {
    return `Hello @${screen_name} 👋 I'll be happy to check this for you. Please click the button below to start a conversation. ${deeplink}`;
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

async function classifyText(text) {
    const response = await fetch(process.env.CLASSIFIER_ENDPOINT, {
        method: 'post',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({'utterance': text})
    });

    if (response.status === 200) {
        return await response.json();
    } else {
        return null;
    }
}

export {
    createWelcomeMessage,
    createDeeplink,
    createDefaultTweet,
    createDefaultWelcomeMessage,
    cleanTweet,
    classifyText
};