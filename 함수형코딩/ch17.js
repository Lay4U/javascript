// 타임라인 조율하기

function Cut(num, callback) {
  var num_finished = 0;
  return function() {
    num_finished += 1;
    if(num_finished === num){
      callback();
    }
  }
}

var done = Cut(3, function() {
  console.log('3 timelines are finished');
})

function calc_cart_total(cart, callback) {
  var total = 0;
  var done = Cut(2, function() {
    callback(total);
  })
  cost_ajax(cart, function(cost){
    total += cost;
    done();
  });
  shipping_ajax(cart, function(shipping) {
    total += shipping;
    done();
  })
}

function sendAddToCartText(number){
  sendTextAjax(number, "Thanks for adding something to your cart." +
    "Reply if you have any questions!");
}

function JustOnce(action){
  var alreadyCalled = false;
  return function(a, b, c) {
    if(alreadyCalled) return;
    alreadyCalled = true;
    return action(a, b, c);
  }
}