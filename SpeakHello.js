(function(window) {
  const speakWord = "Good Bye";
  let speakFunction = function(name) {
    console.log(speakWord + " " + name);
  };

  window.speakGoodBye = speakFunction;
})(window);