document.addEventListener('DOMContentLoaded', function() {
//console.log(letter)
var letter = new LetterLoading.Liga('#main', {
    loadspeed: 3,
    randomizeEl : false
  });

  var letter2 = new LetterLoading.Typed('#main2', {
    strings: [
      "You're lovely... yes you are",
      "This is an example string",
      "tell me about what more animation you love",
      "Lastly, Hey, if you're Bukunmi, I love you"
    ],
    // set loop to false;
    loop : false,
    loadspeed: 5
  });

  var letter3 = new LetterLoading.Typed('#main3', {
    strings: [
      "You're lovely... yes you are",
      "This is an example string",
      "tell me about what more animation you love",
      "Lastly, Hey, if you're Bukunmi, I love you"
    ],
    loadspeed: 2,
    cursor: true,
    simulate: "typed",
    cursorType: "block"
  });

  var letter6 = new LetterLoading.Typed('#main6', {
    strings: [
      "You're lovely... yes you are",
      "This is an example string",
      "tell me about what more animation you love",
      "Lastly, Hey, if you're Bukunmi, I love you"
    ],
    loadspeed: 2,
    cursor: true,
    simulate: "typed",
    // cursorType is set to line
    cursorType: "line"
  });

  var letter4 = new LetterLoading.Typed('#main4', {
    strings: [
      "You're lovely... yes you are",
      "This is an example string",
      "tell me about what more animation you love",
      "Lastly, Hey, if you're Bukunmi, I love you"
    ],
    loadspeed: 3,
    randomizeEl: false,
    hideChaar: false,
    char: "*",
  });

  var letter5 = new LetterLoading.Typed('#main5', {
    strings: [
      "Do this...",
      "with caution",
    ],
    loadspeed: 3,
    hideChaar: false,
    char: " (* *) ",
  });
})