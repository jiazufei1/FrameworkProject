import ComponentBase from "./ComponentBase";
import Message from "./Message";

const {ccclass, property} = cc._decorator;

export default class MessageCenter {

   //管理类列表
   static Managers:ComponentBase[] = [];

   //发送消息
   static SendMessage(msg:Message){
     console.log("MessageCenter SendMessage" + msg)
        for(let manager of this.Managers){
            manager.ReceiveMessage(msg);
        }
   }

   //发送消息
   static SendCustomMessage(type:number,command:number,content:any){
     
        let msg = new Message(type,command,content);
        console.log("MessageCenter SendCustomMessage" + msg)
        this.SendMessage(msg);
   }
}
