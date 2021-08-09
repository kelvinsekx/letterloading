import LetterLoading from "../letterloading";

class Laliga extends LetterLoading {
  constructor(el, options) {
    super(el, options);
    this.beginAnimation();
  }

  beginAnimation() {
    // ....WELCOME, wait for half a sec before starting animation
    //  wait second is set as delayAnime at `line 53 loadinitializer.js`
    this.timeout = setTimeout(() => {
      // get a random string from options.STRINGS array if
      // this.shuffle is true
      this.randomMize();
      // currentStrPos is the place of lettter in a string[, this.strings] usually 0,
      // this.strings[, this.ArrayIndex] is the string you want to animate

      this.beginAnime(this.currentStrPos, this.strings[this.ArrayIndex]);
    }, this.delayAnime);
  }
  pickARandomLetter (r) {
      const letters = ['q','w','e','r','t','y','u',
                        'i','o','p','a','s','d','f','g','h',
                        'j','k','l','z','x','c','v','b','n','m'];
     let p = Math.floor(Math.random()*2);
     if(p) return letters[r].toUpperCase();
     return letters[r];
  }

  doAnime(str, i) {
    this.timeout = setTimeout(() => {
      str[this.randomEl[i - 1]] = this.pickARandomLetter(Math.floor(Math.random()*26))
      let newstr = str.join("");
      this.insertText(newstr);
    }, 10);
    this.timeout = setTimeout(() => {
      str[this.randomEl[i - 1]] = this.currentString[this.randomEl[i - 1]];
      let newstr = str.join("");
      this.insertText(newstr);
      this.startFetching(i, this.currentString, str);
    }, 250);
  }
}

export default Laliga;
