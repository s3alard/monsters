import { Component, Input , OnInit } from '@angular/core';
import { IMonsterData } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() monster: Partial<IMonsterData> = {};

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
