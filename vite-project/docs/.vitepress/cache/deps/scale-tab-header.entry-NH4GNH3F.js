import {
  isScaleIcon
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

// node_modules/@telekom/scale-components/dist/esm/scale-tab-header.entry.js
var tabHeaderCss = ":host{outline:none;--font:var(--telekom-text-style-ui-bold);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--spacing-right-slotted:var(--telekom-spacing-composition-space-04);--color-disabled:var(--telekom-color-text-and-icon-disabled);--radius:var(--telekom-radius-standard);--font-size-large:var(--telekom-typography-font-size-callout)}.tab-header{color:var(--color);cursor:pointer;display:inline-flex;outline:none;position:relative;box-sizing:border-box;align-items:center;height:var(--tab-height);font:var(--font);border-radius:var(--tab-radius);padding-right:var(--tab-spacing-horizontal);padding-left:var(--tab-spacing-horizontal);padding-top:var(--tab-spacing-vertical);padding-bottom:var(--tab-spacing-vertical)}.tab-header--disabled{cursor:auto;color:var(--color-disabled)}.tab-header--disabled:after{cursor:auto;background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header--disabled:active{color:var(--color-disabled)}.tab-header--disabled:hover{color:var(--color-disabled) !important}.tab-header--disabled:hover:after{background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header:after{left:0;right:0;width:100%;bottom:0;content:'';display:block;position:absolute;height:var(--tab-border-size);background-color:var(--tab-border-color)}.tab-header:before{left:0;right:0;width:100%;bottom:0;height:0;content:'';display:block;position:absolute;border-top:1px solid transparent}.tab-header:hover{color:var(--color-hover)}.tab-header:hover:after{background-color:var(--color-hover)}.tab-header:active{color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header ::slotted(*){margin-right:var(--spacing-right-slotted)}.tab-header--has-focus{border-radius:var(--tab-radius);outline:var(--focus-outline);z-index:1}.tab-header--has-focus.tab-header--selected:after{border-radius:0 0 3px 3px;width:98%;margin-left:1%}.tab-header--selected{color:var(--color-selected)}.tab-header--selected:after{height:var(--tab-border-size-selected);background-color:var(--color-selected)}.tab-header--selected:before{border-top:var(--tab-border-size-selected) solid transparent}.tab-header--large{font-size:var(--font-size-large);height:var(--tab-height-large)}";
var PER_SPEC_ICON_SIZE = 20;
var i = 0;
var TabHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleSelect = createEvent(this, "scale-select", 7);
    this.generatedId = i++;
    this.disabled = false;
    this.small = false;
    this.size = "small";
    this.hasFocus = false;
  }
  handleClick(event) {
    event.stopPropagation();
    if (this.disabled) {
      return;
    }
    this.scaleSelect.emit();
  }
  selectedChanged(newValue) {
    if (!this.hostElement.isConnected) {
      return;
    }
    if (!this.disabled) {
      if (newValue === true && this.tabsHaveFocus()) {
        this.hostElement.focus();
      }
      this.updateSlottedIcon();
    }
  }
  componentDidLoad() {
    this.setChildrenIconSize();
  }
  componentDidRender() {
    if (this.small !== false) {
      statusNote({
        tag: "deprecated",
        message: 'Property "small" is deprecated. Please use css overwrites.',
        type: "warn",
        source: this.hostElement
      });
    }
  }
  /**
   * Whether current focused element is within parent `scale-tab-nav`.
   * Only if `true`, we imperatively focus the selected element.
   * @returns boolean
   */
  tabsHaveFocus() {
    const tabs = this.hostElement.closest(".scale-tab-nav");
    if (!tabs) {
      return false;
    }
    return tabs.contains(document.activeElement);
  }
  /**
   * Find slotted icons, and if any, add the `selected` attribute accordingly.
   */
  updateSlottedIcon() {
    const icons = Array.from(this.hostElement.childNodes).filter(isScaleIcon);
    const action = this.selected ? "setAttribute" : "removeAttribute";
    icons.forEach((child) => child[action]("selected", ""));
  }
  /**
   * Set any children icon's size according the button size.
   */
  setChildrenIconSize() {
    const icons = Array.from(this.hostElement.childNodes).filter(isScaleIcon);
    icons.forEach((icon) => {
      if (icon.size !== PER_SPEC_ICON_SIZE) {
        icon.size = PER_SPEC_ICON_SIZE;
      }
    });
  }
  render() {
    return h(Host, { id: `scale-tab-header-${this.generatedId}`, role: this.disabled ? false : "tab", "aria-selected": this.selected ? "true" : "false", tabindex: this.disabled ? false : this.selected ? "0" : "-1", onFocus: () => this.hasFocus = true, onBlur: () => this.hasFocus = false }, this.styles && h("style", null, this.styles), h("span", { part: this.getBasePartMap(), class: this.getCssClassMap() }, h("slot", null)));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap("basePart");
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap("css");
  }
  getCssOrBasePartMap(mode) {
    const component = "tab-header";
    const prefix = mode === "basePart" ? "" : `${component}--`;
    return classnames(component, this.selected && `${prefix}selected`, this.size === "large" && `${prefix}large`, this.hasFocus && `${prefix}has-focus`, this.disabled && `${prefix}disabled`);
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selected": ["selectedChanged"]
    };
  }
};
TabHeader.style = tabHeaderCss;
export {
  TabHeader as scale_tab_header
};
//# sourceMappingURL=scale-tab-header.entry-NH4GNH3F.js.map
