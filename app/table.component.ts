import { Component, Input } from '@angular/core';

@Component({
  selector: 'key-table',
  template: `
    <table class="table table-striped text-center">
      <th *ngFor="let header of headers" class="text-center">
        {{ header }}
      </th>
      <tr *ngFor="let row of keys" [key]="row"></tr>
    </table>
    <button type="button" class="btn btn-primary pull-right" (click)="addKey(keyEdit.showNew())"> Add </button>
    <key-edit #keyEdit ></key-edit>
  `
})

export class TableComponent {
  keys = [
    { title: 'Gmail',
      userName: 'felipe096',
      url: '',
      password: '******',
      comments: 'N/A'
    }
  ];

  addKey(key): void{
    console.log("Adding new key")
    this.keys.push(key)
  }

  headers = ['Title', 'UserName', 'URL', 'Comments', 'Actions'];
  constructor() { console.clear(); }
}

