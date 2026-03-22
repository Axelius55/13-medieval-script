import { OrganizationMemberRole, UserType } from '@prisma/client';

export type LoggedInUserData = {
  id: string;
  email: string;
  role: UserType;
  orgs: {
    id: string;
    role: OrganizationMemberRole;
  }[];
};

export interface AuthenticatedRequest extends Request {
  user: LoggedInUserData;
}