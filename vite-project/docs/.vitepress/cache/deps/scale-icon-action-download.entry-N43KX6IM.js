import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-download.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionDownload = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M21.25 20.185a1.065 1.065 0 01.116 2.124l-.116.006H2.75a1.065 1.065 0 01-.116-2.124l.116-.006h18.5zM12 1.5c.647 0 1.18.492 1.244 1.122l.006.128V9.5h3.33l-4.58 7-4.58-7h3.33V2.75c0-.69.56-1.25 1.25-1.25z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M21.25 20.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L21.25 22H2.75c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743l.099-.007h18.5zM12 2c.367 0 .691.294.743.651l.007.099V9.5h3.85l-4.6 7-4.6-7h3.85V2.75c0-.4.35-.75.75-.75z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionDownload.style = iconCss;
export {
  ActionDownload as scale_icon_action_download
};
//# sourceMappingURL=scale-icon-action-download.entry-N43KX6IM.js.map
