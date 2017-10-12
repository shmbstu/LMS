var myApp;
(function (myApp) {
    var StudentService = /** @class */ (function () {
        function StudentService(http, q) {
            this.students = [];
            this.http = http;
            this.q = q;
        }
        StudentService.prototype.get = function () {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.get("http://localhost:53782/api/Students").then(f1, f2);
            return deffered.promise;
        };
        StudentService.prototype.save = function (student) {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };
            self.http.post("http://localhost:53782/api/Students", student).then(f1, f2);
            return deffered.promise;
        };
        StudentService.$inject = ["$http", "$q"];
        return StudentService;
    }());
    myApp.StudentService = StudentService;
    angular.module("myApp").service("StudentService", StudentService);
})(myApp || (myApp = {}));
