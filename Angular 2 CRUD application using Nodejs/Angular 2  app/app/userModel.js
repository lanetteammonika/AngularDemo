"use strict";
/*
* Angular 2 CRUD application using Nodejs
* @autthor Shashank Tiwari
*/
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel = (function () {
    function UserModel(_id, name, gender, country) {
        this._id = _id;
        this.name = name;
        this.gender = gender;
        this.country = country;
    }
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=userModel.js.map