var buttonTranslate=document.querySelector("#btn-translate");
var inputText=document.querySelector("#txt-input");
var outputText=document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/yoda.json"

function geturl(text)
{
    return serverURL + "?" + "text=" + text
}
function errorHandler(error)
{
    console.log("Got error",error);
    alert("There is something wrong with the server!! Try connecting after sometime")
}

function clickEventHandler()
{
    var text=inputText.value;
    fetch(geturl(text))
    
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputText.innerText=translatedText;
        })
    
    .catch(errorHandler)
    
};

buttonTranslate.addEventListener("click",clickEventHandler)


