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
    //this.beginAnimation();
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

  // beginAnimation() {
  //   // ....WELCOME, wait for half a sec before starting animation 
  //   //  wait second is set as delayAnime at `line 53 loadinitializer.js`
  //   this.timeout = setTimeout(() => {
  //     // get a random string from options.STRINGS array if 
  //     // this.shuffle is true
  //     this.randomMize();
  //     // currentStrPos is the place of lettter in a string[, this.strings] usually 0,
  //     // this.strings[, this.ArrayIndex] is the string you want to animate

  //     // before you go ahead, if cursor is set to true make one
  //     this.makeCursor()
  //     this.beginAnime(this.currentStrPos, this.strings[this.ArrayIndex]);
  //   }, this.delayAnime);
  // }

  beginAnime(currentStrPos, curr, str = []) {
    // set this.currentString to the passed string args
    this.currentString = curr;
    // creates a randomArray element use-able to suff our strings if told to do so
    this.random();
    // start fetching letters
    this.startFetching(currentStrPos, curr, str);
  }

  typedSpeed(){
    return this.loadSpeed
  }

  makeCursor (){
    if (this.cursorExist) return
    if (this.cursor){
      this.appendCursor();
      this.cursorExist = true;
      return
    }
    return;
  }

  loadingSpeed(strIndex, currentString){
    // increase the speed at some point: so that
    // if string reaches 20%, 40% and 70% length of the currentString,
    //  increase speed for fetching (loadSpeed) by 20% consecutively
    if(strIndex >= (0.70*currentString.length)){
      this.loadSpeed = (this.loadSpeed - (0.50 * this.loadSpeed));
    }else if (strIndex >= (0.40 * currentString.length)){
      this.loadSpeed = (this.loadSpeed-(0.20 * this.loadSpeed));
    }else if (strIndex >= (0.20 * currentString.length)){
      this.loadSpeed = (this.loadSpeed-(0.20 * this.loadSpeed));
    }

    return this.loadSpeed
  }

  simulater(option, strIndex, currentString){
    if (option === "typed") {
      return this.typedSpeed()
    }
    return this.loadingSpeed(strIndex, currentString)
  }
  startFetching(strIndex, currentString, str) {
    this.simulater(this.simulate, strIndex, currentString)
    // make a simulating speed
    const humanize = this.humanize(this.loadSpeed);
    // check state if its empty:
    // this simply creates a sudoString we then we compare and print to the screen
    // with doAnime
    if (Object.keys(str).length === 0)
      str = this.getSudoStringArray(currentString.length, this.char);

    /** if the present letter to be printed is last in the  currentString,*/
    if (strIndex > currentString.length - 1) {
      this.ArrayIndex++;
      this.currentStrPos = 0;
      this.loadSpeed = this.defaultSpeed;
      // if the letter is last, 
      // check if the string is the last string too
      // if both agrees to true,
      if (this.ArrayIndex === this.strings.length) {
        // Do not loop when loop parameter is set to false: stop animation
        if (!this.loop) return;
        // else, continue the animation and go to the first string in the array
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
      strIndex++;

      this.timeout = setTimeout(() => {
        // add animations
        this.doAnime(str, strIndex);
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

  appendCursor (){
        const node = document.createElement("span");
        const cur = this.getCursorType(this.cursorType)
        node.className = cur;
        const cursorCha = this.getCursorCha(this.cursorType)
        if(!cursorCha)return
        node.append(cursorCha);
        // console.log(node)
        this.el.parentNode &&
      this.el.parentNode.insertBefore(node, this.el.nextSibling);
  }

  getCursorCha(type){
    const node = document.createElement("span");
    node.className = "block"
    if (type === "line") return "|"
    else if (type === "block") return node;
    else if (type === "underscore")return "_"
  }

  getCursorType(type){
    if (type === "line") return "line-cursor"
    else if (type === "block") return "block-cursor"
    else if (type === "underscore")return "underscore-cursor"
  }
  insertText(str) {
    this.el.innerHTML = str;
  }

  randomMize() {
    if (!this._shuffle) return;
    this.sequence = this.sequence.sort(() => Math.random() - 0.5);
  }
}
