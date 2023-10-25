import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-device-tv-and-mobile.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var DeviceTvAndMobile = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M21.5 9.5a2 2 0 011.995 1.85l.005.15v10a2 2 0 01-1.85 1.995l-.15.005H17a2 2 0 01-1.995-1.85L15 21.5v-10a2 2 0 011.85-1.995L17 9.5h4.5zM18.09 11H17a.5.5 0 00-.492.41l-.008.09v10a.5.5 0 00.41.492L17 22h4.5a.5.5 0 00.492-.41L22 21.5v-10a.5.5 0 00-.41-.492L21.5 11h-1.09v1.035h-2.32V11zm1.16 9a.75.75 0 110 1.5.75.75 0 010-1.5zM14 17v1.5H5V17h9zM22.5.5v8.22a3 3 0 00-.796-.167l-.204-.008H17a3 3 0 00-2.995 2.824l-.005.176V16H3.5a3 3 0 01-2.995-2.824L.5 13V.5h22zM10 5.96v4.58l3.5-2.29L10 5.96z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M21.5 9.5c1.05 0 1.918.82 1.994 1.851l.006.149v10c0 1.05-.82 1.918-1.851 1.994l-.149.006H17c-1.05 0-1.918-.82-1.994-1.851L15 21.5v-10c0-1.05.82-1.918 1.851-1.994L17 9.5h4.5zM18 11h-1c-.267 0-.454.158-.493.404l-.007.096v10c0 .267.158.454.404.493L17 22h4.5c.267 0 .454-.158.493-.404L22 21.5v-10c0-.267-.158-.454-.404-.493L21.5 11h-1v1H18v-1zm1.25 9a.75.75 0 110 1.5.75.75 0 010-1.5zM22.5.5v7.65a3.092 3.092 0 00-.79-.144L21.5 8H21V2H2v11c0 .8.576 1.423 1.352 1.493l.148.007h10v4H5V17h2.498c.262-.003.814-.052 1.31-.843L8.9 16H3.5a3.01 3.01 0 01-2.995-2.824L.5 13V.5h22zM9 4.65l5.5 3.6-5.5 3.6v-7.2z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
DeviceTvAndMobile.style = iconCss;
export {
  DeviceTvAndMobile as scale_icon_device_tv_and_mobile
};
//# sourceMappingURL=scale-icon-device-tv-and-mobile.entry-2TGQ4IX4.js.map
