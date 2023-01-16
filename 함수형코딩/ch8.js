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
  // var cartCopy = cart.slice();

  // for(var i = 0; i < cartCopy.length; i++){
  //   if(cartCopy[i].name === name){
  //     cartCopy[i] = setPrice(cartCopy[i], price);
  //   }
  // }
  var i = indexOfItem(cart, name);
  if(i !== null){
    // cartCopy[i] = setPrice(cartCopy[i], price);
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