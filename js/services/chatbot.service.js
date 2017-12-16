app.factory("chatbotService", function($http) {
    var _chat = function(text) {
        return $http ({
            method: 'POST',
            url: "https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/aa2373d6-41d1-452e-ba04-d9cc7402c121/generateAnswer",
            headers: {
                'Ocp-Apim-Subscription-Key' : "8b082d94cfa94cc599679168b05d9afe"
            },
            data: { question: text}
        })
    } 

    return {
        chat: _chat
    }
})