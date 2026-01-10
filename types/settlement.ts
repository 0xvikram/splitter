import {createdAt, Id,money} from "./common"
// export interface settlementBenificiary{
//     member:Id;
//     amount:money;
// }

export interface Settlement{
    settlementId:Id;
    whoSettled:Id;
    amountSettled:money;
    createdAt:createdAt;
   
    groupId:Id;
    description?:string;
    whoWasSettled:Id;



}