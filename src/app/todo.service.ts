
import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import {Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Todo } from './todo';
import { MessageService } from './message.service';

@Injectable()
export class TodoService {

  private apiUrl = 'http://localhost:52132/api/todo/';
  result: any = null;
  data: any = null;

  constructor(private _http: Http, private messageService: MessageService) { }

  getTodos(): Observable<Todo[]> {
    this.messageService.add('Todo Service: fetched todos');
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
