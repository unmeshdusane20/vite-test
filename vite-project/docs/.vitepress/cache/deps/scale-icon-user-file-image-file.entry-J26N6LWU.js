import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-user-file-image-file.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var UserFileImageFile = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M21 17.5L15.5 23v-4a1.5 1.5 0 011.356-1.493L17 17.5h4zM21 1v15.5h-4a2.5 2.5 0 00-2.495 2.336L14.5 19v4H6a3 3 0 01-2.995-2.824L3 20V1h18zm-7.5 8l-2.64 3.4-1.5-1.935L6.23 14.5h11.54L13.5 9zM7.75 7a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M21 1v17l-5 5H6a3.003 3.003 0 01-2.995-2.824L3 20V1h18zm-1.5 1.5h-15V20c0 .776.598 1.42 1.356 1.493L6 21.5h9v-3c0-.781.593-1.42 1.355-1.493L16.5 17h3V2.5zm-6 6.5l4.27 5.5H6.23l3.13-4.035 1.5 1.935L13.5 9zM7.75 7a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
UserFileImageFile.style = iconCss;
export {
  UserFileImageFile as scale_icon_user_file_image_file
};
//# sourceMappingURL=scale-icon-user-file-image-file.entry-J26N6LWU.js.map
