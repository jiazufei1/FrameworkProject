import ManagerBase from "../Framework/ManagerBase";
import { MessageType } from "../Framework/Message";


const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {

    static Instance:UIManager;

    onLoad(){
        console.debug("UIManager onLoad")
        super.onLoad();
        UIManager.Instance = this;
    }

    //接收的消息类型
    SetMessageType(): number {
        console.debug("UIManager SetMessageType" + MessageType.Type_UI)
        return MessageType.Type_UI;
    }
}
