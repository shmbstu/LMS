module myApp {


    class Configuration {
        
        // configure the routes
        // state manager
        static $inject = ["$stateProvider", "$urlRouterProvider"];
        /// <reference path="path/to/angular-ui/angular-ui-router.d.ts" />
        constructor(stateProvider: angular.ui.IStateProvider , urlRouteProvider: angular.ui.IUrlRouterProvider) {
            // our code
            console.log("i am in configration file ");
            urlRouteProvider.otherwise("/");
            stateProvider
            stateProvider
                .state("root",
                {
                    abstract: true,
                    url: "",
                    template: "<div ui-view class=\"container-fluid slide\"></div>"
                })

                .state("root.home",
                {
                    url: "/",
                    templateUrl: "partial/home/home.tpl.html",
                    controller: "HomeController",
                    controllerAs: "vm"
                })

                .state("root.student",
                {
                    // url
                    // route parameter
                    // controller
                    // view
                    url: "/student",
                    templateUrl: "partial/student/student.tpl.html",
                    controller: "StudentController",
                    controllerAs: "vm"
                })
                .state("root.student_list",
                {
                    url: "/student-list",
                    templateUrl: "partial/student/student_list.tpl.html",
                    controller: "StudentsController",
                    controllerAs: "vm"
                })

                ;
        }
    }

    angular.module('myApp', ["ui.router"]);

    // register class - which and how
    angular.module('myApp').config(Configuration);

}