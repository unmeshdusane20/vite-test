import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-user-file-contacts.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var UserFileContacts = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M18 1.5H3v21h15a3 3 0 003-3v-15a3 3 0 00-3-3zM12 8a2 2 0 012.085 2.09c0 1.27-.88 2.5-2.085 2.5s-2.085-1.225-2.085-2.5A2 2 0 0112 8zm-3.75 7.5l.135-.72A1.665 1.665 0 0110 13.415h.82L12 14.58l1.165-1.165H14c.803.001 1.49.575 1.635 1.365l.115.72h-7.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M18 1.5a3.01 3.01 0 012.995 2.824L21 4.5v15a3.01 3.01 0 01-2.824 2.995L18 22.5H3v-21h15zM18 3H4.5v18H18c.8 0 1.423-.576 1.493-1.352l.007-.148v-15c0-.8-.576-1.423-1.352-1.493L18 3zm-4 10.4c.75 0 1.368.527 1.566 1.252l.034.148.15.7h-7.5l.1-.7a1.66 1.66 0 011.501-1.344L10 13.45h.85L12 14.6l1.2-1.2h.8zM12 8c1.15 0 2.1.85 2.1 2.1s-.9 2.5-2.1 2.5c-1.2 0-2.1-1.25-2.1-2.5S10.85 8 12 8z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
UserFileContacts.style = iconCss;
export {
  UserFileContacts as scale_icon_user_file_contacts
};
//# sourceMappingURL=scale-icon-user-file-contacts.entry-HI76YPA7.js.map
