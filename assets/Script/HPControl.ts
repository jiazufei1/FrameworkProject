
import ComponentBase from "../Framework/ComponentBase";
import Message, { MessageType } from "../Framework/Message";
import UIManager from "./UIManager";



const {ccclass, property} = cc._decorator;

@ccclass
export default class HPControl extends ComponentBase {

    hp:number = 100;
    
    start(){
        //注册为UI的消息接收着
        UIManager.Instance.RegisterReceiver(this);
    }

    //接收到消息
    ReceiveMessage(message: Message): void {
        
        super.ReceiveMessage(message);
        if (message.Command == MessageType.UI_RefreshHp){
            console.log("HPControl ReceiveMessage" + message.Command)
            //得到参数
            let num = <number>message.Content;
            this.ChangeHP(num);
        }
        
    }

    //改变血量
    ChangeHP(attack){
        console.log("HPControl ChangeHP" + attack)
        this.hp -= attack;
        //+ “” 转换成字符串
        this.node.children[1].getComponent(cc.Label).string = this.hp + "";
    }
 
}
