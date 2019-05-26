import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  deleteTodo(todo: Todo) {

    // Delete on UI
    // for (var i = 0; i < this.todos.length; i++){
    //   if (this.todos[i].id == todo.id) {
    //     this.todos.splice(i, 1);
    //   }
    // }

    // Or - simply
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Delete on Server
    this.todoService.deleteTodo(todo).subscribe();

  }

}
