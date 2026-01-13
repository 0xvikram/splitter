import { Expense } from "@/types/expense"

const expenses: Expense[]=[];
export function addExpense(expense:Expense):void{
    expenses.push(expense);
}

export function getExpensesByGroupId(id:number):Expense[]{
    return expenses.filter(expense=>expense.group==id);
}
export function getAllExpenses():Expense[]{
    return expenses;
}