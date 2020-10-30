document.addEventListener('DOMContentLoaded', function() {
//console.log(letter)
var letter = new LetterLoading('#main', {
    strings: [
      "You're lovely... yes you are",
      "This is an example string",
      "tell me about what more animation you love",
      "Lastly, Hey, if you're Bukunmi, I love you"
    ],
    loadspeed: 5
  });

  var letter2 = new LetterLoading('#main2', {
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

  var letter3 = new LetterLoading('#main3', {
    strings: [
      "You're lovely... yes you are",
      "This is an example string",
      "tell me about what more animation you love",
      "Lastly, Hey, if you're Bukunmi, I love you"
    ],
    loadspeed: 2,
    randomizeEl: false,
    char: "",
  });

  var letter4 = new LetterLoading('#main4', {
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

  var letter5 = new LetterLoading('#main5', {
    strings: [
      "Do this...",
      "..with cautions",
    ],
    loadspeed: 3,
    hideChaar: false,
    char: " (* *) ",
  });
})