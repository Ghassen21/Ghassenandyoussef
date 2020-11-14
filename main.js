function makeCard(product,text){
	return $(`<div class="column">
	<div class="card" id="blabla">
	<h3 >`+product+`</h3>
	<h2><a id="prod" href="#shop">`+text+`<a></h2>
	</div>`)
}

 function each(coll, f) { 
       if (Array.isArray(coll)) { 
             for (var i = 0; i < coll.length; i++) { 
                   f(coll[i], i); 
             } 
       } else { 
             for (var key in coll) { 
                   f(coll[key], key); 
             } 
       } 
 } 
 function map(array, f) { 
       var acc = []; 
       each(array, function(element, i) { 
             acc.push(f(element, i)); 
       }); 
       return acc; 
 }
 var card1={product:"FILTER",text:"buynow"} ;
 var card2={product:"BRAKE PADS",text:"buynow"};
 var card3={product:"AIR FILTER",text:"buynow"};
 var card4={product:"ENGINE OIL",text:"buynow"};
 var card5={product:"BRAKE DISCS",text:"buynow"};
 var card6={product:"SHOCK ABSORBER",text:"buynow"};
 var card7={product:"WHEEL BEARING",text:"buynow"};
 var card8={product:"SPARK PLUG",text:"buynow"};
 
function addcard(card){
var cards = map(car,function(cardinfo){
return makeCard(cardinfo.product , cardinfo.texte,)
});
var $container =  $(`<div class="row"></div>`)
$container.append(...cards)
$("body").append($container)
}

function addpeUprice(price){
    $('#unitprice').val(price);
}
function calculaTo(){
    var res= $('#unitprice').val()*$('#quantity').val();
    $('#total').val(res);
}
$(document).ready(function(){
    addpeUprice(7.25)
    $("#quantity").change(calculaTo) 
     $("#prod").click(function(){
    alert("Please fill in the quantity input ");
  });
     $("#prod1").click(function(){
    alert("Please  choose your products ");
  });

});




