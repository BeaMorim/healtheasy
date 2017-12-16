app.controller("appCtrl", function ($scope, chatbotService) {
    $scope.createChat = function () {
        document.getElementById("chatbot").innerHTML += `<div class='question'>${$scope.question}</div>`
        chatbotService.chat($scope.question)
            .then(function (promisse) {
                $scope.answer = promisse.data.answers[0].answer;
                document.getElementById("chatbot").innerHTML += `<div id="last-one" class='answer'>${$scope.answer}</div>`
            })
        $scope.question = "";
    }
})