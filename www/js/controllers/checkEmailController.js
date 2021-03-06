(function() {
    'use strict';
    angular
        .module('starter')
        .controller('CheckEmailController', CheckEmailController);
  
        CheckEmailController.$inject = ['$scope','$http','appConstants','$ionicPopup','$filter','ionicAlertPopup'];
        function CheckEmailController($scope,$http,appConstants,$ionicPopup,$filter,ionicAlertPopup){

          var translate = $filter('translate');

            //functions sends an email address to server so it can send a recovery email

            $scope.sendEmail = function(){
                var emailRequest = $.param({
                  email: $scope.email,
                });
                $http.post(appConstants.apiUrl + 'login/sendEmail',emailRequest,
                  {headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
                }).then(function(response){
                  if (response.data.status == 200){
                    ionicAlertPopup.alertPop(translate('recoverPassword.title'),translate('recoverPassword.success'));
                    $state.go('login');
                  }else {
                    ionicAlertPopup.alertPop(translate('recoverPassword.title'),translate('recoverPassword.success'));
                    $state.go('login');
                  }
                })
              }  
        }
})()  