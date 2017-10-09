
module myApp {
    class StudentController {
        constructor() {
            console.log("I am in student controller");
            this.now = new Date().toString();
        }

        now: string;
    }

    angular.module("myApp").controller("StudentController", StudentController as any);

    class StudentsController {
        constructor() {
            console.log("I am in students controller");
            this.now = new Date().toString();
        }

        now: string;
    }

    angular.module("myApp").controller("StudentsController", StudentsController as any);
}