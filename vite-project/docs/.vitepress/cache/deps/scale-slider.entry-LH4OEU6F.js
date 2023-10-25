import {
  emitEvent,
  generateUniqueId
} from "./chunk-QJ3V7W6Z.js";
import {
  statusNote
} from "./chunk-VGXEJTC4.js";
import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Fragment,
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-slider.entry.js
var sliderCss = ":host{--width:368px;--height-track:6px;--background-track:var(--telekom-color-ui-faint);--radius-track:var(--telekom-radius-pill);--spacing-track:var(--telekom-spacing-composition-space-07) 0\n    var(--telekom-spacing-composition-space-06);--spacing-x-inner-track:10px;--background-bar:var(--telekom-color-primary-standard);--radius-thumb:var(--telekom-radius-circle);--size-thumb:24px;--border-color-thumb:rgba(0, 0, 0, 0.05);--background-thumb:var(--telekom-color-ui-white);--shadow-thumb:0 0 2px 0 rgba(0, 0, 0, 0.24), 0 2px 4px 0 rgba(0, 0, 0, 0.24),\n    0 4px 12px 0 rgba(0, 0, 0, 0.26);--color-focus:var(--telekom-color-functional-focus-standard);--spacing-x-step-marks:8px;--color-step-mark:var(--telekom-color-text-and-icon-additional);--radius-step-mark:var(--telekom-radius-circle);--size-step-mark:4px;--font-label:var(--telekom-text-style-ui);--font-helper-text:var(--telekom-text-style-small-bold);--color-helper-text:var(--telekom-color-text-and-icon-additional)}[part~='base']{width:var(--width)}[part='label-wrapper']{display:flex;justify-content:space-between;align-items:flex-start}[part='label']{font:var(--font-label)}[part='value-text']{font:var(--font-label);font-variant-numeric:tabular-nums}[part='track-wrapper']{display:flex;position:relative;align-items:center}[part='track']{position:relative;box-sizing:border-box;display:flex;align-items:center;margin:var(--spacing-track);width:100%;height:var(--height-track);background:var(--background-track);border-radius:var(--radius-track);border:1px solid transparent}[part='inner-track']{position:absolute;display:flex;align-items:center;left:var(--spacing-x-inner-track);width:calc(100% - var(--spacing-x-inner-track) * 2);height:100%}[part='bar']{height:100%;position:absolute;z-index:1;border-radius:var(--radius-track);background-color:var(--background-bar);border:1px solid transparent}[part~='thumb-wrapper']{position:absolute;z-index:3;display:flex;align-items:center;justify-content:center;width:32px;height:32px;margin-left:-16px;background-color:transparent}[part~='thumb']{--_border:0 0 0 var(--telekom-spacing-composition-space-01)\n    var(--border-color-thumb);width:var(--size-thumb);height:var(--size-thumb);box-sizing:border-box;border-radius:var(--radius-thumb);background-color:var(--background-thumb);box-shadow:var(--_border), var(--shadow-thumb);border:1px solid transparent}[part~='thumb']:focus{outline:var(--telekom-line-weight-highlight) solid var(--color-focus);outline-offset:1px}[part='step-marks']{width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;padding:0 var(--spacing-x-step-marks)}[part='step-mark']{width:var(--size-step-mark);height:var(--size-step-mark);background:var(--color-step-mark);border-radius:var(--telekom-radius-circle)}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='step-mark']{border:2px solid}}[part='meta']{display:flex;justify-content:space-between}[part='helper-text']{font:var(--font-helper-text);color:var(--color-helper-text)}[part~='disabled'] [part='label-wrapper'],[part~='disabled'] [part='helper-text']{color:var(--telekom-color-text-and-icon-disabled)}[part~='disabled'] [part='bar']{background-color:var(--telekom-color-ui-border-disabled)}[part~='disabled'] [part~='thumb-wrapper']{display:none}[part~='thumb-wrapper']:hover{cursor:grab}[part~='thumb-wrapper']:active{cursor:grabbing}[part~='disabled'] [part='track-wrapper']{cursor:not-allowed}:host-context([data-platform='ios']){--height-track:4px;--size-thumb:26px;--size-step-mark:2px}:host([platform='ios']){--height-track:4px;--size-thumb:26px;--size-step-mark:2px}:host-context([data-platform='android']){--background-thumb:var(--telekom-color-primary-standard)}:host([platform='android']){--background-thumb:var(--telekom-color-primary-standard)}:host-context([data-platform='android']) [part~='thumb']{box-shadow:var(--_border), var(--telekom-shadow-raised-standard)}:host([platform='android']) [part~='thumb']{box-shadow:var(--_border), var(--telekom-shadow-raised-standard)}";
var Slider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.scaleInput = createEvent(this, "scale-input", 7);
    this.scaleInputLegacy = createEvent(this, "scaleInput", 7);
    this.value = 0;
    this.range = false;
    this.valueFrom = 0;
    this.valueTo = 0;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.showStepMarks = false;
    this.showValue = true;
    this.unit = "";
    this.unitPosition = "after";
    this.decimals = 0;
    this.disabled = false;
    this.innerAriaValueText = "$from to $to";
    this.position = 0;
    this.positionFrom = 25;
    this.positionTo = 75;
    this.activeRangeThumb = null;
    this.internalId = generateUniqueId();
    this.onButtonDown = (event) => {
      if (this.disabled) {
        return;
      }
      this.setActiveRangeThumbFromEvent(event);
      this.onDragStart();
      this.addGlobalListeners();
    };
    this.onKeyDown = (event) => {
      let steps = 0;
      this.setActiveRangeThumbFromEvent(event);
      if (["ArrowRight", "ArrowLeft"].includes(event.key)) {
        steps = event.key === "ArrowRight" ? this.step : -this.step;
      }
      if (["ArrowUp", "ArrowDown"].includes(event.key)) {
        steps = event.key === "ArrowUp" ? this.step * 10 : -this.step * 10;
      }
      const valueKey = this.getKeyFor("value");
      this.setValue(this[valueKey] + steps, valueKey);
      emitEvent(this, "scaleChange", this.range ? [this.valueFrom, this.valueTo] : this.value);
    };
    this.onDragStart = () => {
      const offsetKey = this.getKeyFor("offsetLeft");
      this.dragging = true;
      this[offsetKey] = this.sliderTrack.getBoundingClientRect().left;
    };
    this.onDragging = (event) => {
      if (!this.dragging) {
        return;
      }
      const valueKey = this.getKeyFor("value");
      const offsetLeftKey = this.getKeyFor("offsetLeft");
      const offsetLeft = this[offsetLeftKey];
      const currentX = this.handleTouchEvent(event).clientX;
      const position = (currentX - offsetLeft) / this.sliderTrack.offsetWidth * 100;
      const nextValue = position * (this.max - this.min) / 100 + this.min;
      const roundedNextValue = Math.ceil(nextValue / this.step) * this.step;
      this.setValue(roundedNextValue, valueKey);
    };
    this.onDragEnd = () => {
      this.dragging = false;
      emitEvent(this, "scaleChange", this.range ? [this.valueFrom, this.valueTo] : this.value);
      this.removeGlobalListeners();
    };
    this.setValue = (nextValue, valueKey = "value") => {
      this[valueKey] = this.clamp(nextValue);
      emitEvent(this, "scaleInput", this.range ? [this.valueFrom, this.valueTo] : this.value);
    };
    this.setActiveRangeThumbFromEvent = (event) => {
      if (!this.range) {
        this.activeRangeThumb = null;
        return;
      }
      const part = event.target.part;
      this.activeRangeThumb = part.contains("from") ? "From" : "To";
    };
    this.setPosition = (thumb) => {
      const valueKey = this.getKeyFor("value", thumb);
      const positionKey = this.getKeyFor("position", thumb);
      const clampedValue = this.clamp(this[valueKey]);
      this[positionKey] = (clampedValue - this.min) * 100 / (this.max - this.min);
    };
    this.getKeyFor = (propName, thumb) => {
      var _a;
      if (this.range) {
        return `${propName}${(_a = this.activeRangeThumb) !== null && _a !== void 0 ? _a : thumb}`;
      }
      return propName;
    };
    this.getTextValue = () => {
      var _a, _b, _c, _d;
      if (this.range) {
        const from = (_a = this.valueFrom) === null || _a === void 0 ? void 0 : _a.toFixed(this.decimals);
        const to = (_b = this.valueTo) === null || _b === void 0 ? void 0 : _b.toFixed(this.decimals);
        return this.unitPosition === "before" ? `${this.unit}${from} - ${this.unit}${to}` : `${from}${this.unit} - ${to}${this.unit}`;
      }
      return this.unitPosition === "before" ? `${this.unit}${(_c = this.value) === null || _c === void 0 ? void 0 : _c.toFixed(this.decimals)}` : `${(_d = this.value) === null || _d === void 0 ? void 0 : _d.toFixed(this.decimals)}${this.unit}`;
    };
    this.getNumberOfSteps = () => {
      const n = (this.max - this.min) / this.step + 1;
      return [...Array(n).keys()];
    };
    this.clamp = (val) => {
      let min = this.min;
      let max = this.max;
      if (this.range) {
        if (this.activeRangeThumb === "From") {
          max = Math.min(this.valueTo, this.max);
        } else if (this.activeRangeThumb === "To") {
          min = Math.max(this.valueFrom, this.min);
        }
      }
      return Math.min(Math.max(val, min), max);
    };
    this.onDragging = this.onDragging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  handleValueChange() {
    this.setPosition();
  }
  componentWillLoad() {
    if (this.sliderId == null) {
      this.sliderId = "slider-" + this.internalId;
    }
    if (this.range) {
      this.setPosition("From");
      this.setPosition("To");
    } else {
      this.setPosition();
    }
  }
  disconnectedCallback() {
    this.removeGlobalListeners();
  }
  componentDidLoad() {
    if (this.customColor !== void 0) {
      statusNote({
        tag: "deprecated",
        message: `Property "customColor" is deprecated. 
          Please use css variable "--background-bar" to set the slider-bar color;
          e.g. <scale-slider value="20" style="--background-bar: green"></scale-slider>`,
        type: "warn",
        source: this.hostElement
      });
    }
    if (this.thumbLarge !== void 0) {
      statusNote({
        tag: "deprecated",
        message: `Property "thumbLarge" is deprecated.`,
        type: "warn",
        source: this.hostElement
      });
    }
    if (this.trackSmall !== void 0) {
      statusNote({
        tag: "deprecated",
        message: `Property "trackSmall" is deprecated.`,
        type: "warn",
        source: this.hostElement
      });
    }
  }
  handleTouchEvent(event) {
    return event.type.indexOf("touch") === 0 ? event.touches[0] : event;
  }
  addGlobalListeners() {
    window.addEventListener("mousemove", this.onDragging);
    window.addEventListener("mouseup", this.onDragEnd);
    window.addEventListener("touchmove", this.onDragging);
    window.addEventListener("touchend", this.onDragEnd);
  }
  removeGlobalListeners() {
    window.removeEventListener("mousemove", this.onDragging);
    window.removeEventListener("mouseup", this.onDragEnd);
    window.removeEventListener("touchmove", this.onDragging);
    window.removeEventListener("touchend", this.onDragEnd);
  }
  getRangeAriaValueText() {
    const filledText = this.innerAriaValueText.replace(/\$from/g, `${this.valueFrom}`).replace(/\$to/g, `${this.valueTo}`);
    return filledText;
  }
  render() {
    const helperTextId = `helper-message-${this.internalId}`;
    const ariaDescribedByAttr = { "aria-describedBy": helperTextId };
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: classnames("base", this.disabled && "disabled") }, h("div", { part: "label-wrapper" }, !!this.label && h("label", { part: "label", id: `${this.sliderId}-label`, htmlFor: this.sliderId }, this.label), this.showValue && h("div", { part: "value-text" }, this.getTextValue())), h("div", { part: "track-wrapper" }, h("div", { part: "track", ref: (el) => this.sliderTrack = el }, h("div", { part: "bar", style: {
      left: (this.range ? this.positionFrom : 0) + "%",
      width: `${this.range ? this.positionTo - this.positionFrom : this.position}%`
    } }), this.showStepMarks && h("div", { part: "step-marks" }, this.getNumberOfSteps().map(() => h("span", { part: "step-mark" }))), h("div", { part: "inner-track" }, this.range ? h(Fragment, null, h("div", { part: "thumb-wrapper from", style: { left: `${this.positionFrom}%` }, onMouseDown: this.onButtonDown, onTouchStart: this.onButtonDown }, h("div", Object.assign({ part: "thumb from", tabindex: "0", role: "slider", id: this.sliderId + "-from", "aria-valuemin": this.min, "aria-valuenow": `${this.valueFrom} to ${this.valueTo}`, "aria-valuemax": this.max, "aria-valuetext": `${this.valueFrom} to ${this.valueTo}`, "aria-labelledby": `${this.sliderId}-label`, "aria-orientation": "horizontal", "aria-disabled": this.disabled }, this.helperText ? ariaDescribedByAttr : {}, { onKeyDown: this.onKeyDown }))), h("div", { part: "thumb-wrapper to", style: { left: `${this.positionTo}%` }, onMouseDown: this.onButtonDown, onTouchStart: this.onButtonDown }, h("div", Object.assign({ part: "thumb to", tabindex: "0", role: "slider", id: this.sliderId + "-to", "aria-valuemin": this.min, "aria-valuenow": this.value, "aria-valuemax": this.max, "aria-valuetext": this.getRangeAriaValueText(), "aria-labelledby": `${this.sliderId}-label`, "aria-orientation": "horizontal", "aria-disabled": this.disabled }, this.helperText ? ariaDescribedByAttr : {}, { onKeyDown: this.onKeyDown })))) : h("div", { part: "thumb-wrapper", style: { left: `${this.position}%` }, onMouseDown: this.onButtonDown, onTouchStart: this.onButtonDown }, h("div", Object.assign({ part: "thumb", tabindex: "0", role: "slider", id: this.sliderId, "aria-valuemin": this.min, "aria-valuenow": this.value, "aria-valuemax": this.max, "aria-valuetext": `${this.value}`, "aria-labelledby": `${this.sliderId}-label`, "aria-orientation": "horizontal", "aria-disabled": this.disabled }, this.helperText ? ariaDescribedByAttr : {}, { onKeyDown: this.onKeyDown })))))), h("input", { type: "hidden", value: this.getTextValue(), name: this.name }), this.helperText && h("div", { part: "meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, h("div", { part: "helper-text" }, this.helperText))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["handleValueChange"],
      "valueFrom": ["handleValueChange"],
      "valueTo": ["handleValueChange"]
    };
  }
};
Slider.style = sliderCss;
export {
  Slider as scale_slider
};
//# sourceMappingURL=scale-slider.entry-LH4OEU6F.js.map
