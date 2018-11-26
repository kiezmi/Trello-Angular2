import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listName: string = '';
  listsArr: Array<object> = [];

  addList(titulo) {
    if(this.listName.trim()!==''){
   
    this.listsArr.push(
      {
        nombre: titulo,
        tareas: []
      })
    this.listName = '';
  }
}
}
