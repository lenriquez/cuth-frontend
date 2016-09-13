import { Component, Input } from '@angular/core';

@Component({
  selector: '[key]',
  template: `<td *ngFor="let item of row">{{item}}</td>`
})

export class KeyComponent {
  @Input('key') row;
}
