import { Component, Input, OnInit } from '@angular/core';
import { IMonsterData } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() public monstersList: IMonsterData[] = [];

  public searchText = '';

  public filteredMonstersList: IMonsterData[] = [];

  public ngOnInit(): void {
    this.filteredMonstersList = this.monstersList.filter((monster) =>
      monster.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
