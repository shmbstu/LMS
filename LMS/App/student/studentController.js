var myApp;
(function (myApp) {
    var StudentController = /** @class */ (function () {
        function StudentController() {
            console.log("I am in student controller");
            this.now = new Date().toString();
        }
        return StudentController;
    }());
    angular.module("myApp").controller("StudentController", StudentController);
    var StudentsController = /** @class */ (function () {
        function StudentsController() {
            console.log("I am in students controller");
            this.now = new Date().toString();
        }
        return StudentsController;
    }());
    angular.module("myApp").controller("StudentsController", StudentsController);
})(myApp || (myApp = {}));
