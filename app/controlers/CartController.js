var ungdungAngularjs = angular.module("ungdungAngularJS", []);

ungdungAngularjs.controller("cartController",function($scope){
    $scope.listsanpham = [{
    id:1,
    ten:"5cm tren giay",
    gia:20000,
    img : "5_centimet_tren_giay.jpg",
    soluong : 1,},
   {
    id:2,
    ten:"1cm tren giay",
    gia:10000,
    img : "5_centimet_tren_giay.jpg",
    soluong : 1,},
    {
    id:3,
    ten:"15cm tren giay",
    gia:50000,
    img : "5_centimet_tren_giay.jpg",
    soluong : 1,}];
$scope.editedItem = {};

    Array.prototype.removeValue = function(name, value){
           var array = $.map(this, function(v,i){
              return v[name] === value ? null : v;
           });
           this.length = 0; //clear original array
           this.push.apply(this, array); //push all elements except the one we want to delete
        }
    $scope.xoaSP = function(vkey)
    {
        $scope.listsanpham.removeValue('id',vkey);
    }
    $scope.tongtien = function()
    {
        var tongtienS=0;
        var x;
        var lsp;
        lsp = $scope.listsanpham;
        for (x in lsp)
        {
            if(lsp[x].gia!==undefined && lsp[x].soluong!== undefined)
            tongtienS += lsp[x].gia * lsp[x].soluong;
        }
        return tongtienS;
    }
});  