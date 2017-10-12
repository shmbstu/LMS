var myApp;
(function (myApp) {
    var HomeController = /** @class */ (function () {
        function HomeController(studentService) {
            var self = this;
            // console.log("I am in home controller");
            this.now = new Date().toString();
            studentService.get()
                .then(function (success) {
                console.log(success);
                self.values = success.data;
                //alert(self.values);
            }, function (error) {
                console.log(error);
                alert(error);
            });
        }
        HomeController.$inject = ["StudentService"];
        return HomeController;
    }());
    angular.module("myApp").controller("HomeController", HomeController);
})(myApp || (myApp = {}));
