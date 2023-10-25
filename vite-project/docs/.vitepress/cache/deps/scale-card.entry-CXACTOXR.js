import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-card.entry.js
var cardCss = ":host{--background:var(--telekom-color-background-surface);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-large);--box-shadow:var(--telekom-shadow-raised-standard);--box-shadow-hover:var(--telekom-shadow-raised-hover);--box-shadow-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard);--box-shadow-active:var(--telekom-shadow-raised-pressed);--spacing-body:var(--telekom-spacing-composition-space-08);--spacing-body-slotted:0;--spacing-body-slotted-interactive:0;--font-body-slotted:var(--telekom-text-style-body)}.card-border{border:1px solid transparent}.card{width:100%;overflow:hidden;box-sizing:border-box;background:var(--background);transition:var(--transition);border-radius:var(--radius);box-shadow:var(--box-shadow)}.card__body{padding:var(--spacing-body)}.card__body ::slotted(*){margin:var(--spacing-body-slotted)}.card--interactive{color:inherit;cursor:pointer;display:block;outline:none;text-decoration:none}.card--interactive:hover{box-shadow:var(--box-shadow-hover)}.card--interactive:focus{box-shadow:var(--telekom-shadow-raised-hover), var(--box-shadow-focus)}.card--interactive:active{border:none;box-shadow:var(--box-shadow-active)}.card--interactive .card__body ::slotted(*){margin:var(--spacing-body-slotted-interactive)}.card__body ::slotted(*){font:var(--font-body-slotted)}";
var Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.to = "";
    this.label = "";
    this.target = "_self";
    this.rel = "";
  }
  render() {
    const Tag = !!this.to ? "a" : "div";
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: "card-border", part: "border" }, h(Tag, Object.assign({ class: this.getCssClassMap(), part: classnames("base", !!this.to && "interactive") }, !this.to ? { role: "group" } : {}, !!this.to ? { href: this.to } : {}, !!this.target ? { target: this.target } : {}, !!this.rel ? { rel: this.rel } : {}, !!this.label ? { ["aria-label"]: this.label } : {}), h("div", { class: "card__body", part: "body" }, h("slot", null)))));
  }
  getCssClassMap() {
    return classnames("card", !!this.to && "card--interactive");
  }
};
Card.style = cardCss;
export {
  Card as scale_card
};
//# sourceMappingURL=scale-card.entry-CXACTOXR.js.map
