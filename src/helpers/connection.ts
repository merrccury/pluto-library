import mongoose from 'mongoose';

export const establishDatabaseConnection = async (container: string, collection: string, port = '27017') => {
  mongoose.connection.on('error', (err) => {
    console.log({ err });
  });
  mongoose.connection.on('open', () => {
    console.log('Connected to mongo server.');
  });
  await mongoose.connect(`mongodb://${container}:${port}/${collection}`);
};
