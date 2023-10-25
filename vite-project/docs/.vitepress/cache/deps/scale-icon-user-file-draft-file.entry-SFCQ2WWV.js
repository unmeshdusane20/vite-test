import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-user-file-draft-file.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var UserFileDraftFile = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M22.5 3.5v17a3 3 0 01-2.824 2.995l-.176.005h-10a3 3 0 01-2.49-1.33L6.906 22H19.5a1.5 1.5 0 001.493-1.356L21 20.5V5h-2V3.5h3.5zm-5-3v17a3 3 0 01-2.824 2.995l-.176.005h-10a3 3 0 01-2.995-2.824L1.5 17.5V7h4a2.5 2.5 0 002.492-2.302L8 4.5v-4h9.5zM7 .5v4a1.5 1.5 0 01-1.356 1.493L5.5 6h-4L7 .5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M22.5 3.5v17a3.003 3.003 0 01-2.824 2.995l-.176.005h-10a2.995 2.995 0 01-2.492-1.336L6.905 22H19.5c.776 0 1.42-.598 1.493-1.356L21 20.5V5h-2V3.5h3.5zm-5-3v17a3.003 3.003 0 01-2.824 2.995l-.176.005h-10a3.003 3.003 0 01-2.995-2.824L1.5 17.5v-12l5-5h11zM16 2H7.5v3c0 .781-.593 1.42-1.355 1.493L6 6.5H3v11c0 .776.598 1.42 1.356 1.493L4.5 19h10c.776 0 1.42-.598 1.493-1.356L16 17.5V2z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
UserFileDraftFile.style = iconCss;
export {
  UserFileDraftFile as scale_icon_user_file_draft_file
};
//# sourceMappingURL=scale-icon-user-file-draft-file.entry-SFCQ2WWV.js.map
