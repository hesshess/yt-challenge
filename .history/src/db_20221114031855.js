import mongoose from 'mongoose';
/*
DONT TOUCH THIS FILE <3
WE ARE ALL SHARING THE SAME DB
PLEASE DONT TOUCH THIS FILE
*/
mongoose.connect('mongodb://127.0.0.1:27017/wetube', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log('✅  Connected to DB');
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once('open', handleOpen);
db.on('error', handleError);
