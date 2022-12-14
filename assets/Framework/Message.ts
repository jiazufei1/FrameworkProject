
const {ccclass, property} = cc._decorator;

export default class Message {

    //类型 1,2,3
    Type:number;
    //命令
    Command:number;
    //参数
    Content:any;

    //构造方法
    constructor(type,command,content){
        this.Type = type;
        this.Command = command;
        this.Content = content;
    }
}


export class MessageType{
    static Type_UI = 1;
    static Type_NPC = 2;
    static Type_Enemy = 3;
    static Type_Audio = 4;

    static UI_RefreshHp = 101;   //血量
    static UI_RefreshScore = 102;  //分数
    static UI_RefreshInventory = 103; //背包

    static NPC_npc1 = 201;
    static NPC_npc2 = 202;

    static Enemy_enemy1 = 301;
    static Enemy_enemy2 = 302;
}