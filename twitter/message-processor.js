const messageProcessor = {
    process: async function (message, sender) {
        return new Promise((resolve, reject) => {
            // check if the message is valid
            if (typeof message === 'undefined' || typeof message.message_create) {
                reject(false);
            }

            // check if recipient is not the same as the sender
            if (sender.id === message.message_create.target.recipient_id) {
                reject(false);
            }


        });
    },
};

export default messageProcessor;