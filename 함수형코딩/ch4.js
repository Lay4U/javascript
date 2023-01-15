//액션에서 계산 빼내기


var shopping_car = [];
var shopping_car_total = 0;

function add_item_to_cart(name, price){
  shopping_cart.push({
    name: name,
    price: price
  });
  calc_cart_total();
}

function calc_cart_total(){
  shopping_cart_total = 0;
  for( var i = 0; i < shopping_cart.length; i++){
    var item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  set_cart_total_dom();
  update_shipping_icons(); // 아이콘 업데이트 하느 코드 추가
  update_tax_dom(); // 세금 업데이트 코드 추가
}

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i=0; i < buy_buttons.length; i++){
    var button = buy_buttons[i];
    var item = button.item;
    if(item.price + shopping_cart_total > 20){
      button.show_free_shipping_icon();
    }else{
      button.hide_free_shipping_icon();
    }
  }
}

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.10);
}

//var shopping_cart ~ calc_cat_total 모두 action
// 전역변수는 변경 가능하기에 액션이고 전역변수를 바꾸는것은 액션, DOM을 읽고 수정하는것은 액션

// 함수에 암묵적 입력과 암묵적 출력이 있으면 액션이 된다. 이를 없애면 계산이 된다.

function calc_cart_total() {
  shopping_cart_total = calc_total();
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function calc_total(cart) {
  var total = 0;
  for(var i =0; i<cart.length; i++){
    var item = cart[i];
    total += item.price;
  }
  return total;
}
// 전역변수 없애고, 리턴하여 출력 없애고 cart로 매개변수 받아서 입력 없앰

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function add_item(cart, name, price) {
  var new_cart = cart.slice();
  new_cart.push({
    name,
    price
  });
  return new_cart;
}

//shopping_cart를 매개변수로 넘겨 암묵적 입력을 제거하고 new_cart를 리턴해서 암묵적 출력을 제거

//exercise 4-1
function update_tax_dom() {
  // set_tax_dom(shopping_cart_total * 0.10);
  set_tax_dom(get_tax(shopping_cart, 0.10));
}

function get_tax(cart, taxRate) {
  return calc_total(cart) * taxRate;
}




//exercise 4-2
function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();
  for(var i=0; i< buy_buttons.length; i++){
    var button = buy_buttons[i];
    var item = button.item;
    var hasFreeShipping = gets_free_shipping_with_item(cart, item);
    set_free_shipping_icon(hasFreeShipping, button);
  }
}

function gets_free_shipping_with_item(cart, item){
  var new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
}

function set_free_shipping_icon(hasFreeShipping, button) {
  if (hasFreeShipping) {
    button.show_free_shipping_icon();
  } else {
    button.hide_free_shipping_icon();
  }
}

function isTaxFree(price, total){
  return price + total >= 20;
}

// 액션에는 암묵적입 입력이나 출력을 가지고 있다.
// 계산에는 암묵적인 입력이나 출력을 모두 제거해야 한다.
//     여기서는 매개변수를 사용해 입력을 없애고 리턴을 사용해 출력을 ㄹ없앴다.
//     이렇게 하면 액션을 계산으로 바꿀 수 있다.


