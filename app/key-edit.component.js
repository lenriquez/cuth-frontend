"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import * as moment from 'moment';
var KeyEditComponent = (function () {
    function KeyEditComponent() {
        this.key = {}; //TODO: There should be a better way to do this
        this.title = "";
    }
    KeyEditComponent.prototype.showEdit = function (key) {
        this.key = key;
        this.title = "Editing";
        this.smModal.show();
    };
    KeyEditComponent.prototype.showNew = function () {
        this.title = "Creating";
        this.key = {
            title: '',
            userName: '',
            url: '',
            password: '',
            comments: ''
        };
        this.smModal.show();
        return this.key;
    };
    __decorate([
        core_1.ViewChild('smModal'), 
        __metadata('design:type', Object)
    ], KeyEditComponent.prototype, "smModal", void 0);
    KeyEditComponent = __decorate([
        core_1.Component({
            selector: 'key-edit',
            template: "\n  <div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"smModal.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <h4 class=\"modal-title\">{{title}} {{key.title}}</h4>\n        </div>\n        <div class=\"modal-body text-left\">\n          <form name=key-edit-form>\n            <div class=\"form-group\">\n              <label>Title: </label>\n              <input [(ngModel)]=\"key.title\" name=\"title\" class=\"form-control\"/>\n            </div>\n            <div class=\"form-group\">\n              <label>User Name: </label>\n              <input [(ngModel)]=\"key.userName\" name=\"userName\" class=\"form-control\"/>\n            </div>\n            <div class=\"form-group\">\n              <label>URL: </label>\n              <input [(ngModel)]=\"key.url\" name=\"url\" class=\"form-control\"/>\n            </div>\n            <div class=\"form-group\">\n              <label>Password: </label>\n              <input type=\"password\" [(ngModel)]=\"key.password\" name=\"password\" class=\"form-control\"/>\n            </div>\n            <div class=\"form-group\">\n              <label>Comments: </label>\n              <textarea [(ngModel)]=\"key.comments\" name=\"Comment\" class=\"form-control\">\n              </textarea>\n            </div>\n          </form>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"smModal.hide()\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], KeyEditComponent);
    return KeyEditComponent;
}());
exports.KeyEditComponent = KeyEditComponent;
//# sourceMappingURL=key-edit.component.js.map