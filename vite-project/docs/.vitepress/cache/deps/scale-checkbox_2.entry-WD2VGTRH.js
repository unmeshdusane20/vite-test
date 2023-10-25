import {
  emitEvent,
  generateUniqueId
} from "./chunk-QJ3V7W6Z.js";
import {
  statusNote
} from "./chunk-VGXEJTC4.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-checkbox_2.entry.js
var checkboxCss = ":host,scale-checkbox{--spacing-x:var(--telekom-spacing-composition-space-04);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-text:var(--telekom-color-text-and-icon-standard);--color-error:var(--telekom-color-functional-danger-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--color-standard:var(--telekom-color-background-surface);--background-disabled:none;--color-primary:var(--telekom-color-primary-standard);--color-focus:var(--telekom-color-functional-focus-standard);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--width-control:var(--telekom-spacing-composition-space-07);--height-control:var(--telekom-spacing-composition-space-07);--transition-control:var(--transition);--spacing-control:var(--telekom-spacing-composition-space-02);--spacing-left-control:var(--telekom-spacing-composition-space-03);--radius-control:var(--telekom-radius-small);--border-width-control:var(--telekom-line-weight-standard);--transition-helper-text:var(--transition);--spacing-left-helper-text:calc(var(--width-control) + var(--spacing-x));--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--font-weight-label:var(--telekom-typography-font-weight-medium);--transition-label:var(--transition);--color-icon-checked-disabled:var(--telekom-color-text-and-icon-disabled);--color-icon-checked-active:var(\n    --telekom-color-text-and-icon-white-standard\n  );--width-icon:var(--telekom-spacing-composition-space-06);--height-icon:var(--telekom-spacing-composition-space-06);--stroke-width:var(--stroke-width-checkbox, 0.5px)}scale-checkbox{position:relative;display:flex;width:fit-content;flex-direction:column;color:var(--color-text)}scale-checkbox [part='icon'],scale-checkbox [part='checkbox'],scale-checkbox [part='label'],scale-checkbox [part='helper-text']{transition:var(--transition)}scale-checkbox [part='input'],scale-checkbox.hideLabel [part='label']{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}scale-checkbox [part='checkbox']{box-sizing:border-box;display:flex;flex:0 0 auto;justify-content:center;align-items:center;width:var(--width-control);height:var(--height-control);border-radius:var(--radius-control);border:var(--border-width-control) solid\n    var(--telekom-color-ui-border-standard)}scale-checkbox [part='label']{font-weight:var(--font-weight-label);margin-left:var(--spacing-x)}scale-checkbox [part='icon']{width:var(--width-icon);height:var(--height-icon);color:var(--color-icon-checked-active)}scale-checkbox [part='icon'] svg{width:100%;height:100%}scale-checkbox [part='icon'] svg rect,scale-checkbox [part='icon'] svg path{stroke:currentColor;stroke-width:var(--stroke-width)}scale-checkbox [part='container']{align-items:center;display:flex;line-height:var(--telekom-typography-line-spacing-standard)}scale-checkbox [part='helper-text']{font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text);padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x) +\n      calc(var(--border-width-control) * 2)\n  );display:flex;align-items:center}scale-checkbox.indeterminate [part='checkbox']{background:var(--telekom-color-primary-standard);border:none;color:var(--color-icon-checked-active)}scale-checkbox.indeterminate [part='icon']{color:var(--color-icon-checked-active)}scale-checkbox.checked [part='checkbox']{background:var(--telekom-color-primary-standard);border-color:var(--telekom-color-primary-standard);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:hover [part='checkbox']{background:var(--telekom-color-ui-state-fill-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox.checked [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed);color:var(--color-icon-checked-active)}scale-checkbox [part='input']:focus~[part='container'] [part='checkbox']{outline:var(--telekom-spacing-composition-space-02) solid var(--color-focus);outline-offset:var(--telekom-spacing-composition-space-01)}scale-checkbox [part='container']:hover{color:var(--color-primary-hover);cursor:pointer}scale-checkbox.checked [part='container']:hover [part='checkbox'],scale-checkbox.indeterminate [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-primary-hovered)}scale-checkbox.checked [part='input']:active~[part='container'],scale-checkbox.checked [part='container']:active{color:var(--color-primary-active)}scale-checkbox [part='input']:active~[part='container'] [part='checkbox'],scale-checkbox.checked [part='container']:active [part='checkbox'],scale-checkbox.indeterminate [part='container']:active [part='checkbox']{background:var(--telekom-color-primary-pressed);border-color:var(--telekom-color-primary-pressed)}scale-checkbox:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed)}scale-icon-alert-information,scale-icon-alert-error{color:var(--color-helper-text);display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-composition-space-03)}scale-checkbox.error [part='helper-text']{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='helper-text'] scale-icon-alert-error{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--color-error);border:none}scale-checkbox.error [part='input']:focus~[part='container'] [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--color-error)}scale-checkbox.error [part='checkbox']:hover{background-color:var(--telekom-color-ui-state-fill-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='checkbox']:active{background-color:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.error:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.checked.error [part='container']:hover [part='checkbox']{background-color:var(--telekom-color-primary-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='helper-text']{padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x)\n  )}scale-checkbox.disabled{cursor:not-allowed}scale-checkbox.disabled [part='container'],scale-checkbox.disabled [part='helper-text']{color:var(--color-disabled);pointer-events:none}scale-checkbox.disabled [part='checkbox']{background:var(--telekom-color-ui-solid-fill-disabled);border-color:var(--telekom-color-ui-border-disabled)}scale-checkbox.checked.disabled [part='checkbox']{background-color:var(--telekom-color-ui-disabled);border-color:transparent}scale-checkbox.checked.disabled [part='icon']{color:var(--color-icon-checked-disabled);background-color:var(--telekom-color-ui-disabled)}scale-checkbox.disabled [part='helper-text'] scale-icon-alert-information,scale-checkbox.disabled.error [part='helper-text'] scale-icon-alert-error{color:var(--color-disabled)}";
var Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.label = "";
    this.hideLabel = false;
    this.status = "";
    this.invalid = false;
    this.disabled = false;
    this.checked = false;
    this.indeterminate = false;
    this.value = "";
    this.internalId = generateUniqueId();
    this.handleChange = (ev) => {
      if (this.indeterminate) {
        this.indeterminate = false;
        this.checked = true;
        ev.target.checked = true;
      } else {
        this.checked = ev.target.checked;
      }
      const { checked, indeterminate, value, disabled } = this;
      emitEvent(this, "scaleChange", { checked, indeterminate, value, disabled });
    };
  }
  componentDidRender() {
    if (this.status !== "") {
      statusNote({
        tag: "deprecated",
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: "warn",
        source: this.host
      });
    }
    if (this.host.hasAttribute("aria-label")) {
      statusNote({
        tag: "deprecated",
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckbox" property!',
        type: "warn",
        source: this.host
      });
    }
  }
  connectedCallback() {
    if (!this.inputId) {
      this.inputId = "input-checkbox-" + this.internalId;
    }
  }
  /* Accessibility: rendering the icon *only* when checked, otherwise is always visible in HCM */
  renderIcon() {
    if (this.indeterminate) {
      return h("scale-icon-action-minus", { part: "icon", decorative: true });
    }
    if (this.checked) {
      return h("scale-icon-action-checkmark", { part: "icon", decorative: true });
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
  renderHelperText(text) {
    if (this.helperText && this.helperText !== "") {
      return h("div", { part: "helper-text", id: text.id, "aria-live": "polite", "aria-relevant": "additions removals" }, this.renderHelperIcon(), text.content);
    }
  }
  render() {
    const helperText = {
      id: this.helperText ? `helper-message-${this.internalId}` : null,
      content: this.helperText
    };
    return h(Host, { class: {
      checked: this.checked,
      indeterminate: this.indeterminate,
      disabled: this.disabled,
      error: this.status === "error" || this.invalid,
      hideLabel: this.hideLabel
    } }, h("input", { type: "checkbox", part: "input", name: this.name || null, id: this.inputId, value: this.value, checked: this.checked, indeterminate: this.indeterminate, "aria-label": this.ariaLabelCheckbox, "aria-checked": this.indeterminate ? "mixed" : false, "aria-invalid": this.status === "error" || this.invalid, "aria-describedBy": helperText.id, disabled: this.disabled, required: this.required, onChange: this.handleChange }), h("label", { part: "container", htmlFor: this.inputId }, h("div", { part: "checkbox" }, this.renderIcon()), h("div", { part: "label" }, this.label || h("slot", null))), this.renderHelperText(helperText));
  }
  get host() {
    return getElement(this);
  }
};
Checkbox.style = checkboxCss;
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionMinus = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M19.5 10.75h-15a1.25 1.25 0 000 2.5h15a1.25 1.25 0 100-2.5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M19.5 12.75h-15a.75.75 0 110-1.5h15a.75.75 0 110 1.5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionMinus.style = iconCss;
export {
  Checkbox as scale_checkbox,
  ActionMinus as scale_icon_action_minus
};
//# sourceMappingURL=scale-checkbox_2.entry-WD2VGTRH.js.map
