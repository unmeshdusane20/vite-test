import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-user-file-html-file.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var UserFileHtmlFile = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M18.652 12.077h-2.057V8.403h.743v2.987h1.314v.687zm-2.805 0h-.742v-2.073h-.034l-.901 1.617h-.237l-.897-1.617h-.032v2.073h-.743V8.403h.682l1.095 2.035h.032l1.09-2.035h.687v3.674zm-4.07-2.986h-.941v2.986h-.743V9.091h-.94v-.688h2.624v.688zM8.67 12.077h-.743v-1.523H6.612v1.523H5.87V8.403h.742v1.463h1.315V8.403h.743v3.674zM3.004 1v19a3 3 0 003 3h8.5v-4a2.5 2.5 0 012.5-2.5h4V1h-18zm12.5 18v4l5.5-5.5h-4a1.5 1.5 0 00-1.5 1.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M18.652 11.39h-1.314V8.404h-.743v3.673h2.057v-.687zm-5.648-1.386h.032l.897 1.617h.237l.9-1.617h.035v2.073h.742V8.404h-.687l-1.09 2.035h-.032l-1.095-2.035h-.682v3.673h.743v-2.073zm-2.911 2.073h.743V9.09h.94v-.687H9.154v.687h.94v2.986zm-3.481-1.523h1.315v1.523h.743V8.404h-.743v1.463H6.612V8.404H5.87v3.673h.742v-1.523zM19.504 17h-3a1.5 1.5 0 00-1.5 1.5v3h-9a1.5 1.5 0 01-1.5-1.5V2.5h15V17zM3.004 1v19a3 3 0 003 3h10l5-5V1h-18z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
UserFileHtmlFile.style = iconCss;
export {
  UserFileHtmlFile as scale_icon_user_file_html_file
};
//# sourceMappingURL=scale-icon-user-file-html-file.entry-63NNAM6A.js.map
