import ComponentBase from "./ComponentBase";
import Message, { MessageType } from "./Message";
import MessageCenter from "./MessageCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ManagerBase extends ComponentBase {

    //管理的消息接受着数组
    ReceiveList:ComponentBase[] = [];
   
    //当前管理类接受的具体消息类型
    messageType:number;

    //为了尽早完成初始化
    onLoad(){
        //设置当前管理类接收的消息类型
        this.messageType = this.SetMessageType();
        //把管理类添加到消息中心列表中
        MessageCenter.Managers.push(this);
    }

    //设置当前管理类的消息类型
    SetMessageType(){
        console.log("ManagerBase SetMessageType" + MessageType.Type_UI)
        return MessageType.Type_UI;
    }

    //注册消息监听
    RegisterReceiver(cb:ComponentBase){
        console.log("ManagerBase RegisterReceiver" + cb)
        this.ReceiveList.push(cb);
    }
    
    //接收消息
    ReceiveMessage(message: Message): void {
        super.ReceiveMessage(message);
        console.log("ManagerBase ReceiveMessage" + message)
        //判断消息类型
        if(message.Type != this.messageType){
            return;
        }
        //向下层分发消息
        for (let cb of this.ReceiveList){
            cb.ReceiveMessage(message);
        }
    }
}

