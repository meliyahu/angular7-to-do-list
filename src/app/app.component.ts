import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'The To Do List';
  total: number = 6 + 8

  constructor() {
    console.log(this.name)
    console.log(123)
    this.changeName("Mosheh EliYahu")
    console.log(this.name)
  }

  changeName(name: string): void {
    this.name = name
  }
}
