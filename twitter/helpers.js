const cleanTweet = function (text) {
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

export default cleanTweet;