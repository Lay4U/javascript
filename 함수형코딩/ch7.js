// 신뢰할 수 없는 코드를 쓰면서 불변성을 지키기
//방어적 복사, 깊은 복사,
// 카피-온-라이트와 방어적 복사

// 신뢰할수 없는 코드에서 들어오거나 나가는 데이터는 깊은 복사를 해서 원본을 안전지대에 가지고있어야한다.

function add_item_to_cart(name, price){
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(shopping_cart);
  // var cart_copy = deepCopy(shopping_cart); //넘기기 전에 복사
  // balckfriday_promotion(cart_copy);
  // shopping_cart = deepCopy(cart_copy); //들어오는 데이터를 위한 복사
  shopping cart = black_friday_promotion_safe(shopping_cart);
}

/*
* 데이터가 안전한 코드에서 나갈 때 복사하기
* 안전한 코드로 데이터가 들어올 때 복사하기
* */

function black_friday_promotion_safe(cart) {
  var cart_copy = deepCopy(cart);
  balck_friday_promotion(cart_copy);
  return deepCopy(cart_copy);
}


function deepCopy(thing){
  if(Array.isArray(thing)) {
    var copy = [];
    for(var i=0; i < thing.length; i++)
      copy.push(deepCopy(thing[i]));
    return copy;
  } else if (thing === null){
    return null;
  }else if (typeof thing === 'object'){
    var copy = {};
    var keys = Object.keys(thing);
    for(var i = 0; i < keys.length; i++){
      var key = keys[i];
      copy[key] = deepCopy(thing[key]);
    }
    return copy;
  }else{
    return thing;
  }
}

