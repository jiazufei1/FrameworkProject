// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import FSMManager from "../FSM/FSMManager";
import DieState from "./DieState";
import FlyState from "./FlyState";

const {ccclass, property} = cc._decorator;


enum BirdState{
    Fly,
    Die
}

@ccclass
export default class BirdControl extends cc.Component {

    //状态机
    fsmManager:FSMManager;

     start(){
        this.fsmManager = new FSMManager();
        //创建两个状态
        let fly = new FlyState(BirdState.Fly,this,this.fsmManager)
        let die = new DieState(BirdState.Die,this,this.fsmManager)
        this.fsmManager.stateList = [fly,die]
        //开始执行
        this.fsmManager.ChangeState(BirdState.Fly)
    }

     update(dt) {
        if(this.fsmManager.CurrentIndex != -1){
            this.fsmManager.OnUpdate();
        }
    }
    
    
    fly(){
        console.log("BirdControl fly")
        // let lb = this.getComponent(cc.Label);
        // lb.string = "飞翔"
        this.fsmManager.ChangeState(BirdState.Fly)
    }


    die(){
        console.log("BirdControl die")
        // let lb = this.getComponent(cc.Label);
        // lb.string = "死亡"
        this.fsmManager.ChangeState(BirdState.Die)
    }
}
