//Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

var small = 12;
var large = 24;

Pizza.prototype.order = function() {

  if (this.size === "a" && this.toppings.length === 1) {
    return this.price + small + 1;
  }
   else if (this.size === "a" && this.toppings.length === 2) {
    return this.price + small + 2;
  }
  else if (this.size === "a" && this.toppings.length === 3) {
   return this.price + small + 3;
 }
  else if (this.size === "a" && this.toppings.length === 4) {
   return this.price + small + 4;
  }
  else if (this.size === "b" && this.toppings.length === 1) {
   return this.price + large + 1;
  }
  else if (this.size === "b" && this.toppings.length === 2) {
   return this.price + large + 2;
  }
  else if (this.size === "b" && this.toppings.length === 3) {
   return this.price + large + 3;
 }
  else if (this.size === "b" && this.toppings.length === 4) {
   return this.price + large + 4;
  }
  else if (this.size === "a") {
   return this.price += small;
  }
  else if ( this.size === "b") {
   return this.price += large;
  }
}



//Front End Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("select").val();
    var pizzaToppings = [];

    $(".formToppings input[type='checkbox']:checked").each(function() {
      pizzaToppings.push($(this).val());
    });

    var newPizza = new Pizza(pizzaSize, pizzaToppings);

    $('#result').text(newPizza.order());
    $('.result').show();
  });
});
