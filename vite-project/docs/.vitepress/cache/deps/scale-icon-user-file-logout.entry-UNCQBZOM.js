import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-user-file-logout.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var UserFileLogout = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M18 16l5.7 3.75L18 23.5v-3h-3.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L14.75 19H18v-3zm-10.6-.5l3.1 3.1 3.1-3.1h2.429c.114.002.219.007.32.021l.151.029v1.95h-1.75c-1.4 0-2.5 1.25-2.2 2.7.033.067.044.133.063.2l.037.1H.3l.15-1.05a4.73 4.73 0 014.474-3.945l.226-.005H7.4zM10.5 1c3.5 0 6 2.5 6 6 0 3.4-2.4 7-6 7s-6-3.6-6-7c0-3.5 2.5-6 6-6z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M18 16l5.7 3.75L18 23.5v-3h-3.25c-.4 0-.75-.35-.75-.75 0-.367.294-.691.651-.743L14.75 19H18v-3zm-10.6-.5l3.1 3.1 3.1-3.1h2.429c.114.002.219.007.32.021l.151.029v1.95h-1.75c-1.4 0-2.5 1.25-2.2 2.7.033.067.044.133.063.2l.037.1H.3l.15-1.05a4.73 4.73 0 014.474-3.945l.226-.005H7.4zM10.5 1c3.5 0 6 2.5 6 6 0 3.4-2.4 7-6 7s-6-3.6-6-7c0-3.5 2.5-6 6-6zm0 1.5C7.9 2.5 6 4.4 6 7c0 2.65 1.8 5.5 4.5 5.5S15 9.65 15 7c0-2.6-1.9-4.5-4.5-4.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
UserFileLogout.style = iconCss;
export {
  UserFileLogout as scale_icon_user_file_logout
};
//# sourceMappingURL=scale-icon-user-file-logout.entry-UNCQBZOM.js.map
