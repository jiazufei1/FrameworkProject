import Message from "./Message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ComponentBase extends cc.Component {

    //接受收消息
    ReceiveMessage(message:Message){
        console.log("ComponentBase ReceiveMessage" + message)
    }
}
