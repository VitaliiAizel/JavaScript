(function(window) {
  let speakFunction = function(name) {
    let speakWord = "Hello";
    console.log(speakWord + " " + name);
  };

  window.speakHello = speakFunction;
})(window);