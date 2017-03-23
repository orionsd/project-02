


newPromise(function(resolve, reject) {})

var xhr = new XMLhttprequest();

 xhr.onload = function() {

    функция обработки 

 }



.then(
function(result) {},
function(error) {}
)
.catch(function(error) {});
Promise.all(listOfPromises)
.then(
function(resultList) {},
function(error) {}
);