// lib/calculations/applyExpense.ts

import { Expense } from "@/types/expense";
import { MemberBalance } from "./balance.initializer";

export function applyExpense(
  balances: MemberBalance[],
  expense: Expense
): MemberBalance[] {

  // 1. Create a copy of balances (do not mutate input)
  const updatedBalances = balances.map(balance => ({ ...balance }));

  // 2. Update payer's moneyLent
  const payerBalance = updatedBalances.find(
    balance => balance.memberId === expense.paidByMemberId
  );

  if (payerBalance) {
    payerBalance.moneyLent += expense.amount;
  }

  // 3. Update moneyOwed for each split
  for (const split of expense.splits) {
    const participantBalance = updatedBalances.find(
      balance => balance.memberId === split.memberId
    );

    if (participantBalance) {
      participantBalance.moneyOwed += split.amountOwed;
    }
  }

  // 4. Return updated balances
  return updatedBalances;
}
