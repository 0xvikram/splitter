import { Expense } from "@/types/expense";
import { MemberBalance } from "./balance.initializer";
import { applyExpense } from "./applyExpenses";

export function applyAllExpense(expense:Expense[],currentBalances:MemberBalance[]):MemberBalance[]{

    // firstly sorting the expense array according to timestamp


const sortedExpense = [...expense].sort((a, b) => {
  
  const dateA = new Date(a.createdAt).getTime();
  const dateB = new Date(b.createdAt).getTime();

  return dateA - dateB; 
});

// now lets apply expense on each balace one by one
const updatedBalance:MemberBalance[]=[];
for(let i=0;i<sortedExpense.length;i++){
   const updated= applyExpense(currentBalances[i],sortedExpense[i]);
   updatedBalance.push(updated);
}
return updatedBalance:
}