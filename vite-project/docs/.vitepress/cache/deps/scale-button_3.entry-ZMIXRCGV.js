import {
  emitEvent,
  hasShadowDom,
  isClickOutside,
  isScaleIcon
} from "./chunk-QJ3V7W6Z.js";
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

// node_modules/@telekom/scale-components/dist/esm/scale-button_3.entry.js
var buttonCss = ":host{--width:auto;--spacing-x-right:var(--telekom-spacing-composition-space-07);--spacing-x-left:var(--telekom-spacing-composition-space-07);--spacing-x-icon-only:var(--telekom-spacing-composition-space-05);--min-height:var(--telekom-spacing-composition-space-13);--min-width:var(--telekom-spacing-composition-space-13);--radius:var(--telekom-radius-standard);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-focus:var(--telekom-color-functional-focus-standard);--font-weight:var(--telekom-typography-font-weight-bold);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-tight);--spacing-icon-x:var(--telekom-spacing-composition-space-04);--vertical-align:middle;--font-size-small:var(--telekom-typography-font-size-caption);--line-height-small:1.125rem;--min-height-small:var(--telekom-spacing-composition-space-10);--spacing-x-right-small:var(--telekom-spacing-composition-space-06);--spacing-x-left-small:var(--telekom-spacing-composition-space-06);--spacing-x-icon-only-small:var(--telekom-spacing-composition-space-00);--spacing-icon-x-small:var(--telekom-spacing-composition-space-03);--radius-primary:var(--radius);--background-primary:var(--telekom-color-primary-standard);--background-primary-hover:var(--telekom-color-primary-hovered);--background-primary-active:var(--telekom-color-primary-pressed);--background-primary-disabled:var(--telekom-color-ui-disabled);--color-primary:var(--telekom-color-text-and-icon-white-standard);--color-primary-disabled:var(--telekom-color-text-and-icon-disabled);--radius-secondary:var(--radius);--border-width-secondary:var(--telekom-spacing-composition-space-01);--background-secondary:transparent;--color-secondary:var(--telekom-color-text-and-icon-standard);--color-secondary-hover:var(--telekom-color-text-and-icon-standard);--color-secondary-active:var(--telekom-color-text-and-icon-standard);--color-secondary-disabled:var(--telekom-color-text-and-icon-disabled);--background-secondary:var(--telekom-color-ui-state-fill-standard);--background-secondary-hover:var(--telekom-color-ui-state-fill-hovered);--background-secondary-active:var(--telekom-color-ui-state-fill-pressed);--background-secondary-disabled:none;--border-secondary:var(--telekom-color-ui-border-standard);--border-secondary-hover:var(--telekom-color-ui-border-hovered);--border-secondary-active:var(--telekom-color-ui-border-pressed);--border-secondary-focus:var(--telekom-color-functional-focus-standard);--border-secondary-white:var(--telekom-color-ui-white);--color-secondary-white:var(--telekom-color-ui-white);--background-secondary-white-hover:var(\n    --telekom-color-ui-state-fill-hovered-inverted\n  );--background-secondary-white-active:var(\n    --telekom-color-ui-state-fill-pressed-inverted\n  );--secondary-white-opacity:0.5;--radius-ghost:var(--radius);--border-width-ghost:var(--telekom-spacing-composition-space-01);--spacing-x-ghost:var(--telekom-spacing-composition-space-04);--color-ghost:var(--telekom-color-text-and-icon-primary-standard);--color-ghost-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-ghost-active:var(--telekom-color-text-and-icon-primary-pressed);--color-ghost-disabled:var(--telekom-color-text-and-icon-disabled);--background-ghost-hover:var(--telekom-color-ui-state-fill-hovered);--background-ghost-active:var(--telekom-color-ui-state-fill-pressed);display:inline-block}.button{box-sizing:border-box;display:inline-flex;align-items:center;position:relative;border:0;outline:none;cursor:pointer;user-select:none;font-family:inherit;word-spacing:inherit;letter-spacing:inherit;justify-content:center;text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);min-height:var(--min-height);min-width:var(--min-width);width:var(--width);padding-left:var(--spacing-x-left);padding-right:var(--spacing-x-right);vertical-align:var(--vertical-align);transition:var(--transition)}.button.button--size-small{font-size:var(--font-size-small);line-height:var(--line-height-small);min-height:var(--min-height-small);padding-left:var(--spacing-x-left-small);padding-right:var(--spacing-x-right-small)}.button:not(.button--disabled):focus{outline:var(--telekom-line-weight-highlight) solid var(--color-focus);outline-offset:var(--telekom-spacing-composition-space-01)}.button.button--icon-before:not(.button--icon-only) ::slotted(*){margin-right:var(--spacing-icon-x);margin-left:calc(var(--spacing-icon-x-small) * -1);margin-top:var(--spacing-icon-x);margin-bottom:var(--spacing-icon-x)}.button.button--icon-before:not(.button--icon-only).button--size-small ::slotted(*){margin-right:var(--spacing-icon-x-small);margin-left:calc(var(--spacing-icon-x) * -0.5)}.button.button--icon-after:not(.button--icon-only) ::slotted(*){margin-left:var(--spacing-icon-x);margin-right:calc(var(--spacing-icon-x-small) * -1);margin-top:var(--spacing-icon-x);margin-bottom:var(--spacing-icon-x)}.button.button--icon-after:not(.button--icon-only).button--size-small ::slotted(*){margin-left:var(--spacing-icon-x-small);margin-right:calc(var(--spacing-icon-x) * -0.5)}.button:after{top:0;left:0;width:100%;border:var(--telekom-spacing-composition-space-01) solid transparent;height:100%;content:'';display:block;position:absolute;box-sizing:border-box;pointer-events:none;border-radius:var(--radius)}.button--icon-only{padding-left:var(--spacing-x-icon-only);padding-right:var(--spacing-x-icon-only)}.button--icon-only.button--variant-secondary{padding-left:calc(var(--spacing-x-icon-only) - 1px);padding-right:calc(var(--spacing-x-icon-only) - 1px)}.button--icon-only.button--size-small{padding-left:var(--spacing-x-icon-only-small);padding-right:var(--spacing-x-icon-only-small);min-width:32px}.button--icon-only.button--size-small.button--variant-secondary{padding-left:calc(var(--spacing-x-icon-only-small) - 1px);padding-right:calc(var(--spacing-x-icon-only-small) - 1px)}.button--disabled{cursor:not-allowed}.button--variant-primary{text-align:center;border-radius:var(--radius);background:var(--background-primary);color:var(--color-primary)}.button--variant-primary:not(.button--disabled):hover{background:var(--background-primary-hover)}.button--variant-primary:not(.button--disabled):active{background:var(--background-primary-active)}.button--disabled.button--variant-primary{background:var(--background-primary-disabled);color:var(--color-primary-disabled)}.button--variant-secondary{background:var(--background-secondary);text-align:center;border-radius:var(--radius-secondary);border:var(--border-width-secondary) solid currentColor;color:var(--color-secondary);background-color:var(--background-secondary);border-color:var(--border-secondary)}.button--variant-secondary:not(.button--disabled):hover{color:var(--color-secondary-hover);background-color:var(--background-secondary-hover);border-color:var(--border-secondary-hover)}.button--variant-secondary:not(.button--disabled):active{color:var(--color-secondary-active);background-color:var(--background-secondary-active);border-color:var(--border-secondary-active)}.button--disabled.button--variant-secondary{color:var(--color-secondary-disabled);background-color:var(--background-secondary-disabled)}.button--variant-ghost{background:transparent;text-align:center;border-radius:var(--radius-ghost);border:var(--border-width-ghost) solid transparent;color:var(--color-ghost);padding-left:var(--spacing-x-ghost);padding-right:var(--spacing-x-ghost)}.button--variant-ghost:not(.button--disabled):hover{color:var(--color-ghost-hover);background-color:var(--background-ghost-hover)}.button--variant-ghost:not(.button--disabled):active{color:var(--color-ghost-active);background-color:var(--background-ghost-active)}.button--disabled.button--variant-ghost{color:var(--color-ghost-disabled)}.button--variant-secondary-white{background:var(--background-secondary);text-align:center;border-radius:var(--radius-secondary);border:var(--border-width-secondary) solid currentColor;color:var(--color-secondary-white);background-color:var(--background-secondary);border-color:var(--border-secondary-white)}.button--variant-secondary-white:not(.button--disabled):hover{background-color:var(--background-secondary-white-hover)}.button--variant-secondary-white:not(.button--disabled):active{background-color:var(--background-secondary-white-active)}.button--disabled.button--variant-secondary-white{opacity:var(--secondary-white-opacity)}";
var DEFAULT_ICON_SIZE = 24;
var buttonIconSizeMap = {
  small: 16,
  large: 20
};
var Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = "large";
    this.variant = "primary";
    this.disabled = false;
    this.iconOnly = false;
    this.iconPosition = "before";
    this.target = "_self";
    this.handleClick = (ev) => {
      if (hasShadowDom(this.hostElement)) {
        const parentForm = this.hostElement.closest("form");
        if (parentForm) {
          ev.preventDefault();
          const fakeButton = document.createElement("button");
          if (this.type) {
            fakeButton.type = this.type;
          }
          fakeButton.style.display = "none";
          parentForm.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
  }
  /**
   * Prevent clicks from being emitted from the host
   * when the component is `disabled`.
   */
  handleHostClick(event) {
    if (this.disabled === true) {
      event.stopImmediatePropagation();
    }
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  componentDidLoad() {
    this.setChildrenIconSize();
  }
  connectedCallback() {
    this.setIconPositionProp();
    this.appendEnterKeySubmitFallback();
  }
  disconnectedCallback() {
    this.cleanUpEnterKeySubmitFallback();
  }
  /**
   * In order for forms to be submitted with the Enter key
   * there has to be a `button` or an `input[type="submit"]` in the form.
   * Browsers do not take the <button> inside the Shadow DOM into account for this matter.
   * So we carefully append an `input[type="submit"]` to overcome this.
   *
   * @see https://stackoverflow.com/a/35235768
   * @see https://github.com/telekom/scale/issues/859
   */
  appendEnterKeySubmitFallback() {
    if (hasShadowDom(this.hostElement)) {
      const parentForm = this.hostElement.closest("form");
      if (parentForm == null) {
        return;
      }
      const hasSubmitInputAlready = parentForm.querySelector('input[type="submit"]') != null;
      if (hasSubmitInputAlready) {
        return;
      }
      this.fallbackSubmitInputElement = document.createElement("input");
      this.fallbackSubmitInputElement.type = "submit";
      this.fallbackSubmitInputElement.hidden = true;
      parentForm.appendChild(this.fallbackSubmitInputElement);
    }
  }
  cleanUpEnterKeySubmitFallback() {
    if (this.fallbackSubmitInputElement != null) {
      try {
        this.fallbackSubmitInputElement.remove();
        this.fallbackSubmitInputElement = null;
      } catch (err) {
      }
    }
  }
  /**
   * Detect whether the last node is an element (not text).
   * If so, it's probably an icon, so we set `iconPosition` to `after`.
   */
  setIconPositionProp() {
    const nodes = Array.from(this.hostElement.childNodes).filter((node) => {
      return !(node.nodeType === 3 && node.nodeValue.trim() === "");
    });
    const lastNode = nodes.length > 1 ? nodes[nodes.length - 1] : null;
    if (!this.iconOnly && lastNode && isScaleIcon(lastNode)) {
      this.iconPosition = "after";
    }
  }
  /**
   * Set any children icon's size according the button size.
   */
  setChildrenIconSize() {
    if (this.size != null && buttonIconSizeMap[this.size] != null) {
      const icons = Array.from(this.hostElement.childNodes).filter(isScaleIcon);
      icons.forEach((icon) => {
        if (icon.size === DEFAULT_ICON_SIZE) {
          icon.size = buttonIconSizeMap[this.size];
        }
      });
    }
  }
  render() {
    const basePart = classnames("base", this.variant && `variant-${this.variant}`, this.iconOnly && "icon-only", !this.iconOnly && this.iconPosition, this.disabled && "disabled");
    return h(Host, null, this.styles && h("style", null, this.styles), this.href ? h("a", { ref: (el) => this.focusableElement = el, class: this.getCssClassMap(), href: this.disabled ? null : this.href, download: this.download, target: this.target, rel: this.target === "_blank" ? "noopener noreferrer" : void 0, part: basePart, tabIndex: this.innerTabindex, role: "link", "aria-disabled": this.disabled ? "true" : null, "aria-label": this.innerAriaLabel }, h("slot", null)) : h("button", { ref: (el) => this.focusableElement = el, class: this.getCssClassMap(), onClick: this.handleClick, disabled: this.disabled, type: this.type, part: basePart, tabIndex: this.innerTabindex, name: this.name, value: this.value, "aria-label": this.innerAriaLabel }, h("slot", null)));
  }
  getCssClassMap() {
    return classnames("button", this.size && `button--size-${this.size}`, this.variant && `button--variant-${this.variant}`, this.iconOnly && `button--icon-only`, !this.iconOnly && this.iconPosition && `button--icon-${this.iconPosition}`, this.disabled && `button--disabled`);
  }
  get hostElement() {
    return getElement(this);
  }
};
Button.style = buttonCss;
var menuFlyoutCss = ":host{--spacing-y-list:0;--spacing-x-list:0}";
var MENU_SELECTOR = '[role="menu"]';
var isButtonOrLink = (el) => {
  if (el.tagName.toUpperCase() === "BUTTON" || el.tagName.toUpperCase() === "A" || el.getAttribute("role") === "button") {
    return el;
  }
};
var MenuFlyout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeOnSelect = true;
    this.direction = "bottom-right";
    this.lists = /* @__PURE__ */ new Set();
    this.closeAll = () => {
      this.lists.forEach(async (list) => {
        await list.close();
        list.active = false;
      });
    };
    this.toggle = () => {
      const list = this.getListElement();
      if (list.opened) {
        this.closeAll();
        return;
      }
      if (this.direction != null) {
        list.direction = this.direction;
      }
      list.trigger = () => this.trigger;
      list.open();
    };
  }
  async handleScaleOpen({ detail }) {
    const rootList = this.getListElement();
    if (this.activeList && this.activeList.active && this.activeList !== rootList && this.activeList !== detail.list) {
      let list = this.activeList;
      while (list != null && list !== rootList) {
        await list.close(true);
        list = list.parentElement.closest(MENU_SELECTOR);
      }
    }
    this.activeList = detail.list;
  }
  handleScaleSelect({ detail }) {
    if (detail.closeOnSelect === false) {
      return;
    }
    if (this.closeOnSelect) {
      window.requestAnimationFrame(() => {
        this.closeAll();
      });
    }
  }
  handleScaleClose({ detail }) {
    const parent = detail.list != null ? detail.list.parentNode.closest(MENU_SELECTOR) : null;
    if (parent) {
      window.requestAnimationFrame(() => {
        parent.active = true;
        parent.setFocus();
      });
    }
  }
  handleWindowScroll() {
    this.closeAll();
  }
  handleOutsideClick(event) {
    if (isClickOutside(event, this.hostElement)) {
      this.closeAll();
    }
  }
  handleKeydown(event) {
    if ("Tab" === event.key && !this.hostElement.querySelector("app-navigation-user-menu")) {
      if (this.trigger.tagName === "SCALE-TELEKOM-NAV-ITEM") {
        this.trigger.firstElementChild.focus();
      }
      this.closeAll();
      return;
    }
  }
  componentDidLoad() {
    const triggerSlot = this.hostElement.querySelector('[slot="trigger"]');
    const tagName = triggerSlot ? triggerSlot.tagName.toUpperCase() : "";
    if (triggerSlot && tagName === "SCALE-BUTTON") {
      this.trigger = triggerSlot.shadowRoot.querySelector("button");
    } else if (triggerSlot && tagName === "SCALE-NAV-ICON") {
      this.trigger = triggerSlot.querySelector("a");
    } else {
      this.trigger = triggerSlot;
    }
    this.lists = new Set(Array.from(this.hostElement.querySelectorAll(MENU_SELECTOR)));
    this.setTriggerAttributes();
  }
  setTriggerAttributes() {
    const triggers = Array.from(this.hostElement.querySelectorAll('[role="menuitem"]')).filter((el) => el.querySelector('[slot="sublist"]') != null).concat([isButtonOrLink(this.trigger)]).filter((x) => x != null);
    triggers.forEach((el) => {
      el.setAttribute("aria-haspopup", "true");
      el.setAttribute("aria-expanded", "false");
    });
  }
  getListElement() {
    return Array.from(this.hostElement.children).find((el) => el.tagName.toUpperCase().startsWith("SCALE-MENU-FLYOUT"));
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: "trigger", onClick: this.toggle }, h("slot", { name: "trigger" })), h("slot", null));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuFlyout.style = menuFlyoutCss;
var menuFlyoutListCss = ":host{box-sizing:content-box;position:fixed;z-index:100;pointer-events:none}.menu-flyout-list{display:none;position:absolute;pointer-events:initial;z-index:var(--scl-z-index-20);background:var(--telekom-color-background-surface);border-radius:var(--telekom-radius-standard);box-shadow:var(--telekom-shadow-overlay);overflow-y:hidden;margin-top:var(--spacing-y-list, 0);margin-bottom:var(--spacing-y-list, 0);margin-left:var(--spacing-x-list, 0);margin-right:var(--spacing-x-list, 0)}.menu-flyout-list::after{content:'';display:block;position:absolute;width:calc(100% - 2px);height:calc(100% - 2px);inset:0;border-radius:var(--telekom-radius-standard);border:1px solid transparent;pointer-events:none}.menu-flyout-list--opened{display:flex}.menu-flyout-list__list{padding:20px 0;overflow-y:auto;overflow-y:overlay;overscroll-behavior:contain;width:100%}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-bottom-left,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-right,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-left,.menu-flyout-list--direction-bottom-right{top:calc(100% + var(--telekom-spacing-composition-space-03));left:0;right:auto;bottom:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-bottom-right,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-left,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-right,.menu-flyout-list--direction-bottom-left{top:calc(100% + var(--telekom-spacing-composition-space-03));right:0;left:auto;bottom:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-top-left,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-right,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-left,.menu-flyout-list--direction-top-right{bottom:calc(100% + var(--telekom-spacing-composition-space-03));left:0;right:auto;top:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-top-right,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-left,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-right,.menu-flyout-list--direction-top-left{bottom:calc(100% + var(--telekom-spacing-composition-space-03));right:0;left:auto;top:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-left,.menu-flyout-list--direction-right{left:calc(100% - var(--telekom-spacing-composition-space-03));top:-20px;right:auto;bottom:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-right,.menu-flyout-list--direction-left{right:calc(100% - var(--telekom-spacing-composition-space-03));top:-20px;left:auto;bottom:auto}.menu-flyout-list__scroll-up-indicator,.menu-flyout-list__scroll-down-indicator{position:absolute;width:0;border:5px solid transparent;pointer-events:none;opacity:0;left:50%}.menu-flyout-list__scroll-up-indicator{top:var(--telekom-spacing-composition-space-04);border-bottom:5px solid var(--telekom-color-ui-faint);border-top:0}.menu-flyout-list__scroll-down-indicator{bottom:var(--telekom-spacing-composition-space-04);border-top:5px solid var(--telekom-color-ui-faint);border-bottom:0}.menu-flyout-list--can-scroll-up .menu-flyout-list__scroll-up-indicator{opacity:1}.menu-flyout-list--can-scroll-down .menu-flyout-list__scroll-down-indicator{opacity:1}.menu-flyout-list--brand-header-dropdown ::slotted(scale-menu-flyout-item){--_min-width-moz:0;--_min-width:0}";
var PAD = 10;
var ITEM_ROLES = ["menuitem", "menuitemcheckbox", "menuitemradio"];
var MenuFlyoutList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleOpen = createEvent(this, "scale-open", 7);
    this.scaleOpenLegacy = createEvent(this, "scaleOpen", 7);
    this.scaleClose = createEvent(this, "scale-close", 7);
    this.scaleCloseLegacy = createEvent(this, "scaleClose", 7);
    this.forceRender = 0;
    this.opened = false;
    this.direction = "bottom-right";
    this.active = false;
    this.closeOnSelect = true;
    this.brandHeaderDropdown = false;
    this.canScrollUp = false;
    this.canScrollDown = false;
    this.flipHorizontal = false;
    this.flipVertical = false;
    this.needsCheckPlacement = true;
    this.handleScroll = () => {
      this.updateScrollIndicators();
    };
    this.handleWheel = (event) => {
      this.stopWheelPropagation(event);
    };
  }
  get triggerRect() {
    return this.trigger().getBoundingClientRect();
  }
  componentDidRender() {
    if (this.opened && this.needsCheckPlacement) {
      this.setSize();
      this.checkPlacement();
    }
  }
  async open() {
    this.opened = true;
    emitEvent(this, "scaleOpen", { list: this.hostElement });
  }
  async close(silent = false) {
    if (this.active && silent !== true) {
      emitEvent(this, "scaleClose", { list: this.hostElement });
    }
    this.opened = false;
  }
  async setFocus() {
    if (this.focusedItemIndex != null) {
      this.focusItem();
    } else {
      this.setInitialItemsFocus();
    }
  }
  handleResize() {
    this.close();
  }
  handleKeydown(event) {
    if (!this.active) {
      return;
    }
    if (!this.hostElement.querySelector("app-navigation-user-menu")) {
      event.preventDefault();
    }
    if ("ArrowDown" === event.key) {
      this.shiftItemsFocus();
      return;
    }
    if ("ArrowUp" === event.key) {
      this.shiftItemsFocus(-1);
      return;
    }
    if ("ArrowLeft" === event.key || "Escape" === event.key) {
      this.close();
      return;
    }
    if (" " === event.key || "Enter" === event.key || "ArrowRight" === event.key) {
      const item = this.items[this.focusedItemIndex];
      if (item != null) {
        item.triggerEvent(event, this.closeOnSelect);
      }
    }
  }
  /**
   * We handle item clicks here, to avoid setting up
   * listeners on every item
   */
  handleClick(event) {
    const roleSelector = ITEM_ROLES.map((role) => `[role="${role}"]`).join(",");
    const item = event.target.closest(roleSelector);
    if (item != null) {
      event.stopImmediatePropagation();
      item.triggerEvent(event, this.closeOnSelect);
    }
  }
  /**
   * Focus newly selected item
   */
  handleScaleSelect({ detail }) {
    if (this.active && this.opened) {
      const index = this.items.findIndex((x) => x === detail.item);
      if (index != null) {
        this.focusedItemIndex = index;
        this.focusItem();
      }
    }
  }
  /**
   * Set `active` to false when a descendant opens
   */
  handleScaleOpen({ detail }) {
    if (detail.list !== this.hostElement) {
      this.active = false;
    }
  }
  openedChanged() {
    if (!this.opened) {
      this.active = false;
      this.focusedItemIndex = null;
      this.needsCheckPlacement = true;
      this.flipHorizontal = false;
      this.flipVertical = false;
      this.hostElement.style.marginLeft = "";
      this.hostElement.style.marginTop = "";
      this.hostElement.style.marginRight = "";
      this.hostElement.style.marginBottom = "";
      if (this.trigger().tagName === "SCALE-TELEKOM-NAV-ITEM") {
        this.trigger().style.color = "var(--telekom-color-text-and-icon-standard)";
      }
    }
    if (this.opened) {
      this.active = true;
      this.setFocus();
      this.setWindowSize();
      this.setPosition();
      this.padForNonOverlayScrollbars();
      this.updateScrollIndicators();
    }
    this.updateTriggerAttributes();
  }
  setInitialItemsFocus() {
    this.items = this.getListItems();
    this.focusedItemIndex = -1;
    if (this.items.length > 0) {
      this.shiftItemsFocus();
    }
  }
  shiftItemsFocus(direction = 1) {
    let nextIndex = this.focusedItemIndex + direction;
    if (nextIndex === this.items.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = this.items.length - 1;
    }
    this.focusedItemIndex = nextIndex;
    this.focusItem();
  }
  focusItem() {
    window.requestAnimationFrame(() => {
      try {
        this.items[this.focusedItemIndex].focus();
      } catch (err) {
      }
    });
  }
  updateTriggerAttributes() {
    const trigger = this.trigger();
    if (trigger && trigger.getAttribute("aria-haspopup") === "true") {
      trigger.setAttribute("aria-expanded", String(this.opened));
    }
  }
  setWindowSize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
  setPosition() {
    const { top, left } = this.triggerRect;
    this.hostElement.style.left = !this.brandHeaderDropdown ? `${left}px` : `${left - 4}px`;
    if (this.trigger().tagName === "SCALE-TELEKOM-NAV-ITEM") {
      this.hostElement.style.top = `${top - 12}px`;
      this.hostElement.style.left = `${left - 24}px`;
      this.trigger().style.color = "var(--telekom-color-text-and-icon-primary-standard)";
    } else {
      this.hostElement.style.top = `${top}px`;
    }
  }
  setSize() {
    const { width, height } = this.triggerRect;
    this.hostElement.style.height = `${height}px`;
    this.hostElement.style.width = `${width}px`;
    if (this.brandHeaderDropdown) {
      this.base.style.width = `240px`;
    }
  }
  checkPlacement() {
    this.needsCheckPlacement = false;
    let isOutOfBounds = false;
    const rect = this.base.getBoundingClientRect();
    if (rect.left < PAD) {
      isOutOfBounds = true;
      if (this.direction.includes("left")) {
        this.flipHorizontal = true;
      }
    }
    if (rect.right > this.windowWidth - PAD) {
      isOutOfBounds = true;
      if (this.direction.includes("right")) {
        this.flipHorizontal = true;
      }
    }
    if (rect.top < PAD) {
      isOutOfBounds = true;
      if (this.direction.includes("top")) {
        this.flipVertical = true;
      }
    }
    if (rect.bottom > this.windowHeight - PAD) {
      isOutOfBounds = true;
      if (this.direction.includes("bottom")) {
        this.flipVertical = true;
      }
    }
    if (isOutOfBounds) {
      this.furtherAdjustPlacement();
    }
  }
  furtherAdjustPlacement() {
    this.base.className = this.getCssClassMap();
    window.getComputedStyle(this.base);
    const rect = this.base.getBoundingClientRect();
    let left = 0;
    let top = 0;
    if (rect.left < PAD) {
      left = PAD - rect.left;
    } else if (rect.right > this.windowWidth - PAD) {
      left = this.windowWidth - PAD - rect.right;
    }
    if (rect.top < PAD) {
      top = PAD - rect.top;
    } else if (rect.bottom > this.windowHeight - PAD) {
      top = this.windowHeight - PAD - rect.bottom;
    }
    this.hostElement.style.marginLeft = `${left}px`;
    this.hostElement.style.marginTop = `${top}px`;
    this.hostElement.style.marginRight = `${-left}px`;
    this.hostElement.style.marginBottom = `${-top}px`;
    setTimeout(() => this.forceRender++);
  }
  /**
   * Add scrollbar width to menu, to avoid horizontal scrollbars
   * or scrollbar forcing text-overflow.
   * (This affects Firefox and Safari, where non-overlay scrollbars
   * eat into content width rather than add)
   */
  padForNonOverlayScrollbars() {
    this.base.style.paddingRight = `0px`;
    const scrollbarWidth = this.base.offsetWidth - this.base.clientWidth;
    this.base.style.paddingRight = `${scrollbarWidth}px`;
  }
  updateScrollIndicators() {
    this.canScrollDown = false;
    this.canScrollUp = false;
    const diff = this.list.scrollHeight - this.list.clientHeight;
    if (diff) {
      if (this.list.scrollTop > 0) {
        this.canScrollUp = true;
      }
      if (this.list.scrollTop < diff) {
        this.canScrollDown = true;
      }
    }
    this.forceRender++;
  }
  /**
   * Check if going in a direction with content to reach, otherwise stop
   */
  stopWheelPropagation(event) {
    event.stopPropagation();
    if (!this.canScrollDown && !this.canScrollUp) {
      event.preventDefault();
    }
    if (event.deltaY > 0 && !this.canScrollDown) {
      event.preventDefault();
    }
    if (event.deltaY < 0 && !this.canScrollUp) {
      event.preventDefault();
    }
  }
  getListItems() {
    return Array.from(this.hostElement.children).filter((el) => ITEM_ROLES.includes(el.getAttribute("role")));
  }
  getCssClassMap() {
    return classnames("menu-flyout-list", `menu-flyout-list--direction-${this.direction}`, this.opened && "menu-flyout-list--opened", this.canScrollUp && "menu-flyout-list--can-scroll-up", this.canScrollDown && "menu-flyout-list--can-scroll-down", this.flipHorizontal && `menu-flyout-list--flip-horizontal`, this.flipVertical && `menu-flyout-list--flip-vertical`, this.brandHeaderDropdown && `menu-flyout-list--brand-header-dropdown`);
  }
  render() {
    return h(Host, { role: "menu" }, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), ref: (el) => this.base = el, part: "base", style: { maxHeight: `calc(${this.windowHeight}px - 20px)` }, onWheelCapture: this.handleWheel }, h("div", { class: "menu-flyout-list__list", ref: (el) => this.list = el, onScroll: this.handleScroll }, h("slot", null)), h("div", { "aria-hidden": "true", class: "menu-flyout-list__scroll-up-indicator" }), h("div", { "aria-hidden": "true", class: "menu-flyout-list__scroll-down-indicator" })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "opened": ["openedChanged"]
    };
  }
};
MenuFlyoutList.style = menuFlyoutListCss;
export {
  Button as scale_button,
  MenuFlyout as scale_menu_flyout,
  MenuFlyoutList as scale_menu_flyout_list
};
//# sourceMappingURL=scale-button_3.entry-ZMIXRCGV.js.map
