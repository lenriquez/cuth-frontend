import { Component, ViewChild } from '@angular/core';

import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
//import * as moment from 'moment';

@Component({
  selector: 'key-edit',
  template: `
  <div bsModal #smModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" aria-label="Close" (click)="smModal.hide()">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title">Small modal</h4>
        </div>
        <div class="modal-body">
          ...
        </div>
      </div>
    </div>
  </div>`,
})

export class KeyEditComponent {
    @ViewChild('smModal') smModal
    show(){   
    this.smModal.show(); 
  }
}
