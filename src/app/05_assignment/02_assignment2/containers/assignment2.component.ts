import { Component } from '@angular/core';
import { AssignmentComponent } from '../../assignment.component';
@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
  todos: any;
  constructor(arr: AssignmentComponent) {
    this.todos = arr.getTodos();
  }
  
  selected: any;
  select(item) {
    this.selected = item;
  };
  isActive(item) {
    return this.selected === item;
  };
}
