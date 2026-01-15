
import { Member } from "@/types/member";
import { Id ,money} from "@/types/common";

export interface MemberBalance {
    memberId:Id;
    moneyOwed:money;
    moneyLent:money

};

export function initializeBalance(members:Member[]):MemberBalance[]{
    return members.map(member=>({
        memberId:member.memberId,
        moneyOwed:0,
        moneyLent:0,
    }))
}