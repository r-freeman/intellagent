import {assignTicket} from './hooks';

module.exports = {
    metadata_trigger: 'correct_issue_type_response',
    message_event: {
        event: {
            type: 'message_create',
            message_create: {
                target: {
                    recipient_id: undefined
                },
                message_data: {
                    text: undefined
                }
            }
        },
        hook: assignTicket
    },
}