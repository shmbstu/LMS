var myApp;
(function (myApp) {
    var HomeController = /** @class */ (function () {
        function HomeController() {
            console.log("I am in home controller");
            this.now = new Date().toString();
        }
        return HomeController;
    }());
    myApp.HomeController = HomeController;
    angular.module("myApp").controller("HomeController", HomeController);
})(myApp || (myApp = {}));
