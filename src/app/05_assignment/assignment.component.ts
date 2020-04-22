import { Component } from '@angular/core';

export interface Todo {
  id: string;
  type: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  todos: Todo[] = [
    { id: 'TODO_1', type: ' .Net', description: '.Net is a developer platform', completed: true },
    { id: 'TODO_2', type: ' Java', description: 'Java is the future', completed: false },
    { id: 'TODO_3', type: 'Python', description: 'Python is the most used language', completed: false },
    { id: 'TODO_4', type: 'Angular', description: 'Angular is a frontend language', completed: true }
  ];
  getTodos(){
    return this.todos;
  }
}
