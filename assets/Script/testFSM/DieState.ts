// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import FSMState from "../../FSM/FSMState";



const {ccclass, property} = cc._decorator;

@ccclass
export default class DieState extends FSMState {

    //进入状态
    OnEnter(): void {
        super.OnEnter()
        console.log("DieState OnEnter")
        this.component.getComponent(cc.Label).string = "死亡"
    }

    //状态更新中
    OnUpdate(): void {
        super.OnUpdate()
    }
}
