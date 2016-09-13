import { Component, Input } from '@angular/core';

@Component({
  selector: 'key-table',
  template: `
    <table class="table table-striped text-center">
      <th *ngFor="let header of headers" class="text-center">
        {{ header }}
      </th>
      <tr *ngFor="let line of data" [key]="line"></tr>
    </table>
  `
})

export class TableComponent {
  @Input('key-table') data;

  constructor() { console.clear(); }
}