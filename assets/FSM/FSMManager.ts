import FSMState from "./FSMState";

const {ccclass, property} = cc._decorator;


export default class FSMManager  {
    //状态列表
    stateList:FSMState[] = [];
    //当前状态
    CurrentIndex:number = -1;

    //改变状态
    ChangeState(StateID:number){
        //改变状态ID
        console.log("ChangeState" + StateID)
        this.CurrentIndex = StateID;
        //调用新状态的enter方法
        this.stateList[this.CurrentIndex].OnEnter();
    }
  
    //更新调用 
    OnUpdate(){
        if(this.CurrentIndex != -1){
            //调用当前状态的update方法
            this.stateList[this.CurrentIndex].OnUpdate();
        }
    }
}
