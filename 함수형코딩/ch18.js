 //반응형 아키텍처와 어니언 아키텍처

 function ValueCell (initialValue){
  var currentValue = initialValue;
  var watchers = [];
  return {
    val: function(){
      return currentValue;
    },
    update: function(f) {
      var oldValue = currentValue;
      var newValue = f(oldValue);
      if(oldValue !== newValue){
        currentValue = newValue;
        forEach(watchers, function(watcher){
          watcher(newValue);
        });
      }
    },
    addWatcher: function(f){
      watchers.push(f);
    }
  }
 }

var shopping_cart = ValueCell({});
var cart_total = FormulaCell(shopping_cart, calc_total)

function add_item_to_cart(name, price){
  var item = make_cart_item(name, price);
  shopping_cart.update(function(cart){
    return add_item(cart, item);
  })

}

shopping_cart.addWatcher(update_shipping_icons);
cart_total.addWatcher(set_cart_total_dom);
cart_total.addWatcher(update_tax_dom);

function FormulaCell(upstreamCell, f) {
  var myCell = ValueCell(f(upstreamCell.val()));
  upstreamCell.addWatcher(function(newUpstreamValue){
    return f(newUpstreamValue)
  });
  return {
    val: myCell.val,
    addWatcher: myCell.addWatcher
  }
}
