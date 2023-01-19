// 일급 객체

// setPriceByName
// setQuantityByName
// setShippingByName
// setTaxByName
// 함수 이름에 있는 암묵적 인자에서 냄새가 난다.
//
// 1. 함수 구현이 거의 똑같다.
// 2. 함수 이름이 구현의 차이를 만든다.
// 냄새가 난다.

/*
*  1. 함수 이름에 있는 암묵적 인자를 확인한다.
*  2. 명시적 인자를 추가한다.
*  3. 함수 본문에 하드 코딩된 값을 새로운 인자로 바꾼다.
*  4. 함수를 부르는 곳을 고친다.
* */

function setPriceByName(cart, name, price) {
  var item = cart(name);
  var newItem = objectSet(item, 'price', price);
  var newCart = objectSet(cart, name, newItem);
}



setPriceByName(cart, 'shoe', 13);
// setQuantityByName
// setShippingByName
// setTaxByName
setFieldByName(cart, 'shoe', 'price', 13);

var validItemField = ['price', 'quantity', 'shipping', 'tax'];

function setFieldByName(cart, name, field, value){
  if(!validItemField.includes(field)){
    throw "Not a valid field";
  }
  var item = cart[name];
  var newItem = objectSet(item, field, value);
  var newCart = objectSet(cart, name, newItem);
}

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}