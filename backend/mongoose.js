const mongoose = require("mongoose");

async function mongooseConnect() {
    try {
        let mongoUri = process.env.NODE_ENV === 'development'
            ? process.env.MONGO_LOCAL_URI
            : process.env.MONGO_ATLAS_URI;

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        return `Connected to MongoDB ${mongoUri}`;
    } catch (err) {
        return err;
    }
}

module.exports = mongooseConnect;