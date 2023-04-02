import issueTypes from './issue_types';

export default {
    welcome_message: {
        name: 'welcome_classification',
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
    },
    welcome_message_text: function (recipient, tweetText, tag, reference) {
        return `Hello ${recipient.name.split(" ")[0]}, we'd like to acknowledge your request for support. Please note, your reference number is ${reference}.\n\n${tweetText}\n\nBased on the information you provided, we think ${issueTypes[tag.name]} If this is correct please choose Yes, otherwise choose No.`;
    }
}