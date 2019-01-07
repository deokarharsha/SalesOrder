var app = angular.module("Main",[]);
app.controller("MainCtrl",function($http,$scope){
    $scope.Transid = 0;
    $scope.submit = function(){
        $http({
         method: 'POST',
         url: 'http://localhost:16557/sale',
         data:{
            "ID" : $scope.getId(),
            "Stock Location" : $scope.Stockloc,
            "Party Name" : $scope.PartyNM,
            "Order Booked By" : $scope.OrderBookedBy,
            "PO Number" : $scope.PONum,
            "Delievery Date" : $scope.DelDate,
            "Way Bill Number" : $scope.WayBillNo,
            "Discount Percent" : $scope.DiscountPer,
            "On Header" :$scope.OnHeader,
            "Trans Date" : $scope.TransDate,
            "Bill Date" : $scope.BillDate,
            "City" :$scope.City,
            "Sort By" : $scope.SortBy,
            "Packed By" : $scope.PackedBy,
            "Transporter" : $scope.Transporter,
            "Reference" : $scope.Reference,
            "Discount Amount" : $scope.DiscountAmount,
            "On Row" : $scope.OnRow,
            "Ref Doc No" : $scope.RefDocNo,
            "Bill Number" : $scope.BillNo,
            "Packed Date" : $scope.PackedDate,
            "Lr No" : $scope.LrNo,
            "Lr Date" : $scope.LrDate,
            "case" : $scope.Case,
            "Forwarding" : $scope.Forwarding,
         }
        }).then(function successCallback(response) {
        }, function errorCallback() {
         });
  
      };
      $scope.getId = function () {
        $scope.Transid++;
        return $scope.Transid;
      };
      $http.get("http://localhost:16557/sale").then(function (response) {
      $scope.data = angular.fromJson(response.data.SalesOrder);
    });
})