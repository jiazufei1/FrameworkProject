import ManagerBase from "./ManagerBase";
import { MessageType } from "./Message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {

    static Instance:UIManager;

    onLoad(){
        super.onLoad();
        UIManager.Instance = this;
    }

    //接收的消息类型
    SetMessageType(): number {
        return MessageType.Type_UI;
    }
}
