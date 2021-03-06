// comment here
module.exports = {
    welcome_message: {
        name: 'welcome_classification',
        message_data: {
            text: undefined,
            quick_reply: {
                type: 'options',
                options: [
                    {
                        label: 'Yes',
                        metadata: 'correct_issue_type'
                    },
                    {
                        label: 'No',
                        metadata: 'incorrect_issue_type'
                    }
                ]
            }
        }
    }
};
