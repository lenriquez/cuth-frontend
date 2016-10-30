import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  headers = ['Title', 'UserName', 'URL', 'Comments', 'Actions'];

  keys = [
    { title: 'Gmail',
      userName: 'felipe096',
      url: '',
      password: '******',
      comments: 'N/A'
    }
  ];

  constructor() { console.clear(); }

  addKey(key): void {
    console.log('Adding new key');
    this.keys.push(key);
  }
}
