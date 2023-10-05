import { Component, OnInit} from '@angular/core';





@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  ngOnInit(): void {
    interface monsterData {
      element: number;
      name: string;
      attack:number;
      defense:number;
    }
    let existingRecords: monsterData[] = JSON.parse(
      localStorage.getItem("monsterData") || "[]"
    );
    length=existingRecords.length;
  }
}
