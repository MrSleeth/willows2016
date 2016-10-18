---
  # This seems to make Jekyll not periodically knack the JS file
---

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {

  // check for localStorage availability and invoke methods
  if (Storage.isAvailable()) {
    // add current page to history list
    Storage.addPage();
  }

  $( ".carousel" ).carousel();

});

(function globalNav() {

  var nav = document.querySelector("#globalNav");
  var main = document.getElementById("main");
  var navPlaceholder = document.getElementById("navPlaceholder");
  var parentEl = document.getElementById("navPlaceholder").parentNode;
  var navCopy = nav.cloneNode(true);
  nav.remove();
  parentEl.replaceChild(navCopy, navPlaceholder);

})();

(function reveal() {
  var triggers = document.querySelectorAll('.js-show');
  var targets = document.querySelectorAll('.js-hide');

  // don't go any further if triggers and targets aren't the same length as there's a coding error on the page
  if (triggers.length === targets.length) {

    // Hide all elements which need to be hidden
    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.add('is-closed');
    }

    // attach handlers to trigger elements
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', open);
      triggers[i].setAttribute('data-fw-trigger-pos', i)
    }

    function open(e) {
      e.preventDefault();
      var pos = this.dataset.fwTriggerPos;
      targets[pos].classList.toggle('is-closed');
      targets[pos].classList.toggle('is-open');
    }
  }
  else {
    return false;
  }
})();


// TODO: Package these into a core functions object?
var Storage = (function() {

  var storage;

  // does this browser support localStorage and is it available?
  var _available = function() {

    // TODO: localStorage functionality switched off for now
    return false;

    try {
      storage = window['localStorage'],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  };

  var _getStorageSize = function() {
    return storage.length;
  };

  var _addPage = function() {
    var title = document.title; // localStorage key
    var url = document.location.pathname;   // localStorage value

    if (_getStorageSize >= 5) {
      // remove oldest item

    }
    storage.setItem(title, url);
  };

  var _removePage = function() {

  };

  // public methods
  var isAvailable = function() {
    return _available();
  }

  var addPage = function() {
    _addPage();
  }

  return {
    isAvailable: isAvailable,
    addPage: addPage
  };
})();

// pass this function an element and it'll make you one...
function make(el) {
  return document.createElement(el);
}
