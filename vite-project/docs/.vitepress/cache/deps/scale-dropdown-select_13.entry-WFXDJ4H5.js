import {
  computePosition
} from "./chunk-TEJSZTTM.js";
import {
  emitEvent,
  generateUniqueId,
  isPseudoClassSupported
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

// node_modules/@telekom/scale-components/dist/esm/scale-dropdown-select_13.entry.js
var dropdownSelectCss = ":host{--font-weight:var(--telekom-typography-font-weight-bold);--height:var(--telekom-spacing-composition-space-13);--color:var(--telekom-color-text-and-icon-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--background-hover:var(--telekom-color-ui-state-fill-hovered);--border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--border-invalid:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-hovered);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--spacing-x:var(--telekom-spacing-composition-space-05);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--spacing-x-for-helper-text:var(--telekom-spacing-composition-space-03);--transition-combobox:var(--transition);--background-combobox:var(--telekom-color-ui-state-fill-standard);--spacing-combobox:1.125rem\n    calc(2rem - var(--telekom-spacing-composition-space-01)) 0.25rem\n    calc(0.75rem - var(--telekom-spacing-composition-space-01));--spacing-y-meta:var(--telekom-spacing-composition-space-03);--color-meta:var(--telekom-color-text-and-icon-standard);--height-icon:20px;--color-icon:var(--telekom-color-text-and-icon-standard);--color-icon-hover:var(--telekom-color-text-and-icon-standard);--color-icon-active:var(--telekom-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--telekom-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--transform-label:translate(var(--spacing-x), 0.875rem);--transform-label-animated:translate(\n    var(--spacing-x),\n    calc(0.25rem + var(--telekom-spacing-composition-space-01))\n  );--background-listbox:var(--telekom-color-background-surface);--box-shadow-listbox:0 2px 4px 0 rgba(0, 0, 0, 0.1),\n    0 4px 16px 0 rgba(0, 0, 0, 0.1);--max-height-listbox:300px;--z-index-listbox:99}[part='combobox-container'] *,[part='combobox-container'] *::before,[part='combobox-container'] *::after{box-sizing:border-box}[part='combobox-container']{display:block;position:relative}[part='combobox']{width:100%;height:var(--height);margin:0;display:flex;align-items:center;outline:none;padding:var(--spacing-combobox);z-index:1;box-sizing:border-box;transition:var(--transition-combobox);font:var(--telekom-text-style-body);border-radius:var(--radius);border:var(--border);box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;appearance:none;-webkit-appearance:none;background-color:var(--background-combobox);color:var(--color)}[part~='select']:not([part~='disabled']) [part='combobox']:hover~[part='icon']{color:var(--color-icon-hover)}[part~='select']:not([part~='disabled']) [part='combobox']:active~[part='icon']{color:var(--color-icon-active)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:hover{border-color:var(--border-color-hover);background-color:var(--background-hover)}[part~='select']:not([part~='disabled'])[part~='invalid'] [part='combobox']:hover{background-color:var(--background-hover)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:focus{border-color:var(--border-color-focus)}[part~='select']:not([part~='disabled']):not([part~='steal-focus']) [part='combobox']:focus{outline:var(--focus-outline);outline-offset:1px}[part~='invalid'] [part='combobox']{border:var(--border-invalid)}[part~='transparent'] [part='combobox']{background-color:transparent}[part~='disabled'] [part='combobox']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part='combobox_value']{width:calc(100%);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}[part='meta']{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}[part='icon']{top:50%;right:var(--spacing-x);position:absolute;transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);transition:var(--transition-icon)}[part~='disabled'] [part='icon']{color:var(--color-disabled)}[part='label']{width:calc(100% - 44px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;top:0;left:0;color:var(--color-label);display:inline-block;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font:var(--telekom-text-style-ui);transform:var(--transform-label)}[part~='animated'] [part='label']{font:var(--telekom-text-style-small-bold);transform:var(--transform-label-animated)}[part~='disabled'] [part='label']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part~='hide-label'] [part='combobox']{padding-top:0.3125rem}[part~='hide-label'] [part='label']{visibility:hidden}[part='listbox']{position:relative}[part='listbox-scroll-container']{max-height:var(--max-height-listbox);overflow-y:auto}[part='listbox-pad']{background:var(--background-listbox);box-shadow:var(--box-shadow-listbox);border-radius:var(--radius);padding:var(--radius) 0;margin-top:var(--telekom-spacing-composition-space-03);left:0;position:absolute;top:100%;width:100%;z-index:var(--z-index-listbox);display:none}[part~='open'] [part='listbox-pad']{display:block}[part~='strategy-fixed'] [part='listbox-pad']{position:fixed}[part~='transparent'] [part='listbox']{background-color:transparent}[part~='option']{color:var(--color)}[part~='option']:hover{background-color:var(--background-hover)}[part~='option'][part~='current']{outline:var(--focus-outline);outline-offset:-2px;border-radius:var(--radius)}[part~='option'][aria-selected='true']{padding-right:30px;position:relative}[part~='option'][aria-selected='true'] scale-icon-action-checkmark{position:absolute;right:var(--telekom-spacing-composition-space-05);top:var(--telekom-spacing-composition-space-05)}[part~='option'] scale-dropdown-select-item::part(base){padding:var(--telekom-spacing-composition-space-05)}[part~='has-helper-text'] [part~='combobox-container']{margin-bottom:var(--spacing-x-for-helper-text)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.hcm-disabled{display:none}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='listbox-pad']{outline:var(--focus-outline);outline-offset:-2px;border-radius:var(--radius)}.hcm-disabled{display:block}}";
var Actions;
(function(Actions2) {
  Actions2["Close"] = "Close";
  Actions2["CloseSelect"] = "CloseSelect";
  Actions2["First"] = "First";
  Actions2["Last"] = "Last";
  Actions2["Next"] = "Next";
  Actions2["Open"] = "Open";
  Actions2["PageDown"] = "PageDown";
  Actions2["PageUp"] = "PageUp";
  Actions2["Previous"] = "Previous";
  Actions2["Select"] = "Select";
  Actions2["Type"] = "Type";
})(Actions || (Actions = {}));
var DEFAULT_ICON_SIZE$1 = 20;
var isElementValue = (x) => typeof x.value === "string";
var readValue = (element) => isElementValue(element) ? element.value : null;
var readOptions = (hostElement) => {
  return Array.from(hostElement.children).map((x) => {
    var _a;
    return {
      label: x.textContent.trim(),
      value: (_a = x.getAttribute("value")) !== null && _a !== void 0 ? _a : readValue(x),
      ItemElement: h("span", { innerHTML: x.outerHTML })
    };
  });
};
function getActionFromKey(event, open) {
  const { key, altKey, ctrlKey, metaKey } = event;
  if (!open && ["ArrowDown", "ArrowUp", "Enter", " "].includes(key)) {
    return Actions["Open"];
  }
  if (key === "Home") {
    return Actions["First"];
  }
  if (key === "End") {
    return Actions["Last"];
  }
  if (["Backspace", "Clear"].includes(key) || key.length === 1 && key !== " " && !altKey && !ctrlKey && !metaKey) {
    return Actions["Type"];
  }
  if (!open) {
    return;
  }
  if (key === "ArrowUp" && altKey) {
    return Actions["CloseSelect"];
  }
  if (key === "ArrowDown" && !altKey) {
    return Actions["Next"];
  }
  switch (key) {
    case "ArrowUp":
      return Actions["Previous"];
    case "PageUp":
      return Actions["PageUp"];
    case "PageDown":
      return Actions["PageDown"];
    case "Escape":
      return Actions["Close"];
    case "Enter":
      return Actions["CloseSelect"];
    case " ":
      return Actions["CloseSelect"];
  }
}
function jumpToIndex(currentIndex, maxIndex, action) {
  const JUMP_SIZE = 10;
  switch (action) {
    case Actions["First"]:
      return 0;
    case Actions["Last"]:
      return maxIndex;
    case Actions["Previous"]:
      return Math.max(0, currentIndex - 1);
    case Actions["Next"]:
      return Math.min(maxIndex, currentIndex + 1);
    case Actions["PageUp"]:
      return Math.max(0, currentIndex - JUMP_SIZE);
    case Actions["PageDown"]:
      return Math.min(maxIndex, currentIndex + JUMP_SIZE);
    default:
      return currentIndex;
  }
}
function matchOptions(options = [], filter) {
  return options.filter((option) => option.toLowerCase().indexOf(filter.toLowerCase()) === 0);
}
function getIndexByChar(values, filter, startIndex = 0) {
  const sortedValues = [
    ...values.slice(startIndex),
    ...values.slice(0, startIndex)
  ];
  const firstHit = matchOptions(sortedValues, filter)[0];
  const allMatchingChars = (array) => array.every((char) => char === array[0]);
  if (firstHit) {
    return values.indexOf(firstHit);
  }
  if (allMatchingChars(filter.split(""))) {
    const hits = matchOptions(sortedValues, filter[0]);
    return values.indexOf(hits[0]);
  }
  return -1;
}
function keepInView(activeElement, scrollParent) {
  const { offsetHeight, offsetTop } = activeElement;
  const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;
  const isAboveParent = offsetTop < scrollTop;
  const isBelowParent = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;
  if (isBelowParent) {
    return scrollParent.scrollTop = offsetTop + offsetHeight - parentOffsetHeight;
  }
  if (isAboveParent) {
    return scrollParent.scrollTop = offsetTop;
  }
}
function hasOverflow(element) {
  return element && element.clientHeight < element.scrollHeight;
}
function isInView(element) {
  const rect = element.getBoundingClientRect();
  const parentRect = {
    top: 0,
    left: 0,
    right: window.innerWidth || document.documentElement.clientWidth,
    bottom: window.innerHeight || document.documentElement.clientHeight
  };
  return rect.top >= parentRect.top && rect.left >= parentRect.left && rect.bottom <= parentRect.bottom && rect.right <= parentRect.right;
}
var DropdownSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleFocus = createEvent(this, "scale-focus", 7);
    this.scaleBlur = createEvent(this, "scale-blur", 7);
    this.scaleKeydown = createEvent(this, "scale-keydown", 7);
    this.comboboxId = "combobox";
    this.helperText = "";
    this.invalid = false;
    this.variant = "informational";
    this.floatingStrategy = "absolute";
    this.hideLabelVisually = false;
    this.ariaLabelSelected = "selected";
    this.hcmLabelDisabled = "this field is disabled";
    this.options = "";
    this.open = false;
    this.currentIndex = -1;
    this.queryString = "";
    this.queryTimeout = null;
    this.ignoreBlur = false;
    this.hasFocus = false;
    this.selectOption = (index) => {
      this.currentIndex = index;
      this.value = readOptions(this.hostElement)[index].value;
      emitEvent(this, "scaleChange", { value: this.value });
    };
    this.handleKeyDown = (event) => {
      const { key } = event;
      const max = readOptions(this.hostElement).length - 1;
      const action = getActionFromKey(event, this.open);
      emitEvent(this, "scaleKeydown", event);
      switch (action) {
        case Actions["Last"]:
        case Actions["First"]:
          this.setOpen(true);
        case Actions["Next"]:
        case Actions["Previous"]:
        case Actions["PageUp"]:
        case Actions["PageDown"]:
          event.preventDefault();
          return this.handleOptionChange(jumpToIndex(this.currentIndex, max, action));
        case Actions["CloseSelect"]:
          event.preventDefault();
          this.selectOption(this.currentIndex);
        case Actions["Close"]:
          event.preventDefault();
          return this.setOpen(false);
        case Actions["Type"]:
          return this.buildQueryString(key);
        case Actions["Open"]:
          event.preventDefault();
          return this.setOpen(true);
      }
    };
    this.handleBlur = () => {
      if (this.ignoreBlur) {
        this.ignoreBlur = false;
        return;
      }
      this.setOpen(false);
      emitEvent(this, "scaleBlur");
    };
    this.handleFocus = () => {
      emitEvent(this, "scaleFocus");
    };
    this.handleClick = () => {
      this.setOpen(!this.open);
      const indexOfValue = readOptions(this.hostElement).findIndex(({ value }) => value === this.value);
      if (indexOfValue > -1) {
        setTimeout(() => {
          this.bringIntoView(indexOfValue);
        });
      }
    };
  }
  valueChange(newValue) {
    this.currentIndex = readOptions(this.hostElement).findIndex(({ value }) => value === newValue);
  }
  connectedCallback() {
    if (this.hostElement.closest("scale-tab-panel")) {
      this.ignoreBlur = true;
    }
    statusNote({ source: this.hostElement, tag: "beta" });
    this.currentIndex = readOptions(this.hostElement).findIndex(({ value }) => value === this.value) || -1;
  }
  componentDidRender() {
    if (!this.open) {
      return;
    }
    if (this.floatingStrategy === "fixed") {
      this.listboxPadEl.style.width = `${this.comboEl.getBoundingClientRect().width}px`;
    }
    computePosition(this.comboEl, this.listboxPadEl, {
      placement: "bottom",
      strategy: this.floatingStrategy
    }).then(({ x, y }) => {
      Object.assign(this.listboxPadEl.style, {
        left: `${x}px`,
        top: `${y}px`
      });
    });
  }
  handleOptionChange(index) {
    this.currentIndex = index;
    this.bringIntoView(index);
  }
  bringIntoView(index) {
    const options = this.listboxEl.querySelectorAll("[role=option]");
    if (hasOverflow(this.listboxEl)) {
      keepInView(options[index], this.listboxEl);
    }
    if (!isInView(options[index])) {
      options[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
  setOpen(open) {
    if (this.open === open) {
      return;
    }
    if (this.disabled) {
      return;
    }
    this.open = open;
    if (!this.open) {
      this.comboEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      this.comboEl.focus();
      this.currentIndex = -1;
    }
  }
  handleOptionClick(event, index) {
    event.stopPropagation();
    this.handleOptionChange(index);
    this.selectOption(index);
    this.setOpen(false);
  }
  getSearchString(char) {
    if (typeof this.queryTimeout === "number") {
      window.clearTimeout(this.queryTimeout);
    }
    this.queryTimeout = window.setTimeout(() => {
      this.queryString = "";
    }, 500);
    this.queryString += char;
    return this.queryString;
  }
  buildQueryString(char) {
    this.setOpen(true);
    const queryString = this.getSearchString(char);
    const queryIndex = getIndexByChar(readOptions(this.hostElement).map(({ label }) => label), queryString, this.currentIndex + 1);
    if (queryIndex >= 0) {
      this.handleOptionChange(queryIndex);
    } else {
      window.clearTimeout(this.queryTimeout);
      this.queryString = "";
    }
  }
  render() {
    const ValueElement = (readOptions(this.hostElement).find(({ value }) => value === this.value) || {}).ItemElement;
    const hasEmptyValueElement = (readOptions(this.hostElement).find(({ value }) => value === this.value) || {}).value === "" ? true : false;
    const helperTextId = `helper-message-${generateUniqueId()}`;
    const ariaDescribedByAttr = { "aria-describedBy": helperTextId };
    return h(Host, null, h("div", { part: this.getBasePartMap() }, h("div", { part: "combobox-container" }, h("label", { id: `${this.comboboxId}-label`, part: "label" }, this.label), h("div", Object.assign({ ref: (el) => this.comboEl = el, "aria-controls": `${this.comboboxId}-listbox`, "aria-expanded": this.open ? "true" : "false", "aria-haspopup": "listbox", "aria-labelledby": `${this.comboboxId}-label`, id: this.comboboxId, part: "combobox", role: "combobox", tabindex: "0", onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick, onKeyDown: this.handleKeyDown }, this.open ? {
      "aria-activedescendant": (readOptions(this.hostElement)[this.currentIndex] || {}).value
    } : {}, this.helperText ? ariaDescribedByAttr : {}, this.invalid ? { "aria-invalid": "true" } : {}), h("span", { part: "combobox-value" }, hasEmptyValueElement ? "" : ValueElement)), h("div", { part: "listbox-pad", ref: (el) => this.listboxPadEl = el }, h("div", { part: "listbox-scroll-container" }, h("div", { ref: (el) => this.listboxEl = el, part: "listbox", role: "listbox", id: `${this.comboboxId}-listbox`, "aria-labelledby": `${this.comboboxId}-label`, tabindex: "-1" }, readOptions(this.hostElement).map(({ value, ItemElement }, index) => h("div", Object.assign({ role: "option", part: `option${index === this.currentIndex ? " current" : ""}`, id: value, onClick: (event) => {
      this.handleOptionClick(event, index);
    }, onMouseDown: () => {
      this.ignoreBlur = true;
    } }, value === this.value ? { "aria-selected": "true" } : {}), ItemElement, value === this.value ? h("div", null, h("scale-icon-action-checkmark", { size: 16 }), h("span", { class: "sr-only" }, this.ariaLabelSelected)) : null))))), h("div", { part: "icon" }, this.open ? h("scale-icon-navigation-collapse-up", { decorative: true, size: DEFAULT_ICON_SIZE$1 }) : h("scale-icon-navigation-collapse-down", { decorative: true, size: DEFAULT_ICON_SIZE$1 }))), this.helperText && h("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? "danger" : this.variant, id: helperTextId }), this.disabled && h("div", { class: "hcm-disabled" }, this.hcmLabelDisabled)));
  }
  getBasePartMap() {
    const animated = this.value != null && this.value !== "";
    return classnames("select", this.open && `open`, this.disabled && `disabled`, this.readonly && `readonly`, this.transparent && "transparent", this.invalid && `invalid`, this.currentIndex > -1 && `steal-focus`, animated && "animated", this.helperText && "has-helper-text", this.floatingStrategy && `strategy-${this.floatingStrategy}`, this.hideLabelVisually && "hide-label");
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChange"]
    };
  }
};
DropdownSelect.style = dropdownSelectCss;
var dropdownSelectItemCss = "/*!*option*!*/[part~='base']{display:flex;justify-content:flex-start;align-items:center}[part~='prefix'],[part~='label'],[part~='suffix']{display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1}";
var DropdownSelectItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", { part: "base" }, h("div", { part: "prefix" }, h("slot", { name: "prefix" })), h("div", { part: "label" }, h("slot", null)), h("div", { part: "suffix" }, h("slot", { name: "suffix" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
DropdownSelectItem.style = dropdownSelectItemCss;
var iconCss$4 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionHidePassword = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M3.815 2.776l.085.074L21.15 20.1c.3.3.3.75 0 1.05a.722.722 0 01-.965.074l-.085-.074L2.85 3.9c-.3-.3-.3-.75 0-1.05a.722.722 0 01.965-.074zM4.2 7.35L5.25 8.4l-.018.017 2.423 2.423A4.67 4.67 0 007.5 12a4.5 4.5 0 004.5 4.5 4.67 4.67 0 00.874-.089l.286-.066 2.285 2.28-.015.005.57.57c-1.2.5-2.5.8-4 .8-4.108 0-6.987-2.283-9.1-4.68l-.364-.425-.35-.423-.334-.421-.476-.62-.726-.981L.3 12l.35-.45.595-.806C1.969 9.776 2.8 8.73 3.774 7.76l.426-.41zM12 4c4.108 0 6.987 2.283 9.1 4.68l.364.425.35.423.334.421.476.62.726.981.35.45-.35.45-.595.806c-.724.968-1.555 2.014-2.529 2.983l-.426.411-1.05-1.05.018-.017-2.423-2.423c.1-.379.152-.768.155-1.16A4.5 4.5 0 0012 7.5a4.67 4.67 0 00-.874.089l-.286.066-2.285-2.28.015-.005L8 4.8c1.2-.5 2.5-.8 4-.8zm-3 8.19l2.8 2.8a3 3 0 01-2.783-2.621L9 12.19zm3.2-3.18a3 3 0 012.783 2.621l.017.179-2.8-2.8z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M2.85 2.85a.722.722 0 01.965-.074l.085.074L21.15 20.1c.3.3.3.75 0 1.05a.722.722 0 01-.965.074l-.085-.074L2.85 3.9c-.3-.3-.3-.75 0-1.05zm1.35 4.5L5.25 8.4c-1.1 1.05-2.1 2.3-3.05 3.6l.578.778.39.506.397.494C5.766 16.458 8.287 18.5 12 18.5c.919 0 1.76-.115 2.527-.345l.323-.105L16 19.2c-1.2.5-2.5.8-4 .8-4.108 0-6.987-2.283-9.1-4.68l-.364-.425-.35-.423-.334-.421-.476-.62-.726-.981L.3 12l.35-.45.595-.806C1.969 9.776 2.8 8.73 3.774 7.76l.426-.41zM12 4c4.108 0 6.987 2.283 9.1 4.68l.364.425.35.423.334.421.476.62.726.981.35.45-.35.45-.595.806c-.724.968-1.555 2.014-2.529 2.983l-.426.411-1.05-1.05c1.1-1.05 2.1-2.3 3.05-3.6l-.578-.778-.39-.506-.397-.494C18.234 7.542 15.713 5.5 12 5.5c-.919 0-1.76.115-2.527.345l-.323.105L8 4.8c1.2-.5 2.5-.8 4-.8zm-4.35 6.85l5.5 5.5c-.35.1-.75.15-1.15.15-2.5 0-4.5-2-4.5-4.5 0-.32.032-.64.096-.934l.054-.216zM12 7.5c2.5 0 4.5 2 4.5 4.5 0 .32-.032.64-.096.934l-.054.216-5.5-5.5c.35-.1.75-.15 1.15-.15z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionHidePassword.style = iconCss$4;
var iconCss$3 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ActionSort = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M17.25 3.5c.647 0 1.18.492 1.244 1.122l.006.128V14h3.17l-4.42 6.75L12.83 14H16V4.75c0-.69.56-1.25 1.25-1.25zm-10.5-.25L11.17 10H8v9.25a1.25 1.25 0 01-2.494.128L5.5 19.25V10H2.33l4.42-6.75z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M17.25 4c.367 0 .691.294.743.651L18 4.75V14h3.65l-4.4 6.75-4.4-6.75h3.65V4.75c0-.4.35-.75.75-.75zm-10.5-.75l4.4 6.75H7.5v9.25c0 .4-.35.75-.75.75a.772.772 0 01-.743-.651L6 19.25V10H2.35l4.4-6.75z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ActionSort.style = iconCss$3;
var iconCss$2 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentSortIndicatorDown = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M6.584 9.5l5.417 5 5.416-5z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M6.584 9.5l5.417 5 5.416-5z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentSortIndicatorDown.style = iconCss$2;
var iconCss$1 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ContentSortIndicatorUp = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M12 9.5l-5.417 5h10.834z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M12 9.5l-5.417 5h10.834z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ContentSortIndicatorUp.style = iconCss$1;
var iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";
var ServiceSettings = class {
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
    return h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden, focusable), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: this.fill === "currentColor" ? this.color : this.fill }, this.selected ? h("g", null, h("path", { d: "M20.235 14.5L23 14v-4l-2.765-.5a1 1 0 01-.64-1.555l1.595-2.31-2.825-2.825-2.31 1.595a1 1 0 01-1.555-.64L14 1h-4l-.5 2.76a1 1 0 01-1.555.645L5.635 2.81 2.81 5.635l1.595 2.31a1 1 0 01-.64 1.555L1 10v4l2.76.5a1 1 0 01.645 1.555l-1.595 2.31 2.825 2.825 2.31-1.595a1 1 0 011.555.64L10 23h4l.5-2.765a1 1 0 011.555-.64l2.31 1.595 2.825-2.825-1.595-2.31a1 1 0 01.64-1.555zM12 15a3 3 0 110-6 3 3 0 010 6z", "fill-rule": "evenodd" })) : h("g", null, h("path", { d: "M14 1l.5 2.75a.992.992 0 001.448.71l.102-.06 2.3-1.6 2.85 2.85-1.6 2.3c-.378.567-.087 1.312.537 1.52l.113.03L23 10v4l-2.75.5a.992.992 0 00-.71 1.448l.06.102 1.6 2.3-2.85 2.85-2.3-1.6c-.567-.378-1.312-.087-1.52.537l-.03.113L14 23h-4l-.5-2.75c-.142-.661-.863-1.01-1.448-.71l-.102.06-2.3 1.6-2.85-2.85 1.6-2.3c.378-.567.087-1.312-.537-1.52l-.113-.03L1 14v-4l2.75-.5a.992.992 0 00.71-1.448L4.4 7.95l-1.6-2.3L5.65 2.8l2.3 1.6c.567.378 1.312.087 1.52-.537l.03-.113L10 1h4zm-1.25 1.5h-1.5l-.3 1.5c-.2 1.2-1.25 2.05-2.45 2.05-.438 0-.875-.115-1.246-.345L5.8 4.7 4.75 5.75l.9 1.3c.464.65.584 1.472.318 2.227L5.9 9.45c-.279.743-.902 1.27-1.67 1.462l-.18.038-1.55.3v1.5l1.55.25c.85.15 1.5.7 1.85 1.5a2.426 2.426 0 01-.149 2.247l-.101.153-.9 1.3 1.05 1.05 1.3-.9c.4-.3.9-.45 1.4-.45 1.145 0 2.154.774 2.418 1.889l.332 1.711h1.5l.3-1.55c.2-1.2 1.25-2.05 2.45-2.05.438 0 .875.115 1.246.345L18.2 19.25l1.05-1.05-.9-1.3c-.5-.7-.55-1.6-.25-2.3.279-.743.902-1.27 1.67-1.462l.18-.038 1.55-.3v-1.5l-1.55-.3c-.85-.15-1.5-.7-1.85-1.5a2.426 2.426 0 01.149-2.247l.101-.153.9-1.3-1.05-1.05-1.3.9c-.4.3-.9.45-1.4.45-1.145 0-2.154-.774-2.418-1.889L12.75 2.5zM12 9a3 3 0 110 6 3 3 0 010-6z", "fill-rule": "evenodd" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ServiceSettings.style = iconCss;
var menuFlyoutItemCss = ":host{--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);display:block;position:relative;outline-color:transparent;padding-left:var(--telekom-spacing-composition-space-02);padding-right:var(--telekom-spacing-composition-space-02);--_min-width:fit-content;--_min-width-moz:-moz-fit-content}*{-webkit-tap-highlight-color:rgba(255, 255, 255, 0)}.menu-flyout-item{position:relative;display:flex;align-items:stretch;text-align:left;font-size:var(--telekom-typography-font-size-body);line-height:2.635em;padding:0\n    calc(\n      var(--telekom-spacing-composition-space-08) -\n        var(--telekom-spacing-composition-space-02)\n    );user-select:none;white-space:nowrap;border-radius:0;cursor:pointer;color:var(--telekom-color-text-and-icon-standard);max-width:calc(\n    100vw - 2 * var(--telekom-spacing-composition-space-08) - 2 * 10px\n  );overflow:hidden;min-width:var(--_min-width-moz);min-width:var(--_min-width)}.menu-flyout-item:focus:not(.menu-flyout-item--disabled),.menu-flyout-item:hover:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-primary-hovered)}:host(:focus) .menu-flyout-item:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-standard)}:host(:focus) .menu-flyout-item:hover:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-primary-hovered)}:host(:focus){outline:none}:host(:focus) .menu-flyout-item{outline:var(--focus-outline);border-radius:var(--telekom-radius-small)}:host(:active) .menu-flyout-item:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-primary-pressed)}:host([aria-expanded='true']) .menu-flyout-item{color:var(--telekom-color-text-and-icon-primary-standard)}.menu-flyout-item--disabled{outline:none;color:var(--telekom-color-text-and-icon-disabled);cursor:not-allowed}:host([active])::before{content:'';display:block;position:absolute;top:0;left:0;height:100%;width:0;background-color:var(--telekom-color-primary-standard);border-left:var(--telekom-spacing-composition-space-02) solid transparent}.menu-flyout-item--active{color:var(--telekom-color-text-and-icon-primary-standard)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.menu-flyout-item--disabled:not(.menu-flyout-item--disabled),.menu-flyout-item--active:not(.menu-flyout-item--disabled){color:white;stroke:white}}.menu-flyout-item__label{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}.menu-flyout-item__prefix{flex:0 0 auto;display:flex;align-items:center}.menu-flyout-item__check,slot[name='prefix']::slotted(:last-of-type){margin-right:var(--telekom-spacing-composition-space-04)}.menu-flyout-item__check{visibility:hidden}:host([aria-checked='true']) .menu-flyout-item__check{visibility:visible}.menu-flyout-item__suffix{flex:0 0 auto;display:flex;align-items:center}.menu-flyout-item__cascade,slot[name='suffix']::slotted(:first-of-type){margin-left:var(--telekom-spacing-composition-space-06)}";
var MenuFlyoutItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleSelect = createEvent(this, "scale-select", 7);
    this.scaleSelectLegacy = createEvent(this, "scaleSelect", 7);
    this.cascade = false;
    this.active = false;
    this.checked = false;
    this.disabled = false;
    this.hasSlotSublist = false;
  }
  // TODO there is lot of room for improving this, aka edge-cases
  async triggerEvent(event, closeOnSelect = true) {
    const { key } = event;
    if (this.disabled) {
      return;
    }
    if (key === "ArrowRight" && !this.hasSlotSublist) {
      return;
    }
    if (this.hasSlotSublist) {
      const sublist = this.hostElement.querySelector('[slot="sublist"]');
      if (sublist.hasAttribute("opened")) {
        sublist.removeAttribute("opened");
      } else {
        this.openSublist();
      }
      return;
    }
    const detail = {
      eventType: event.type,
      key,
      item: this.hostElement,
      closeOnSelect,
      originalEvent: event
    };
    emitEvent(this, "scaleSelect", detail);
  }
  connectedCallback() {
    this.hasSlotSublist = this.hostElement.querySelector('[slot="sublist"]') != null;
    if (this.hasSlotSublist) {
      this.cascade = true;
    }
  }
  openSublist() {
    const sublist = this.hostElement.querySelector('[slot="sublist"]');
    if (sublist == null) {
      return;
    }
    sublist.trigger = () => this.hostElement;
    sublist.direction = "right";
    sublist.open();
  }
  getCssClassMap() {
    return classnames("menu-flyout-item", this.disabled && "menu-flyout-item--disabled", this.checkable != null && "menu-flyout-item--checkable", this.active && "menu-flyout-item--active");
  }
  render() {
    const checked = this.checked ? "true" : "false";
    return h(Host, { role: this.checkable ? `menuitem${this.checkable}` : "menuitem", "aria-checked": this.checkable == null ? false : checked, "aria-disabled": this.disabled ? "true" : void 0, tabindex: "-1" }, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), part: "base" }, h("span", { part: "prefix", class: "menu-flyout-item__prefix" }, this.checkable == null ? h("slot", { name: "prefix" }) : h("scale-icon-action-checkmark", { class: "menu-flyout-item__check", size: 16 })), h("span", { part: "label", class: "menu-flyout-item__label" }, h("slot", null)), h("span", { part: "suffix", class: "menu-flyout-item__suffix" }, this.cascade ? h("scale-icon-navigation-right", { class: "menu-flyout-item__cascade", size: 16 }) : h("slot", { name: "suffix" }))), h("slot", { name: "sublist" }));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuFlyoutItem.style = menuFlyoutItemCss;
var paginationCss = ":host{--color:var(--telekom-color-text-and-icon-standard);--radius:var(--telekom-radius-standard);--font-size:var(--telekom-typography-font-size-small);--border:1px solid var(--telekom-color-ui-faint);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-button:var(--telekom-color-ui-subtle);--border-button:var(--border);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--radius-first-prompt:var(--radius) 0 0 var(--radius);--radius-last-prompt:0 var(--radius) var(--radius) 0;--radius-first-prompt-stack:0 0 0 var(--radius);--radius-last-prompt-stack:0 0 var(--radius) 0;--stroke-svg:var(--telekom-color-ui-extra-strong);--stroke-svg-high-contrast:#fff;--width-button:44px;--padding-info:var(--telekom-spacing-composition-space-04);--height-button:44px;--line-height-info:calc(var(--height-button) - 2px)}.pagination{display:flex;overflow:auto;flex-wrap:wrap}.pagination__info,.pagination__info-responsive{color:var(--color);text-align:center;font-size:var(--font-size);font-weight:var(--telekom-typography-font-weight-medium);line-height:var(--line-height-info);padding:0 var(--padding-info);border:var(--border);flex-shrink:0;border-left:0;border-right:0;white-space:nowrap;order:1}.pagination__info-responsive{display:none}.pagination__info span,.pagination__info-responsive span{color:var(--telekom-color-text-and-icon-primary-standard);font-weight:var(--telekom-typography-font-weight-bold)}button{display:flex;flex-shrink:0;justify-content:center;align-items:center;padding:0;margin:0;height:var(--height-button);width:var(--width-button);color:var(--color-button);background:none;border:var(--border-button)}button:focus{outline:var(--focus-outline);outline-offset:-3px}.pagination__first-prompt{border-radius:var(--radius-first-prompt);margin-right:-1px}.pagination__last-prompt{border-radius:var(--radius-last-prompt);margin-left:-1px;order:2}.pagination__next-prompt{order:2}button svg{display:block}button:not(:disabled){cursor:pointer}button:not(:disabled) svg{color:var(--stroke-svg)}button:disabled svg{color:var(--telekom-color-text-and-icon-disabled)}button:not(:disabled):hover{border-color:var(--telekom-color-primary-hovered);z-index:1}button:not(:disabled):hover svg{color:var(--color-hover)}button:not(:disabled):active{border-color:var(--color-active);z-index:1}button:not(:disabled):active svg{color:var(--color-active)}.pagination--hide-borders .pagination__info,.pagination--hide-borders .pagination__info-responsive{border:0}.pagination--hide-borders .pagination__info-responsive{border-bottom:var(--border)}.pagination--hide-borders button{border-radius:0;border-top-width:0;border-bottom-width:0}.pagination--hide-borders .pagination__first-prompt{border-left-color:transparent}.pagination--hide-borders .pagination__last-prompt{border-right-color:transparent}.pagination--hide-borders button:not(:disabled):hover{border-width:1px;border-color:var(--telekom-color-primary-hovered)}.pagination__button-wrapper{display:flex}@media screen and (forced-colors: active), (-ms-high-contrast: active){button:not(:disabled) svg{color:var(--stroke-svg-high-contrast)}}@media screen and (max-width: 639px){:host{width:100%}.pagination{flex-direction:column}.pagination__info-responsive{display:initial;order:0;overflow:auto;border-left:var(--border);border-right:var(--border);border-bottom:0;border-radius:var(--radius) var(--radius) 0 0;line-height:var(--line-height-info)}.pagination__info{display:none;line-height:var(--line-height-info)}.pagination__first-prompt{border-radius:var(--radius-first-prompt-stack)}.pagination__last-prompt{border-radius:var(--radius-last-prompt-stack)}.pagination__next-prompt{margin-left:-1px}button{flex:1;height:var(--height-button)}.pagination--hide-borders .pagination__first-prompt{border-left-width:0}.pagination--hide-borders .pagination__last-prompt{border-right-width:0}}";
var DEFAULT_ICON_SIZE = 20;
var name = "pagination";
var Pagination = class {
  /* 6. Lifecycle Events (call order) */
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scalePagination = createEvent(this, "scale-pagination", 7);
    this.scalePaginationLegacy = createEvent(this, "scalePagination", 7);
    this.hideBorders = false;
    this.hideBorder = false;
    this.pageSize = 10;
    this.startElement = 0;
    this.totalElements = 1;
    this.small = false;
    this.ariaLabelFirstPage = "Go to first page";
    this.ariaLabelNextPage = "Go to next page";
    this.ariaLabelPreviousPage = "Go to previous page";
    this.ariaLabelLastPage = "Go to last page";
    this.maxWidth = 100;
  }
  componentWillLoad() {
    this.calculateWidth();
  }
  componentWillUpdate() {
  }
  componentDidRender() {
    if (this.hideBorders !== false) {
      statusNote({
        tag: "deprecated",
        message: 'Property "hideBorders" is deprecated. Please use the "hideBorder" property!',
        type: "warn",
        source: this.hostElement
      });
    }
    if (this.small !== false) {
      statusNote({
        tag: "deprecated",
        message: 'Property "small" is deprecated. Please use css overwrite!',
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
  componentDidLoad() {
  }
  componentDidUpdate() {
  }
  disconnectedCallback() {
  }
  /* 7. Listeners */
  calculateWidth() {
    this.maxWidth = (this.totalElements.toString().length * 3 + 3) * 9;
  }
  /* 8. Public Methods */
  /* 9. Local Methods */
  goFirstPage() {
    this.startElement = 0;
    this.emitUpdate("FIRST");
  }
  goPreviousPage() {
    this.startElement -= Math.min(this.pageSize, this.startElement);
    this.emitUpdate("PREVIOUS");
  }
  goNextPage() {
    this.startElement += this.pageSize;
    this.emitUpdate("NEXT");
  }
  goLastPage() {
    const p = this.pageSize;
    this.startElement = Math.ceil((this.totalElements - p) / p) * p;
    this.emitUpdate("LAST");
  }
  emitUpdate(direction) {
    const data = {
      startElement: this.startElement,
      direction
    };
    emitEvent(this, "scalePagination", data);
  }
  /* 10. Render */
  render() {
    const total = this.totalElements;
    const start = this.startElement + 1;
    const end = Math.min(this.startElement + this.pageSize, total);
    const isAtStart = start === 1;
    const isAtEnd = end === total;
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, h("div", { part: "info-responsive", class: `${name}__info-responsive` }, h("span", null, start, "-", end), " ", "/ ", total), h("div", { class: `${name}__button-wrapper` }, h("div", { part: "info", class: `${name}__info`, style: { width: `${this.maxWidth}px` } }, h("span", null, start, "-", end), " ", "/ ", total), h("button", { class: `${name}__first-prompt`, part: "first-prompt", disabled: isAtStart, onClick: () => this.goFirstPage(), "aria-label": this.ariaLabelFirstPage }, h("scale-icon-navigation-double-left", { size: DEFAULT_ICON_SIZE, decorative: true })), h("button", { class: `${name}__prev-prompt`, part: "prev-prompt", disabled: isAtStart, onClick: () => this.goPreviousPage(), "aria-label": this.ariaLabelPreviousPage }, h("scale-icon-navigation-left", { size: DEFAULT_ICON_SIZE, decorative: true })), h("button", { class: `${name}__next-prompt`, part: "next-prompt", disabled: isAtEnd, onClick: () => this.goNextPage(), "aria-label": this.ariaLabelNextPage }, h("scale-icon-navigation-right", { size: DEFAULT_ICON_SIZE, decorative: true })), h("button", { class: `${name}__last-prompt`, part: "last-prompt", disabled: isAtEnd, onClick: () => this.goLastPage(), "aria-label": this.ariaLabelLastPage }, h("scale-icon-navigation-double-right", { size: DEFAULT_ICON_SIZE, decorative: true })))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap("basePart");
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap("css");
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === "basePart" ? "" : `${name}--`;
    return classnames(name, (this.hideBorder || this.hideBorders) && `${prefix}hide-borders`);
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "totalElements": ["calculateWidth"]
    };
  }
};
Pagination.style = paginationCss;
var progressBarCss = ":host{--track-color:var(--telekom-color-ui-faint);--bar-color:var(--telekom-color-primary-standard);--icon-color-error:var(--telekom-color-text-and-icon-functional-danger);--track-color-error:var(--telekom-color-functional-danger-subtle);--bar-color-error:var(--telekom-color-functional-danger-standard);--icon-color-success:var(--telekom-color-text-and-icon-functional-success);--track-color-success:var(--telekom-color-functional-success-subtle);--bar-color-success:var(--telekom-color-functional-success-standard);--bar-color-disabled:var(--telekom-color-ui-disabled);--color-disabled:var(--telekom-color-text-and-icon-disabled);--progress-bar-outer-size:6px;--progress-bar-inner-size:var(--telekom-spacing-composition-space-03);--font-label:var(--telekom-text-style-ui);--color-label:var(--telekom-color-text-and-icon-standard);--color-status-description:var(--telekom-color-text-and-icon-additional);--font-status-description:var(--telekom-text-style-small-bold)}.progress-bar{width:100%;max-width:30rem}.progress-bar--disabled{cursor:not-allowed}.progress-bar__top-container{display:flex;justify-content:space-between;align-items:center}.progress-bar--disabled .progress-bar__label,.progress-bar--disabled .progress-bar__status{color:var(--color-disabled)}.progress-bar__label{display:block;padding:var(--telekom-spacing-composition-space-05) 0;color:var(--color-label);font:var(--font-label)}.progress-bar__wrapper{width:100%;display:flex;box-sizing:border-box;align-items:center}.progress-bar__outer{width:100%;height:var(--progress-bar-outer-size);margin-left:0;overflow:hidden;position:relative;border-radius:var(--telekom-radius-pill);background:var(--track-color)}.progress-bar__inner{position:absolute;top:0;left:0;width:var(--progress, 0);height:var(--progress-bar-inner-size);display:flex;align-items:center;white-space:nowrap;justify-content:flex-end;border-radius:var(--telekom-radius-pill);border:1px solid transparent;background:var(--bar-color);transition:width var(--telekom-motion-duration-immediate)\n    var(--telekom-motion-easing-standard)}.progress-bar--disabled .progress-bar__inner{background:var(--bar-color-disabled)}.progress-bar__status{padding:var(--telekom-spacing-composition-space-05) 0;font:var(--font-label);font-variant-numeric:tabular-nums}.progress-bar--completed .progress-bar__icon{color:var(--icon-color-success)}.progress-bar--completed .progress-bar__outer{background:var(--track-color-success)}.progress-bar--completed .progress-bar__inner{background:var(--bar-color-success)}.progress-bar--has-error .progress-bar__icon{color:var(--icon-color-error)}.progress-bar--has-error .progress-bar__outer{background:var(--track-color-error)}.progress-bar--has-error .progress-bar__inner{background:var(--bar-color-error)}.progress-bar__status-description{color:var(--color-status-description);font:var(--font-status-description);margin-top:var(--telekom-spacing-composition-space-04)}.progress-bar__aria-live{clip:rect(0 0 0 0);width:1px;border:0;height:1px;margin:-1px;padding:0;overflow:hidden;position:absolute}";
var ICON_SIZE = 16;
var i$1 = 0;
var ProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.busy = false;
    this.percentage = 0;
    this.percentageStart = 0;
    this.showStatus = true;
    this.transitions = (width, widthStart) => `
    @keyframes showProgress {
      from {
        width: ${widthStart}%;
      }
      to {
        width: ${width}%;
      }
    }
  `;
    this.progressStyle = () => {
      const customColor = this.customColor ? { "--background": this.customColor } : {};
      return Object.assign({ "--progress": this.disabled ? "100%" : `${this.percentage}%` }, customColor);
    };
  }
  componentWillLoad() {
    if (this.progressBarId == null) {
      this.progressBarId = "progress-bar-" + i$1++;
    }
    if (this.disabled) {
      this.showStatus = false;
    }
  }
  componentWillUpdate() {
  }
  disconnectedCallback() {
  }
  componentDidRender() {
    if (this.customColor !== void 0) {
      statusNote({
        tag: "deprecated",
        message: `Property "customColor" is deprecated. 
          Please use css variable "--background" to set the progress bar background color;
          e.g. <scale-progress-bar percentage="20" style="--background: green"></scale-progress-bar>`,
        type: "warn",
        source: this.hostElement
      });
    }
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("style", null, this.transitions(this.percentage, this.percentageStart)), h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, h("div", { class: "progress-bar__top-container" }, !!this.label ? h("label", { part: "label", class: "progress-bar__label", htmlFor: this.progressBarId }, this.label) : h("span", null, " "), !!this.showStatus && !this.hasError && this.percentage <= 100 && this.percentage !== 100 && h("div", { part: "status", class: "progress-bar__status", "aria-hidden": "true" }, this.percentage, "%"), this.hasError ? h("div", { class: "progress-bar__icon" }, h("scale-icon-alert-error", { size: ICON_SIZE })) : this.percentage >= 100 ? h("div", { class: "progress-bar__icon" }, h("scale-icon-action-success", { size: ICON_SIZE })) : null), h("div", { part: "wrapper", class: "progress-bar__wrapper" }, h("div", { part: "outer", class: "progress-bar__outer", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": this.percentage, "aria-busy": this.busy, "aria-valuetext": `${this.percentage}%`, "aria-label": this.label, id: this.progressBarId }, this.percentage > 0 && h("div", { part: "inner", class: "progress-bar__inner", style: this.progressStyle() })), h("slot", { name: "icon" }))), !!this.statusDescription && h("div", { part: "status-description", class: "progress-bar__status-description", role: "alert" }, this.statusDescription), !this.mute && h("span", { "aria-live": "polite", class: "progress-bar__aria-live" }, this.percentage !== Math.round(this.percentage / 10) * 10 ? `${Math.round(this.percentage / 10) * 10}%` : null));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap("basePart");
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap("css");
  }
  getCssOrBasePartMap(mode) {
    const component = "progress-bar";
    const prefix = mode === "basePart" ? "" : `${component}--`;
    return classnames(component, this.hasError && `${prefix}has-error`, this.disabled && `${prefix}disabled`, this.percentage >= 100 && `${prefix}completed`);
  }
  get hostElement() {
    return getElement(this);
  }
};
ProgressBar.style = progressBarCss;
var switchCss = "scale-switch{--width:42px;--height:24px;--offset:2px;--radius:1em;--transition-duration:var(--telekom-motion-duration-immediate);--transition-easing:var(--telekom-motion-easing-standard);--shadow-thumb:0 0 2px 0 rgba(0, 0, 0, 0.24), 0 2px 4px 0 rgba(0, 0, 0, 0.24),\n    0 4px 12px 0 rgba(0, 0, 0, 0.26);--spacing-x-label:var(--telekom-spacing-composition-space-04);--font-label:var(--telekom-text-style-ui);--font-io-text:var(--telekom-text-style-small-bold);--color-label:var(--telekom-color-text-and-icon-standard)}.switch{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-white, #fff);--_overlay-background:transparent;display:inline-block;position:relative}.switch__control{position:absolute;margin:0;top:0;width:var(--width);height:var(--height);opacity:0}.switch__wrapper{display:flex;align-items:center;cursor:pointer}.switch__toggle{position:relative;width:var(--width);height:var(--height);background:var(--_background);border-radius:var(--radius);transition-property:background;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing)}.switch__toggle--overlay{position:absolute;width:var(--width);height:var(--height);border-radius:var(--radius);background:var(--_overlay-background)}[data-platform='android'] .switch__toggle--overlay{display:none}.switch:hover{--_overlay-background:var(--telekom-color-ui-state-fill-hovered)}.switch:active{--_overlay-background:var(--telekom-color-ui-state-fill-pressed)}.switch--checked{--_background:var(--telekom-color-primary-standard)}[data-platform='android'] .switch.switch--checked{--_background:var(--telekom-color-primary-standard);--_color-thumb:var(--telekom-color-ui-white)}[data-platform='android'] .switch{--_color-thumb:var(--telekom-color-ui-strong)}[data-platform='android'] .switch:hover{--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch:active{--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch:hover{--_color-thumb:var(--telekom-color-ui-extra-strong)}[data-platform='android'] .switch:active{--_color-thumb:var(--telekom-color-ui-extra-strong)}[data-platform='android'] .switch--checked:active,[data-platform='android'] .switch--checked:hover{--_color-thumb:var(--telekom-color-ui-white)}[data-platform='android'] .switch--checked:hover,.switch--checked:hover{--_background:var(--telekom-color-primary-hovered)}[data-platform='android'] .switch--checked:active,.switch--checked:active{--_background:var(--telekom-color-primary-pressed)}[data-platform='android'] .switch--disabled{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-border-disabled)}[data-platform='android'] .switch--disabled:hover{--_color-thumb:var(--telekom-color-ui-border-disabled);--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch--checked.switch--disabled:hover{--_background:var(--telekom-color-ui-border-disabled);--_color-thumb:var(--telekom-color-ui-faint)}.switch--disabled,.switch--disabled:hover,.switch--disabled:active{--_background:var(--telekom-color-ui-disabled);--_color-thumb:var(--telekom-color-ui-faint);--_overlay-background:transparent}.switch--checked .switch--disabled,.switch--checked .switch--disabled:hover,.switch--checked .switch--disabled:active{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-disabled);box-shadow:var(--telekom-shadow-raised-standard);--_overlay-background:transparent}[data-platform='android'] .switch--disabled.switch--checked{--_background:var(--telekom-color-ui-border-disabled);--_color-thumb:var(--telekom-color-ui-faint)}.switch--disabled .switch__wrapper{cursor:not-allowed}.switch--disabled .switch__thumb{box-shadow:var(--telekom-shadow-raised-standard)}.switch--size-large{--width:56px;--height:32px}.switch--focus-visible-not-supported :focus~.switch__toggle,:focus-visible~.switch__toggle{outline:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:var(--telekom-spacing-composition-space-01)}.switch__thumb{--_size:calc(var(--height) - var(--offset) * 2);position:relative;z-index:2;box-sizing:border-box;width:var(--_size);height:var(--_size);aspect-ratio:1 / 1;background:var(--_color-thumb);border-radius:50%;box-shadow:var(--shadow-thumb);margin:var(--offset);transition-property:margin, width, height, background, color;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing);color:transparent;border:1px solid rgba(0, 0, 0, 0.04)}.switch--checked .switch__thumb{margin-left:1em;margin-inline-start:calc(var(--width) - var(--height) + var(--offset))}.switch__io-text{position:absolute;z-index:1;top:0;left:0;display:flex;justify-content:center;align-items:center;width:50%;height:var(--height);margin-left:calc(50% - var(--offset));font:var(--font-io-text);line-height:var(--telekom-typography-line-spacing-none)}.switch--size-large .switch__io-text{margin-top:1px;font:var(--telekom-text-style-caption-bold)}.switch--checked .switch__io-text{margin-left:var(--offset);color:var(--telekom-color-text-and-icon-white-standard)}.switch--disabled .switch__io-text{color:var(--telekom-color-text-and-icon-disabled)}.switch__label-text{font:var(--font-label);margin-inline-start:var(--spacing-x-label);color:var(--color-label)}[data-platform='android'] scale-switch{--width:56px;--height:32px;--offset:7px}[data-platform='android'] .switch__thumb{width:18px;height:18px}[data-platform='android'] scale-switch:not([disabled]):active .switch__thumb{width:28px;height:28px;--offset:2px}[data-platform='android'] .switch--checked .switch__thumb{width:24px;height:24px;--offset:4px}[data-platform='android'] .switch__thumb{display:flex;justify-content:center;align-items:center;box-shadow:none}scale-switch scale-icon-action-success{display:none !important}[data-platform='android'] .switch--checked scale-icon-action-success{position:absolute;display:inline-block !important;margin-top:2px;margin-left:1px}[data-platform='android'] .switch--checked .switch__thumb{color:var(--_background)}[data-platform='android'] .switch__io-text{display:none}[data-platform='android'] .switch--checked .switch__thumb{color:var(--telekom-color-primary-standard)}[data-platform='android'] .switch--disabled .switch__thumb{color:var(--telekom-color-ui-strong)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.switch__toggle{border:1px solid}scale-icon-action-checkmark{visibility:hidden !important}}";
var i = 0;
var isFocusVisibleSupported = isPseudoClassSupported(":focus-visible");
var Switch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.checked = false;
    this.disabled = false;
    this.size = "large";
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = "switch-" + i++;
    }
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("label", { id: `${this.inputId}-label`, class: "switch__wrapper" }, h("input", { type: "checkbox", name: this.name, class: "switch__control", checked: this.checked, disabled: this.disabled, "aria-labelledby": `${this.inputId}-label`, id: this.inputId, onChange: (event) => {
      this.checked = event.target.checked;
      emitEvent(this, "scaleChange", { value: this.checked });
    } }), h("div", { class: "switch__toggle", "aria-hidden": "true" }, h("div", { class: "switch__thumb" }, h("scale-icon-action-checkmark", { size: 12, decorative: true, selected: true })), h("div", { class: "switch__io-text" }, h("span", null, this.checked ? "I" : "0"))), h("div", { class: "switch__toggle--overlay", "aria-hidden": "true" }), this.label && h("span", { class: "switch__label-text" }, this.label))));
  }
  getCssClassMap() {
    return classnames("switch", this.checked && "switch--checked", this.disabled && "switch--disabled", this.size && `switch--size-${this.size}`, isFocusVisibleSupported && "switch--focus-visible-supported", !isFocusVisibleSupported && "switch--focus-visible-not-supported");
  }
};
Switch.style = switchCss;
var tagCss = ":host{--background:var(--telekom-color-ui-faint);--color:var(--telekom-color-text-and-icon-standard);--font:var(--telekom-text-style-caption-bold);--radius:2px;--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--icon-color:var(--telekom-color-text-and-icon-additional);--icon-color-hover:var(--color);--background-disabled:var(--telekom-color-ui-faint);--color-disabled:var(--telekom-color-text-and-icon-disabled);--spacing-dismissable:var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-03);--spacing-dismissable-small:var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-03);--height:24px;--height-small:20px;--border-button-dismissable-focus:1px solid transparent;--box-shadow-button-dismissable-focus:var(--box-shadow-focus);--background-button-dismissable-hover:var(\n    --telekom-color-ui-state-fill-hovered\n  );--background-button-standard-strong-dismissible-hover:var(\n    --telekom-color-ui-state-fill-hovered-inverted\n  );--background-button-standard-dismissible-hover:var(\n    --telekom-color-ui-state-fill-hovered\n  );--background-button-dismissable-active:var(\n    --telekom-color-ui-state-fill-pressed\n  );--height-button-dismissable:20px;--width-button-dismissable:20px;--height-button-dismissable-small:16px;--width-button-dismissable-small:16px;--spacing-small:0 var(--telekom-spacing-composition-space-04);--font-size-small:var(--telekom-typography-font-size-small);--line-height-small:var(--telekom-typography-line-spacing-loose)}.tag{display:inline-flex;outline:none;padding:0 8px;text-align:center;transition:all 0.15s ease-in-out;align-items:center;white-space:nowrap;border-radius:var(--telekom-radius-small);vertical-align:baseline;justify-content:center;font:var(--font);line-height:1;background:var(--background);color:var(--color);cursor:default;height:var(--height)}.tag scale-icon-action-close{color:var(--icon-color)}.tag:not(.tag--disabled) scale-icon-action-close:hover{color:var(--icon-color-hover)}.tag::slotted(*){padding:100px}.tag--dismissable{padding:0 0 0 8px}.tag--dismissable button{border:none;cursor:pointer;height:var(--height-button-dismissable);width:var(--width-button-dismissable);margin:0;outline:none;padding:0;background:transparent;margin:var(--spacing-dismissable);border-radius:var(--radius);align-items:center}.tag--dismissable scale-icon-action-close{display:flex !important;align-items:center;justify-content:center}.tag--dismissable button:focus{justify-content:center;outline:var(--focus-outline);outline-offset:1px}.tag--dismissable:not(.tag--disabled) button:hover{background:var(--background-button-dismissable-hover)}.tag--dismissable.tag--color-standard:not(.tag--disabled) button:hover{background:var(--background-button-standard-dismissible-hover)}.tag--dismissable.tag--type-strong.tag--color-standard:not(.tag--disabled) button:hover{background:var(--background-button-standard-strong-dismissible-hover)}.tag--dismissable button:active{background:var(--background-button-dismissable-active)}.tag--dismissable.tag--color-standard button:active{background:var(--background-button-standard-dismissible-hover)}.tag--dismissable.tag--type-strong.tag--color-standard button:active{background:var(--background-button-standard-strong-dismissible-hover)}.tag--size-small{font-size:var(--font-size-small);padding:0 6px;height:var(--height-small)}.tag--size-small.tag--dismissable{padding-right:0px}.tag--size-small.tag--dismissable button{height:var(--height-button-dismissable-small);width:var(--width-button-dismissable-small);margin:var(--spacing-dismissable-small)}.tag--disabled{background-color:var(--telekom-color-ui-faint) !important;color:var(--color-disabled) !important;pointer-events:none}.tag--disabled scale-icon-action-close{color:var(--color-disabled) !important;pointer-events:none}.tag--link{text-decoration:none}.tag--link:focus{outline:var(--focus-outline)}.tag--link{background:var(--background-secondary)}.tag--link:hover{background:var(--background-secondary)}.tag--type-standard.tag--color-cyan{background-color:var(--telekom-color-additional-cyan-subtle);color:var(--telekom-color-text-and-icon-on-subtle-cyan)}.tag--type-standard.tag--color-cyan.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-cyan)}.tag--type-standard.tag--color-yellow{background-color:var(--telekom-color-additional-yellow-subtle);color:var(--telekom-color-text-and-icon-on-subtle-yellow)}.tag--type-standard.tag--color-yellow.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-yellow)}.tag--type-standard.tag--color-green{background-color:var(--telekom-color-functional-success-subtle);color:var(--telekom-color-text-and-icon-on-subtle-success)}.tag--type-standard.tag--color-green.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-success)}.tag--type-standard.tag--color-orange{background-color:var(--telekom-color-functional-warning-subtle);color:var(--telekom-color-text-and-icon-on-subtle-warning)}.tag--type-standard.tag--color-orange.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-warning)}.tag--type-standard.tag--color-red{background-color:var(--telekom-color-functional-danger-subtle);color:var(--telekom-color-text-and-icon-on-subtle-danger)}.tag--type-standard.tag--color-red.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-danger)}.tag--type-standard.tag--color-violet{background-color:var(--telekom-color-additional-violet-subtle);color:var(--telekom-color-text-and-icon-on-subtle-violet)}.tag--type-standard.tag--color-violet.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-violet)}.tag--type-standard.tag--color-brown{background-color:var(--telekom-color-additional-brown-subtle);color:var(--telekom-color-text-and-icon-on-subtle-brown)}.tag--type-standard.tag--color-brown.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-brown)}.tag--type-standard.tag--color-olive{background-color:var(--telekom-color-additional-olive-subtle);color:var(--telekom-color-text-and-icon-on-subtle-olive)}.tag--type-standard.tag--color-olive.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-olive)}.tag--type-standard.tag--color-teal{background-color:var(--telekom-color-additional-teal-subtle);color:var(--telekom-color-text-and-icon-on-subtle-teal)}.tag--type-standard.tag--color-teal.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-teal)}.tag--type-strong.tag--color-standard{background-color:var(--telekom-color-ui-extra-strong);color:var(--telekom-color-text-and-icon-inverted-standard)}.tag--type-strong.tag--color-standard.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-inverted-additional)}.tag--type-strong.tag--color-cyan{background-color:var(--telekom-color-additional-cyan-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-cyan.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-yellow{background-color:var(--telekom-color-additional-yellow-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-yellow.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-green{background-color:var(--telekom-color-functional-success-standard);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-green.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-orange{background-color:var(--telekom-color-functional-warning-standard);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-orange.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-red{background-color:var(--telekom-color-functional-danger-standard);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-red.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-violet{background-color:var(--telekom-color-additional-violet-300);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-violet.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-brown{background-color:var(--telekom-color-additional-brown-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-brown.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-olive{background-color:var(--telekom-color-additional-olive-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-olive.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}.tag--type-strong.tag--color-teal{background-color:var(--telekom-color-additional-teal-400);color:var(--telekom-color-text-and-icon-black-standard)}.tag--type-strong.tag--color-teal.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-black-additional)}";
var Tag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleClose = createEvent(this, "scale-close", 7);
    this.scaleCloseLegacy = createEvent(this, "scaleClose", 7);
    this.type = "standard";
    this.color = "standard";
    this.href = "";
    this.target = "_self";
    this.dismissable = false;
    this.disabled = false;
    this.dismissText = "dismiss";
    this.handleClose = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      emitEvent(this, "scaleClose", event);
    };
  }
  componentWillUpdate() {
  }
  disconnectedCallback() {
  }
  render() {
    const Element = !!this.href && !this.disabled ? "a" : "span";
    const linkProps = !!this.href ? {
      href: this.href,
      target: this.target
    } : {};
    return h(Host, null, this.styles && h("style", null, this.styles), h(Element, Object.assign({ part: this.getBasePartMap(), class: this.getCssClassMap() }, linkProps), h("slot", null), this.dismissable && h("button", { part: "button-dismissable", disabled: this.disabled, "aria-label": this.dismissText, onClick: this.handleClose }, h("scale-icon-action-close", { part: "icon-dismissable", size: 16 }))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap("basePart");
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap("css");
  }
  getCssOrBasePartMap(mode) {
    const component = "tag";
    const prefix = mode === "basePart" ? "" : `${component}--`;
    return classnames(mode === "basePart" ? "base" : component, this.size && `${prefix}size-${this.size}`, this.type && `${prefix}type-${this.type}`, this.color && `${prefix}color-${this.color}`, !!this.href && `${prefix}link`, !!this.dismissable && `${prefix}dismissable`, !!this.disabled && `${prefix}disabled`);
  }
};
Tag.style = tagCss;
var textFieldCss = "scale-text-field{--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--border:var(--telekom-spacing-composition-space-01) solid\n    var(--telekom-color-ui-border-standard);--border-error:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-danger-standard);--border-success:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-success-standard);--border-warning:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-warning-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--background-color-hover:var(--telekom-color-ui-state-fill-hovered);--background-color-disabled:none;--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--height:44px;--spacing-x:var(--telekom-spacing-composition-space-05);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--border-color-readonly:var(--telekom-color-ui-border-disabled);--background-readonly:var(--telekom-color-ui-disabled);--font-weight-meta:var(--telekom-line-weight-bold);--font-size-meta:var(--telekom-typography-font-size-small);--line-height-meta:var(--telekom-typography-line-spacing-standard);--spacing-y-meta:var(--telekom-spacing-composition-space-03);--color-meta:var(--telekom-color-text-and-icon-standard);--color-meta-error:var(--telekom-color-text-and-icon-functional-danger);--spacing-control:1.125rem\n    calc(2rem - var(--telekom-spacing-composition-space-01)) 0.25rem\n    calc(0.75rem - var(--telekom-spacing-composition-space-01));--transition-control:var(--transition);--background-control:var(--telekom-color-ui-state-fill-standard);--margin-bottom-control:var(--telekom-spacing-composition-space-03);--transition-counter:var(--transition);--color-counter-error:var(--color-meta-error);--font-size-helper-text:var(--telekom-typography-font-size-small);--line-height-helper-text:1.35;--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--color-helper-text-error:var(--color-meta-error);--color-helper-text-success:var(\n    --telekom-color-text-and-icon-functional-success\n  );--color-helper-text-warning:var(\n    --telekom-color-text-and-icon-functional-warning\n  );--color-helper-text-neutral:var(--telekom-color-text-and-icon-additional);--helper-text-icon-size:11px;--transition-placeholder:var(--transition);--color-placeholder:var(--telekom-color-text-and-icon-additional);--color-label:var(--telekom-color-text-and-icon-additional);--color-label-readonly:var(--telekom-color-text-and-icon-standard);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition)}.text-field{position:relative}.text-field .text-field__control{width:100%;height:var(--height);margin:0;display:flex;outline:none;padding:var(--spacing-control);z-index:1;box-sizing:border-box;transition:var(--transition-control);font:var(--telekom-text-style-body);border-radius:var(--radius);border:var(--border);background-color:var(--background-control);color:var(--color-meta)}.text-field--hide-label .text-field__control{padding:5px var(--telekom-spacing-composition-space-12) 5px\n    calc(var(--spacing-x) - 1px)}.text-field--hide-label .text-field__label{visibility:hidden}.text-field.text-field--helper-text .text-field__control{margin-bottom:var(--margin-bottom-control)}.text-field .text-field__counter{display:flex;transition:var(--transition-counter);margin-left:auto;justify-content:flex-end;font:var(--telekom-text-style-small);color:var(--telekom-color-text-and-icon-standard)}.text-field scale-helper-text{--color-informational:var(--color-helper-text);--color-warning:var(--color-helper-text-warning);--color-danger:var(--color-helper-text-error);--color-success:var(--color-helper-text-success);--color-neutral:var(--color-helper-text-neutral);--font-size:var(--font-size-helper-text);--font-weight:var(--font-weight-helper-text);--line-height:var(--line-height-helper-text);--icon-size-helper-text:var(--helper-text-icon-size);font-weight:var(--telekom-typography-font-weight-bold);display:flex}.text-field .text-field__meta{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}.text-field:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover{border-color:var(--border-color-hover);background-color:var(--background-color-hover)}.text-field:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--border-color-focus);outline:var(--focus-outline);outline-offset:1px}.text-field:not(.text-field--disabled) .text-field__control:focus::placeholder{color:var(--color-placeholder)}.text-field .text-field__control::placeholder,.text-field ::placeholder{color:transparent;transition:var(--transition-placeholder)}.text-field__label{top:0;left:0;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font:var(--telekom-text-style-ui);transform:translate(var(--spacing-x), 0.875rem)}.text-field--has-focus:not(.text-field--readonly) .text-field__label,.animated .text-field__label{font:var(--telekom-text-style-small-bold);transform:translate(\n    var(--spacing-x),\n    calc(0.25rem + var(--telekom-spacing-composition-space-01))\n  )}.text-field--variant-danger .text-field__control{border:var(--border-error)}.text-field--variant-success .text-field__control{border:var(--border-success)}.text-field--variant-warning .text-field__control{border:var(--border-warning)}.text-field--variant-danger:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover,.text-field--variant-danger:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--telekom-color-functional-danger-hovered)}.text-field--variant-success:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover,.text-field--variant-success:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--telekom-color-functional-success-hovered)}.text-field--variant-warning:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover,.text-field--variant-warning:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--telekom-color-functional-warning-hovered)}.text-field--variant-danger .text-field__helper-text{color:var(--color-helper-text-error)}.text-field--variant-danger .text-field__counter{color:var(--color-counter-error)}.text-field--variant-success .text-field__helper-text{color:var(--color-helper-text-success)}.text-field--variant-success .text-field__counter{color:var(--telekom-color-text-and-icon-functional-success)}.text-field--variant-warning .text-field__helper-text{color:var(--color-helper-text-warning)}.text-field--variant-warning .text-field__counter{color:var(--telekom-color-text-and-icon-functional-warning)}.text-field--transparent .text-field__control{background-color:transparent}.text-field--readonly input,.text-field--readonly .text-field__control{color:var(--color-label-readonly);border:none;background:var(--background-readonly)}.text-field--readonly .text-field__control:focus{outline:var(--focus-outline);outline-offset:1px}.text-field--disabled label,.text-field--disabled .text-field__label,.text-field--disabled input,.text-field--disabled .text-field__control,.text-field--disabled .text-field__meta,.text-field--disabled .text-field__counter,.text-field--disabled .text-field__helper-text{cursor:not-allowed;border-color:var(--border-color-disabled);background-color:var(--background-color-disabled);color:var(--color-disabled);background:transparent}.text-field--disabled.animated label.text-field__label{color:var(--color-disabled)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none}input[type='number']{-moz-appearance:textfield}input[type='datetime-local']::-webkit-calendar-picker-indicator,input[type='time']::-webkit-calendar-picker-indicator,input[type='date']::-webkit-calendar-picker-indicator,input[type='week']::-webkit-calendar-picker-indicator,input[type='month']::-webkit-calendar-picker-indicator{position:absolute;right:12px}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{color-scheme:dark}@media screen and (forced-colors: active), (-ms-high-contrast: active){.text-field--readonly input,.text-field--readonly .text-field__control{border:1px solid}}";
var TextField = class {
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
    this.type = "text";
    this.inputModeType = "text";
    this.name = "";
    this.label = "";
    this.helperText = "";
    this.status = "";
    this.invalid = false;
    this.variant = "informational";
    this.placeholder = "";
    this.value = "";
    this.step = "1";
    this.hideLabelVisually = false;
    this.experimentalControlled = false;
    this.hasFocus = false;
    this.internalId = generateUniqueId();
    this.handleInput = (event) => {
      const target = event.target;
      if (this.experimentalControlled) {
        this.hostElement.querySelector("input").value = String(this.value);
        this.forceUpdate = String(Date.now());
      }
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
      this.hasFocus = true;
    };
    this.handleBlur = () => {
      emitEvent(this, "scaleBlur");
      this.hasFocus = false;
    };
    this.handleKeyDown = (event) => {
      emitEvent(this, "scaleKeyDown", event);
    };
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = "input-text-field-" + this.internalId;
    }
  }
  componentDidRender() {
    const value = this.value == null ? "" : this.value.toString();
    const input = this.hostElement.querySelector("input");
    if (this.experimentalControlled && input.value.toString() !== value) {
      input.value = value;
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
        message: 'Property "size" is deprecated. Please use css overwrites for a small version!',
        type: "warn",
        source: this.hostElement
      });
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
    const ariaDetailedById = { "aria-details": this.ariaDetailedId };
    const numericTypes = [
      "number",
      "date",
      "month",
      "week",
      "time",
      "datetime-local"
    ];
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("label", { class: "text-field__label", htmlFor: this.inputId }, this.label), h("input", Object.assign({ type: this.type, inputMode: this.inputModeType, class: "text-field__control", value: this.value }, !!this.name ? { name: this.name } : {}, !!this.inputAutofocus ? { autofocus: "true" } : {}, { required: this.required, minLength: this.minLength, maxLength: this.maxLength, min: this.min, max: this.max, id: this.inputId, list: this.list, onInput: this.handleInput, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown }, !!this.placeholder && !this.readonly ? { placeholder: this.placeholder } : {}, { disabled: this.disabled, readonly: this.readonly, autocomplete: this.inputAutocomplete }, ariaDetailedById, ariaInvalidAttr, this.helperText ? ariaDescribedByAttr : {}, numericTypes.includes(this.type) ? { step: this.step } : {})), (!!this.helperText || !!this.counter) && h("div", { class: "text-field__meta", "aria-live": "polite", "aria-relevant": "additions removals" }, this.helperText && h("scale-helper-text", { id: helperTextId, helperText: this.helperText, variant: this.invalid ? "danger" : this.variant }), this.counter && h("div", { class: "text-field__counter" }, !!this.value ? String(this.value).length : 0, " /", " ", this.maxLength))));
  }
  getCssClassMap() {
    const numericTypes = ["date", "month", "week", "time", "datetime-local"];
    const animated = this.value != null && this.value !== "" || numericTypes.includes(this.type);
    return classnames("text-field", this.type && `text-field--type-${this.type}`, this.hasFocus && "text-field--has-focus", this.disabled && `text-field--disabled`, this.transparent && "text-field--transparent", this.status && `text-field--status-${this.status}`, this.invalid && `text-field--variant-danger`, this.variant && `text-field--variant-${this.variant}`, this.helperText && `text-field--helper-text`, this.readonly && `text-field--readonly`, this.hideLabelVisually && `text-field--hide-label`, animated && "animated");
  }
  get hostElement() {
    return getElement(this);
  }
};
TextField.style = textFieldCss;
export {
  DropdownSelect as scale_dropdown_select,
  DropdownSelectItem as scale_dropdown_select_item,
  ActionHidePassword as scale_icon_action_hide_password,
  ActionSort as scale_icon_action_sort,
  ContentSortIndicatorDown as scale_icon_content_sort_indicator_down,
  ContentSortIndicatorUp as scale_icon_content_sort_indicator_up,
  ServiceSettings as scale_icon_service_settings,
  MenuFlyoutItem as scale_menu_flyout_item,
  Pagination as scale_pagination,
  ProgressBar as scale_progress_bar,
  Switch as scale_switch,
  Tag as scale_tag,
  TextField as scale_text_field
};
//# sourceMappingURL=scale-dropdown-select_13.entry-WFXDJ4H5.js.map
