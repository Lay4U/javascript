// 타임라인 사이에서 자원 공유하기
// 자원을 안전하게 공유하기위한 동시성 기본형 concurrency primitive


//자원 공유시 액션 실행 순서가 중요하다.
//Dom이 업데이트되는 순서를 보장해야 한다.

//큐는 들어오는 순서대로 작업을 처리한다.
// 큐를 만들어서 작업을 순서대로 처리한다.

function add_item_to_cart(item) {
  cart = add_item(cart, item);
  update_total_queue(cart);
}

function calc_cart_total(cart, callback) {
  var total = 0;
  cost_ajax(cart, function (cost) {
    total += count;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      callback(total);
    });
  });
}

function DroppingQueue(max, worker) {
  var queue_items = [];
  var working = false;


  function runNext() {
    if (working)
      return;
    if (queue_items.length === 0)
      return;

    working = true;
    var item = queue_items.shift();

    // function worker(cart, done) {
    //   calc_cart_total(cart, function (total) {
    //     update_total_dom(total);
    //     done(total);
    //   });
    // }

    worker(item.data, function (val) {
      working = false;
      setTimeout(item.callback, 0, val);
      runNext();
    });
  }
  return function (data, callback) {
    queue_items.push({
      data: data,
      callback: callback || function () {}
    });
    while(queue_items.length > max){
      queue_items.shift();
    }
    setTimeout(runNext, 0);
  }
}

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    done(total);
  });
}

// function update_total_queue(cart) {
//   setTimeout(runNext, 0);
// }

var update_total_queue = DroppingQueue(1, calc_cart_worker);

//Queue 이벤트가 동시에 4번 실행되면 기다려야한다. => max 값으로 나머지는 버린다.

