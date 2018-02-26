import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TodoService } from './../todo.service';
import { Todo } from './../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title = 'Evans Todo Manager';
  private apiUrl = 'http://localhost:52132/api/todo/';
  data: Todo[];
  selectedTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.data = todos);
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

/**
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
*/



}
