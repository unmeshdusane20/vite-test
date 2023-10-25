import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-send.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionSend = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M22.885 2.515L10.1 16.953l-.01-.001-1.513-.541 12.25-13.833-19.405 9.91a.749.749 0 00.084 1.372l7.03 2.564V21.1a.75.75 0 001.36.435l2.636-3.7 5.917 2.079a.761.761 0 00.616-.053.755.755 0 00.366-.5l3.476-16.474a.746.746 0 00-.02-.373", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M21.83 2.07a.758.758 0 011.101.711l-.011.109-3.48 16.48c-.05.21-.18.39-.37.5a.927.927 0 01-.52.076l-.1-.026-5.92-2.08-2.64 3.7a.74.74 0 01-.61.31c-.08 0-.15-.02-.23-.04a.727.727 0 01-.512-.602L8.53 21.1v-4.68L1.5 13.86a.748.748 0 01-.49-.66.77.77 0 01.317-.654l.093-.056L21.83 2.07zm-1.04 3.6l-10.12 9.92 7.47 2.63 2.65-12.55zm-1.52-.62L3.63 13.04l5.46 1.99 10.18-9.98z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionSend.style = iconCss;
export {
  ActionSend as scale_icon_action_send
};
//# sourceMappingURL=scale-icon-action-send.entry-VTL4CSPR.js.map
