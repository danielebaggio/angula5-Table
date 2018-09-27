import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: any[];
  public objectKeys: any[] = [];
  public options: any[] = [];
  public useFunction: Function;

  ngOnInit() {
    this.getDataItemsTable();
    this.getDataColumnsTable();
    this.useFunction = this.functionChild.bind(this);
  }

  getDataItemsTable(){
    this.data = [
      {id:1,name: 'test1', description: 'test1', country: 'img-table', age: ''},
      {id:2,name: 'test2', description: 'test2', country: 'btn-table', age: ''},
      {id:3,name: 'test3', description: 'test3', country: 'btn-table', age: ''},
      {id:4,name: 'test4', description: 'test4', country: 'form-control', age: ''},
      {id:5,name: 'test5', description: 'test5', country: 'img-table', age: ''},
      {id:6,name: 'test6', description: 'test6', country: 'btn-table', age: ''},
      {id:7,name: 'test7', description: 'test7', country: 'btn-table', age: ''},
      {id:8,name: 'test8', description: 'test8', country: 'form-control', age: ''},
      {id:9,name: 'test9', description: 'test9', country: 'img-table', age: ''},
      {id:10,name: 'test10', description: 'test10', country: 'btn-table', age: ''},
      {id:11,name: 'test11', description: 'test11', country: 'btn-table', age: ''},
      {id:12,name: 'test12', description: 'test12', country: 'form-control', age: ''},
      {id:13,name: 'test13', description: 'test13', country: 'img-table', age: ''},
      {id:14,name: 'test14', description: 'test14', country: 'btn-table', age: ''},
      {id:15,name: 'test15', description: 'test15', country: 'btn-table', age: ''},
      {id:16,name: 'test16', description: 'test16', country: 'form-control', age: ''}
    ]
    this.data.length = 10;
  }

  getDataColumnsTable(){
    this.objectKeys = Object.keys(this.data[0]);
    this.options = [
      {name: 'download', type: 'img', class: 'img-table', url: 'test.png'},
      {name: 'edit', type: 'img', class: 'btn-table', url: '../assets/test.png'},
      {name: 'delete', type: 'img', class: 'btn-table', url: '../assets/test.png'},
      {name: 'button', type: 'button', class: 'form-control', url: ''},
    ];
  }

  functionChild(index: number, type: any, item: any, option: any){
    console.log(index);
    console.log(item);
    console.log(type);
    console.log(option);
  }
}
