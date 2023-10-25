import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-communication-save-emails-to-drafts.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var CommunicationSaveEmailsToDrafts = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M17.75 11.5a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zm0 1.5A4.756 4.756 0 0013 17.75a4.756 4.756 0 004.75 4.75 4.756 4.756 0 004.75-4.75A4.756 4.756 0 0017.75 13zm0 1.5a.75.75 0 01.743.648l.007.102v2.25h1.833l-2.583 3.945-2.582-3.945H17v-2.25a.75.75 0 01.75-.75zM19 5.87v4.24a7.798 7.798 0 00-1.25-.11c-3.935 0-7.192 2.947-7.684 6.75l-.028.25h-7.56a2.475 2.475 0 01-2.473-2.308L0 14.529V5.87l7.31 6.244a3.366 3.366 0 004.21.136l.17-.136L19 5.87zM19 3v.896l-8.284 7.078c-.677.579-1.754.579-2.431 0L0 3.896V3h19z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M17.75 11.5a6.25 6.25 0 110 12.5 6.25 6.25 0 010-12.5zm0 3a.75.75 0 00-.743.649L17 15.25v2.25h-1.833l2.583 3.945 2.582-3.945H18.5v-2.25a.75.75 0 00-.75-.75zM19 3v7.11a7.808 7.808 0 00-1.25-.11l-.25.013V7.152l-5.81 4.963a3.36 3.36 0 01-4.185.154l-.195-.154L1.5 7.152v7.378c0 .496.378.908.864.964l.114.007h7.856a7.71 7.71 0 00-.25 1.115l-.046.385h-7.56a2.475 2.475 0 01-2.473-2.309L0 14.53V3h19zm-1.5 1.5h-16v.679l6.784 5.795c.661.564 1.6.6 2.296.106l.135-.106L17.5 5.179V4.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
CommunicationSaveEmailsToDrafts.style = iconCss;
export {
  CommunicationSaveEmailsToDrafts as scale_icon_communication_save_emails_to_drafts
};
//# sourceMappingURL=scale-icon-communication-save-emails-to-drafts.entry-ULQ5DZLI.js.map
