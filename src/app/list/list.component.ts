import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() objectList;
  @Input() modelData;
  taskName: string = '';

  constructor() { }

  ngOnInit() {
  }
  addTask(nombre) {
    if (this.taskName.trim() !== '') {
      this.objectList.tareas.push(
        {
          texto: nombre,
        })
      this.taskName = '';
    }
  }
  delList(list) {
    let index = this.modelData.indexOf(list)
    this.modelData.splice(index, 1);
  }
}
