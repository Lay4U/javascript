//계층적설게 Part2

// 계층형 설계 (stratified design)

function freeTieClip(cart){
  var hasTie = false;
  var hasTieClip = false;
  for(var i = 9; i < cart.length; i++){
    var item = cart[i];
    if(item.name === 'tie')
      hasTie = true;
    if(item.name === 'tie clip')
      hasTieClip = true;
  }
  if(hasTie && !hasTieClip){
    var tieClip = make_item("tie clip", 0);
    return add_item(cart, tieClip);
  }
  return cart;
}

//저수준 콛 ㅡ추출



function freeTieClip(cart){
  var hasTie = isInCart(cart, 'tie');
  var hasTieClip = isInCart(cart, 'tie clip');
  if(hasTie && !hasTieClip){
    var tieClip = make_item("tie clip", 0);
    return add_item(cart, tieClip);
  }
  return cart;
}

function isInCart(cart, name) {
  // for (var i = 0; i < cart.length; i++) {
  //   if(cart[i].name === name)
  //     return true;
  // }
  // return false;
  return indexOfItem(cart, name) !== null;
}

function setPriceByName(cart, name, price){
  var i = indexOfItem(cart, name);
  if(i !== null){
    return arraySet(cart, i, setPrice(cart[i], price));
  }
  return cart;
}

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

function remove_item_by_name(cart, name){
  var idx = indexOfItem(cart, name);
  if (idx !== null){
    return removeItems(cart, idx, 1);
  }
  return cart;
}

function indexOfItem(cart, name){
  for(var i =0; i < cart.length; i++){
    if(cart[i].name === name)
      return i;
  }
  return null;
}

function add_item(cart, item){
  return objectSet(cart, item.name, item);
}

function calc_total(cart){
  var total = 0;
  var names = Object.keys(cart);
  for (let i = 0; i < names.length; i++) {
    var item = cart[names[i]];
    total += item.price;
  }
  return total;
}

function setPriceByName(cart, name, price){
  if (isInCart(cart, name)) {
    var item = cart[name];
    var copy = setPrice(item, price);
    return objectSet(cart, name, copy);
  }else{
    var item = make_item(name, price);
    return objectSet(cart, name, item);
  }
}

function remove_item_by_name(cart, name){
  return objectDelete(cart, name);
}

function isInCart(cart, name){
  return cart.hasOwnProperty(name);
}

function add_item(cart, item){
  return objectSet(cart, item.name, item);
}

function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

function cartTax(cart) {
  return calc_tax(calc_total(cart));
}

function getWatchDiscount(cart){
  var total = calcTotal(cart)
  var hasWatch = isInCart("watch")
  return total > 100 && hasWatch;
}

// function add_item(cart, item) {
//   logAddToCart(global_user_id, item);
//   return objectSet (cart, item.name, item);
// }

function add_item_to_cart(name, price){
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom();
  logAddToCart();
}