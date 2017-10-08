
module myApp {
    class studentController {
        constructor() {
            console.log("I am in home controller");
            this.now = new Date().toString();
        }

        now: string;
    }

    angular.module("myApp").controller("studentController", studentController as any);

    class studentsController {
        constructor() {
            console.log("I am in student controller");
            this.now = new Date().toString();
        }

        now: string;
    }

    angular.module("myApp").controller("studentsController", studentsController as any);
}