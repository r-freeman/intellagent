const mongoose = require('mongoose');

const mongooseConnect = (async function () {
    try {
        let mongoUri = process.env.LOCAL_URI;
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Connected to ${mongoUri}`);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();

module.exports = mongooseConnect;