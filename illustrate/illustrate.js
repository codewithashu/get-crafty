var sections = document.getElementsByTagName('section');

function makeArray(collection) {
  return Array.prototype.slice.call(collection);
}

function showTag(el) {

  var div = document.createElement('div'),
      text = document.createTextNode(el.tagName);

  div.className = 'tag';
  div.appendChild(text);

  return div

}

function showSection() {

  makeArray(sections).forEach(function(section){
    section.className = 'section-highlight';
  });

}

function showChildren() {

  makeArray(sections).forEach(function(section){

    var children = section.children;

    makeArray(children).forEach(function(child){
      child.appendChild(showTag(child));
      child.className = 'children-highlight'
    })

  });

}

function clearText() {

  var node,
      walk = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT,
        null,
        false
      );

  // while is useful when the length of a collection is unknown
  // in this case, the last walk.nextNode would be null (the end of document)
  // that is why the looping stops
  while (node = walk.nextNode()) {
    if (node.tagName === 'H3' || node.tagName === 'P' ){
      node.innerText = '';
    }
  }

}