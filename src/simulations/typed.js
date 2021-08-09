import LetterLoading from "../letterloading";

class Typed extends LetterLoading {
    constructor(el, options) {
        super(el, options)
        this.beginAnimation()
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
    
          // before you go ahead, if cursor is set to true make one
          this.makeCursor()
          this.beginAnime(this.currentStrPos, this.strings[this.ArrayIndex]);
        }, this.delayAnime);
      }
}

export default Typed;

