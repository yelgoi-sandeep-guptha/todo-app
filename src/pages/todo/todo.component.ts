import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  item: string = "";
  itemList: Array<string> = [];

  addItem() {
    if (this.item) {
      this.itemList.push(this.item);
      this.item = "";
    }
  }

  removeItem(index: number): void {
    this.itemList.splice(index, 1);
  }
}
