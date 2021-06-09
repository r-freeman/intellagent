![Intellagent hero](https://ryanfreeman.dev/wordpress/wp-content/uploads/2021/06/Intellagent-hero.jpeg)

# Intellagent

Intellagent is a cloud-based help desk automation application, powered by machine learning. It integrates with Twitter and uses text classification to automatically triage incoming customer queries, connecting the customer to the correct agent according to agent's skillset and nature of the query. Intellagent is the result of my final year independent research project at IADT which aimed to examine machine learning and its applications for business process optimisation. This project gave me the opportunity to use new technologies and experiment with machine learning and AI.

## Technologies used

Intellagent is a full stack application composed of three main components — [the client](https://github.com/r-freeman/intellagent-client), [server](https://github.com/r-freeman/intellagent-server) and [text classifier](https://github.com/r-freeman/intellagent-text-classifier).

### Client

[React](https://reactjs.org/) was used to create the client with [Redux](https://redux.js.org/) for state management. [Tailwind CSS](https://tailwindcss.com/) and [Tailwind UI](https://tailwindui.com/) were used for styling the UI. Other notable technologies include [Socket.IO](https://socket.io/) for receiving ticket notifications in real-time from the server and [Formik](https://formik.org/) for form validation.

### Server

The server was created with [Node](https://nodejs.org/en/) and [Express](https://expressjs.com/) using the MVC design pattern. [MongoDB](https://www.mongodb.com/) was used for the database with the [Mongoose Object Data Modelling library](https://mongoosejs.com/). The server provides a RESTful API which is secured with industry-standard encryption using [Passport](http://www.passportjs.org/) and [JSON Web Tokens](https://jwt.io/).

### Text Classifier

The text classifier was written in Python and includes a pre-trained text classification model. The model was trained using [scikit-learn](https://scikit-learn.org/stable/) on a data set containing 21,673 customer queries with each row associated with one of eleven possible categories such as order, refund, delivery, payment and so on. The model was then evaluated for performance on three different estimators with logistic regression yielding the best results. Lastly, the model was integrated into a [Flask](https://flask.palletsprojects.com/en/2.0.x/) application and later migrated to Amazon API Gateway and AWS Lambda as a serverless function for use in production

## System overview

The system uses an event-driven architecture and monitors Intellagent's Twitter account for incoming tweets and direct messages using the Twitter [Account Activity API](https://developer.twitter.com/en/docs/twitter-api/enterprise/account-activity-api/overview) and [webhooks](https://developer.twitter.com/en/docs/twitter-api/enterprise/account-activity-api/guides/getting-started-with-webhooks). When a new tweet or direct message arrives, the text within is sent to the text classifier which categorises it as one of eleven predefined customer issues. Our Twitter chatbot sends a direct message to the customer to confirm if the categorisation was correct. 

Upon confirmation, the system chooses an agent at random belonging to the team for this particular issue. Next, the system emits a ticket assignment event which the client receives in real-time and a notification is displayed to the agent telling them that a new ticket has arrived. The agent then engages with the customer using the messaging system which uses the Twitter Direct Message API to exchange messages back and forth. Incoming messages from Twitter are trapped using webhooks, appended to the ticket and emitted back to the client using Socket.IO. Whereas outgoing messages are sent directly to the customer using the Direct Message API. This means that the agent never has to refresh the page to see new ticket messages. For the customer, the entire interaction is seamless and takes place on Twitter's website or mobile application.


