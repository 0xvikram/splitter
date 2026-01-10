
import { createdAt, Id , money} from "./common";
 
export interface ExpenseSplit{
    memberId:Id;
    amountOwed:money;

}
export interface Expense{
    expenseId:Id;
    createdAt:createdAt;
    // isSettled:boolean;
    paidByMemberId:Id;
    amount:money;
    group:Id;
   splits:ExpenseSplit[];
    description:string;


}