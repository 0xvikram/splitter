import { Settlement } from "@/types/settlement";
const settlements:Settlement[]=[];


export function addSettlement(settlement:Settlement):void{
    settlements.push(settlement);
}
export function getSettlementsByGroupId(id:number):Settlement[]{
    return settlements.filter(settlement=>settlement.groupId===id);
}
export function findAllSettlements():Settlement[]{
    return settlements;
}