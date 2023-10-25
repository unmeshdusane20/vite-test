import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-icon-action-drag-and-drop.entry.js
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionDragAndDrop = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M15.5 8.5V21a3 3 0 01-2.824 2.995L12.5 24H3a3 3 0 01-2.995-2.824L0 21V8.5h15.5zM5.27 11.66v6.385l1.415-1.73.895 2.125.92-.39-.905-2.12 2.225.19-4.55-4.46zM19.5 14v1.5H17V14h2.5zm4.5-1.5a3 3 0 01-2.824 2.995L21 15.5V14a1.5 1.5 0 001.493-1.356l.007-.144H24zm0-4V11h-1.5V8.5H24zm0-4V7h-1.5V4.5H24zm-14 0V7H8.5V4.5H10zM21 0a3 3 0 012.995 2.824L24 3h-1.5a1.5 1.5 0 00-1.356-1.493L21 1.5V0zm-9.5 0v1.5a1.5 1.5 0 00-1.493 1.356L10 3H8.5A3 3 0 0111.324.005L11.5 0zm4 0v1.5H13V0h2.5zm4 0v1.5H17V0h2.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M17.538 9.052c.827 0 1.578.458 1.964 1.169l.159-.048c.174-.045.35-.068.525-.068.887 0 1.637.58 1.966 1.5l.672 1.985.641 1.946.14.43c1.093 3.388-.116 6.286-3.157 7.565a5.773 5.773 0 01-2.245.469c-1.648 0-3.002-.75-4.121-1.456l-1.145-.738-.378-.251-.51-.353-.696-.494a2.25 2.25 0 01-.654-2.927c.36-.631 1.017-1.024 1.774-1.07l-1.42-2.142a2.222 2.222 0 01-.32-1.68 2.215 2.215 0 01.962-1.413c.289-.19.614-.31.954-.35a2.231 2.231 0 013.414-1.52 2.247 2.247 0 011.475-.554zm0 1.499a.734.734 0 00-.693.979l1.304 3.699-.39.143-2.257-4.23a.736.736 0 00-.993-.306.734.734 0 00-.305.992l2.16 4.233-.13.075-.272.163-2.427-3.36a.732.732 0 00-1.017-.21.734.734 0 00-.211 1.016l2.867 4.328c.504.693.125 1.09-.224 1.09a.418.418 0 01-.17-.034l-.143-.065-.987-.476-.45-.21a16.365 16.365 0 00-.221-.1.895.895 0 00-.355-.073c-.251 0-.5.104-.622.32-.206.36-.045.774.218.96l.984.694.349.237.413.271.926.596c.995.628 2.067 1.218 3.31 1.218.524 0 1.076-.103 1.665-.351 2.46-1.036 3.126-3.193 2.31-5.723l-.706-2.154-.694-2.045c-.09-.342-.285-.624-.591-.624a.643.643 0 00-.146.019c-.392.103-.546.507-.443.899l.49 2.235c-.132.022-.294.008-.44.037l-1.416-3.753a.736.736 0 00-.693-.49zm-4.04-7.553v1.499h6.5v3.988a3.727 3.727 0 00-1.264-.73l-.236-.072V5.996H6v10.993c0 .778.596 1.42 1.356 1.493l.144.007h1.438a3.8 3.8 0 00.082 1.255l.067.244H7.5a3 3 0 01-2.995-2.823L4.5 16.99v-3.5H3v-1.5h1.5V4.498h7.499v-1.5h1.5zM1.5 11.992v1.499H0v-1.5h1.5zm0-2.998v1.499H0v-1.5h1.5zm0-2.998v1.499H0v-1.5h1.5zm0-2.998v1.499H0v-1.5h1.5zM7.5 0v1.499H6v-1.5h1.5zm-6 0v1.499H0v-1.5h1.5zm3 0v1.499H3v-1.5h1.5zm5.999 0v1.499h-1.5v-1.5h1.5zm3 0v1.499h-1.5v-1.5h1.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionDragAndDrop.style = iconCss;
export {
  ActionDragAndDrop as scale_icon_action_drag_and_drop
};
//# sourceMappingURL=scale-icon-action-drag-and-drop.entry-SVI4FBNO.js.map
