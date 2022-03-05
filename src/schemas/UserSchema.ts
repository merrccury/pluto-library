import { Schema } from 'mongoose';
import { UserDocument } from '../documents';
import MongooseDelete from 'mongoose-delete';

export const UserSchema = new Schema<UserDocument>({
  password: {
    type: 'string',
    required: true
  },
  username: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true
  },
  userType: {
    type: 'number',
    required: true
  },
  source: {
    type: 'number',
    required: true
  }
});

UserSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deleted: true,
  deletedBy: true,
  overrideMethods: ['count', 'find', 'findOne', 'findOneAndUpdate', 'update']
});
