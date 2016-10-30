import { Component, Input } from '@angular/core';

export class Key {
  title: string;
  userName: string;
  url: string;
  password: string;
  comments: string;
}

@Component({
  selector: '[key]',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})

export class KeyComponent {
  @Input('key') key;

  onDelete(key: Key): void {
    alert('Delete');
  }
}
