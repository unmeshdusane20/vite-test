import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-sidebar-nav-item.entry.js
var sidebarNavItemCss = ":host{--border-bottom-color:var(--telekom-color-ui-faint);--border-left-color-third-nesting:var(--telekom-color-ui-strong);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-primary:var(--telekom-color-text-and-icon-primary-standard);--background-color-before-active:var(--color-primary);--font-bold:var(--telekom-text-style-ui-bold);--box-shadow-focus:inset 0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard)}.sidebar-nav-item{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--border-bottom-color)}.sidebar-nav-item--active{position:relative;color:var(--color-primary)}.sidebar-nav-item--active::before{content:'';display:block;position:absolute;top:0;left:var(--left-current-border, 0);width:0;height:100%;background-color:var(--background-color-before-active);border-left:2px solid transparent}.sidebar-nav-item:hover.sidebar-nav-item--active::before{background-color:var(--color-hover)}.sidebar-nav-item:active.sidebar-nav-item--active::before{background-color:var(--color-active)}.sidebar-nav-item--condensed.sidebar-nav-item--active::before{left:-1px}:host([nesting-level='1']) .sidebar-nav-item,.sidebar-nav-item--bold{font:var(--font-bold)}:host([nesting-level='3']) .sidebar-nav-item{border-left-color:var(--border-left-color-third-nesting);border-left-style:solid;border-left-width:0.0625rem}::slotted(a){color:currentColor;display:flex;align-items:center;padding-top:1rem;padding-right:1rem;padding-bottom:1rem;padding-left:var(--spacing-indent);border-radius:var(--telekom-radius-small);text-decoration:none;outline:none;min-height:20px}:host([nesting-level='2']) ::slotted(a){padding-left:calc(var(--spacing-indent) + 0.75rem)}::slotted(a:hover){color:var(--color-hover)}::slotted(a:focus){box-shadow:var(--box-shadow-focus)}::slotted(a:active){color:var(--color-active)}.sidebar-nav-item--condensed{border-bottom-width:0}.sidebar-nav-item--condensed ::slotted(a){padding-top:0.5rem;padding-left:0.75rem;padding-right:0.5rem;padding-bottom:0.5rem}";
var SR_ACTIVE_TEXT = " Zurzeit aktiv";
var isActive = (current) => {
  try {
    return !!JSON.parse(current);
  } catch (e) {
    if (typeof current === "string") {
      return true;
    }
    return !!current;
  }
};
var getScreenReaderText = (current) => {
  let text;
  try {
    text = JSON.parse(current);
  } catch (e) {
    text = current;
  }
  return typeof text === "string" && text.length > 0 ? ` ${text}` : SR_ACTIVE_TEXT;
};
var SidebarNavItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.condensed = false;
    this.bold = false;
    this.active = false;
    this.current = null;
  }
  nestingLevelChanged(newValue) {
    if (newValue === 1) {
      this.bold = true;
    }
  }
  currentChanged(newValue) {
    this.handleAriaCurrentInSlottedA(newValue);
    this.syncActiveToCurrent(newValue);
  }
  componentDidLoad() {
    this.handleAriaCurrentInSlottedA(this.current);
    if (this.current) {
      this.syncActiveToCurrent(this.current);
    }
  }
  /**
   * If an item is `current`, it should be `active` as well
   */
  syncActiveToCurrent(newValue) {
    this.active = isActive(newValue);
  }
  /**
   * When `current` is set, this will:
   * - set the aria-current=page attribute on the link
   * - append a text-only hint for screen readers
   * so we end up with something like this:
   * <a href="..." aria-current="page">
   *    Example<span style="...visible to SR only..."> Active link</span>
   * </a>
   * @param current this.current
   */
  handleAriaCurrentInSlottedA(current) {
    const a = this.el.querySelector("a");
    if (this.srOnlyElement != null) {
      a.removeChild(this.srOnlyElement);
      this.srOnlyElement = null;
    }
    if (a != null) {
      a.removeAttribute("aria-current");
    }
    if (isActive(current) && a != null) {
      this.srOnlyElement = this.createScreenReaderOnlySpan();
      a.appendChild(this.srOnlyElement);
      a.setAttribute("aria-current", "page");
    }
  }
  createScreenReaderOnlySpan() {
    const text = getScreenReaderText(this.current);
    const span = document.createElement("span");
    Object.assign(span.style, {
      position: "absolute",
      left: "-10000px",
      overflow: "hidden"
    });
    span.textContent = text;
    return span;
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("li", { part: this.getBasePartMap(), class: this.getCssClassMap(), role: "listitem" }, h("slot", null)));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap("basePart");
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap("css");
  }
  getCssOrBasePartMap(mode) {
    const component = "sidebar-nav-item";
    const prefix = mode === "basePart" ? "" : `${component}--`;
    return classnames(component, this.bold && `${prefix}bold`, this.condensed && `${prefix}condensed`, this.active && `${prefix}active`);
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "nestingLevel": ["nestingLevelChanged"],
      "current": ["currentChanged"]
    };
  }
};
SidebarNavItem.style = sidebarNavItemCss;
export {
  SidebarNavItem as scale_sidebar_nav_item
};
//# sourceMappingURL=scale-sidebar-nav-item.entry-OZRIGEWU.js.map
