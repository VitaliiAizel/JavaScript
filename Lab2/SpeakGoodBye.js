(function(window) {
  const speakWord = "Hello";
  let speakFunction = function(name) {
    console.log(speakWord + " " + name);
  };

  window.speakHello = speakFunction;
})(window);