// 함수형 반복

function map(array, f) {
  var newArray = [];
  forEach(array, function (element) {
    newArray.push(f(element));
  });
  return newArray;
}

function emailsForCustomers(customers, goods, bests){
  return map(customers, function(customer) {
    return emailForCustomer(customer, goods, bests);
  })
}

function selectBestCustomers(customers) {
  return filter(customers, (customer) => customer.purchases.length >= 3);
}

function filter(array, f) {
  var newArray = [];
  forEach(array, (element) => {
    if(f(element))
      newArray.push(element);
  });
  return newArray;
}

function countAllPurchases(customers) {
  var total = 0;
  forEach(customers, function(customer) {
    total = total + customer.purchases.length;
  })
  return total;
}

function countAllPurchases(customers){
  return reduce(
    customers, 0, function(total, customer){
      return total + customer.purchases.length;
    }
  );
}

function reduce(array, init, f){
  var accum = init;
  forEach(array, function(element){
    accum = f(accum, element);
  });
  return accum;
}

function map(array, f) {
  return reduce(array, [], (ret, item) => {
    ret.push(f(item));
    return ret;
  })
}

function filter(array, f) {
  return reduce(array, [], function(ret, item) {
    if(f(item))
      ret.push(item);
    return ret;
  })
}