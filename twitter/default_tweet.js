module.exports = function defaultTweet(screenName, deeplink) {
    return `Hello @${screenName} 👋 I'll be happy to check this for you. Please click the button below to start a conversation. ${deeplink}`
};