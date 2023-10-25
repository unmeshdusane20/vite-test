import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-user-file-audio-file.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var UserFileAudioFile = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M21 17.5L15.5 23v-4a1.5 1.5 0 011.356-1.493L17 17.5h4zM21 1v15.5h-4a2.5 2.5 0 00-2.495 2.336L14.5 19v4H6a3 3 0 01-2.995-2.824L3 20V1h18zm-9.5 4.225v7a3 3 0 00-.91-.205c-1.345-.09-2.45.73-2.465 1.83-.015 1.1 1.065 2.04 2.41 2.15l.19.008c.86.01 2.173-.373 2.27-2.143l.005-.21V8.79l2.375.565V7.58L11.5 5.225z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M21 1v17l-5 5H6a3.01 3.01 0 01-2.995-2.824L3 20V1h18zm-1.5 1.5h-15V20c0 .8.576 1.423 1.352 1.493L6 21.5h9v-3c0-.8.576-1.423 1.352-1.493L16.5 17h3V2.5zm-8 2.65l4 2.45v1.75l-2.5-.6v4.9c0 1.738-1.096 2.243-1.956 2.337l-.209.016a2.999 2.999 0 01-.1.002L10.55 16c-1.35-.1-2.4-1.05-2.4-2.15 0-1.054 1.01-1.879 2.283-1.858L10.6 12c.24 0 .48.064.72.14l.18.06V5.15z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
UserFileAudioFile.style = iconCss;
export {
  UserFileAudioFile as scale_icon_user_file_audio_file
};
//# sourceMappingURL=scale-icon-user-file-audio-file.entry-QLSQGCZ2.js.map
