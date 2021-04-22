import defaults from "./defaults.js";

export default class LoadInitializer {
  load(self, el, options) {
    // node
    self.el = (document.querySelector(el) || el)
    
    // make new options from defaults and the rest
    self.options = { ...defaults, ...options };

    self.initialElContent = self.el.textContent;

    //loading speed
    self.loadSpeed = self.options.loadspeed;

    // generate default speed
    self.defaultSpeed = self.options.loadspeed;

    //loop
    self.loop = self.options.loop;

    // strings
    // then remove the space infront and back...
    // it is needed for us to make better string num 
    // calculations
    self.strings = self.options.strings.map((string)=> string.trim());

    //current string position
    self.currentStrPos = 0;

    /**  tell if to randomize letters or not */
    self.randomizeEl =  self.options.randomizeEl

    //default shuffling
    self._shuffle = false;

    // bind currentString
    self.currentString;

    // get randomelement
    self.randomEl;

    // hidden char to fill space
    self.char =  self.options.char;

    //if hide char
    self.hideChar = self.options.hideChaar;

    // array index
    self.ArrayIndex = 0;

    // set time to wait before rendering animation to DOM
    self.delayAnime = 500

    // delay before continuing to loop over string
    self.delay = self.options.delay;

    // intuitively tell me what to do
    self.simulate = self.options.simulate;

    // monitor set cursor or not
    this.cursorExist = false;
    //make cursor or not
    self.cursor = self.options.cursor;

    // cursor color
    self.cColor = self.options.color;

    //set cursorType
    self.cursorType = self.options.cursorType

    // describe your cursor type, we have them
    /**
     * cursor can be
     * Blocked
     * Line
     * Underscore
     */
    /**blinking defaults to "yes" */
    self.blinking = self.options.blinking;
    // stringlength
    // get order in which strings appeared in array
    self.sequence = [];
    for (let i in self.strings) {
      self.sequence[i] = i;
    }
    // set simulate first
    this.setToTyped(self)
    // this.check(self)
    this.appendCsstoHead(self);
    this.hideCharByForce(self);
    this.setBlinking(self)
  }

  check(self){
    console.log(self.cursorType)
  }

  setToTyped (self) {
    if(self.simulate === "typed") {
      self.char = ""
      self.randomizeEl = false
    }
  }

  setBlinking(self){
     if (!self.options.blinking){
       self.blinking = "yes"
       return
     }
     return self.options.blinking = "no"
  }
  hideCharByForce(self) {
    if (!self.hideChar) return;
    self.char = `<span class="data-hide">${self.char}</span>`;
  }

  appendCsstoHead(self) {
    const color = self.cColor;

    const cssname = "data-type-css";

    if (!self.hideChar) {
      return;
    }
    if (document.querySelector(`[${cssname}]`)) {
      return;
    }

    let css = document.createElement("style");
    // depreciation was of W3C and WHT...
    // visit https://github.com/microsoft/TypeScript/issues/30791 for more info
    css.type = "text/css";
    css.setAttribute(cssname, true);

    let innerCss = "";

    if (self.hideChar) {
      innerCss += `
              .data-hide{
                opacity: 0;}`;
    }

    if(self.cursor) {
      innerCss += `
        .line-cursor {
          font-weight: 100;
          font-size: 30px;
          -webkit-animation: 1s blink step-end infinite;
          -moz-animation: 1s blink step-end infinite;
          -ms-animation: 1s blink step-end infinite;
          -o-animation: 1s blink step-end infinite;
          animation: 1s blink step-end infinite;
        }
        .block-cursor {
          font-weight: 900;
          width: 800px;
          -webkit-animation: 1s blink step-end infinite;
          -moz-animation: 1s blink step-end infinite;
          -ms-animation: 1s blink step-end infinite;
          -o-animation: 1s blink step-end infinite;
          animation: 1s blink step-end infinite;
        }
        .underscore-cursor {
          font-weight: 900;
          width: 800px;
          -webkit-animation: 1s blink step-end infinite;
          -moz-animation: 1s blink step-end infinite;
          -ms-animation: 1s blink step-end infinite;
          -o-animation: 1s blink step-end infinite;
          animation: 1s blink step-end infinite;
        }
        @keyframes blink {
          from, to {
            opacity: 0.9;
          }
          50%{
            opacity: 0.0;
          }
        }

        .block {
          width: 0.45rem;
          padding: 0.5em 0.07em;
          display: inline-block;
          background: ${color ? color : 'black'};
          margin-left: 0.1em;
          margin-top: 0.3em;
          top: 5px;
        }
      `
    }


    if (css.length === 0) {
      return;
    }
    css.innerHTML = innerCss;
    document.body.appendChild(css);
  }
 
  
}

export let initializer = new LoadInitializer();
