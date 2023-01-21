// 타임라인 격리하기

function add_item_to_cart(name, price, quantity) {
  cart = add_item(cart, name, price, quantity);
  calc_cart_total(cart, update_total_dom);
}

function calc_cart_total(cart, callback){
  var total = 0;
  cost_ajax(cart, function(cost) {
    total += cost;
    shipping_ajax(cart, function(shipping){
      total += shipping;
      // update_total_dom(total);
      callback(total);
    })
  })
}

// callback으로 상태관리를하라고?