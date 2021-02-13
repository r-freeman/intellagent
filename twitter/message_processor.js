import twitterClient from './client';

const twClient = twitterClient;

const messageProcessor = {
    process: async function (event) {
        try { // get our user
            const user = await twitterClient.getUser();

            // grab the first message in the array
            const message = event.direct_message_events.shift();

            // get the sender id, name and screen name from the message
            const sender = {
                id: message.message_create.sender_id,
                name: event.users[message.message_create.sender_id].name,
                screenName: event.users[message.message_create.sender_id].screen_name
            };

            // return if the sender is the same as our user
            if (sender.id === user.id) return;

            const messageId = message.id;
            const recipientId = message.message_create.target.recipient_id;


            // try {
            //     let response = await twClient.sendDirectMessage(`Hello ${sender.name}!`, sender.id);
            //     console.log(response);
            // } catch (e) {
            //     console.error(e);
            // }
        } catch (e) {
            console.error(e);
        }
    }
};

export default messageProcessor;