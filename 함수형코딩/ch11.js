// 일급함수 2

function arraySet(array, idx, value){
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

function arraySet(array, idx, value){
  return withArrayCopy(
    array,
    function(copy) {
      copy[idx] = value;
    }
    );
}

function withArrayCopy(array, modify){
  var copy = array.slice();
  modify(copy);
  // copy[idx] = value;
  return copy;
}

try{
  saveUserDataNoLogging(user);
}catch( error) {
  logToSnapErrors(error);
}

try{
  fetchProductNoLogging (productId);
} catch( error){
  logToSnapErrors(error);
}

function wrapLogging(f) {
  return function(arg) {
    try{
      f(arg);
    }catch (error){
      logToSnapErrors(error);
    }
  }
}

var saveUserDataWithLogging = wrapLogging(saveUserDataNoLogging);
var fetchProductWithLogging = wrapLogging(fetchProductNoLogging);




