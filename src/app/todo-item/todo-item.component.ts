import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'to-do-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() public todo: any;
  @Output() onDeleteItem = new EventEmitter<any>();

  public deleteItem(todo: any): void {
    this.onDeleteItem.emit(todo);
  }
}
