app.controller('myController', function($scope){
                                           
                                    
                                    $scope.disabled="false";
                                    
                                  
                                    //$scope.hola.push({});
                                    $scope.hola1 = [{}];
                                    $scope.hola2 = [{}];
                                    $scope.hola3 = [{}];
                                    $scope.hola4 = [{}];
                                    $scope.mains = [];
    
                                    
                                   
    
                                   
    

                                    //System.out.println(count);
                                    //$scope.indexxx = false;
                                   
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
    
                                    $scope.newStatus = (function()
                                    {
                                         $scope.mains = [];
                                         $scope.mains.push({});
                                        
                                    });
    
    
});
        