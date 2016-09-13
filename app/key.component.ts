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
  `
})

export class KeyComponent {
  @Input('key') key;
}


