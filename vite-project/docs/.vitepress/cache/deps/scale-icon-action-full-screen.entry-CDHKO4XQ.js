import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-full-screen.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionFullScreen = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = 24;
    this.fill = "currentColor";
    this.color = "currentColor";
    this.selected = false;
    this.decorative = false;
    this.focusable = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute("styles")) {
      this.hostElement.style.display = "inline-flex";
    }
  }
  render() {
    const ariaHidden = this.decorative ? { "aria-hidden": "true" } : {};
    const focusable = this.focusable ? { tabindex: 0 } : {};
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M9.5 12.735a1.25 1.25 0 011.765 1.765L7.5 18.29l2.43 2.45L1.5 22.5l1.76-8.45 2.45 2.45zM22.5 1.5l-1.76 8.45-2.45-2.45-3.785 3.77c-.49.487-1.28.487-1.77 0a1.26 1.26 0 010-1.77l3.785-3.79-2.45-2.45L22.5 1.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M10.22 12.72a.745.745 0 011.06 0c.268.264.293.68.073.975l-.073.085-4.155 4.155L9.93 20.74 1.5 22.5l1.76-8.43 2.805 2.805 4.155-4.155zM22.5 1.5l-1.76 8.43-2.805-2.805-4.155 4.155a.754.754 0 01-.53.22.754.754 0 01-.53-.22.744.744 0 01-.073-.975l.073-.085 4.155-4.155L14.07 3.26 22.5 1.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionFullScreen.style = iconCss;
export {
  ActionFullScreen as scale_icon_action_full_screen
};
//# sourceMappingURL=scale-icon-action-full-screen.entry-CDHKO4XQ.js.map
