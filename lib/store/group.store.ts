
//this file only stores group and returns group

import { Group } from "@/types/group"; 
const groups: Group[]=[];
export function addGroup(group:Group):void{
    groups.push(group);

}
export function findGroupById(Id:number):Group| undefined{

    return groups.find(group=>group.groupId===Id);

}

export function getAllGroups():Group[]{
    return groups;
}