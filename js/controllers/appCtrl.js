app.controller("appCtrl", function ($scope, chatbotService) {
    $scope.createChat = function() {

        chatbotService.chat($scope.question)
            .then(function(promisse) {
                $scope.answer = promisse.data.answers[0].answer;
            })
    }
})