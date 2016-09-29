import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'cuth',
  template: `
    <h1>Cuth: Cloud authentication module</h1>
    <key-table></key-table>
  `
})

export class AppComponent {
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
