import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-home-internet-at-home.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var HomeInternetAtHome = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M20.5 19a3.01 3.01 0 01-2.824 2.995L17.5 22h-11a3.01 3.01 0 01-2.995-2.824L3.5 19v-5.4L12 5.065l8.5 8.535V19zM12 15.75a.9.9 0 110 1.8.9.9 0 010-1.8zm-.05-2.65c1.228 0 2.322.624 2.945 1.578l.105.172-1 .9c-.3-.75-1.1-1.3-2.1-1.35-.84 0-1.55.48-1.925 1.193l-.075.157-1-.9c.6-1.05 1.75-1.75 3.05-1.75zm.05-2.6c2.012 0 3.795.964 4.909 2.453l.141.197-1 .85c-.85-1.3-2.35-2.2-4.05-2.2-1.619 0-3.057.771-3.924 2.01L7.95 14l-1-.85c1.1-1.6 2.95-2.65 5.05-2.65zm0-9.65l11.55 11.6-1.05 1.05L12 3 1.5 13.5.45 12.45 12 .85z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M19 12.1l1.5 1.5V19a3.01 3.01 0 01-2.824 2.995L17.5 22h-11a3.01 3.01 0 01-2.995-2.824L3.5 19v-5.4L5 12.1V19c0 .8.576 1.423 1.352 1.493l.148.007h11c.8 0 1.423-.576 1.493-1.352L19 19v-6.9zm-7 3.65a.9.9 0 110 1.8.9.9 0 010-1.8zm-.05-2.65c1.228 0 2.322.624 2.945 1.578l.105.172-1 .9c-.3-.75-1.1-1.3-2.1-1.35-.84 0-1.55.48-1.925 1.193l-.075.157-1-.9c.6-1.05 1.75-1.75 3.05-1.75zm.05-2.6c2.012 0 3.795.964 4.909 2.453l.141.197-1 .85c-.85-1.3-2.35-2.2-4.05-2.2-1.619 0-3.057.771-3.924 2.01L7.95 14l-1-.85c1.1-1.6 2.95-2.65 5.05-2.65zm0-9.65l11.55 11.6-1.05 1.05L12 3 1.5 13.5.45 12.45 12 .85z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
HomeInternetAtHome.style = iconCss;
export {
  HomeInternetAtHome as scale_icon_home_internet_at_home
};
//# sourceMappingURL=scale-icon-home-internet-at-home.entry-RBTMPWQA.js.map
