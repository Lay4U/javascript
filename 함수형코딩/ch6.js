//변경 가능한 데이터 구조를 가진 언어에서 불변성을 유지하기
// Copy-on-write

function remove_item_by_name(cart, name) {
  var idx = null;
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === name) {
      idx = i;
    }
  }
  if (idx !== null)
    return removeItems(cart, idx, 1);
  return cart;
}

function delete_handler(name){
  shopping_cart = remove_item_by_name(shopping_cart, name);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(shopping_cart);
}

function removeItems(array, idx, count){
  var copy = array.slice();
  copy.splice(id, count);
  return copy;
}

function drop_first(array) {
  var array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

function shift(array){
  var array_copy = array.slice();
  var first = array_copy.shift();
  return {
    first: first,
    array: array_copy
  }
}

function setPriceByName(cart, name, price){
  var cartCopy = cart.slice();
  for(var i = 0; i < cartCopy.length; i++){
    if(cartCopy[i].name === name){
      cartCopy[i] = setPrice(cartCopy[i], price);
    }
    return cartCopy;
  }
}

