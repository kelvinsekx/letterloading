import { initializer } from "./loadinitializer.js";

/**
 * Hey, tell me you love to simulate letters loading effects...
 *
 * @param {string} el, this can be an HMTL element ID attribute or
 *  all ready called element.
 * @param {object} options options is an object that has some 
 * predefined letterloading attributes. Check './defaults.js' to learn more
 * @returns {object} a new LetterLoading object
 */
export default class LetterLoading {
  constructor(el, options) {
    // initial required params --- load methods available in loadinitializer
    initializer.load(this, el, options);

    // this method begins the letter loading simulation
    this.beginAnimation();
  }

  destroy() {
    this.reset(false);
    //this.options.onDestroy(this);
  }

  reset(restart = true) {
    clearInterval(this.timeout);
    this.insertText("");
    this.currentStrPos = 0;
    this.ArrayIndex = 0;
  }

  beginAnimation() {
    // ....WELCOME, wait for half a sec before starting animation 
    //  wait second is set as delayAnime at `line 53 loadinitializer.js`
    this.timeout = setTimeout(() => {
      // get a random string from options.STRINGS array if 
      // this.shuffle is true
      this.randomMize();
      // currentStrPos is the place of lettter in a string[, this.strings],
      // this.strings[, this.ArrayIndex] is the string you want to animate
      this.beginAnime(this.currentStrPos, this.strings[this.ArrayIndex]);
    }, this.delayAnime);
  }

  beginAnime(i, curr, str = []) {
    // set this.currentString to the passed string args
    this.currentString = curr;
    // creates a randomArray element usable to suff our strings if told to do so
    this.random();
    // start fetching letters
    this.startFetching(i, curr, str);
  }

  startFetching(i, curr, str) {
    // increase the speed at some point
    // if string reaches 20%, 40% and 70% increase speed by 20% consecutively
    if(i >= (0.70*curr.length)){
      this.loadSpeed = (this.loadSpeed - (0.50*this.loadSpeed));
    }else if (i >= (0.40 * curr.length)){
      this.loadSpeed = (this.loadSpeed-(0.20*this.loadSpeed));
    }else if (i >= (0.20 * curr.length)){
      this.loadSpeed = (this.loadSpeed-(0.20*this.loadSpeed));
    }
     

    // make a simulating speed
    const humanize = this.humanize(this.loadSpeed);
    // check state if its empty
    if (Object.keys(str).length === 0)
      str = this.getSudoStringArray(curr.length, this.char);

    /** if our letter index is last in the immediate string,*/
    if (i > curr.length - 1) {
      this.ArrayIndex++;
      this.currentStrPos = 0;
      this.loadSpeed = this.defaultSpeed;
      // check if the string is the last string
      if (this.ArrayIndex === this.strings.length) {
        // if loop is set to false, stop animation
        if (!this.loop) return;
        // else continue
        this.ArrayIndex = 0;
        this.timeout = setTimeout(() => {
          this.beginAnimation();
        }, this.delay);
        // if it is not the last string, just do the next animation with the next string
      } else {
        this.timeout = setTimeout(() => {
          // begin animation again
          this.beginAnime(this.currentStrPos, this.strings[this.ArrayIndex]);
        }, this.delay);
      }//if there are other letters, move to the next letter in string
    } else {
      i++;

      this.timeout = setTimeout(() => {
        // add animations
        this.doAnime(str, i);
      }, humanize);
    }
  }

  doAnime(str, i) {
    str[this.randomEl[i - 1]] = this.currentString[this.randomEl[i - 1]];
    let newstr = str.join("");
    this.insertText(newstr);
    this.startFetching(i, this.currentString, str);
  }

  // this method helps us to create a replica number of string character
  // but in a sudo form.
  getSudoStringArray(length, char) {
    let sudoContentInArray = [], i;
    for ( i = 0; i < length; i++) {
      sudoContentInArray.push(char);
    }
    return sudoContentInArray;
  }

  getStringKeysIntoArray(stringlength) {
    let strings = [];
    for (let i = 0; i < stringlength; i++) {
      strings.push(i);
    }
    return strings;
  }

  random() {
    const randomEl = this.getStringKeysIntoArray(this.currentString.length);
    if(this.randomizeEl){
      this.randomEl = randomEl.sort(() => Math.random() - 0.5);
      return;
    }
    this.randomEl = randomEl
  }

  humanize(speed) {
    return Math.round((Math.random() * (speed * 100)) / 2) + speed * 100;
  }

  insertText(str) {
    this.el.innerHTML = str;
  }

  randomMize() {
    if (!this._shuffle) return;
    this.sequence = this.sequence.sort(() => Math.random() - 0.5);
  }
}
