import twitterClient from './client';

import Ticket from '../models/ticket.model';
import Team from '../models/team.model';

const twClient = twitterClient;

const messageProcessor = {
    process: async function (event) {
        try {
            // get our user
            const user = await twClient.getUser();

            // grab the first message in the array
            const message = event.direct_message_events.shift();

            // get the sender id, name and screen name from the message
            const sender = {
                name: event.users[message.message_create.sender_id].name,
                twitter_id: message.message_create.sender_id,
                twitter_screen_name: event.users[message.message_create.sender_id].screen_name
            };

            // return if the sender is the same as our user
            if (sender.twitter_id === user.id) return;

            console.log(`Message received from @${sender.twitter_screen_name}`);
            console.log(message.message_create.message_data);

            console.log(message);

            if (message.hasOwnProperty('initiated_via') && message.initiated_via.hasOwnProperty('welcome_message_id')) {
                const welcomeMessageId = message.initiated_via.welcome_message_id;

                if (message.message_create.message_data.hasOwnProperty('quick_reply_response')) {
                    const metadata = message.message_create.message_data.quick_reply_response.metadata;
                    const ticket = await Ticket.findByWelcomeMessageId(welcomeMessageId);

                    if (ticket != null) {
                        if (metadata === 'correct_issue_type') {
                            // locate agent for this issue type
                            const agg = [
                                {
                                    '$match': {
                                        'tags': ticket.issue_type
                                    }
                                }, {
                                    '$lookup': {
                                        'from': 'users',
                                        'localField': '_id',
                                        'foreignField': 'team',
                                        'as': 'agent'
                                    }
                                }, {
                                    '$unwind': {
                                        'path': '$agent'
                                    }
                                }, {
                                    '$project': {
                                        '_id': 0,
                                        'name': 1,
                                        'agent._id': 1,
                                        'agent.name': 1
                                    }
                                }, {
                                    '$sample': {
                                        'size': 1
                                    }
                                }, {
                                    '$addFields': {
                                        'agent.team': '$name'
                                    }
                                }
                            ];

                            const aggregate = await Team.aggregate(agg).exec();
                            const {agent} = aggregate.shift();

                            ticket.status = 'open';
                            ticket.user = agent._id;
                            ticket.save();

                            await twClient.sendDirectMessage(`Thank you for confirming, ${agent.name.split(" ")[0]} from our ${agent.team} team will assist you shortly.`, ticket.customer.twitter_id_str);
                        } else if (metadata === 'incorrect_issue_type') {
                            // handle incorrect classification
                        }
                    }
                }
            }
        } catch (err) {
            console.error(err);
        }
    }
};

export default messageProcessor;