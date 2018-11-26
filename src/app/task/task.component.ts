import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskObject;
  @Input() tasks;

  constructor() { }

  ngOnInit() {
  }
  delTask(task) {
    let index = this.tasks.indexOf(task)
    this.tasks.splice(index, 1);
  }
}
