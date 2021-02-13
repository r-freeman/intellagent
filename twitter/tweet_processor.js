import twitterClient from './client';

const twClient = twitterClient;
const defaultTweet = require('./default_tweet');

const tweetProcessor = {
    deeplinkWelcomeMessage: function (recipientId, welcomeMessageId) {
        return `https://twitter.com/messages/compose?recipient_id=${recipientId}&welcome_message_id=${welcomeMessageId}`;
    },
    process: async function (event) {
        try {
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

            // we're only interested in tweets sent to us, not replies to tweets
            if (tweet.in_reply_to_status_id !== null) return;

            console.log(`Tweet received from @${sender.screenName}`);
            console.log(tweet);

            try {
                // send a reply to the tweet, inviting the user to a direct message conversation
                await twClient.replyToTweet(defaultTweet(sender.screenName,
                    this.deeplinkWelcomeMessage(user.id_str, require('./default_welcome_message_id'))), tweet.id_str);
            } catch (e) {
                console.error(e);
            }
        } catch (e) {
            console.error(e);
        }
    }
};

export default tweetProcessor;