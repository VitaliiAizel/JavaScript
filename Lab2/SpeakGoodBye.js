(function(window) {
  let speakFunction = function(name) {
  const speakWord = "Good Bye";
    console.log(speakWord + " " + name);
  };

  window.speakGoodBye = speakFunction;
})(window);
