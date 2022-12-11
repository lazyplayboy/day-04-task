var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    
    console.log(result [39].common.name, result[39].countries , result[39].regions, result[39].subregion,result[39].populations)
    for (var obj of result ){
      console.log (obj.name.common,obj.countries, obj.regions,obj.subregion,obj.populations);
    }
   }


   problem 2



   var request = new XMLHttpRequest();
   request.open("GET","https://restcountries.eu/rest/v2/all",true)
   request.send()
    request.onload=function(){
       var data = request.response
       var result = JSON.parse(data)
       
       console.log(result [39].common.name, result[39].flages

       for (var obj of result ){
         console.log (obj.name.common,obj.flages);
       }
      }
   


json 

var obj = {

   name: "person 1",
   age: 5,

 };
 obj = age : 5 ,neme : "person 1";

 console.log(obj);



