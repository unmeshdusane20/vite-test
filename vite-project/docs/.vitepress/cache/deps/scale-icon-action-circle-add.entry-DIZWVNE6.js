import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-circle-add.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionCircleAdd = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm5 11.75h-4.25V17a.75.75 0 11-1.5 0v-4.25H7a.75.75 0 110-1.5h4.25V7a.75.75 0 111.5 0v4.25H17a.75.75 0 110 1.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm0 3.75c.367 0 .691.294.743.651L12.75 7v4.25H17c.4 0 .75.35.75.75a.772.772 0 01-.651.743L17 12.75h-4.25V17c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L11.25 17v-4.25H7c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L7 11.25h4.25V7c0-.4.35-.75.75-.75z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionCircleAdd.style = iconCss;
export {
  ActionCircleAdd as scale_icon_action_circle_add
};
//# sourceMappingURL=scale-icon-action-circle-add.entry-DIZWVNE6.js.map
