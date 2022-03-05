import { SoftDeleteModel } from "mongoose-delete";
import mongoose from "mongoose";
import { UserDocument } from "../documents";
import { UserSchema } from "../schemas";

export const UserModule: SoftDeleteModel<UserDocument> = mongoose.model<UserDocument>("UserModel", UserSchema) as SoftDeleteModel<UserDocument>;
