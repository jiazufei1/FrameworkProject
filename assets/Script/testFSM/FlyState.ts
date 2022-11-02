// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import FSMState from "../../FSM/FSMState";



const {ccclass, property} = cc._decorator;

@ccclass
export default class FlyState extends FSMState {


    
    //进入状态
    OnEnter(): void {
        super.OnEnter()
        console.log("FlyState OnEnter")
        this.component.getComponent(cc.Label).string = "飞翔"
    }

    //状态更新中
    OnUpdate(): void {
        super.OnUpdate()
    }
}
