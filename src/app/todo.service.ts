import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import {Observable } from 'rxjs/Observable';

import { Todo } from './todo';

@Injectable()
export class TodoService {

  private apiUrl = 'http://localhost:52132/api/todo/';
  result: any = null;
  data: any = null;

  constructor(private _http: Http) { }

  getTodos(): Observable<Todo[]> {
    this.getTodoRecords();
    this.result = this.getData();
    return this.result;
  }

  getTodoRecords() {
    this.getData().subscribe(data => {
      console.log('GetTodoRecords');
      console.log(data);
       this.data = data;
    });
  }

  getData() {
    let result;
    result =  this._http.get(this.apiUrl)
      .map((res: Response) => res.json());
    return result;
  }
}
