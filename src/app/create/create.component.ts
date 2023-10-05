import { Component } from '@angular/core';

interface monsterData {
  element: number;
  name: string;
  attack:number;
  defense:number;
}
let existingRecords: monsterData[] = JSON.parse(
  localStorage.getItem("monsterData") || "[]"
);

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

  elementFile="../../assets/fire.svg";
  elementNum:number=1;
  monsterName:string="";
monsterAttack:number=0;
monsterDefense:number=0;

  elementLeft(){
    if (this.elementNum>1){
      this.elementNum--
    }else{
      this.elementNum=4;
    }
  }
  elementRight(){
    if(this.elementNum<4){
      this.elementNum++
    }
    else{
      this.elementNum=1
    }
  }
  imageDisplay(){
    switch(this.elementNum){
      case 1: this.elementFile="../../assets/water.svg";break;
      case 2: this.elementFile="../../assets/earth.svg";break;
      case 3: this.elementFile="../../assets/fire.svg";break;
      case 4: this.elementFile="../../assets/air.svg";break;
    }
  }
  saveMonster(){
    var data:monsterData={
      element:this.elementNum,
      name:this.monsterName,
      attack:this.monsterAttack,
      defense:this.monsterDefense
    }
    existingRecords.push(data);
    localStorage.setItem("monsterData", JSON.stringify(existingRecords));
  }
}
