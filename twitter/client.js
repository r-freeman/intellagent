import Twitter from 'twitter-lite';

const twitterClient = (function () {
        const VERIFY_CREDENTIALS = 'account/verify_credentials',
            STATUS_UPDATE = 'statuses/update',
            NEW_DIRECT_MESSAGE = 'direct_messages/events/new';

        // initialise the twitter client
        const client = new Twitter({
            subdomain: 'api',
            version: '1.1',
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });

        return {
            // verifies our credentials and returns the user
            getUser: async function () {
                try {
                    return await client.get(VERIFY_CREDENTIALS);
                } catch (e) {
                    console.error(e);
                }
            },
            // sends a response to a public tweet
            replyToTweet: async function (tweetText, tweetId) {
                try {
                    await client.post(STATUS_UPDATE, {
                        status: tweetText,
                        in_reply_to_status_id: tweetId
                    });
                } catch (e) {
                    console.error(e);
                }
            },
            // sends a direct message to a given recipient
            sendDirectMessage: async function (messageText, recipientId) {
                try {
                    await client.post(NEW_DIRECT_MESSAGE, {
                        event: {
                            type: "message_create",
                            message_create: {
                                target: {
                                    recipient_id: recipientId
                                },
                                message_data: {
                                    text: messageText
                                }
                            }
                        }
                    });
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }
)();

export default twitterClient;