import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-user-file-family.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var UserFileFamily = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M6.556 12.5c.013 1.604.591 3.059 1.521 4.135a4.72 4.72 0 00-3.533 3.642l-.04.222-.161 1.001H.009l-.006-.325.007-.622.01-.383.026-.65.056-.99.06-.813.08-.859.063-.59a4.25 4.25 0 014.015-3.763l.208-.005h2.028zm13.512 2a3.734 3.734 0 013.703 3.157c.084.525.137 1.199.171 1.857l.028.648.017.602.012.736h-4.841l-.161-1a4.723 4.723 0 00-3.172-3.75c.5-.55.9-1.205 1.18-1.934l.111-.316h2.952zM10.405 18L12 19.595 13.595 18h.711a3.234 3.234 0 013.175 2.556l.034.181.123.763H5.862l.122-.764a3.234 3.234 0 013.025-2.73L9.193 18h1.212zM12 8.5c2.25 0 3.946 1.697 3.946 3.946C15.946 14.957 14.176 17 12 17s-3.946-2.043-3.946-4.554C8.054 10.196 9.75 8.5 12 8.5zM17.566 4c2.38 0 4.174 1.794 4.175 4.174 0 2.428-1.782 4.918-4.32 4.817.04-.498.038-.924-.058-1.505 1.697.159 2.877-1.619 2.877-3.312 0-1.575-1.1-2.674-2.674-2.674-1.447 0-2.482.934-2.642 2.307a5.363 5.363 0 00-1.423-.609C13.918 5.322 15.525 4 17.566 4zM6.992 1.5c2.51 0 4.403 1.892 4.403 4.402 0 .382-.048.768-.13 1.148a5.513 5.513 0 00-1.714.499 4.24 4.24 0 00.343-1.647C9.894 4.193 8.701 3 6.992 3S4.09 4.193 4.09 5.902c0 1.928 1.405 3.89 3.307 3.559-.29.46-.511.973-.654 1.524-2.494-.162-4.153-2.7-4.153-5.083 0-2.51 1.892-4.402 4.402-4.402z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M6.556 12.5c.013 1.604.591 3.059 1.521 4.135a4.72 4.72 0 00-3.533 3.642l-.04.222-.161 1.001H.009l-.006-.325.007-.622.01-.383.026-.65.056-.99.06-.813.08-.859.063-.59a4.25 4.25 0 014.015-3.763l.208-.005h2.028zm13.512 2a3.734 3.734 0 013.703 3.157c.084.525.137 1.199.171 1.857l.028.648.017.602.012.736h-4.841l-.161-1a4.723 4.723 0 00-3.172-3.75c.5-.55.9-1.205 1.18-1.934l.111-.316h2.952zM10.405 18L12 19.595 13.595 18h.711a3.234 3.234 0 013.175 2.556l.034.181.123.763H5.862l.122-.764a3.234 3.234 0 013.025-2.73L9.193 18h1.212zM12 8.5c2.25 0 3.946 1.697 3.946 3.946C15.946 14.957 14.176 17 12 17s-3.946-2.043-3.946-4.554C8.054 10.196 9.75 8.5 12 8.5zm0 1.5c-1.44 0-2.446 1.006-2.446 2.446 0 1.475.983 3.054 2.446 3.054s2.446-1.579 2.446-3.054C14.446 11.006 13.44 10 12 10zm5.566-6c2.38 0 4.174 1.794 4.175 4.174 0 2.428-1.782 4.918-4.32 4.817.04-.498.038-.924-.058-1.505 1.697.159 2.877-1.619 2.877-3.312 0-1.575-1.1-2.674-2.674-2.674-1.447 0-2.482.934-2.642 2.307a5.363 5.363 0 00-1.423-.609C13.918 5.322 15.525 4 17.566 4zM6.992 1.5c2.51 0 4.403 1.892 4.403 4.402 0 .382-.048.768-.13 1.148a5.513 5.513 0 00-1.714.499 4.24 4.24 0 00.343-1.647C9.894 4.193 8.701 3 6.992 3S4.09 4.193 4.09 5.902c0 1.928 1.405 3.89 3.307 3.559-.29.46-.511.973-.654 1.524-2.494-.162-4.153-2.7-4.153-5.083 0-2.51 1.892-4.402 4.402-4.402z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
UserFileFamily.style = iconCss;
export {
  UserFileFamily as scale_icon_user_file_family
};
//# sourceMappingURL=scale-icon-user-file-family.entry-D534BVF2.js.map
