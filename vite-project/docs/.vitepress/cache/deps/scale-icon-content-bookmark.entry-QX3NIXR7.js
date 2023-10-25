import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-bookmark.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentBookmark = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M19.5 3.5v20L12 18.24 4.5 23.5v-20a3 3 0 013-3h9a3 3 0 013 3z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M16.5.5h-9c-1.655 0-3 1.345-3 3v20l7.5-5.26 7.5 5.26v-20c0-1.655-1.345-3-3-3zM18 20.615l-6-4.21-6 4.21V3.5C6 2.675 6.675 2 7.5 2h9c.825 0 1.5.675 1.5 1.5v17.115z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentBookmark.style = iconCss;
export {
  ContentBookmark as scale_icon_content_bookmark
};
//# sourceMappingURL=scale-icon-content-bookmark.entry-QX3NIXR7.js.map
