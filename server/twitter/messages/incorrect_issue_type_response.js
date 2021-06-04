module.exports = {
    metadata_trigger: 'incorrect_issue_type_response',
    message_event: {
        event: {
            type: 'message_create',
            message_create: {
                target: {
                    recipient_id: undefined
                },
                message_data: {
                    text: 'Sorry I was unable to determine',
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
    }
}