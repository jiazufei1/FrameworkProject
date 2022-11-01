import ComponentBase from "./ComponentBase";
import { MessageType } from "./Message";
import MessageCenter from "./MessageCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerControl extends ComponentBase {

    start () {
        //点击
        this.node.on(cc.Node.EventType.MOUSE_DOWN,(event)=>{
            //血量减少
            MessageCenter.SendCustomMessage(MessageType.Type_UI,MessageType.UI_RefreshHp,10);
        })
    }

   
}
