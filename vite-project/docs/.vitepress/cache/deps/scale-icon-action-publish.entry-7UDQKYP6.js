import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-publish.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionPublish = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 9.125l3.275 5H12.73v7.625a.75.75 0 01-1.493.102l-.007-.102v-7.625h-2.5l3.27-5zM21 3.5V16a3 3 0 01-2.698 2.987l-.177.013H14.25v-3.375h1.035a1.5 1.5 0 001.337-2.178l-.082-.142-3.275-5a1.5 1.5 0 00-2.411-.12l-.089.12-3.275 5a1.5 1.5 0 001.11 2.313l.15.007h1V19H6a3 3 0 01-2.995-2.824L3 16V3.5h18zM5 4.375a.625.625 0 100 1.25.625.625 0 000-1.25zm2 0a.625.625 0 100 1.25.625.625 0 000-1.25zm2 0a.625.625 0 100 1.25.625.625 0 000-1.25z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 8.25L16.42 15h-3.67v6.75a.75.75 0 01-1.493.102l-.007-.102V15H7.582l4.419-6.75zm9-4.75V16a3 3 0 01-2.824 2.995L18 19h-2v-1.5h2c.778 0 1.42-.596 1.493-1.356L19.5 16V6.5h-15V16c0 .778.596 1.42 1.356 1.493L6 17.5h2V19H6a3 3 0 01-2.995-2.824L3 16V3.5h18zM5 4.375a.625.625 0 100 1.25.625.625 0 000-1.25zm2 0a.625.625 0 100 1.25.625.625 0 000-1.25zm2 0a.625.625 0 100 1.25.625.625 0 000-1.25z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionPublish.style = iconCss;
export {
  ActionPublish as scale_icon_action_publish
};
//# sourceMappingURL=scale-icon-action-publish.entry-7UDQKYP6.js.map
