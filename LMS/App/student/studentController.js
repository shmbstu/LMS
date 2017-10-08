var myApp;
(function (myApp) {
    var studentController = /** @class */ (function () {
        function studentController() {
            console.log("I am in home controller");
            this.now = new Date().toString();
        }
        return studentController;
    }());
    angular.module("myApp").controller("studentController", studentController);
    var studentsController = /** @class */ (function () {
        function studentsController() {
            console.log("I am in student controller");
            this.now = new Date().toString();
        }
        return studentsController;
    }());
    angular.module("myApp").controller("studentsController", studentsController);
})(myApp || (myApp = {}));
