angular.module("login_form",[])
    .controller("AppCtrl", function ($scope, $http) {
        $scope.auth = {};
        let resultMessageEl = document.getElementById('resultMessage');
        let exampleInputNameEl = document.getElementById('exampleInputName');
        let exampleInputLoginEl = document.getElementById('exampleInputLogin');
        let inputNameLabel = document.getElementById('inputNameLabel');
        let inputLoginLabel = document.getElementById('inputLoginLabel');
        exampleInputNameEl.addEventListener('input', () => {
            inputNameLabel.style.color = 'black';
        inputLoginLabel.style.color = 'black';
        $scope.message = '';
        });
        $scope.sendForm = function(auth){
            $http({
                method: "POST",
                url: "/login",
                data: $.param(auth),
                headers: { "Content-Type" : "application/x-www-form-urlencoded" }
            }).then(
                function(data) {
                    window.alert("Доступ разрешен");
                },
                function(error) {
                    window.alert("Доступ запрещен");
                }
            );
        }
    });
