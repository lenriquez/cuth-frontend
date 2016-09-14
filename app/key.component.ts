import { Component, Input } from '@angular/core';

export class Key {
  title: string ;
  userName: string;
  url: string;
  password: string;
  comments: string;
}

@Component({
  selector: '[key]',
  template: `
    <td>{{key.title}}</td>
    <td>{{key.userName}}</td>
    <td>{{key.url}}</td>
    <td>{{key.comments}}</td>
    <td>
      <button type="button" class="btn btn-default" (click)="keyEdit.show(key)">
        Edit
      </button>
      <button type="button" class="btn btn-danger" (click)="onDelete(key)">
        Delete
      </button>
    </td>
    <key-edit #keyEdit ></key-edit>
  `
})

export class KeyComponent {
  @Input('key') key;

  onDelete(key: Key): void{
    alert("Delete");
  }
}


