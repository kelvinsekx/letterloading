import {loadInitializer} from "./loadinitializer";

export default class LetterLoading {
  constructor(element, options) {
    loadInitializer.load(this, element, options);
    this.beginAnimation();
  }

  destroy() {
    this.reset(false);
    //this.options.onDestroy(this);
  }

  reset(restart = true) {
    clearInterval(this.timeout);
    this.insertText('');
    this.currentStrPos = 0;
    this.ArrayIndex = 0;
  }


  beginAnimation() {
    this.timeout = setTimeout(() => {
      // get a random string from options.STRINGS array if _shuffle is true
      this.randomMize();
      //this.random();
      this.beginAnime(this.currentStrPos, this.strings[this.ArrayIndex]);
    }, 500);
  }

  beginAnime(i, curr, str = []) {
      // set this.currentString to the passed string args
      this.currentString = curr
      // creates a randomArray element usable to suff our strings
      this.random()
      // start our funny fetching strings
    this.startFetching(i, curr, str)
  }

  startFetching(i, curr, str){
      // increase the speed at some point
      if(i >= (curr.length/3 )){
        this.loadSpeed = this.loadSpeed - 2
    }
      // get default speed
      // make a simulating speed
    const humanize = this.humanize(this.loadSpeed);
    // check state if its empty
    if (Object.keys(str).length === 0)
      str = this.getSudoStringArray(curr.length, this.char);

    if(i > curr.length - 1){
        this.ArrayIndex++
        this.currentStrPos=0
         this.loadSpeed = this.defaultSpeed
        // console.log(this.strings[this.ArrayIndex])
        if(this.ArrayIndex === this.strings.length){
            if(!this.loop)return;
            this.ArrayIndex = 0
            this.timeout= setTimeout(() => {
                this.beginAnimation()
            }, this.delay);
        }else{
            this.timeout = setTimeout(() => {
                this.beginAnime(this.currentStrPos, this.strings[this.ArrayIndex])
            }, this.delay);
        }
    }else {
      i++;
      
      this.timeout = setTimeout(() => {
        this.doAnime(str, i);
      }, humanize);
    }
  }

  doAnime(str, i) {
    //let currstr = '"'+this.currentString+'"'
    str[this.randomEl[i - 1]] = this.currentString[this.randomEl[i - 1]];
    let newstr = str.join("");
    this.insertText(newstr);
    this.startFetching(i, this.currentString, str);
  }

  getSudoStringArray(length, char) {
    let initialArrayContent = [];
    for (let i = 0; i < length; i++) {
      initialArrayContent.push(char);
    }
    return initialArrayContent;
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
    this.randomEl = randomEl.sort(() => Math.random() - 0.5);
  }

  humanize(speed) {
    return Math.round((Math.random() * (speed*100)) / 2) + (speed*100);
  }

  initialContent() {
    return this.el.textContent;
  }
  insertText(str) {
    this.el.innerHTML = str;
  }

  randomMize() {
    if (!this._shuffle) return;
    this.sequence = this.sequence.sort(() => Math.random() - 0.5);
  }

}
