import { SoftDeleteDocument } from 'mongoose-delete';
import { IUser } from '../../interfaces/models';
export interface UserBaseDocument extends IUser, SoftDeleteDocument {
    userIdentifier: string;
}
//# sourceMappingURL=UserBaseDocument.d.ts.map