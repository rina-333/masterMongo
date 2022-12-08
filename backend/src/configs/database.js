import mongoose from 'mongoose';
import { config } from 'dotenv';

/* istanbul ignore next */
config({ path: (process.env.NODE_ENV !== undefined ? `.env.${process.env.NODE_ENV}` : '.env.development') });

const db = mongoose;

global.Promise = mongoose.Promise;

db.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default db;
