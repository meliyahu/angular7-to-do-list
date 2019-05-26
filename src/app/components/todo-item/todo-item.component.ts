import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;
  @Output()
  deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic css classes.
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo: Todo) {
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle in server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log('Todo toggled in server: ' , todo)
    });

  }

  onDelete(todo: Todo) {
    // Emit event to the parent.
    this.deleteTodo.emit(todo);
  }
}
