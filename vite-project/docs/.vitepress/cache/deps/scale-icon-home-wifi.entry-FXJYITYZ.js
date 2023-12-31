import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-home-wifi.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var HomeWifi = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 17a2 2 0 110 4 2 2 0 010-4zm0-4.5a6.46 6.46 0 015.258 2.693l.142.207-1.45 1.5A4.435 4.435 0 0012 14.5c-1.626 0-3.07.915-3.848 2.22l-.102.18-1.45-1.5a6.458 6.458 0 015.4-2.9zM12 8a10.94 10.94 0 018.346 3.853l.204.247-1.4 1.45C17.5 11.4 14.95 10 12 10c-2.845 0-5.317 1.302-6.97 3.323l-.18.227-1.4-1.45C5.45 9.6 8.55 8 12 8zm0-4.5c4.562 0 8.605 1.978 11.445 5.066l.255.284-1.4 1.45C19.85 7.35 16.15 5.5 12 5.5c-4.024 0-7.625 1.74-10.074 4.535L1.7 10.3.3 8.85C3.15 5.6 7.3 3.5 12 3.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 17a2 2 0 110 4 2 2 0 010-4zm0-4.5a6.46 6.46 0 015.258 2.693l.142.207-1.45 1.5A4.435 4.435 0 0012 14.5c-1.626 0-3.07.915-3.848 2.22l-.102.18-1.45-1.5a6.458 6.458 0 015.4-2.9zM12 8a10.94 10.94 0 018.346 3.853l.204.247-1.4 1.45C17.5 11.4 14.95 10 12 10c-2.845 0-5.317 1.302-6.97 3.323l-.18.227-1.4-1.45C5.45 9.6 8.55 8 12 8zm0-4.5c4.562 0 8.605 1.978 11.445 5.066l.255.284-1.4 1.45C19.85 7.35 16.15 5.5 12 5.5c-4.024 0-7.625 1.74-10.074 4.535L1.7 10.3.3 8.85C3.15 5.6 7.3 3.5 12 3.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
HomeWifi.style = iconCss;
export {
  HomeWifi as scale_icon_home_wifi
};
//# sourceMappingURL=scale-icon-home-wifi.entry-FXJYITYZ.js.map
