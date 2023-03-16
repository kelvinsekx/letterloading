import defaults from "./defaults.js";
import {default as cssStyles} from "./funcCss"

export default class LoadInitializer {
  load(self, el, options) {
    // node
    self.el = (document.querySelector(el) || el)

    // replace default options
    self.options = { ...defaults, ...options };

    self.initialElContent = self.el.textContent;

    // loading speed
    self.loadSpeed = self.options.loadspeed;

    // generate default speed
    self.defaultSpeed = self.options.loadspeed;


    self.loop = self.options.loop;

    // trim string in strings array
    // it is needed for us to make better string num 
    // calculations
    self.strings = self.options.strings.map((string)=> string.trim());

    // current string position
    self.currentStrPos = 0;

    // randomize letters or not
    self.randomizeEl =  self.options.randomizeEl

    // default shuffling
    self._shuffle = false;

    // bind currentString
    self.currentString;

    // get randomelement
    self.randomEl;

    // hidden char to fill space
    self.char =  self.options.char;

    // if hide char
    self.hideChar = self.options.hideChaar;

    // array index
    self.ArrayIndex = 0;

    // set the amount of time to wait before rendering 
    // animation to the DOM
    self.delayAnime = 500

    // delay before continuing to loop over string
    self.delay = self.options.delay;

    // intuitively tell me what to do
    self.simulate = self.options.simulate;

    // monitor set cursor or not
    this.cursorExist = false;
    
    //create cursor or not
    self.cursor = self.options.cursor;

    // cursor color
    self.cColor = self.options.color;

    // set cursorType: Block, Line or Underscore
    self.cursorType = self.options.cursorType

    // blinking defaults to "yes"
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
      if (self.cursorType === undefined)return;
      if(self.cursorType !== "line" && self.cursorType !== "underscore" && self.cursorType !== "block"){
        throw new Error("Letterloading: your cursorType isn't a valid cursorType")
      }
      innerCss += cssStyles(color)
    }


    if (css.length === 0) {
      return;
    }
    css.innerHTML = innerCss;
    document.body.appendChild(css);
  }
 
}

export let initializer = new LoadInitializer();
