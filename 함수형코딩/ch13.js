// 함수형 도구 체이닝

function biggestPurchaseBestCustomers(customers){
  var bestCustomers = filter(customers, customer => customer.purchases.length >=3);
  // var biggestPurchases = map(bestCutomers, customer =>
  // reduce(customer.purchases, {total: 0}, (biggestSoFar, purchase) => {
  //   if(biggestSoFar.total > purchase.total)
  //     return biggestSoFar;
  //   else
  //     return purchase;
  // }))
  return maxKey(customer.purchases, {total: 0}, purchases => purchases.total)
}

function maxKey(array, init, f) {
  return reduce(customer.purchases, {total: 0}, (biggestSoFar, purchase) => {
    if(biggestSoFar.total > purchase.total)
      return biggestSoFar;
    else
      return purchase;
  })
}


function biggestPurchaseBestCustomers(customers){
  var bestCustomers = filter(customers, isGoodCustomer);
  var biggestPurchases = map(bestCustomers, getBiggestPurchase);
  return biggestPurchases;
}

function isGoodCustomer(customer){
  return cusotmer.purchases.length >= 3;
}
function getBiggestPurchases(customer){
  return maxKey(customer.purchases, {total: 0}, getPurchase.total);
}

function getPurchasesTotal(purchase){
  return purchase.total;
}



var answer = [];
var window = 5;
for (var i = 0; i < array.length; i++){
  var sum = 0;
  var count = 0;
  for(var w = 0; w < window; w++){
    var idx = i + w;
    if (idx < array.length){
      sum += array[idx];
      count += 1;
    }
  }
  answer.push(sum/count);
}

var answer = [];
var window = 5;
for (var i = 0; i < array.length; i++){
  var subarray = array.slice(i, i + window);
  answer.push(average(subarray));
  // var sum = 0;
  // var count = 0;
  // var subarray = array.slice(i, i+window);
  // for(var w = 0; w < subarray.length; w++){
  //   sum += subarray[w];
  //   count += 1;
  // }
  // answer.push(sum/count);
}

var indices = [];
for (var i = 0; i < array.length; i++)
  indices.push(i);
var window = 5;
var answer = map(indices, i => {
  var subarray = array.slice(i, i + window);
  return average(subarray);
});



var shoppingCart = reduce(itemAddes, {}, (cart, itempOp) => {
  var op = itemOp[0];
  var item = itemOp[1];
  if( op === 'add') return addOne(cart, item);
  if( op === 'remove') return removeOne(cart, item);
})

function addOne(cart, item) {
  if(!cart[item])
    return add_item(cart, {name: item, quantity: 1, price: priceLookup(item)});
  else{
    var quantity = cart[item].quantity;
    return setFieldByName(cart, item, 'quantity', quantity +1);
  }
}

function removeOne(cart, item) {
  if(!cart[item])
    return cart;
  else{
    var quantity = cart[item].quantity;
    if(quantity === 1)
      return remove_item_by_name(cart, item);
    else
      return setFieldByName(cart, item, 'quantity', quantity - 1);
  }
}




