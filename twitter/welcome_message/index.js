import twitterClient from '../client';
import welcomeMessageText from './welcome_message_text';

const twClient = twitterClient;
const welcomeMessageBody = require('./welcome_message_body');

const welcomeMessage = {
    create: async function ({sender, tweetText, tag}) {
        try {
            welcomeMessageBody.welcome_message.message_data.text = welcomeMessageText(sender, tweetText, tag);

            return await twClient.createWelcomeMessage(welcomeMessageBody);
        } catch (err) {
            console.error(err);
        }
    }
}

export default welcomeMessage;