import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-gender-diverse.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentGenderDiverse = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 21.477c-3.308 0-6-2.691-6-6 0-3.31 2.692-6 6-6 3.31 0 6 2.69 6 6 0 3.309-2.69 6-6 6M13 7.04v-.934l.163.162c.244.245.564.367.884.367a1.25 1.25 0 00.884-2.134L13.769 3.34l1.202-1.202A1.25 1.25 0 1013.203.372L12 1.572 10.8.373A1.249 1.249 0 109.032 2.14l1.202 1.202L9.072 4.5a1.25 1.25 0 101.768 1.77l.16-.161v.933c-4.216.497-7.5 4.088-7.5 8.436 0 4.687 3.814 8.5 8.5 8.5 4.688 0 8.5-3.813 8.5-8.5 0-4.348-3.282-7.94-7.5-8.436", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 22a6.508 6.508 0 01-6.5-6.5C5.5 11.916 8.416 9 12 9s6.5 2.916 6.5 6.5S15.584 22 12 22m.75-14.462V5.06l1.018 1.018a.748.748 0 001.061 0 .749.749 0 000-1.06L13.061 3.25l1.767-1.768a.75.75 0 00-1.06-1.061L12 2.189 10.232.421a.75.75 0 10-1.06 1.061l1.767 1.768-1.768 1.768a.75.75 0 101.061 1.061L11.25 5.06v2.478A8 8 0 0012 23.5a8 8 0 00.75-15.962", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentGenderDiverse.style = iconCss;
export {
  ContentGenderDiverse as scale_icon_content_gender_diverse
};
//# sourceMappingURL=scale-icon-content-gender-diverse.entry-QMQA5IET.js.map
