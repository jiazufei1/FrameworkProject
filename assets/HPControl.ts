import ComponentBase from "./ComponentBase";
import Message, { MessageType } from "./Message";
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
            //得到参数
            let num = <number>message.Content;
            this.ChangeHP(num);
        }
        
    }

    //改变血量
    ChangeHP(attack){
        this.hp -= attack;
        //+ “” 转换成字符串
        this.node.children[1].getComponent(cc.Label).string = this.hp + "";
    }
 
}
