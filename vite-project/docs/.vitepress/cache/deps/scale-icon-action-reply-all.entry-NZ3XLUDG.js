import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-reply-all.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionReplyAll = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M15.25 6.514H13.5V3.352l-6.75 4.4L13.5 12V9.014h1.75c3.17 0 5.75 2.579 5.75 5.75v4.486a1.25 1.25 0 102.5 0v-4.486c0-4.55-3.7-8.25-8.25-8.25zM7.5 5.473V3.352l-6.75 4.4 6.75 4.4v-2.12l-3.497-2.28L7.5 5.472z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M4.003 7.752l1.928-1.257 1.57-1.022V3.352l-6.75 4.4 6.75 4.399v-2.12L5.93 9.009 4.003 7.752zM15.75 7H13.5V3.352l-6.75 4.4 6.75 4.399V8.5h2.25A6.257 6.257 0 0122 14.75v4.987a.75.75 0 001.5 0V14.75c0-4.273-3.476-7.75-7.75-7.75z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionReplyAll.style = iconCss;
export {
  ActionReplyAll as scale_icon_action_reply_all
};
//# sourceMappingURL=scale-icon-action-reply-all.entry-NZ3XLUDG.js.map
