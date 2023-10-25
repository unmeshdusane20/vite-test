import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-minimize-screen.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionMinimizeScreen = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M11.245 12.755l-1.76 8.43-2.45-2.45L2.88 22.89a1.252 1.252 0 01-1.868-1.66l.098-.11 4.155-4.155-2.45-2.465 8.43-1.745zM22.005.743c.332 0 .65.132.885.367a1.25 1.25 0 01.096 1.68l-.096.105-4.155 4.155 2.45 2.45-8.43 1.745 1.745-8.43 2.465 2.45L21.12 1.11a1.25 1.25 0 01.885-.367z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M11.245 12.755l-1.76 8.43L6.68 18.38l-4.155 4.155a.754.754 0 01-.53.22.754.754 0 01-.53-.22.744.744 0 01-.073-.975l.073-.085L5.62 17.32l-2.805-2.805 8.43-1.76zm10.23-11.29a.745.745 0 011.06 0c.268.264.293.68.073.975l-.073.085L18.38 6.68l2.805 2.805-8.43 1.76 1.76-8.43L17.32 5.62l4.155-4.155z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionMinimizeScreen.style = iconCss;
export {
  ActionMinimizeScreen as scale_icon_action_minimize_screen
};
//# sourceMappingURL=scale-icon-action-minimize-screen.entry-UL7WLALO.js.map
