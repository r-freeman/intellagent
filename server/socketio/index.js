// https://stackoverflow.com/questions/61608574/how-to-use-socket-io-instance-on-multiple-files-in-express-js-app
const fs = require("fs");
const socketio = require("socket.io");
const jwt = require("jsonwebtoken");

const PUB_KEY = fs.readFileSync('id_rsa_pub.pem', 'utf8');

let io = null;
module.exports = {
    init: function (httpServer) {
        io = socketio(httpServer, {
            cors: {
                origin: '*'
            }
        });

        // middleware for validating jwt token from socket clients
        const jwtMiddleware = (socket, next) => {
            try {
                const {token} = socket.handshake.auth;

                // verify throws an error if token doesn't validate
                const {sub} = jwt.verify(token, PUB_KEY);

                // store the user id on the socket object for later
                socket._id = sub;

                // good
                next();
            } catch (err) {
                // bad
                next(new Error("you shall not pass"));
            }
        }

        io.use(jwtMiddleware);

        io.on('connection', async function (socket) {
            // if we get here the jwt token was valid
            socket.join(socket._id);
            console.log(`client connected to room ${socket._id}`);

            socket.on('disconnect', function () {
                console.log('client disconnected');
            })
        });
    },
    getInstance: function () {
        return io;
    }
};