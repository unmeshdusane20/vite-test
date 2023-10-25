import {
  generateUniqueId
} from "./chunk-QJ3V7W6Z.js";
import {
  statusNote
} from "./chunk-VGXEJTC4.js";
import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-radio-button-group.entry.js
var radioButtonGroupCss = ":host{--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label:var(--telekom-typography-font-size-body);--font-size-helper-text:var(--telekom-typography-font-size-small);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--padding-bottom-helper-text:var(--telekom-spacing-composition-space-04);--margin-top-helper-text:var(--telekom-spacing-composition-space-03);--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--font-size-error-helper-text:var(--telekom-typography-font-size-small);--color-error-helper-text:var(\n    --telekom-color-text-and-icon-functional-danger\n  );--padding-bottom-error-helper-text:var(\n    --telekom-spacing-composition-space-04\n  );--margin-top-error-helper-text:var(--telekom-spacing-composition-space-03);--font-weight-error-helper-text:var(--telekom-typography-font-weight-medium);--color-error-helper-text-hcm:var(\n    --telekom-color-text-and-icon-white-standard\n  );--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--font-size-title:var(--font-size-label);--font-weight-title:var(--telekom-typography-font-weight-medium);--padding-bottom-title:var(--telekom-spacing-composition-space-03);--margin-left-title:var(--telekom-spacing-composition-space-02);--margin-top-slotted-item:var(--telekom-spacing-composition-space-05);margin-top:var(--margin-top-slotted-item)}.radio-button-group{display:inline-flex;flex-direction:column;border:0;margin:0;padding:0}.radio-button-group__container{display:flex;flex-direction:column}.radio-button-group__helper-text{color:var(--color-helper-text);font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);display:flex;align-items:center;line-height:var(--line-height-helper-text)}.radio-button-group__helper-text--status-error{color:var(--color-error-helper-text);font-size:var(--font-size-error-helper-text);font-weight:var(--font-weight-error-helper-text)}.radio-button-group__title{margin:0;padding:0}.radio-button-group__title-label{font-size:var(--font-size-title);line-height:var(--telekom-typography-line-spacing-standard);font-weight:var(--telekom-typography-font-weight-bold)}::slotted(*){margin-top:calc(var(--margin-top-slotted-item))}@media screen and (forced-colors: active), (-ms-high-contrast: active){.radio-button-group__helper-text--status-error{color:var(--color-error-helper-text-hcm)}}.radio-button-group__helper-text scale-icon-alert-success,.radio-button-group__helper-text scale-icon-alert-warning,.radio-button-group__helper-text scale-icon-alert-information,.radio-button-group__helper-text scale-icon-alert-error{margin-right:var(--telekom-spacing-composition-space-03)}";
var RadioButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = "";
    this.helperText = "";
    this.status = "";
    this.invalid = false;
    this.internalId = generateUniqueId();
  }
  componentDidRender() {
    if (this.status !== "") {
      statusNote({
        tag: "deprecated",
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: "warn",
        source: this.hostElement
      });
    }
  }
  renderHelperIcon() {
    if (this.helperText && !this.invalid) {
      return h("scale-icon-alert-information", { size: 11 });
    }
    if (this.invalid) {
      return h("scale-icon-alert-error", { size: 11 });
    }
  }
  render() {
    const helperTextId = `helper-message-${this.internalId}`;
    return h("fieldset", { part: "base", class: "radio-button-group" }, h("legend", { class: "radio-button-group__title" }, h("label", { class: "radio-button-group__title-label", "aria-label": this.label }, this.label), this.helperText ? h("div", { role: "text", id: helperTextId, class: this.getCssClassMap(), "aria-label": this.helperText }, this.renderHelperIcon(), h("span", null, this.helperText)) : null), h("div", { part: "container", class: "radio-button-group__container" }, h("slot", null)));
  }
  getCssClassMap() {
    return classnames("radio-button-group__helper-text", (this.status === "error" || this.invalid) && `radio-button-group__helper-text--status-error`);
  }
  get hostElement() {
    return getElement(this);
  }
};
RadioButtonGroup.style = radioButtonGroupCss;
export {
  RadioButtonGroup as scale_radio_button_group
};
//# sourceMappingURL=scale-radio-button-group.entry-3EWM4WHZ.js.map
