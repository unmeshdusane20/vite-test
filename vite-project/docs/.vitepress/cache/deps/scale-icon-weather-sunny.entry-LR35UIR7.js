import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-weather-sunny.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var WeatherSunny = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 19.75a.75.75 0 01.743.648l.007.102v2.75a.75.75 0 01-1.493.102l-.007-.102V20.5a.75.75 0 01.75-.75zm-6.54-2.27a.75.75 0 011.133.977l-.072.084-1.946 1.944a.748.748 0 01-1.06 0 .75.75 0 01-.073-.976l.072-.085L5.46 17.48zm12.02 0a.75.75 0 01.976-.073l.085.073 1.945 1.944a.75.75 0 01-.968 1.14l-.093-.079-1.945-1.944a.75.75 0 010-1.061zM12 6.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm-8.5 4.5a.75.75 0 01.102 1.493l-.102.007H.75a.75.75 0 01-.102-1.493l.102-.007H3.5zm19.75 0a.75.75 0 01.102 1.493l-.102.007H20.5a.75.75 0 01-.102-1.493l.102-.007h2.75zm-3.825-7.736a.75.75 0 011.134.977l-.073.085-1.945 1.944a.748.748 0 01-1.06 0 .75.75 0 01-.073-.977l.072-.084 1.945-1.944zm-15.91 0a.75.75 0 01.976-.072l.084.072L6.521 5.46a.75.75 0 01-.969 1.14l-.092-.08-1.946-1.944a.75.75 0 010-1.061zM12 0a.75.75 0 01.743.648l.007.102V3.5a.75.75 0 01-1.493.102L11.25 3.5V.75A.75.75 0 0112 0z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 19.75a.75.75 0 01.743.648l.007.102v2.75a.75.75 0 01-1.493.102l-.007-.102V20.5a.75.75 0 01.75-.75zm-6.54-2.27a.75.75 0 011.133.977l-.072.084-1.946 1.944a.748.748 0 01-1.06 0 .75.75 0 01-.073-.976l.072-.085L5.46 17.48zm12.02 0a.75.75 0 01.976-.073l.085.073 1.945 1.944a.75.75 0 01-.968 1.14l-.093-.079-1.945-1.944a.75.75 0 010-1.061zM12 6.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm-8.5 4.5a.75.75 0 01.102 1.493l-.102.007H.75a.75.75 0 01-.102-1.493l.102-.007H3.5zm19.75 0a.75.75 0 01.102 1.493l-.102.007H20.5a.75.75 0 01-.102-1.493l.102-.007h2.75zm-3.825-7.736a.75.75 0 011.134.977l-.073.085-1.945 1.944a.748.748 0 01-1.06 0 .75.75 0 01-.073-.977l.072-.084 1.945-1.944zm-15.91 0a.75.75 0 01.976-.072l.084.072L6.521 5.46a.75.75 0 01-.969 1.14l-.092-.08-1.946-1.944a.75.75 0 010-1.061zM12 0a.75.75 0 01.743.648l.007.102V3.5a.75.75 0 01-1.493.102L11.25 3.5V.75A.75.75 0 0112 0z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
WeatherSunny.style = iconCss;
export {
  WeatherSunny as scale_icon_weather_sunny
};
//# sourceMappingURL=scale-icon-weather-sunny.entry-LR35UIR7.js.map
