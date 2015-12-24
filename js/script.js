function validationCtrl($scope) {
    var validfirstName = "Tony";
    var validLastName = "Berglund";
    var validEmail = "tony_berglund@comhem.se";

    $scope.reset = function () {
        $scope.firstName = validfirstName;
        $scope.lastName = validlastName;
        $scope.email = validEmail;
    }

    $scope.checkData = function () {
        if ($scope.firstName != validfirstName || $scope.lastName != validlastName || $scope.email != validEmail) {
            alert("The data provided do not match with the default owner");
        } else {
            alert("Seems to be ok!");
        }
    }
}