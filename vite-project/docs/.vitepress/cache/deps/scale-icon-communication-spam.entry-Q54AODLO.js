import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-communication-spam.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var CommunicationSpam = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M17.75 11.498a6.25 6.25 0 110 12.498 6.25 6.25 0 010-12.498zm-3.53 4.274a4.016 4.016 0 00-.518 1.975 4.054 4.054 0 004.049 4.05 4.02 4.02 0 001.752-.401l.224-.117-5.507-5.507zm3.53-2.073c-.627 0-1.221.145-1.752.4l-.223.117 5.507 5.507a4.018 4.018 0 00.519-1.976 4.054 4.054 0 00-4.05-4.048zm1.248-7.83v4.239a7.76 7.76 0 00-1.247-.11 7.749 7.749 0 00-7.683 6.75l-.028.249H2.478A2.474 2.474 0 01.005 14.69L0 14.528v-8.66l7.309 6.245a3.376 3.376 0 004.208.136l.17-.136 7.31-6.244zm0-2.87v.898l-8.283 7.076c-.636.542-1.621.576-2.3.102l-.131-.102L0 3.897v-.898h18.998z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M17.75 11.5a6.25 6.25 0 110 12.499 6.25 6.25 0 010-12.5zm-3.53 4.274a4.006 4.006 0 00-.52 1.976 4.054 4.054 0 004.05 4.05 4.02 4.02 0 001.752-.401l.224-.117-5.507-5.508zm3.53-2.073c-.628 0-1.222.144-1.752.4l-.224.117 5.508 5.509a4.034 4.034 0 00.518-1.977 4.054 4.054 0 00-4.05-4.05zM19 2.998v7.111a7.685 7.685 0 00-1.25-.11l-.125.005-.125.007v-2.86l-5.81 4.962a3.357 3.357 0 01-4.185.154l-.195-.153L1.5 7.151v7.378c0 .496.378.907.864.963l.114.006h7.856c-.11.363-.193.735-.249 1.116l-.047.385h-7.56a2.475 2.475 0 01-2.473-2.308L0 14.53V3h19zm-1.5 1.5h-16v.68l6.785 5.794c.66.565 1.6.601 2.295.106l.136-.106L17.5 5.178V4.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
CommunicationSpam.style = iconCss;
export {
  CommunicationSpam as scale_icon_communication_spam
};
//# sourceMappingURL=scale-icon-communication-spam.entry-Q54AODLO.js.map
