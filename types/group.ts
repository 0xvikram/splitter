
// types/group.ts

import { Id, supportedCurrency, groupStatus, createdAt , money} from "./common";
import { Member } from "./member";

export interface Group{
    groupId:Id;
    createdAt:createdAt;
    // netBalance:money;
    // TotalOwed:money;
    // TotalLended:money;
    groupMembers:Member[];
    groupName:string;
    status:groupStatus;
    

}