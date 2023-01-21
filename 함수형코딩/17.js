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