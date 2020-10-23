const defaults = {
    loadspeed: 9,
    defaultspeed: 8,
    char : "-",
    hideChaar: true,
    delay: 2500,
    loop: true,
}

class LetterLoader {
  constructor(element, options) {
    this.load(element, options);
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

  load(el, options) {
    this.el = this.getElement(el);
    this.initialElContent = this.initialContent();
    // make options from default s and the rest
    this.options = { ...defaults, ...options };

    //loading speed
    this.loadSpeed = this.options.loadspeed;

    // generate default speed
    this.defaultSpeed = this.options.defaultspeed;

    //loop
    this.loop = this.options.loop

    // strings
    this.strings = this.options.strings;

    //current string position
    this.currentStrPos = 0;

    //default shuffling
    this._shuffle = false;

    // bind currentString
    this.currentString;

    // get randomelement
    this.randomEl;

    // hidden char to fill space
    this.char = this.options.char;

    //if hide char
    this.hideChar = this.options.hideChaar;

    // array index
    this.ArrayIndex = 0;

    // delay before continuing to loop over string
    this.delay = this.options.delay

    // stringlength
    // get order in which strings appeared in array
    this.sequence = [];
    for (let i in this.strings) {
      this.sequence[i] = i;
    }
    this.appendCsstoHead()
    this.hideCharByForce();
  }

  hideCharByForce() {
    if(!this.hideChar)return
    this.char = `<span class="data-hide">${this.char}</span>`;
  }

  appendCsstoHead() {
    const cssname = "data-hide";

    if (!this.hideChar) {
      return;
    }
    if (document.querySelector(`[${cssname}]`)) {
      return;
    }

    let css = document.createElement("style");
    css.type = "text/css";
    css.setAttribute(cssname, true);

    let innerCss = "";

    if (this.hideChar) {
      innerCss += `
              .data-hide{
                opacity: 0;}`;
    }

    if (css.length === 0) {
        return;
      }
      css.innerHTML = innerCss;
      document.body.appendChild(css);
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

  getElement(element) {
    if (typeof element === "string") {
      return element[0] === "#" || element[0] === "."
        ? document.querySelector(element)
        : document.getElementById(element);
    } else {
      return element;
    }
  }
}
