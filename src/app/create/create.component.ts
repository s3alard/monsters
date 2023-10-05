import { Component, EventEmitter, Output } from '@angular/core';
import { Element, IMonsterData } from '../app.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  @Output() monsterCreated = new EventEmitter<IMonsterData>();

  public elements: Element[] = [
    Element.Fire,
    Element.Water,
    Element.Earth,
    Element.Air,
  ];

  public selectedElement: Element = Element.Fire;
  public name: string = 'initial name';
  public attack: number = 3;
  public defense: number = 3;

  public changeElement(changeIndexBy: number): void {
    const currentIndex = this.elements.indexOf(this.selectedElement);
    const newIndex = currentIndex + changeIndexBy;

    // if (newIndex < 0 || newIndex >= this.elements.length) {
    //   return;
    // }

    // this.selectedElement = this.elements[newIndex];
    console.log('new index is', newIndex);
  }

  public changeName(event: any): void {
    this.name = event.target.value;
  }

  public changeAttack(event: any): void {
    this.attack = event.target.value;
  }

  public changeDefense(event: any): void {
    this.attack = event.target.value;
  }

  public saveMonster(): void {
    const newMonster = {
      element: this.selectedElement,
      name: this.name,
      attack: this.attack,
      defense: this.defense,
    };

    // console.log('new monster is', newMonster);
    this.monsterCreated.emit(newMonster);
  }
}
