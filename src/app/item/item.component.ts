import { Component, Input , OnInit } from '@angular/core';

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
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemNumber!: number;
  elementFile="../../assets/fire.svg";
  elementNum:number=existingRecords[this.itemNumber].element;
  monsterName:string=existingRecords[this.itemNumber].name;
  monsterAttack:number=existingRecords[this.itemNumber].attack;
  monsterDefense:number=existingRecords[this.itemNumber].defense;
  
 /*  elementNum:number=existingRecords[1].element;
  monsterName:string=existingRecords[1].name;
  monsterAttack:number=existingRecords[1].attack;
  monsterDefense:number=existingRecords[1].defense; */

 ngOnInit(): void {} 
 imageDisplay(){
    switch(this.elementNum){
      case 1: this.elementFile="../../assets/water.svg";break;
      case 2: this.elementFile="../../assets/earth.svg";break;
      case 3: this.elementFile="../../assets/fire.svg";break;
      case 4: this.elementFile="../../assets/air.svg";break;
    }
  }

}
