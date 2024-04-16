(function (window) {

    let ajaxUtils = {};

    // Makes an Ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest =
        function (requestUrl, responseHandler, isJSON) {
            let request = new XMLHttpRequest();
            request.onreadystatechange =
                function () {
                    handleResponse(request, responseHandler, isJSON);
                };
            request.open("GET", requestUrl, true);
        };

    // Only calls user provided 'responseHandler'
    // function if response is ready
    // and not an error
    function handleResponse(request, responseHandler, isJSON) {
        if((request.readyState == 4) && (request.status == 200)){
            if ((isJSON == undefined))
                isJSON = true;
    
            if (isJSON)
                responseHandler(JSON.parse(request.responseText));
            else 
                responseHandler(request.responseText);
        }else {
            // Обробка помилки
            console.error("Request failed with status:", request.status);
        }
    }

    // Expose utility to the global object
    window.$ajaxUtils = ajaxUtils;

})(window);