import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    { id: 1, text: 'Learn Angular', done: true },
    { id: 2, text: 'Seek for a job', done: false },
    { id: 3, text: 'Forget everything' }
  ];

  removeTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
  }
}
