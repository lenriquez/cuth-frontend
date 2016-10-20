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
var TableComponent = (function () {
    function TableComponent() {
        this.keys = [
            { title: 'Gmail',
                userName: 'felipe096',
                url: '',
                password: '******',
                comments: 'N/A'
            }
        ];
        this.headers = ['Title', 'UserName', 'URL', 'Comments', 'Actions'];
        console.clear();
    }
    TableComponent.prototype.addKey = function (key) {
        console.log("Adding new key");
        this.keys.push(key);
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'key-table',
            template: "\n    <table class=\"table table-striped text-center\">\n      <th *ngFor=\"let header of headers\" class=\"text-center\">\n        {{ header }}\n      </th>\n      <tr *ngFor=\"let row of keys\" [key]=\"row\"></tr>\n    </table>\n    <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"addKey(keyEdit.showNew())\"> Add </button>\n    <key-edit #keyEdit ></key-edit>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map