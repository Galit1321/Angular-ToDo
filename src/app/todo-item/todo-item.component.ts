import { Component, Input, OnInit,EventEmitter ,Output} from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {
    @Input() item: TodoItem;
    @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
    @Output() update: EventEmitter<any> = new EventEmitter();
    @Output() submit: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }
   // put this method below ngOnInit
   completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }
  changeVis(){
    this.update.emit({
      item: this.item,
      changes: {show: !this.item.show }
    });
  }
  updateItemSave(newItem:string){
    this.update.emit({
      item: this.item,
      changes: {show: !this.item.show ,title:newItem,}
    })
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
