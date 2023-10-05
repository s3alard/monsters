import { Component, OnInit } from '@angular/core';

export enum Element {
  Fire = 'fire',
  Water = 'water',
  Earth = 'earth',
  Air = 'air',
}

export interface IMonsterData {
  element: Element;
  name: string;
  attack: number;
  defense: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'week5';

  public monsters: IMonsterData[] = [
    {
      element: Element.Fire,
      name: 'Fire Monster',
      attack: 10,
      defense: 5,
    },
    {
      element: Element.Water,
      name: 'Water Monster',
      attack: 5,
      defense: 10,
    },
    {
      element: Element.Earth,
      name: 'Earth Monster',
      attack: 7,
      defense: 7,
    },
    {
      element: Element.Air,
      name: 'Air Monster',
      attack: 8,
      defense: 8,
    },
  ];

  public ngOnInit(): void {
    // TODO: load from local storage

  }

  public saveMonster(newMonster: IMonsterData): void {
    console.log('new monster is', newMonster)

    //this.monsters.push(newMonster);

    // TODO: save to local storage
  }
}
