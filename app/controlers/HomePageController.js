var ungdungAngularjs = angular.module("ungdungAngularJS", []);

ungdungAngularjs.controller("HomepageController",function($scope){
$scope.listsanpham=[{
    id:1,
    ten:"5cm tren giay",
    gia:20000,
    img : "5_centimet_tren_giay.jpg"},
    {
    id:2,
    ten:"10cm tren giay",
    gia:50000,
    img : "5_centimet_tren_giay.jpg"}];


});