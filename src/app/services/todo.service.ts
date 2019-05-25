import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }

  getTodos(): Todo[] {
    return [
      {
        id: 1,
        title: 'Todo One',
        completed: true
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      },

    ];

  }
}
