const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_DBSERVER}/${process.env.DATABASE}`
,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(() => console.log(`MongoDB connection success with ${process.env.DATABASE}...`))
    .catch((err) => console.log('Error in DB connection: ' + err));