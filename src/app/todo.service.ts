import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import { Todo } from './todo';

@Injectable()
export class TodoService {

  private apiUrl = 'http://localhost:52132/api/todo/';
  result: any = null;
  data: any = null;

  constructor(private _http: Http) { }

  getTodos(): Todo[] {
    this.getTodoRecords();
    this.result = this.getData();

    return this.result;
  }

  getTodoRecords() {
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

}
