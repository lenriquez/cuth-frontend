import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'key-edit',
  templateUrl: './key-edit.component.html',
  styleUrls: ['./key-edit.component.css']
})

export class KeyEditComponent {
  @ViewChild('smModal') smModal;

  key = {}; // TODO: There should be a better way to do this
  title = '';

  // Display a Modal that will show the properties of a key.
  showEdit(key) {
    this.key = key;
    this.title = 'Editing';
    this.smModal.show();
  }

  // Display a Modal with all the fields for a key.
  showNew() {
    this.title = 'Creating';
    this.key = {
      title: '',
      userName: '',
      url: '',
      password: '',
      comments: ''
    };

    this.smModal.show();
    return this.key;
  }
}
