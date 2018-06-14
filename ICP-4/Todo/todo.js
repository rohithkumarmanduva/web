//We have to define our application first
angular.module("toDoList", [])


    .controller("toDoListCtrl", ['$scope',
        function($scope) {

            $scope.taskList = [
                {done: true,
                    task: 'ADD TO YOUR LIST'
                },

            ];


            $scope.addTask = function(task) {


                $scope.taskList.push({
                    done: false,
                    task: task
                });
            };
            $scope.remaining = function() {
                var count = 0;
                angular.forEach(toDoList, function(todo) {
                    count += todo.done ? 0 : 1;
                });
                return count;
            };

        }
    ]);