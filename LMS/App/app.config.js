var myApp;
(function (myApp) {
    var Configuration = /** @class */ (function () {
        /// <reference path="path/to/angular-ui/angular-ui-router.d.ts" />
        function Configuration(stateProvider, urlRouteProvider) {
            // our code
            console.log("i am in configration file ");
            urlRouteProvider.otherwise("/");
            stateProvider
                .state("root", {
                abstract: true,
                url: "",
                template: "<div ui-view class=\"container-fluid slide\"></div>"
            })
                .state("root.home", {
                url: "/",
                templateUrl: "partial/home/home.tpl.html",
                controller: "homeControlller",
                controllerAs: "vm"
            })
                .state("root.student-entry", {
                // url
                // route parameter
                // controller
                // view
                url: "/student-entry",
                templateUrl: "partial/student/student.tpl.html",
                controller: "StudentController",
                controllerAs: "vm"
            })
                .state("root.student-list", {
                url: "/student-list",
                templateUrl: "partial/student/student_list.tpl.html",
                controller: "StudentsController",
                controllerAs: "vm"
            });
        }
        // configure the routes
        // state manager
        Configuration.$inject = ["$stateProvider", "$urlRouterProvider"];
        return Configuration;
    }());
    angular.module('myApp', ["ui.router"]);
    // register class - which and how
    angular.module('myApp').config(Configuration);
})(myApp || (myApp = {}));
