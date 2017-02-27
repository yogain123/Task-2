app.controller("myController",function($scope){
    
    //var countParent = 1;
    var countChild = 1;
    
    $scope.parentStatus=[
        {"assignTask":"Completed","child":[{"id":countChild}]},
        {"assignTask":"Pending","child":[{"id":countChild}]},
        {"assignTask":"In Progress","child":[{"id":countChild}]}
    ]
    
    
    $scope.addTask = function(id)
    {
        $scope.parentStatus[id].child.push({})
    }
    
    $scope.addNewStatus = function()
    {
        
        $scope.assignTask = window.prompt("Please Enter Name Of Status","")
        $scope.parentStatus.push({"assignTask":$scope.assignTask,"child":[{"id":countChild}]})
    }
    
    $scope.remove = function(parentId,childId)
    {
         $scope.parentStatus[parentId].child.splice(childId,1)
    }
    
    $scope.deleteAllCards = function()
    {
        $scope.parentStatus = [];
    }
    
    $scope.deleteAllTaskOfStatus = function(id)
    {
        $scope.parentStatus[id].child = [];
    }
    $scope.deleteThisStatus = function(id)
    {
        $scope.parentStatus.splice(id,1);
    }

});