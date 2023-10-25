import {
  statusNote
} from "./chunk-VGXEJTC4.js";
import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-alert.entry.js
var alertCss = ".alert{box-sizing:border-box;background:#eee;color:#333;width:100%;padding:1rem;text-align:left;position:relative;display:flex;justify-content:space-between}.alert__body{display:flex}.alert__headline{font-size:var(--type-size-3, 1rem);color:white;margin:0}.alert__icon{display:flex;align-items:center;justify-content:center;background:none;height:24px;width:24px;margin:0 0.5rem 0 0;border-radius:var(--telekom-radius-standard)}.alert__close{height:16px;opacity:0.5;cursor:pointer}.alert__close:hover{opacity:1}.alert--variant-primary{background:blue;color:#fff}.alert--variant-secondary{background:#eee;color:#333}.alert--variant-variant-warning{background:orange;color:#fff}.alert--variant-danger{background:red;color:#fff}.alert--variant-success{background:green;color:#fff}.alert--variant-info{background:lightblue;color:#fff}";
var Alert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = "";
    this.variant = "";
    this.timeout = false;
    this.icon = "";
    this.defaultTimeout = 2e3;
    this.close = () => {
      this.opened = false;
    };
    this.onCloseAlertWithTimeout = () => {
      if (this.timeout !== false) {
        if (typeof this.timeout === "number") {
          setTimeout(this.close, this.timeout);
        } else {
          setTimeout(this.close, this.defaultTimeout);
        }
      } else {
        return null;
      }
    };
  }
  componentWillLoad() {
    this.hasSlotClose = !!this.hostElement.querySelector('[slot="close"]');
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, type: "warn" });
  }
  /** Alert method: open() */
  async open() {
    this.opened = true;
  }
  render() {
    this.onCloseAlertWithTimeout();
    if (!this.opened) {
      return null;
    }
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("div", { class: "alert__body" }, h("div", { class: "alert__icon" }, this.icon), h("div", { class: "alert__content" }, h("div", { class: "alert__headline" }, this.headline), h("slot", null))), h("a", { class: "alert__close", onClick: this.close }, this.hasSlotClose ? h("div", { class: "alert__close-icon" }, h("slot", { name: "close" })) : "x")));
  }
  getCssClassMap() {
    return classnames("alert", this.size && `alert--size-${this.size}`, this.variant && `alert--variant-${this.variant}`);
  }
  get hostElement() {
    return getElement(this);
  }
};
Alert.style = alertCss;
export {
  Alert as scale_alert
};
//# sourceMappingURL=scale-alert.entry-HWZWQKKO.js.map
