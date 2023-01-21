// 중첩된 데이터에 함수형 도구 사용하기

function incrementField(item, field) {
  return update(item, field, value => value + 1)
}

function update(object, key, modify){
  var value = object[key];
  var newValue = modify[value];
  var newObject = objectSet(object, key, newValue);
  return newObject;
}

var shirt = {
  name: 'shirt',
  price: 13,
  options: {
    color: 'blue',
    size: 3
  }
}

function incrementSize(item) {
  return update(item, 'options', function(options) {
    return update(options, 'size', increment);
  })
}

function incrementSize(item){
  return update2(item, 'options', 'size', function(size){
    return size + 1;
  })
}

function incrementSizeByName(cart, name) {
  var item = cart[name];
  var options = item.options;
  var size = options.size;

  var newSize = size + 1;

  var newOptions = objectSet(options, 'size', newSize);
  var newItem = objectSet(item, 'options', newOptions);
  var newCart = objectSet(cart, name, newItem);
}

function incrementSizeByName(cart, name){
  return update3(cart, name, 'options', 'size', function(size){
    return size + 1;
  });
}
function update3(object, key1, key2, key3, modify) {
  return update(object, key1, function(object2) {
    return update2(object2, key2, key3, modify);
  });
}

function nestedUpdate(object, keys, modify){
  if(keys.length === 0) {
    return modify(object);
  }
  var key1 = keys[0];
  var restOfKeys = drop_first(keys);
  return update(object, key1, function(value1) {
    return nestedUpdate(value1, restOfKeys, modify);
  })
}

httpGet('https://my-blog.com/api/category/blog', function(blogCategory) {
  renderCategory(nestedUpdate(blogCategory, ['posts', 12, 'author', 'name'], capitalize));
})

function updatePostById(category, id, modifyPost){
  return nestedUpdate(category, ['posts', id], modifyPost);
}

function updateAuthor(post, modifyUser) {
  return update(post, 'author', modifyUser);
}

function capitalizeUserName(user) {
  return update(user, 'name', capitalize);
}

updatePostById(blogCategory, '12', function(post){
  return updateAuthor(post, capitalizeUserName)
})