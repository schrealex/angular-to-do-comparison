import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  private todo: any;
  private list: any[];

  ngOnInit(): void {
    this.list = [
      {
        id: 1,
        text: "Install Angular"
      },
      {
        id: 2,
        text: "Get coding"
      }
    ];
  }

  public createNewToDoItem(todo: any): void {
    if (!todo) {
      alert("Please enter a todo!");
      return;
    }
    this.list.push({ id: this.generateId(), text: todo });
  }

  public deleteItem(todo): void {
    this.list = this.list.filter(item => item !== todo);
  }

  private generateId(): number {
    return Math.max(...this.list.map(i => i.id)) + 1;
  }
}
