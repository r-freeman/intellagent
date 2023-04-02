// https://github.com/twitterdev/twitter-webhook-boilerplate-node/tree/master/messages
import config from './config';

const message_events = [];
const messages = {};

messages.add = function (message) {
    if (message_events[message.metadata_trigger]) {
        throw `Message already added for ${message.metadata_trigger}`;
    }

    message_events[message.metadata_trigger] = message.message_event;
};

messages.get = async function (metadata_trigger, recipient_id) {
    try {
        let message = config.default_message;

        if (message_events[metadata_trigger]) {
            message = message_events[metadata_trigger];
        }

        message.event.message_create.target.recipient_id = recipient_id;

        if (typeof message.hook !== 'undefined') {
            message = await message.hook(message.event, recipient_id);
        }

        return message;
    } catch (err) {
        console.error(err);
    }
};

config.message_files.forEach(function (file) {
    messages.add(require(`./${file}.js`));
});

messages.add({
    metadata_trigger: 'default_message',
    message_event: config.default_message
})

export {messages};
