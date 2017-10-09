

module myApp {
    export class HomeController {
        constructor() {
            console.log("I am in home controller");
            this.now = new Date().toString();
        }

        now: string;
    }

    angular.module("myApp").controller("HomeController", HomeController as any);
}