import twitterClient from './client';

const twClient = twitterClient;
const defaultTweet = require('./default_tweet');

const tweetProcessor = {
    deeplinkWelcomeMessage: function (recipientId, welcomeMessageId) {
        return `https://twitter.com/messages/compose?recipient_id=${recipientId}&welcome_message_id=${welcomeMessageId}`;
    },
    process: async function (event) {
        // get our user
        const user = await twitterClient.getUser();

        // retrieve the first tweet in the array
        const tweet = event.tweet_create_events.shift();

        // get the sender id, name and screen name from the tweet
        const sender = {
            id: tweet.user.id,
            name: tweet.user.name,
            screenName: tweet.user.screen_name
        };

        // return if the sender is the same as our user
        if (sender.id === user.id) return;

        try {
            await twClient.replyToTweet(defaultTweet(sender.screenName,
                this.deeplinkWelcomeMessage(user.id_str, require('./default_welcome_message_id'))), tweet.id_str);
        } catch (e) {
            console.error(e);
        }
    }
};

export default tweetProcessor;