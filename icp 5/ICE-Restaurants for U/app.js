// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=5YMR5WOMVRBA4TD4QUGPAWR0SB0HUZJU32H33N1GDAANI3GZ\n" +
                    "&client_secret=4IHPGYZ0QPB5UN4JYCHWPVABEZ1C01IR54XJRNWTXTDL0GWK" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);

                handler.success(function (data) {

                        // Tie an array named "venueList" to the scope which is an array of object
                        if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                            for (var i = 0; i < data.response.venues.length; i++) {
                                $scope.venueList[i] = {
                                    "name": data.response.venues[i].name,
                                    "id": data.response.venues[i].id,
                                    "location": data.response.venues[i].location
                                };

                        }
                        // Each object should have key value pairs where the keys are "name", "id" , "location" and values are their corresponding values from the response
                        // Marks will be distributed between logic, implementation and UI

                    }
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }
    })