app.controller('myController', function($scope){
                                           
                                    
                                    $scope.disabled="false";
                                    
                                  
                                    //$scope.hola.push({});
                                    $scope.hola1 = [{}];
                                    $scope.hola2 = [{}];
                                    $scope.hola3 = [{}];
                                    $scope.hola4 = [{}];
    
                                    $scope.change = true;
    
                                    $scope.mains = [];
    
                                    $scope.addNewStatus = (function(){
                                        
                                          $scope.mains.push({});
                                        
                                    });
    
                                    $scope.deleteAllCards = (function()
                                    {
                                        $scope.hola1 = [];
                                        $scope.hola2 = [];
                                        $scope.hola3 = [];
                                        $scope.hola4 = [];
                                        $scope.mains = [];
                                        
                                        $scope.change = false;
                                        
                                    });
                                   
                                    $scope.add1 = (function()
                                    {
                                       $scope.hola1.push({});
                                       //$scope.indexxx = false;

                                    });
                                    
                                    $scope.remove = (function($index)
                                    {
                                        $scope.hola1.splice($index,1)
                                        
                                    });
    
                                    $scope.add2 = (function()
                                    {
                                       $scope.hola2.push({});
                                       //$scope.indexxx = false;

                                    });
                                    $scope.add3 = (function()
                                    {
                                       $scope.hola3.push({});
                                       //$scope.indexxx = false;

                                    });
                                    $scope.add4 = (function()
                                    {
                                       $scope.hola4.push({});
                                       //$scope.indexxx = false;

                                    });
    
                                  
    
    
});
        