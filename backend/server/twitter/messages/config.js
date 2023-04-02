import issueTypes from './issue_types';

export default {
    default_message: {
        event: {
            type: 'message_create',
            message_create: {
                target: {
                    recipient_id: undefined
                },
                message_data: {
                    text: undefined,
                    quick_reply: {
                        type: 'options',
                        options: [
                            {
                                label: 'Yes',
                                metadata: 'correct_issue_type_response',
                            },
                            {
                                label: 'No',
                                metadata: 'incorrect_issue_type_response'
                            }
                        ]
                    }
                }
            }
        }
    },
    default_message_text: function (recipient, messageText, tag, reference) {
        return `Hello ${recipient.name.split(" ")[0]}, we'd like to acknowledge your request for support. Please note, your reference number is ${reference}.\n\n${messageText}\n\nBased on the information you provided, we think ${issueTypes[tag.name]} If this is correct please choose Yes, otherwise choose No.`;
    },
    message_files: [
        'correct_issue_type_response',
        'incorrect_issue_type_response'
    ]
};