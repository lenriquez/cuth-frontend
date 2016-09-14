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

  headers = ['Title', 'UserName', 'URL', 'Comments', 'Actions'];
  constructor() { console.clear(); }
}

