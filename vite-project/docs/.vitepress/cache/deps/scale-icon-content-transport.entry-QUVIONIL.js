import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-content-transport.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentTransport = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M6.5 15.5C7.9 15.5 9 16.6 9 18s-1.1 2.5-2.5 2.5S4 19.4 4 18s1.1-2.5 2.5-2.5zm12.5 0c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5zm0 1.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6.5 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM17 3.5v3h4.75c.267 0 .533.158.66.404l.04.096 1.25 3.75c.167.458.264.951.292 1.45l.008.3V18h-1.5c0-1.96-1.54-3.5-3.5-3.5a3.463 3.463 0 00-3.495 3.305L15.5 18H10c0-1.96-1.54-3.5-3.5-3.5a3.463 3.463 0 00-3.495 3.305L3 18a3.01 3.01 0 01-2.995-2.824L0 15V3.5h17zM20.5 9H18v4h3.5v-.5l-.01-.233a3.216 3.216 0 00-.089-.544l-.051-.173L20.5 9z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M19 15.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5zm-12.5 0C7.9 15.5 9 16.6 9 18s-1.1 2.5-2.5 2.5S4 19.4 4 18s1.1-2.5 2.5-2.5zM19 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6.5 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm9.35-.5a3.833 3.833 0 00-.341 1.267L15.5 18H10c0-.471-.073-.906-.252-1.304L9.65 16.5h6.2zM17 3.5v3h4.75c.267 0 .533.158.66.404l.04.096 1.25 3.75c.167.458.264.951.292 1.45l.008.3V18h-1.5v-5.5c0-.32-.032-.672-.122-1.005l-.078-.245L21.2 8H17v6c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L15.5 14V5h-14v10c0 .8.576 1.423 1.352 1.493L3 16.5h.35c-.2.45-.35.95-.35 1.5a3.01 3.01 0 01-2.995-2.824L0 15V3.5h17zM20.5 9l.85 2.55c.075.225.122.478.14.717l.01.233v.5H18V9h2.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentTransport.style = iconCss;
export {
  ContentTransport as scale_icon_content_transport
};
//# sourceMappingURL=scale-icon-content-transport.entry-QUVIONIL.js.map
