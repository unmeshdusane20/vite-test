import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-copy-paste.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionCopyPaste = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M17 7v12.5a3 3 0 01-2.824 2.995L14 22.5H4.5a3 3 0 01-2.995-2.824L1.5 19.5V7H17zm5.5-5.5V14a3 3 0 01-2.824 2.995L19.5 17h-1v-1.5h1a1.5 1.5 0 001.493-1.356L21 14V3H8.5v2.5H7v-4h15.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M17 7v12.5a3.003 3.003 0 01-2.824 2.995L14 22.5H4.5a3.003 3.003 0 01-2.995-2.824L1.5 19.5V7H17zm-1.5 1.5H3v11c0 .776.598 1.42 1.356 1.493L4.5 21H14c.776 0 1.42-.598 1.493-1.356l.007-.144v-11zm7-7V14a3.003 3.003 0 01-2.824 2.995L19.5 17h-1v-1.5h1c.776 0 1.42-.598 1.493-1.356L21 14V3H8.5v2.5H7v-4h15.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionCopyPaste.style = iconCss;
export {
  ActionCopyPaste as scale_icon_action_copy_paste
};
//# sourceMappingURL=scale-icon-action-copy-paste.entry-P3FLAMIX.js.map
