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

// node_modules/@telekom/scale-components/dist/esm/scale-dropdown.entry.js
var dropdownCss = "scale-dropdown{--font-weight:var(--telekom-typography-font-weight-bold);--height:var(--telekom-spacing-composition-space-13);--spacing-x:var(--telekom-spacing-composition-space-05);--spacing-dropdown:18px var(--telekom-spacing-composition-space-12) 5px\n    calc(var(--spacing-x) - 1px);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard);--border-danger:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-standard);--border-success:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-success-standard);--border-warning:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-warning-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--color:var(--telekom-color-text-and-icon-standard);--background-color:var(--telekom-color-ui-state-fill-standard);--margin-bottom-helper-text:var(--telekom-spacing-composition-space-03);--transition-input:var(--transition);--font-size-input:var(--telekom-typography-font-size-body);--spacing-y-meta:var(--telekom-spacing-composition-space-03);--color-meta:var(--telekom-color-text-and-icon-standard);--height-icon:var(--telekom-spacing-composition-space-07);--color-icon:var(--telekom-color-text-and-icon-standard);--color-icon-hover:var(--telekom-color-text-and-icon-standard);--color-icon-active:var(--telekom-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--telekom-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--font-size-label:var(--telekom-typography-font-size-body);--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label-focus:var(--telekom-typography-font-size-small);--font-weight-label-focus:var(--telekom-typography-font-weight-bold)}.dropdown{position:relative}.dropdown .input__dropdown{width:100%;height:var(--height);margin:0;display:flex;outline:none;padding:var(--spacing-dropdown);z-index:1;box-sizing:border-box;transition:var(--transition-input);font-family:inherit;font-size:var(--font-size-input);border-radius:var(--radius);border:var(--border);white-space:nowrap;line-height:var(--font-size-input);text-overflow:ellipsis;appearance:none;-webkit-appearance:none;background-color:var(--background-color);color:var(--color)}.dropdown--hide-label .input__dropdown{padding:5px var(--telekom-spacing-composition-space-12) 5px\n    calc(var(--spacing-x) - 1px)}.dropdown--hide-label .input__label{visibility:hidden}.dropdown .input__dropdown-wrapper{position:relative}.dropdown.dropdown--helper-text .input__dropdown-wrapper{margin-bottom:var(--margin-bottom-helper-text)}.dropdown .input__meta{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}.dropdown.dropdown--disabled .input__dropdown-wrapper .input__dropdown-icon{color:var(--color-disabled)}.dropdown:not(.dropdown--disabled):hover .input__dropdown-icon{color:var(--color-icon-hover)}.dropdown:not(.dropdown--disabled):active .input__dropdown-icon{color:var(--color-icon-active)}.dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:hover{border-color:var(--border-color-hover);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:hover{border-color:var(--telekom-color-functional-danger-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-warning .input__dropdown:hover{border-color:var(--telekom-color-functional-warning-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-success .input__dropdown:hover{border-color:var(--telekom-color-functional-success-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:focus{border-color:var(--border-color-focus)}.dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:focus{border-color:var(--telekom-color-functional-danger-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-warning .input__dropdown:focus{border-color:var(--telekom-color-functional-warning-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-success .input__dropdown:focus{border-color:var(--telekom-color-functional-success-hovered)}.dropdown:not(.dropdown--disabled) .input__dropdown:focus{outline:var(--focus-outline);outline-offset:1px}.dropdown .input__dropdown-wrapper .input__dropdown-icon{top:50%;right:var(--spacing-x);position:absolute;transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);transition:var(--transition-icon)}.input__label{top:-2px;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font-size:var(--font-size-label);transform:translate(\n    var(--spacing-x),\n    calc(\n      (var(--telekom-spacing-composition-space-14) - var(--font-size-label)) / 2\n    )\n  );font-weight:var(--font-weight-label)}.animated .input__label{transform:translate(\n    var(--spacing-x),\n    var(--telekom-spacing-composition-space-04)\n  );font-size:var(--font-size-label-focus);font-weight:var(--font-weight-label-focus);line-height:var(--telekom-typography-font-size-small)}.dropdown--variant-danger .input__dropdown{border:var(--border-danger)}.dropdown--variant-warning .input__dropdown{border:var(--border-warning)}.dropdown--variant-success .input__dropdown{border:var(--border-success)}.dropdown--transparent .input__dropdown{background-color:transparent}.dropdown--disabled label,.dropdown--disabled .input__label,.dropdown--disabled input,.dropdown--disabled .input__dropdown{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[data-mode='light'] .dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:hover{background-color:var(--telekom-color-ui-state-fill-hovered)}[data-mode='light'] .dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:hover{background-color:var(--telekom-color-ui-state-fill-hovered)}[data-mode='dark'] .dropdown .input__dropdown{background-color:var(--telekom-color-background-canvas)}[data-mode='dark'] .dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:hover{background-color:#1b1b1b}[data-mode='dark'] .dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:hover{background-color:#1b1b1b}[data-mode='dark'] .dropdown--disabled .input__dropdown{background-color:var(--telekom-color-background-canvas)}@media (prefers-color-scheme: dark){.dropdown .input__dropdown{background-color:var(--telekom-color-background-canvas)}.dropdown:not(.dropdown--disabled):not(.dropdown--status-error) .input__dropdown:hover{background-color:#1b1b1b}.dropdown:not(.dropdown--disabled).dropdown--status-error .input__dropdown:hover{background-color:#1b1b1b}.dropdown--disabled .input__dropdown{background-color:var(--telekom-color-background-canvas)}}";
var Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleInput = createEvent(this, "scale-input", 7);
    this.scaleInputLegacy = createEvent(this, "scaleInput", 7);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.scaleFocus = createEvent(this, "scale-focus", 7);
    this.scaleFocusLegacy = createEvent(this, "scaleFocus", 7);
    this.scaleBlur = createEvent(this, "scale-blur", 7);
    this.scaleBlurLegacy = createEvent(this, "scaleBlur", 7);
    this.scaleKeyDown = createEvent(this, "scale-keydown", 7);
    this.scaleKeyDownLegacy = createEvent(this, "scaleKeydown", 7);
    this.name = "";
    this.label = "";
    this.helperText = "";
    this.status = "";
    this.invalid = false;
    this.variant = "informational";
    this.value = "";
    this.controlled = false;
    this.hideLabelVisually = false;
    this.internalId = generateUniqueId();
    this.handleSelectChange = (event) => {
      const target = event.target;
      if (this.controlled) {
        emitEvent(this, "scaleChange", { value: target.value });
        this.selectElement.value = String(this.value);
        this.forceUpdate = String(Date.now());
      } else {
        this.value = target.value || "";
        this.emitChange();
      }
    };
    this.handleInput = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || "";
        this.emitChange();
      }
      emitEvent(this, "scaleInput", event);
    };
    this.handleChange = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || "";
        this.emitChange();
      }
    };
    this.handleFocus = () => {
      emitEvent(this, "scaleFocus");
    };
    this.handleBlur = () => {
      emitEvent(this, "scaleBlur");
    };
    this.handleKeyDown = (event) => {
      emitEvent(this, "scaleKeyDown", event);
    };
  }
  componentWillLoad() {
    this.hasSlotIcon = !!this.hostElement.querySelector('[slot="icon"]');
    if (this.inputId == null) {
      this.inputId = "input-dropdown-" + this.internalId;
    }
  }
  componentDidLoad() {
    const select = this.selectElement;
    const selectedValue = select.selectedIndex > -1 ? select.options[select.selectedIndex].value : null;
    if (this.value) {
      select.value = String(this.value);
    } else if (selectedValue) {
      this.value = selectedValue;
    }
    if (this.selectElement) {
      this.mutationObserver = new MutationObserver(() => {
        this.forceUpdate = String(Date.now());
      });
      this.mutationObserver.observe(this.hostElement, {
        childList: true,
        subtree: true
      });
    }
  }
  componentDidUpdate() {
    this.hasSlotIcon = !!this.hostElement.querySelector('[slot="icon"]');
  }
  componentDidRender() {
    const value = this.value == null ? "" : this.value.toString();
    if (this.controlled && this.selectElement.value.toString() !== value) {
      this.selectElement.value = value;
    }
    if (this.status !== "") {
      statusNote({
        tag: "deprecated",
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: "warn",
        source: this.hostElement
      });
    }
    if (this.size) {
      statusNote({
        tag: "deprecated",
        message: 'Property "size" is deprecated. Please use css overwrite!',
        type: "warn",
        source: this.hostElement
      });
    }
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
  // We're not watching `value` like we used to
  // because we get unwanted `scaleChange` events
  // because how we keep this.value up-to-date for type="select"
  // `this.value = selectedValue`
  emitChange() {
    emitEvent(this, "scaleChange", {
      value: this.value == null ? this.value : this.value.toString()
    });
  }
  render() {
    const ariaInvalidAttr = this.status === "error" || this.invalid ? { "aria-invalid": true } : {};
    const helperTextId = `helper-message-${this.internalId}`;
    const ariaDescribedByAttr = { "aria-describedBy": helperTextId };
    return h(Host, null, h("div", { class: this.getCssClassMap() }, h("label", { class: "input__label", htmlFor: this.inputId }, this.label), h("div", { class: "input__dropdown-wrapper" }, h("select", Object.assign({
      ref: (el) => this.selectElement = el,
      class: "input__dropdown",
      // @ts-ignore
      value: this.value,
      onChange: this.handleSelectChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyDown: this.handleKeyDown,
      disabled: this.disabled,
      required: this.required,
      multiple: this.multiple,
      id: this.inputId,
      name: this.name,
      size: this.visibleSize
    }, ariaInvalidAttr, this.helperText ? ariaDescribedByAttr : {}), h("slot", null)), h("div", { class: "input__dropdown-icon" }, this.hasSlotIcon ? h("slot", { name: "icon" }) : h("scale-icon-navigation-collapse-down", { size: 20, decorative: true }))), this.helperText && h("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? "danger" : this.variant })));
  }
  getCssClassMap() {
    return classnames("dropdown", this.disabled && `dropdown--disabled`, this.transparent && "dropdown--transparent", this.status && `dropdown--status-${this.status}`, this.helperText && "dropdown--helper-text", this.variant && `dropdown--variant-${this.invalid ? "danger" : this.variant}`, this.value != null && this.value !== "" && "animated", this.hideLabelVisually && "dropdown--hide-label");
  }
  get hostElement() {
    return getElement(this);
  }
};
Dropdown.style = dropdownCss;
export {
  Dropdown as scale_dropdown
};
//# sourceMappingURL=scale-dropdown.entry-EMKYR3WX.js.map
