var myApp;
(function (myApp) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        return Student;
    }());
    myApp.Student = Student;
    var StudentController = /** @class */ (function () {
        function StudentController(studentService) {
            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in student controller");
        }
        StudentController.prototype.add = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.reset();
            };
            var error = function (errorReason) {
                console.error(errorReason);
            };
            this.studentService.save(self.student).then(success, error);
        };
        StudentController.prototype.reset = function () {
            this.student = new Student();
        };
        StudentController.$inject = ["StudentService"];
        return StudentController;
    }());
    angular.module('myApp').controller("StudentController", StudentController);
    var StudentsController = /** @class */ (function () {
        function StudentsController(studentService) {
            this.studentService = studentService;
            var self = this;
            self.students = [];
            var success = function (response) {
                self.students = response.data;
                console.log(self.students);
            };
            var error = function (errorReason) {
                alert(errorReason);
            };
            this.studentService.get().then(success, error);
        }
        StudentsController.$inject = ["StudentService"];
        return StudentsController;
    }());
    angular.module('myApp').controller("StudentsController", StudentsController);
})(myApp || (myApp = {}));
