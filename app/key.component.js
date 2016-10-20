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
var Key = (function () {
    function Key() {
    }
    return Key;
}());
exports.Key = Key;
var KeyComponent = (function () {
    function KeyComponent() {
    }
    KeyComponent.prototype.onDelete = function (key) {
        alert("Delete");
    };
    __decorate([
        core_1.Input('key'), 
        __metadata('design:type', Object)
    ], KeyComponent.prototype, "key", void 0);
    KeyComponent = __decorate([
        core_1.Component({
            selector: '[key]',
            template: "\n    <td>{{key.title}}</td>\n    <td>{{key.userName}}</td>\n    <td>{{key.url}}</td>\n    <td>{{key.comments}}</td>\n    <td>\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"keyEdit.showEdit(key)\">\n        Edit\n      </button>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDelete(key)\">\n        Delete\n      </button>\n    </td>\n    <key-edit #keyEdit ></key-edit>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], KeyComponent);
    return KeyComponent;
}());
exports.KeyComponent = KeyComponent;
//# sourceMappingURL=key.component.js.map