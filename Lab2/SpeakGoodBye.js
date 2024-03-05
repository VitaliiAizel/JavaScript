(function(window) {
  let speakFunction = function(name) {
    let speakWord = "Good Bye";
    console.log(speakWord + " " + name);
  };

  window.speakGoodBye = speakFunction;
})(window);