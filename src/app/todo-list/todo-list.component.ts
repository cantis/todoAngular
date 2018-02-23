import { Todo } from './../todo';
import { Component } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  title = 'Evans Todo Manager';
  private apiUrl = 'http://localhost:52132/api/todo/';
  data: any = null;

  selectedTodo; Todo;

  constructor(private _http: Http) {
    this.getTodos();
    this.getData();
  }

  getTodos() {
    this.getData().subscribe(data => {
      console.log(data);
       this.data = data;
    });
  }

  getData() {
    let result;

    result =  this._http.get(this.apiUrl)
      .map((res: Response) => res.json());

    console.log('>>> app - get data');
    console.log(result);
    return result;
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

}
