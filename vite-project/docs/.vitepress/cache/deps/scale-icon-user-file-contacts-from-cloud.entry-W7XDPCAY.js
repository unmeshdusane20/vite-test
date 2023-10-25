import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-user-file-contacts-from-cloud.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var UserFileContactsFromCloud = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12.003 7.998c1.15 0 2.1.85 2.1 2.1s-.9 2.499-2.1 2.499c-1.2 0-2.1-1.249-2.1-2.499s.95-2.1 2.1-2.1m1.427 7.498H8.254l.1-.7c.15-.8.85-1.35 1.649-1.35h.85l1.15 1.151 1.2-1.201h.8c.774 0 1.405.566 1.58 1.329.061-.003.122-.008.183-.008.06 0 .12.001.179.004a5.395 5.395 0 012.829-.806c.783 0 1.54.174 2.227.488V4.499A3.008 3.008 0 0018.002 1.5H3.005v20.994h7.854a4.154 4.154 0 01-.356-1.681c0-1.241.556-2.409 1.488-3.195a3.91 3.91 0 011.439-2.122m7.635 6.498h-6.382a1.181 1.181 0 01-.58-2.207l.712-.402.047-.817a.906.906 0 011.112-.827l.722.176.577-.468a2.389 2.389 0 011.501-.534c1.012 0 1.892.612 2.241 1.561l.2.543.513.268c.469.245.773.744.773 1.272 0 .792-.644 1.435-1.436 1.435m1.357-4.036a3.876 3.876 0 00-3.648-2.543c-.893 0-1.753.308-2.445.869a2.409 2.409 0 00-2.964 2.198 2.683 2.683 0 00-1.362 2.331 2.683 2.683 0 002.68 2.681h6.382A2.938 2.938 0 0024 20.559a2.942 2.942 0 00-1.578-2.601", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12.003 12.597c1.2 0 2.1-1.25 2.1-2.5s-.95-2.1-2.1-2.1c-1.15 0-2.1.85-2.1 2.1s.9 2.5 2.1 2.5zm-7.498 8.398V2.999h13.497c.849 0 1.499.65 1.499 1.5v9.469c.524.072 1.028.22 1.5.436V4.499a3.008 3.008 0 00-2.999-3H3.005v20.995h7.854a4.137 4.137 0 01-.346-1.5H4.505zm3.849-6.2l-.1.7h5.176a3.883 3.883 0 012.153-.77c-.175-.763-.806-1.328-1.58-1.328h-.8l-1.2 1.2-1.15-1.15h-.85c-.799 0-1.499.549-1.649 1.349zm14.068 3.163a3.876 3.876 0 00-3.648-2.543c-.893 0-1.753.308-2.445.87a2.409 2.409 0 00-2.964 2.198 2.68 2.68 0 00-1.362 2.33 2.683 2.683 0 002.68 2.68h6.382A2.938 2.938 0 0024 20.56a2.942 2.942 0 00-1.578-2.601z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
UserFileContactsFromCloud.style = iconCss;
export {
  UserFileContactsFromCloud as scale_icon_user_file_contacts_from_cloud
};
//# sourceMappingURL=scale-icon-user-file-contacts-from-cloud.entry-W7XDPCAY.js.map
