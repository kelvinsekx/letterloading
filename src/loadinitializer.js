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
    self.randomizeEl = self.simulate === "typed" ? false : self.options.randomizeEl

    //default shuffling
    self._shuffle = false;

    // bind currentString
    self.currentString;

    // get randomelement
    self.randomEl;

    // hidden char to fill space
    self.char = self.simulate === "typed" ? "" : self.options.char;

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

    // describe your cursor type, we have them
    /**
     * cursor can be
     * Blocked
     * Line
     * Underscore
     */
    self.cursorType = self.options.cursorType;
    /**blinking defaults to "yes" */
    self.blinking = self.options.blinking;
    // stringlength
    // get order in which strings appeared in array
    self.sequence = [];
    for (let i in self.strings) {
      self.sequence[i] = i;
    }
    this.appendCsstoHead(self);
    this.hideCharByForce(self);
    this.setBlinking(self)
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
    const cssname = "data-hide";

    if (!self.hideChar) {
      return;
    }
    if (document.querySelector(`[${cssname}]`)) {
      return;
    }

    let css = document.createElement("style");
    css.type = "text/css";
    css.setAttribute(cssname, true);

    let innerCss = "";

    if (self.hideChar) {
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
 
  
}

export let initializer = new LoadInitializer();
