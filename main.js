var registerform =document.querySelector(".registerform");
var exchange=document.querySelector(".exchange");
var data;

registerform .onsubmit = function(e){
e.preventDefault();
var elements=e.target.elements;
console.log(elements[0].value);
    if(exchange.value == "dollar"){
    data= elements[0].value * 3.5 ;
    }

    if(exchange.value == "dinar"){
    data= elements[0].value * 5 ;
    }
    if(exchange.value == "nis"){
    data= elements[0].value * 1 ;
    }

document.querySelector("p").innerHTML=data;

}








