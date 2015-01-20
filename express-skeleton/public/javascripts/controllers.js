var itemAppController = angular.module('itemAppController', []);

itemAppController.controller('itemDataCtrl', function ($scope, $http,$location){
        $scope.getItemListData = function() {
                        $location.path('/list');
        };

});

itemAppController.controller('itemListCtrl', function ($scope, $http,$location){
		$http.get('http://tracknbuy.com/amazon/Electronics/'+$scope.searchId).success(function(data) {
                        console.log($scope.searchId);
			console.log('Success '+JSON.stringify(data));
                        $scope.itemData = data;
                        console.log($location.path());
         	});
});
