import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-edit.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionEdit = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M21.25 19.5a.75.75 0 01.102 1.493L21.25 21H8.045l1.05-1.5H21.25zM3.355 17.15l3.14 2.205L3 20.995l.35-3.84.005-.005zM15.46 1.29v.02a1.915 1.915 0 011.656 2.862l-.086.138-9.675 13.815-3.14-2.2 9.67-13.815a1.92 1.92 0 011.405-.813l.17-.007z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M21.25 19.5c.4 0 .75.35.75.75a.772.772 0 01-.651.743L21.25 21H8.05l1.05-1.5h12.15zm-17.9-2.35l3.15 2.2L3 21l.35-3.85zM13.9 2.1c.522-.76 1.677-1.024 2.52-.534l.13.084.136.1a1.88 1.88 0 01.452 2.413l-.088.137-9.7 13.8-3.15-2.2 9.7-13.8z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionEdit.style = iconCss;
export {
  ActionEdit as scale_icon_action_edit
};
//# sourceMappingURL=scale-icon-action-edit.entry-SYE6SSLY.js.map
