//this file code tells us what data represents a participant inside a group

import {Id,money,createdAt} from "./common";

export interface Member{
    memberId:Id;
    isActive:boolean;
  
    joinedAt:createdAt;
    name:string;
    moneyOwed:money;
    moneyLent:money;
    

}