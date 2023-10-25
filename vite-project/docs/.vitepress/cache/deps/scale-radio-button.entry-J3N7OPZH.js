import {
  emitEvent,
  generateUniqueId
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

// node_modules/@telekom/scale-components/dist/esm/scale-radio-button.entry.js
var radioButtonCss = "scale-radio-button{--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:var(--telekom-color-ui-disabled);--color-error:var(--telekom-color-text-and-icon-functional-danger);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-primary:var(--telekom-color-text-and-icon-primary-standard);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--color-focus:var(--telekom-color-functional-focus-standard);--color-text:var(--telekom-color-text-and-icon-standard);--transition-helper-text:var(--transition);--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--spacing-left-helper-text:calc(\n    var(--width-control) + var(--telekom-spacing-composition-space-04)\n  );--spacing-top-helper-text:var(--telekom-spacing-composition-space-03);--color-helper-text-error:var(\n    --telekom-color-text-and-icon-functional-danger\n  );--transition-label:var(--transition);--font-weight-label:var(--telekom-typography-font-weight-medium);--color-label:var(--color-text);--spacing-label:var(--telekom-spacing-composition-space-04);--width-control:var(--telekom-spacing-composition-space-07);--height-control:var(--telekom-spacing-composition-space-07);--transition-control:var(--transition);--background-color-control:var(--telekom-color-ui-base);--border-control:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--border-control-checked:calc(\n      0.25 * var(--telekom-spacing-composition-space-05)\n    )\n    solid var(--telekom-color-background-canvas);--border-control-checked-disabled:calc(\n      0.5 * var(--telekom-spacing-composition-space-05)\n    )\n    solid var(--telekom-color-ui-border-disabled);--background-control-checked-disabled:none;--border-control-active:var(--telekom-spacing-composition-space-04) solid\n    var(--telekom-color-primary-pressed);--border-control-disabled:0 0 0 var(--telekom-spacing-composition-space-01)\n    var(--telekom-color-ui-border-disabled);--border-control-error:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-standard);--box-shadow-control-focus:0 0 0 var(--telekom-spacing-composition-space-03)\n    var(--color-focus)}.radio-button{position:relative;display:flex;flex-wrap:wrap;align-items:center;width:fit-content}.radio-button .radio-button__meta{width:100%;display:flex;padding-left:var(--spacing-left-helper-text)}.radio-button .radio-button__helper-text{transition:var(--transition-helper-text);font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text)}scale-icon-alert-information,scale-icon-alert-error{color:var(--color-helper-text);display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-composition-space-03)}.radio-button--status-error .radio-button__helper-text{color:var(--color-helper-text-error)}.radio-button--status-error scale-icon-alert-error{color:var(--color-helper-text-error)}.radio-button label{color:var(--color-label);transition:var(--transition-label);font-weight:var(--font-weight-label);cursor:pointer;line-height:var(--telekom-typography-line-spacing-standard);padding-left:var(--spacing-label)}.radio-button input{width:var(--width-control);height:var(--height-control);transition:var(--transition-control);border-radius:50%;-webkit-appearance:none;background-color:var(--telekom-color-ui-state-fill-standard);border:var(--border-control);margin:0;cursor:pointer}.radio-button input:not(:checked):not([disabled]):hover{box-shadow:none;border-color:var(--telekom-color-ui-border-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.radio-button input:not(:checked):not([disabled]):hover~label{color:var(--color-primary-hover)}.radio-button input:not(:checked):not([disabled]):active{border-color:var(--telekom-color-ui-border-pressed);background-color:var(--telekom-color-ui-state-fill-pressed)}.radio-button input:not(:checked):not([disabled]):active~label{color:var(--color-primary-active)}.radio-button input:disabled{box-shadow:var(--border-control-disabled)}.radio-button input:disabled~label{color:var(--color-disabled)}.radio-button.radio-button--status-error input{border:var(--border-control-error)}.radio-button.radio-button--status-error:hover input:not(:checked):not([disabled]){border-color:var(--telekom-color-functional-danger-hovered)}.radio-button.radio-button--status-error:active input:not(:checked):not([disabled]){border-color:var(--telekom-color-functional-danger-pressed)}.radio-button input:checked{border:var(--border-control-checked);background-color:var(--telekom-color-primary-standard);box-shadow:0 0 0 var(--telekom-spacing-composition-space-01)\n    var(--telekom-color-text-and-icon-primary-standard)}.radio-button input:checked:disabled{background-color:var(--background-disabled);border:var(--border-control-checked);box-shadow:var(--border-control-disabled)}.radio-button input:checked:disabled~label{color:var(--color-disabled);border:var(--border-control-disabled)}.radio-button--disabled,.radio-button--disabled label,.radio-button--disabled .radio-button__label,.radio-button--disabled input,.radio-button--disabled .radio-button__helper-text{cursor:not-allowed;border-color:var(--color-disabled);color:var(--color-disabled);background:var(--telekom-color-ui-state-fill-standard)}.radio-button--disabled scale-icon-alert-information,.radio-button--disabled scale-icon-alert-error{color:var(--color-disabled)}.radio-button input:focus{outline:2px solid var(--color-focus);outline-offset:2px}";
var RadioButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.name = "";
    this.label = "";
    this.helperText = "";
    this.status = "";
    this.invalid = false;
    this.checked = false;
    this.value = "";
    this.internalId = generateUniqueId();
    this.handleCheckedChange = (event) => {
      if (!this.disabled) {
        this.checked = event.target.checked;
        if (this.checked) {
          this.uncheckSiblings();
        }
        emitEvent(this, "scaleChange", {
          value: this.value == null ? this.value : this.value.toString()
        });
      }
    };
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = "input-" + this.internalId;
    }
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
  // We manually set `checked` to false on sibling <scale-radio-button> elements,
  // otherwise they stayed `checked` after being clicked once, forever.
  uncheckSiblings() {
    this.getSiblingRadios().forEach((radio) => {
      radio.checked = false;
    });
  }
  getSiblingRadios() {
    return Array.from(document.querySelectorAll(`scale-radio-button[name="${this.name}"]`)).filter((radio) => radio.inputId !== this.inputId);
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
    const ariaInvalidAttr = this.status === "error" || this.invalid ? { "aria-invalid": true } : {};
    const helperTextId = `helper-message-${this.internalId}`;
    const ariaDescribedByAttr = { "aria-describedBy": helperTextId };
    return h(Host, null, h("div", { class: this.getCssClassMap() }, h("input", Object.assign({ type: "radio", name: this.name, id: this.inputId, onChange: this.handleCheckedChange, value: this.value, checked: this.checked, disabled: this.disabled }, ariaInvalidAttr, this.helperText ? ariaDescribedByAttr : {})), h("label", { htmlFor: this.inputId }, this.label), !!this.helperText && h("div", { class: "radio-button__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, this.renderHelperIcon(), h("div", { class: "radio-button__helper-text" }, this.helperText))));
  }
  getCssClassMap() {
    return classnames("radio-button", this.checked && `radio-button--checked`, this.disabled && `radio-button--disabled`, this.status && `radio-button--status-${this.status}`, this.invalid && `radio-button--status-error`);
  }
  get hostElement() {
    return getElement(this);
  }
};
RadioButton.style = radioButtonCss;
export {
  RadioButton as scale_radio_button
};
//# sourceMappingURL=scale-radio-button.entry-J3N7OPZH.js.map
