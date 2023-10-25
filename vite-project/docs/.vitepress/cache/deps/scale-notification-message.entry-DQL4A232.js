import {
  emitEvent
} from "./chunk-QJ3V7W6Z.js";
import {
  statusNote
} from "./chunk-VGXEJTC4.js";
import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-notification-message.entry.js
var notificationMessageCss = ":host{--width:100%;--radius:var(--telekom-radius-standard);--border:var(--telekom-line-weight-standard) solid transparent;--background-error:var(--telekom-color-functional-danger-subtle);--background-warning:var(--telekom-color-functional-warning-subtle);--background-informational:var(\n    --telekom-color-functional-informational-subtle\n  );--background-success:var(--telekom-color-functional-success-subtle)}.notification-message{border:var(--border);border-radius:var(--radius);width:var(--width);position:relative}.notification-message--variant-error{background:var(--background-error)}.notification-message--variant-warning{background-color:var(--background-warning)}.notification-message--variant-informational{background-color:var(--background-informational)}.notification-message--variant-success{background-color:var(--background-success)}.notification-message__heading{margin:14px 48px 14px 48px;font-weight:var(--telekom-typography-font-weight-bold);line-height:var(--telekom-typography-line-spacing-standard)}.notification-message__text{margin:8px 48px 15px 48px}::slotted(*){font-weight:var(--telekom-typography-font-weight-regular)}.notification-message__icon-close{position:absolute;top:8px;right:13.5px;border:none;cursor:pointer;margin:0;padding:0;background:transparent;color:var(--telekom-color-text-and-icon-standard)}.notification-message__icon-close svg{height:19px;width:19px;padding:6.5px;border-radius:20%}.notification-message__icon-close:hover svg{background-color:hsl(0, 0%, 100%);color:var(--telekom-color-text-and-icon-primary-hovered)}.notification-message__icon-success{position:absolute;top:12.5px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-success)}.notification-message__icon-error{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-danger)}.notification-message__icon-information{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-informational)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-message__icon-close{color:hsl(0, 0%, 100%)}.notification-message{border:1px solid hsl(0, 0%, 100%)}}";
var NotificationMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleClose = createEvent(this, "scale-close", 7);
    this.variant = "informational";
    this.dismissible = false;
    this.autoHide = false;
    this.autoHideDuration = 3e3;
    this.closeButtonLabel = "close";
    this.closeButtonTitle = "close";
    this.close = () => {
      this.opened = false;
      emitEvent(this, "scaleClose");
    };
  }
  componentWillLoad() {
    this.hasSlotText = !!this.hostElement.querySelector("[slot=text]");
  }
  componentDidRender() {
    if (this.autoHide === true) {
      setTimeout(this.close, this.autoHideDuration);
    }
  }
  componentDidUpdate() {
    this.hasSlotText = !!this.hostElement.querySelector("[slot=text]");
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, type: "warn" });
  }
  async open() {
    this.opened = true;
  }
  handleIcons() {
    if (this.variant) {
      switch (this.variant) {
        case "success":
          return h("scale-icon-action-success", { class: "notification-message__icon-success", color: "#187431", "aria-hidden": "true" });
        case "informational":
          return h("scale-icon-alert-information", { class: "notification-message__icon-information", "aria-hidden": "true" });
        case "error":
          return h("scale-icon-alert-error", { class: "notification-message__icon-error", "aria-hidden": "true" });
        case "warning":
          return h("scale-icon-alert-warning", { class: "notification-message__icon-information", color: "#AE461C", "aria-hidden": "true" });
      }
    }
    return;
  }
  render() {
    if (!this.opened) {
      return null;
    }
    return h(Host, null, h("div", { role: "alert", style: { display: `${this.opened ? "" : "none"}` }, part: this.getBasePartMap(), class: this.getCssClassMap(), tabindex: "0" }, h("div", { part: "container", class: "notification-message__container" }, this.handleIcons(), h("div", { part: "heading", class: "notification-message__heading" }, h("slot", null, " "), this.dismissible && h("button", { part: "button-dismissable", type: "button", class: "notification-message__icon-close", onClick: () => this.close(), tabindex: 0, "aria-label": this.closeButtonLabel, title: this.closeButtonTitle, onKeyDown: (e) => {
      if (e.key === "Enter") {
        this.close();
      }
    } }, h("scale-icon-action-circle-close", null))), this.hasSlotText && h("div", { part: "text", class: "notification-message__text" }, h("slot", { name: "text" })))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap("basePart");
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap("css");
  }
  getCssOrBasePartMap(mode) {
    const name = "notification-message";
    const prefix = mode === "basePart" ? "" : `${name}--`;
    return classnames(name, this.variant && `${prefix}variant-${this.variant}`);
  }
  get hostElement() {
    return getElement(this);
  }
};
NotificationMessage.style = notificationMessageCss;
export {
  NotificationMessage as scale_notification_message
};
//# sourceMappingURL=scale-notification-message.entry-DQL4A232.js.map
