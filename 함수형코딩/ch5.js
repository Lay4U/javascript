 // 더 좋은 액션 만들기

 // *********** 추상화 **********



 function gets_free_shipping(total, item_price) { // 두개의 파라미터는ㄴ 요구사항과 맞지 않다.
  return item_price + total >= 20;
 }
 function gets_free_shipping(cart){
  return calc_total(cart) >= 20;
 }
 function update_shipping_icons(cart ){
  var buttons = get_buy_buttons_dom();
  for(var i =0; i < buttons.length; i++){
    var button = buttons[i];
    var item = button.item;
    var new_cart = add_element_last(cart, item.name, item.price)
    if(gets_free_shipping(new_cart))
      button.show_free_shipping_icon();
    else
      button.hide_free_shipping_icon();
  }
 }

 function make_cart_item(name, price) {
  return {
    name: name,
    price: price,
  };
 }

 function add_element_last(array, elem) {
  var new_array = array.slice();
  new_array.push(elem);
  return new_array;
 }

 function add_item(cart, item) {
  return add_element_last(cart, item);
 }

 function add_item_to_cart(name, price){
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shoping_cart, item);
  calc_cart_total();

   var total = calc_total(shopping_cart);
   set_cart_total_dom(total);
   update_shipping_icons(shopping_cart);
   update_tax_dom();
 }

