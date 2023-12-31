import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-sound-on.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionSoundOn = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M13 3.5v17h-2l-4.5-4H5a3 3 0 01-2.995-2.824L2 13.5v-3a3 3 0 012.824-2.995L5 7.5h1.5l4.5-4h2zm6.7.8c4.178 4.178 4.251 10.906.22 15.174l-.22.226-1.06-1.06a9.39 9.39 0 00.225-13.047l-.225-.233L19.7 4.3zM16 8.025l1.035-1.06.025.025a7.12 7.12 0 01.206 9.855l-.206.215L16 16a5.625 5.625 0 00.193-7.773L16 8.025z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M13 3.5v17h-2l-4.5-4H5a3.003 3.003 0 01-2.995-2.824L2 13.5v-3a3.003 3.003 0 012.824-2.995L5 7.5h1.5l4.5-4h2zm6.7.8a10.8 10.8 0 013.19 7.7c0 2.794-1.041 5.426-2.947 7.45l-.243.25-1.06-1.06A9.322 9.322 0 0021.39 12c0-2.4-.892-4.66-2.523-6.405l-.227-.235L19.7 4.3zm-8.2.76L7.07 9H5c-.776 0-1.42.598-1.493 1.356L3.5 10.5v3c0 .776.598 1.42 1.356 1.493L5 15h2.07l4.43 3.94V5.06zm5.535 1.905A7.068 7.068 0 0119.12 12a7.063 7.063 0 01-1.878 4.819l-.207.216-1.06-1.06A5.59 5.59 0 0017.62 12c0-1.41-.514-2.738-1.452-3.772l-.193-.203 1.06-1.06z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionSoundOn.style = iconCss;
export {
  ActionSoundOn as scale_icon_action_sound_on
};
//# sourceMappingURL=scale-icon-action-sound-on.entry-WTCJOWKQ.js.map
