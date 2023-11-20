var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.addEventListener('load', function(){
    console.log(this.response)
    result(JSON.parse(this.response))
});
request.send()
console.log(request)
function result(data = []){
    for (var x = 0; x < data.length; x++){
        console.log(data[x].name.common)
        console.log(data[x].region)
        console.log(data[x].subregion)
        console.log(data[x].population)
    }
}