angular.module('core').controller('ChronometroController', ['$scope','$state', 'Authentication','$modal','$http',
  function ($scope,$state, Authentication,$modal,$http) {
    $scope.initChronometer=0;
    $scope.initChronometerInput=0;
    $scope.yellow=1;
    $scope.red=1;
    $scope.displayYellow=false;
    $scope.displayRed=false;
    // 
    //
    // $scope.startTimer = function (){
    //   $scope.$broadcast('timer-start');
    //   $scope.timerRunning = true;
    // };
    //
    // $scope.stopTimer = function (){
    //   $scope.$broadcast('timer-stop');
    //   $scope.timerRunning = false;
    // };
    //
    // $scope.addTime=function(){
    //   $scope.initChronometer=$scope.initChronometerInput*60;
    // };
    //
    // $scope.addYellow=function(){
    //   $scope.yellow=$scope.changeYellow*60;
    // };
    // $scope.addRed=function(){
    //   $scope.red=$scope.changeRed*60;
    // };
    // $scope.$on('timer-tick', function (event, args) {
    // console.log(args);
    //   $scope.saveTime=args.millis/1000;
    //   $scope.changeMili();
    //
    // });
    //
    // $scope.changeMili=function(){
    //   if ($scope.saveTime<$scope.yellow&&$scope.saveTime>=$scope.red) {
    //     $scope.displayYellow=true;
    //     console.log('entro a yello');
    //   }else if($scope.saveTime<$scope.red ){
    //     console.log('entro a red');
    //     $scope.displayYellow=false;
    //     $scope.displayRed=true;
    //   }
    // };

    $scope.displayGreenFunction=function(){
      $scope.displayYellow=false;
      $scope.displayRed=false;
      console.log('entro');
    };
    $scope.displayYellowFunction=function(){
      $scope.displayYellow=true;
      $scope.displayRed=false;
      console.log('entro');
    };
    $scope.displayRedFunction=function(){
      $scope.displayYellow=false;
      $scope.displayRed=true;
      console.log('entro');
    };
  }
]);
