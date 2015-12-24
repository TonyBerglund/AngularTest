'use strict',
app.controller('aboutController', function ($scope) {
    $scope.message = 'Om oss';
});
app.controller('missionController', function ($scope) {
    $scope.message = 'Upplevelser';
});

app.controller('surferController', function ($scope) {
    $scope.message = 'Surfing';
});
app.controller('paraController', function ($scope) {
    $scope.message = 'Paragliding';
});
app.controller('formelController', function ($scope) {
    $scope.message = 'Formel 1';
});
app.controller('massageController', function ($scope) {
    $scope.message = 'Massage & spa';
});

app.controller('contactController', function ($scope) {
    $scope.message = 'Kontakt';
});

app.controller('validationCtrl', validationCtrl);
    function validationCtrl(){
        var validfirstName = "Tony";
        var validLastName = "Berglund";
        var validEmail = "tony_berglund@comhem.se";
    }
    //$scope.reset = function () {
    //    $scope.firstName = validfirstName;
    //    $scope.lastName = validlastName;
    //    $scope.email = validEmail;
    //}

    $scope.checkData = function () {
        if ($scope.firstName != validfirstName || $scope.lastName != validlastName || $scope.email != validEmail) {
            alert("The data provided do not match with the default owner");
        } else {
            alert("Seems to be ok!");
        }
    }


