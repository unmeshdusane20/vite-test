import {
  findRootNode,
  findSelected
} from "./chunk-UEID6AGC.js";
import {
  renderIcon
} from "./chunk-ADQ6AEAM.js";
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

// node_modules/@telekom/scale-components/dist/esm/app-mega-menu_8.entry.js
var appMegaMenuCss = "app-mega-menu{--box-shadow:var(--telekom-shadow-top);--spacing-y:2.125rem;--spacing-right:var(--telekom-spacing-composition-space-06);--spacing-left:var(--telekom-spacing-composition-space-08);--background:var(--telekom-color-background-surface);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--font-size-row-title:var(--telekom-typography-font-size-body);--spacing-bottom-row-title:1.125rem;--font-weight-row-title:var(--telekom-typography-font-weight-extra-bold);--color-row-title:var(--telekom-color-text-and-icon-standard);--font-size-row-item:var(--telekom-typography-font-size-body);--line-height-row-item:var(--telekom-typography-line-spacing-loose);--font-weight-row-item:var(--telekom-typography-font-weight-medium);--color-row-item:var(--telekom-color-text-and-icon-standard);--spacing-bottom-row-item:var(--telekom-spacing-composition-space-04)}.mega-menu{width:100%;position:absolute;top:calc(var(--header-brand-height) * -1);left:0;border-radius:0 0 var(--header-border-radius) var(--header-border-radius);padding-top:calc(var(--header-nav-height) + var(--header-brand-height));display:none;pointer-events:none;transition:none;box-shadow:var(--box-shadow)}.mega-menu__wrapper{padding:var(--spacing-y) var(--spacing-right) var(--spacing-y)\n    var(--spacing-left);background:var(--background);pointer-events:none;border-radius:var(--header-border-radius)}.mega-menu__container{max-width:1168px;margin:0 auto;display:grid;grid-template-columns:repeat(5, minmax(min-content, 240px));list-style:none;padding-left:var(--telekom-spacing-composition-space-10)}.mega-menu__row-title{cursor:default;font-size:var(--font-size-row-title);margin-bottom:var(--spacing-bottom-row-title);font-weight:var(--font-weight-row-title);color:var(--color-row-title)}.mega-menu__row-item{font-size:var(--font-size-row-item);line-height:var(--line-height-row-item);font-weight:var(--font-weight-row-item);color:var(--color-row-item);margin-bottom:var(--spacing-bottom-row-item);text-decoration:none;transition:color, border 0.15s ease-in-out;display:block;margin-bottom:7px}.mega-menu__row-item:hover,.mega-menu__row-item:hover span{color:var(--color-hover)}.mega-menu__row-item.active span{padding-bottom:2px;margin-bottom:-2px;display:inline-block;border-bottom:1px solid var(--color-selected)}.mega-menu__row-item.active{color:var(--color-selected)}.mega-menu__row-item.active:hover{color:var(--color-hover)}.mega-menu__row-item.active:hover span{color:var(--color-hover);border-bottom:1px solid var(--color-hover)}.mega-menu__row li{list-style:none}.mega-menu__row ul{padding-inline-start:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mega-menu{border:1px solid hsl(0, 0%, 100%)}}";
var MegaMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navigation = [];
  }
  componentWillLoad() {
    this.hasCustomBody = !!this.hostElement.querySelector('[slot="custom-body"]');
  }
  componentWillRender() {
    if (this.isActive !== void 0) {
      statusNote({
        tag: "deprecated",
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: "warn",
        source: this.hostElement
      });
    }
  }
  render() {
    return h("div", { class: "mega-menu" }, h("div", { class: "mega-menu__wrapper" }, this.hasCustomBody ? h("slot", { name: "custom-body" }) : h("ul", { class: "mega-menu__container" }, this.navigation.map((child) => h("li", { class: "mega-menu__row" }, h("div", { class: "mega-menu__row-title" }, child.name), h("ul", null, child.children && child.children.length > 0 && child.children.map((menuItem) => h("li", null, h("a", { class: `mega-menu__row-item ${this.activeRouteId === menuItem.id ? "active" : ""}`, "aria-current": this.activeRouteId === menuItem.id ? "true" : "false", href: menuItem.href || "javascript:void(0);", tabIndex: this.active || this.isActive ? 0 : -1, onClick: (event) => {
      this.hide();
      if (typeof menuItem.onClick === "function") {
        menuItem.onClick(event);
      }
    }, onKeyDown: (event) => {
      if (["Escape", "Esc"].includes(event.key)) {
        this.hide();
      }
    } }, h("span", null, menuItem.name), this.activeRouteId === menuItem.id && h("span", { class: "sr-only" }, "active"))))))))));
  }
  get hostElement() {
    return getElement(this);
  }
};
MegaMenu.style = appMegaMenuCss;
var appNavigationMainMobileCss = "app-navigation-main-mobile{--min-height:calc(100vh - 56px - 56px);--font-size:var(--telekom-typography-font-size-headline-3);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:3.333;--border-bottom:1px solid var(--telekom-color-ui-faint);--color:var(--telekom-color-text-and-icon-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-size-child:var(--telekom-typography-font-size-headline-3);--line-height-child:2.5;--font-weight-child:var(--telekom-typography-font-weight-regular);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);width:100%}.main-navigation-mobile{width:100%;position:relative}.main-navigation-mobile__main-menu{width:100%;list-style:none;padding:0;margin:0;min-height:var(--min-height)}.main-navigation-mobile__item{font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height)}.main-navigation-mobile__item--selected{border-right:2px solid var(--color-selected)}.main-navigation-mobile__item-link{text-decoration:none;color:var(--color);transition:var(--transition)}.main-navigation-mobile__item-link--selected{color:var(--color-selected);transition:var(--transition)}.main-navigation-mobile__item-link--selected svg{margin-right:-2px}.main-navigation-mobile__item-wrapper{box-sizing:border-box;width:calc(100% - 34px);display:flex;justify-content:space-between;margin-left:34px;border-bottom:var(--border-bottom);padding-right:34px;align-items:center}.main-navigation-mobile__child-menu{position:absolute;top:0;left:0;background:var(--telekom-color-background-surface);width:100%;min-height:var(--min-height)}.main-navigation-mobile__child-menu-current-item{line-height:var(--line-height)}.main-navigation-mobile__child-menu-current-item svg{margin-right:6px;margin-top:-4px}.main-navigation-mobile__child-menu-current{font-size:var(--telekom-typography-font-size-headline-3);font-weight:var(--telekom-typography-font-weight-extra-bold);color:var(--color-selected);text-decoration:none}.main-navigation-mobile__child-menu-current-wrapper{width:calc(100% - 34px);display:flex;align-items:center;border-bottom:var(--border-bottom);margin-left:34px}.main-navigation-mobile__child-menu-current app-icon{margin-right:var(--telekom-spacing-composition-space-04)}.main-navigation-mobile__child-menu-current .icon-back{fill:var(--color-selected)}.main-navigation-mobile__child-menu-items{list-style:none;margin:0;padding:0}.main-navigation-mobile__child-menu-item-link{text-decoration:none;color:var(--color)}.main-navigation-mobile__child-menu-item-link.selected{color:var(--color-selected)}.main-navigation-mobile__child-menu-item-link.selected .main-navigation-mobile__child-menu-item-wrapper{border-right:2px solid var(--color-selected)}.main-navigation-mobile__child-menu-item-link.selected svg{margin-right:38px}.main-navigation-mobile__child-menu-item{font-size:var(--font-size-child);line-height:var(--line-height-child);font-weight:var(--font-weight-child)}.main-navigation-mobile__child-menu-item-wrapper{width:calc(100% - 64px);display:flex;justify-content:space-between;align-items:center;border-bottom:var(--border-bottom);margin-left:var(--telekom-spacing-composition-space-17);box-sizing:border-box}.main-navigation-mobile__child-menu-item-wrapper svg{margin-right:var(--telekom-spacing-composition-space-12)}";
var hasChildren = (item) => Array.isArray(item.children) && item.children.length > 0;
var MainNavigationMobile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeMenu = createEvent(this, "closeMenu", 7);
    this.selected = void 0;
    this.parent = void 0;
  }
  handleActiveRoute(newValue) {
    this.selected = findSelected(this.navigation, newValue, null).selected;
    this.parent = findSelected(this.navigation, newValue).parent;
  }
  componentWillLoad() {
    this.selected = findSelected(this.navigation, this.activeRouteId, null).selected;
    this.parent = findSelected(this.navigation, this.activeRouteId).parent;
  }
  closeMenuHandler() {
    this.closeMenu.emit();
  }
  handlePrevSelected(event, item) {
    event.preventDefault();
    const selected = findSelected(this.navigation, item.id).parent;
    this.selected = selected;
    this.parent = selected;
  }
  handleSelect(event, item) {
    const { selected, parent } = findSelected(this.navigation, item.id);
    this.selected = selected;
    this.parent = parent;
    if (typeof item.onClick === "function") {
      item.onClick(event);
    }
    if (!hasChildren(selected)) {
      this.closeMenuHandler();
    }
  }
  childMenuPage() {
    const section = this.selected && hasChildren(this.selected) ? this.selected : this.parent;
    const { selected, parent } = findSelected(this.navigation, this.activeRouteId);
    if (!section) {
      return h("div", null);
    }
    const isActive = (child) => selected && child.id === selected.id || parent && parent.id === child.id;
    return h("div", { class: "main-navigation-mobile__child-menu" }, h("a", { class: "main-navigation-mobile__child-menu-current", href: section.href || "javascript:void(0);", onClick: (event) => {
      this.handlePrevSelected(event, section);
    }, tabIndex: 0, onKeyDown: (event) => {
      if (["Enter", " "].includes(event.key)) {
        event.preventDefault();
        this.handlePrevSelected(event, section);
        if (!this.selected) {
          this.mainNavigationWrapper.querySelector("a").focus();
        }
      }
      if (["Escape", "Esc"].includes(event.key)) {
        this.hide();
      }
    } }, h("div", { class: "main-navigation-mobile__child-menu-current-item" }, h("div", { class: "main-navigation-mobile__child-menu-current-wrapper" }, h("scale-icon-navigation-left", null), h("div", null, section.name)))), h("ul", { class: "main-navigation-mobile__child-menu-items", ref: (el) => {
      this.childrenWrapper = el;
    } }, section.children.map((child) => h("li", { class: "main-navigation-mobile__child-menu-item" }, h("a", { "aria-current": isActive(child) ? "true" : "false", "aria-haspopup": hasChildren(child) ? "true" : "false", class: `main-navigation-mobile__child-menu-item-link ${isActive(child) ? "selected" : ""}`, href: child.href || "javascript:void(0);", tabIndex: 0, onClick: (event) => {
      this.handleSelect(event, child);
    }, onKeyDown: (event) => {
      if (["Enter", " "].includes(event.key)) {
        this.handleSelect(event, child);
        setTimeout(() => {
          const firstChildren = this.childrenWrapper.querySelector("a");
          if (firstChildren) {
            this.childrenWrapper.querySelector("a").focus();
          }
        });
      }
      if (["Escape", "Esc"].includes(event.key)) {
        this.hide();
      }
    } }, h("div", { class: "main-navigation-mobile__child-menu-item-wrapper" }, h("span", null, child.name), isActive(child) && h("span", { class: "sr-only" }, "active"), hasChildren(child) && h("scale-icon-navigation-right", null)))))));
  }
  render() {
    const { selected } = findSelected(this.navigation, this.activeRouteId);
    const rootNode = selected && findRootNode(this.navigation, selected.id);
    const isActive = (itemId) => rootNode && rootNode.id === itemId;
    return h("div", { class: "main-navigation-mobile" }, this.childMenuPage(), h("ul", { class: "main-navigation-mobile__main-menu", ref: (el) => {
      this.mainNavigationWrapper = el;
    } }, (this.navigation || []).map((item) => h("li", { class: `main-navigation-mobile__item${isActive(item.id) ? " main-navigation-mobile__item--selected" : ""}` }, h("a", {
      "aria-current": isActive(item.id) ? "true" : "false",
      "aria-haspopup": hasChildren(item) ? "true" : "false",
      class: `main-navigation-mobile__item-link${isActive(item.id) ? " main-navigation-mobile__item-link--selected" : ""}`,
      href: item.href || "javascript:void(0);",
      onClick: (event) => {
        this.handleSelect(event, item);
      },
      onKeyDown: (event) => {
        if (["Enter", " "].includes(event.key)) {
          this.handleSelect(event, item);
          setTimeout(() => {
            const firstChildren = this.childrenWrapper.querySelector("a");
            if (firstChildren) {
              this.childrenWrapper.querySelector("a").focus();
            }
          });
        }
        if (["Escape", "Esc"].includes(event.key)) {
          this.hide();
        }
      },
      // hide from tab navigation when on childMenuPage
      tabIndex: this.selected ? -1 : 0
    }, h("div", { class: "main-navigation-mobile__item-wrapper" }, h("span", null, item.name), isActive(item.id) && h("span", { class: "sr-only" }, "active"), hasChildren(item) && h("scale-icon-navigation-right", null)))))));
  }
  static get watchers() {
    return {
      "activeRouteId": ["handleActiveRoute"]
    };
  }
};
MainNavigationMobile.style = appNavigationMainMobileCss;
var appNavigationSectorMobileCss = "app-navigation-sector-mobile{--border-bottom:1px solid var(--telekom-color-ui-subtle);--color:var(--telekom-color-text-and-icon-standard);--font-weight:var(--telekom-typography-font-weight-bold);--font-size:var(--telekom-typography-font-size-body);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--border-bottom-selected:1px solid var(--telekom-color-primary-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);width:100%}.sector-navigation-mobile{display:flex;width:100%;list-style:none;padding:0;margin:0;border-bottom:var(--border-bottom)}.sector-navigation-mobile__item{width:100%}.sector-navigation-mobile__item-link{color:var(--color);text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);width:100%;height:54px;display:flex;align-items:center;justify-content:center;transition:var(--transition)}.sector-navigation-mobile__item-link--selected{border-bottom:var(--border-bottom-selected);color:var(--color-selected);transition:var(--transition)}";
var NavigationSectorMobile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = this.navigation ? (
      // @ts-ignore
      this.navigation.find(({ id }) => id === this.activeSectorId) || // @ts-ignore
      this.navigation[0]
    ) : {};
  }
  handleActiveSegment(newValue) {
    this.selected = this.navigation.find(({ id }) => id === newValue) || this.navigation[0];
  }
  handleSelected(event, item) {
    this.selected = item;
    if (typeof item.onClick === "function") {
      item.onClick(event);
    }
  }
  render() {
    return h("ul", { class: "sector-navigation-mobile" }, (this.navigation || []).map((item) => h("li", { class: "sector-navigation-mobile__item" }, h("a", { class: `sector-navigation-mobile__item-link${this.selected.id === item.id ? " sector-navigation-mobile__item-link--selected" : ""}`, href: item.href || "javascript:void(0);", onClick: (event) => this.handleSelected(event, item), onKeyDown: (event) => {
      if (["Escape", "Esc"].includes(event.key)) {
        this.hide();
      }
    }, "aria-current": this.selected.id === item.id ? "true" : "false" }, item.name, this.selected.id === item.id && h("span", { class: "sr-only" }, "active")))));
  }
  static get watchers() {
    return {
      "activeSectorId": ["handleActiveSegment"]
    };
  }
};
NavigationSectorMobile.style = appNavigationSectorMobileCss;
var appNavigationUserMenuCss = ":host{--border-width-divider:var(--telekom-spacing-composition-space-01);--color-divider:var(--telekom-color-ui-subtle);--color-menu-item-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-menu-item-active:var(--telekom-color-text-and-icon-primary-pressed);--box-shadow-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard)}.app-navigation-user-menu{width:100%;position:relative;min-width:260px}.app-navigation-user-menu__divider{margin:var(--telekom-spacing-composition-space-06) 0;border:0;border-top:var(--border-width-divider) solid var(--color-divider)}@media (min-width: 1040px){.app-navigation-user-menu__user-info{margin:var(--telekom-spacing-composition-space-05)\n      var(--telekom-spacing-composition-space-08) 0\n      var(--telekom-spacing-composition-space-08)}}@media (max-width: 1039px){.app-navigation-user-menu__user-info{margin:var(--telekom-spacing-composition-space-08)\n      var(--telekom-spacing-composition-space-06) 0\n      var(--telekom-spacing-composition-space-06)}}.app-navigation-user-menu__user-info--name{font:var(--telekom-text-style-heading-5);margin-bottom:var(--telekom-spacing-composition-space-03)}.app-navigation-user-menu__user-info--email{color:var(--telekom-color-text-and-icon-additional);font:var(--telekom-text-style-body)}.app-navigation-user-menu__item{display:flex;font:var(--telekom-text-style-heading-6);padding:var(--telekom-spacing-composition-space-04)\n    var(--telekom-spacing-composition-space-06);border-radius:calc(var(--telekom-radius-small) / 2);color:var(--telekom-color-text-and-icon-standard);text-decoration:none}@media (min-width: 1040px){.app-navigation-user-menu__item{padding:var(--telekom-spacing-composition-space-04)\n      var(--telekom-spacing-composition-space-08)}}.app-navigation-user-menu__item:hover{color:var(--color-menu-item-hover)}.app-navigation-user-menu__item:active{color:var(--color-menu-item-active)}.app-navigation-user-menu__item:focus{outline:none;box-shadow:var(--box-shadow-focus)}.app-navigation-user-menu__item--icon-prefix{margin-right:var(--telekom-spacing-composition-space-04)}.app-navigation-user-menu__item--icon-suffix{margin-left:var(--telekom-spacing-composition-space-04)}.app-navigation-user-menu__button{padding:var(--telekom-spacing-composition-space-04)\n    var(--telekom-spacing-composition-space-06)}@media (min-width: 1040px){.app-navigation-user-menu__button{padding:var(--telekom-spacing-composition-space-04)\n      var(--telekom-spacing-composition-space-08)}}@media (min-width: 1040px){.app-navigation-user-menu{padding-bottom:var(--telekom-spacing-composition-space-03)}}";
var AppNavigationUserMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeMenu = createEvent(this, "closeMenu", 7);
  }
  render() {
    return h(Host, null, h("div", { class: "app-navigation-user-menu" }, this.navigation.map((item) => {
      if (item.type === "divider") {
        return h("hr", { class: "app-navigation-user-menu__divider", part: "rule-horizontal" });
      }
      if (item.type === "userInfo") {
        return h("div", { class: "app-navigation-user-menu__user-info" }, h("div", { class: "app-navigation-user-menu__user-info--name scl-font-variant-heading-4" }, item.name), h("div", { class: "app-navigation-user-menu__user-info--email" }, item.email));
      }
      if (item.type === "item") {
        return h("a", { href: item.href || "javascript:void(0);", target: item.target || "_self", tabindex: 0, class: "app-navigation-user-menu__item", onClick: (e) => {
          e.stopImmediatePropagation();
          if (item.onClick) {
            item.onClick(e);
          }
          this.hide();
        }, onKeyDown: (e) => {
          if ([" ", "Enter"].includes(e.key)) {
            e.stopImmediatePropagation();
            e.preventDefault();
            if (item.onClick) {
              item.onClick(e);
            }
            this.hide();
          }
        } }, item.icon && (!item.iconPosition || item.iconPosition === "prefix") ? renderIcon({
          tag: `scale-icon-${item.icon}`,
          attributes: {
            class: `app-navigation-user-menu__item--icon-prefix`
          }
        }) : null, item.name, item.icon && item.iconPosition === "suffix" ? renderIcon({
          tag: `scale-icon-${item.icon}`,
          attributes: {
            class: `app-navigation-user-menu__item--icon-suffix`
          }
        }) : null);
      }
      if (item.type === "button") {
        return h("scale-button", { class: "app-navigation-user-menu__button", onClick: (e) => {
          if (item.onClick) {
            item.onClick(e);
          }
          this.hide();
        }, onKeyDown: (e) => {
          if ([" ", "Enter"].includes(e.key)) {
            e.stopImmediatePropagation();
            e.preventDefault();
            if (item.onClick) {
              item.onClick(e);
            }
            this.hide();
          }
        }, href: item.href, variant: item.variant || "primary" }, item.icon && (!item.iconPosition || item.iconPosition === "prefix") ? renderIcon({
          tag: `scale-icon-${item.icon}`,
          attributes: {}
        }) : null, item.name, item.icon && item.iconPosition === "suffix" ? renderIcon({
          tag: `scale-icon-${item.icon}`,
          attributes: {}
        }) : null);
      }
    })));
  }
  get hostElement() {
    return getElement(this);
  }
};
AppNavigationUserMenu.style = appNavigationUserMenuCss;
var navIconCss = "scale-nav-icon{--spacing-mobile:var(--telekom-spacing-composition-space-00) 6px;--font-size-mobile:var(--telekom-typography-font-size-badge);--line-height-mobile:var(--telekom-typography-line-spacing-tight);--font-weight-mobile:var(--telekom-typography-font-weight-bold);--spacing-desktop:0 0 0 var(--telekom-spacing-composition-space-06);--font-size-desktop:var(--telekom-typography-font-size-small);--line-height-desktop:var(--telekom-typography-line-spacing-standard);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard)}.meta-navigation__item-link{color:var(--color);display:flex;transition:all 0.2s ease-in-out;align-items:center;font-weight:var(--font-weight-mobile);text-decoration:none;height:var(--header-nav-height)}.meta-navigation__item--selected .meta-navigation__item-link{color:var(--color)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.meta-navigation__item-link{color:var(--telekom-color-text-and-icon-inverted-standard)}}.meta-navigation__item-link:hover{color:var(--color-hover)}.meta-navigation__item-link:active{color:var(--color-active)}.meta-navigation__item-link:focus{outline:var(--focus-outline)}@media (max-width: 1039px){.meta-navigation__item-link{min-width:24px;height:auto}.meta-navigation__item-link{margin:var(--spacing-mobile);font-size:var(--font-size-mobile);line-height:var(--line-height-mobile);flex-direction:column}.meta-navigation__item.mobile-menu{width:50px;text-align:center;cursor:pointer}.meta-navigation__item-link .meta-navigation__item-link-icon{width:18px;height:18px;margin-bottom:4px}}@media (min-width: 1040px){.meta-navigation__item scale-menu-flyout{height:24px}.meta-navigation__item-link{margin:var(--spacing-desktop);font-size:var(--font-size-desktop);line-height:var(--line-height-desktop)}.meta-navigation__item-link .meta-navigation__item-link-icon{margin-right:6px}}";
var NavIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = "javascript:void(0);";
    this.isMobileMenuOpen = false;
    this.mobileMenuOpen = false;
    this.badge = false;
  }
  componentWillRender() {
    if (this.isActive !== void 0) {
      statusNote({
        tag: "deprecated",
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: "warn",
        source: this.host
      });
    }
    if (this.isMobileMenuOpen !== false) {
      statusNote({
        tag: "deprecated",
        message: 'Property "isMobileMenuOpen" is deprecated. Please use the "mobileMenuOpen" property!',
        type: "warn",
        source: this.host
      });
    }
  }
  render() {
    return h("li", { class: this.getCssClassMap() }, h("a", { class: "meta-navigation__item-link", ref: this.refMobileMenuToggle || this.refMobileUserMenuToggle || this.refUserMenuToggle, href: this.href, role: this.href === "javascript:void(0);" ? "button" : null, onClick: this.clickLink, onKeyDown: (event) => {
      if (!this.refMobileMenuToggle) {
        return;
      }
      if (["Enter", " ", "Escape", "Esc"].includes(event.key)) {
        event.preventDefault();
        this.clickLink(event);
      }
    } }, this.badge || this.badgeLabel && this.badge || this.badgeLabel ? h("scale-notification-badge", { label: this.badgeLabel, type: "nav-icon" }, renderIcon({
      tag: `scale-icon-${this.icon}`,
      attributes: {
        class: "meta-navigation__item-link-icon",
        selected: this.active || this.isActive
      }
    })) : renderIcon({
      tag: `scale-icon-${this.icon}`,
      attributes: {
        class: "meta-navigation__item-link-icon",
        selected: this.active || this.isActive
      }
    }), h("span", { class: "meta-navigation__item-label" }, h("slot", null))));
  }
  getCssClassMap() {
    return classnames("meta-navigation__item", (this.active || this.isActive || this.mobileMenuOpen || this.isMobileMenuOpen) && "meta-navigation__item--selected", !!this.refMobileMenuToggle && "mobile-menu");
  }
  get host() {
    return getElement(this);
  }
};
NavIcon.style = navIconCss;
var navMainCss = "scale-nav-main{--spacing-x:var(--telekom-typography-font-size-body);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-hovered);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-size:var(--telekom-typography-font-size-callout);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:var(--telekom-typography-line-spacing-tight);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard)}.main-navigation__item{height:100%;margin-left:var(--spacing-x);margin-right:var(--spacing-x)}.main-navigation__item:has(a[href]){cursor:pointer}.main-navigation__item-link-text{white-space:nowrap}.main-navigation__item.mega-menu--visible .mega-menu{display:block}.main-navigation__item.mega-menu--visible .mega-menu__wrapper{pointer-events:visible}.main-navigation__item .main-navigation__item-link{display:flex;height:100%;color:var(--color);font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);transition:color, border 0.2s ease-in-out;align-items:center;text-decoration:none}.main-navigation__item:hover .main-navigation__item-link{color:var(--color-hover)}.main-navigation__item:hover .main-navigation__item-link-text{border-bottom:2px solid var(--color-hover);color:var(--color-hover);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item-link:focus{outline:var(--focus-outline)}.main-navigation__item:active .main-navigation__item-link{color:var(--color-active)}.main-navigation__item:active .main-navigation__item-link-text{border-bottom:2px solid var(--color-active);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item.selected .main-navigation__item-link{color:var(--color-selected)}.main-navigation__item.selected:hover .main-navigation__item-link{color:var(--color-hover)}.main-navigation__item.selected .main-navigation__item-link-text{border-bottom:2px solid var(--color-selected);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item.selected:hover .main-navigation__item-link-text{color:var(--color-hover);border-bottom:2px solid var(--color-hover)}.main-navigation__item.mega-menu--visible .main-navigation__item-link-text{border-bottom:2px solid var(--color-hover);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.sr-only{position:absolute;left:-10000px;overflow:hidden}";
var NavMain = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isMegaMenuVisible = false;
    this.megaMenuVisible = false;
    this.href = "javascript:void(0);";
    this.target = "_self";
  }
  componentWillLoad() {
    this.hasPopup = this.popup || !!this.hostElement.querySelector("app-mega-menu");
  }
  componentWillRender() {
    if (this.isMegaMenuVisible !== false) {
      statusNote({
        tag: "deprecated",
        message: 'Property "isMegaMenuVisible" is deprecated. Please use the "megaMenuVisible" property!',
        type: "warn",
        source: this.hostElement
      });
    }
    if (this.isActive !== void 0) {
      statusNote({
        tag: "deprecated",
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: "warn",
        source: this.hostElement
      });
    }
  }
  render() {
    return h(Host, null, h("li", { class: this.getCssClassMap() }, h("a", { class: "main-navigation__item-link", href: this.href, target: this.target || "_self", "aria-current": this.active || this.isActive ? "true" : "false", "aria-haspopup": this.hasPopup ? "true" : "false", onClick: this.clickLink, id: this.innerId }, h("span", { class: "main-navigation__item-link-text" }, this.name), (this.active || this.isActive) && h("span", { class: "sr-only" }, "active")), h("slot", null)));
  }
  getCssClassMap() {
    return classnames("main-navigation__item", (this.megaMenuVisible || this.isMegaMenuVisible) && "mega-menu--visible", (this.active || this.isActive) && "selected");
  }
  get hostElement() {
    return getElement(this);
  }
};
NavMain.style = navMainCss;
var navSegmentCss = "scale-nav-segment{--transition:all 0.2s ease-in-out;--color:var(--telekom-color-text-and-icon-white-standard);--spacing-y:var(--telekom-spacing-composition-space-03);--font-size:var(--telekom-typography-font-size-caption);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:var(--telekom-typography-line-spacing-extra-tight);--border-bottom:1px solid var(--telekom-color-text-and-icon-white-standard);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard)}.sr-only{position:absolute;left:-10000px;overflow:hidden}.segment-navigation__item{list-style:none}.segment-navigation__item-link{color:var(--color);padding:var(--spacing-y) 0;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);transition:var(--transition);text-decoration:none}.segment-navigation__item-link:hover,.segment-navigation__item-link.active{border-bottom:var(--border-bottom);transition:var(--transition)}.segment-navigation__item-link:focus{outline:var(--focus-outline)}";
var NavSegment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = "javascript:void(0);";
  }
  componentWillRender() {
    if (this.isActive !== void 0) {
      statusNote({
        tag: "deprecated",
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: "warn",
        source: this.host
      });
    }
  }
  render() {
    return h("li", { class: this.getCssClassMap() }, h("a", { class: classnames("segment-navigation__item-link", (this.active || this.isActive) && "active"), href: this.href, onFocus: () => {
      window.scrollTo({ top: 0 });
    }, "aria-current": this.active || this.isActive ? "true" : "false" }, h("slot", null), (this.active || this.isActive) && h("span", { class: "sr-only" }, "active")));
  }
  getCssClassMap() {
    return classnames("segment-navigation__item");
  }
  get host() {
    return getElement(this);
  }
};
NavSegment.style = navSegmentCss;
var notificationBadgeCss = ":host{--padding-type-text-after-badge-slot:0 0 0 12px;--padding-type-icon-after-badge-slot:0 0 0 7px;--background-color-circle:var(--telekom-color-primary-standard);--color-circle:var(--telekom-color-text-and-icon-inverted-standard);--font-size-circle:var(--telekom-typography-font-size-badge);--font-weight-circle:bold;--border-radius-circle:var(--telekom-radius-circle);--color-notification-badge-border-focus:var(\n    --telekom-color-functional-focus-standard\n  );--color-notification-badge-border-hover:var(\n    --telekom-color-text-and-icon-primary-hovered\n  );--line-width-notification-badge-border-focus:2px;--padding-notification-badge-border:8px 5px 0 5px;--margin-notification-badge-border:-8px -5px 0 -5px}.notification-badge-border{display:inline-block;border:var(--line-width-notification-badge-border-focus) solid transparent;padding:var(--padding-notification-badge-border);margin:var(--margin-notification-badge-border)}.notification-badge-border:hover{color:var(--color-notification-badge-border-hover);cursor:pointer}.notification-badge-border:focus{border:var(--line-width-notification-badge-border-focus) solid\n    var(--color-notification-badge-border-focus);outline:none;padding:var(--padding-notification-badge-border);border-radius:3px}.notification-badge{display:flex;align-items:center}.notification-badge__wrapper{text-decoration:none;position:relative;display:inline-block;justify-content:center}.notification-badge--nav-icon .notification-badge__wrapper{margin-bottom:-5px}.notification-badge__circle{display:flex;position:absolute;font-size:var(--font-size-circle);font-weight:var(--font-weight-circle);border-radius:var(--border-radius-circle);background-color:var(--background-color-circle);color:var(--color-circle);align-items:center;justify-content:center}.notification-badge.notification-badge--label .notification-badge__circle{padding:0 2px}::slotted([slot='after-badge']){padding:var(--padding-type-icon-after-badge-slot)}.notification-badge.notification-badge--text ::slotted([slot='after-badge']){padding:var(--padding-type-text-after-badge-slot)}@media (min-width: 1040px){.notification-badge.notification-badge--icon .notification-badge__circle{top:-4px;right:-2px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--icon .notification-badge__circle{top:-8px;right:-5px;height:14px;min-width:10px}.notification-badge.notification-badge--nav-icon .notification-badge__circle{top:-5px;right:4px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--nav-icon .notification-badge__circle{top:-8px;right:1px;height:14px;min-width:10px}.notification-badge.notification-badge--text .notification-badge__circle{top:-5px;right:-10px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--text .notification-badge__circle{top:-10px;right:-15px;height:14px;min-width:10px}}@media (max-width: 1039px){.notification-badge.notification-badge--icon .notification-badge__circle{top:-4px;right:-1px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--icon .notification-badge__circle{top:-6px;right:-4px;height:14px;min-width:10px}.notification-badge.notification-badge--nav-icon .notification-badge__circle{top:0px;right:-1px;height:6px;min-width:6px}.notification-badge.notification-badge--label.notification-badge--nav-icon .notification-badge__circle{top:-3px;right:-4.5px;height:12px;min-width:8px}.notification-badge.notification-badge--text .notification-badge__circle{top:-4px;right:-10px;height:6px;min-width:6px}.notification-badge.notification-badge--label.notification-badge--text .notification-badge__circle{top:-6px;right:-15px;height:14px;min-width:10px}}";
var NotificationBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.maxCharacters = 3;
    this.type = "icon";
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: "beta" });
  }
  getBadgeLabel() {
    if (this.label) {
      if (!isNaN(this.label)) {
        let labelNumber = "" + this.label;
        if (labelNumber.length > this.maxCharacters) {
          const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
          const tier = Math.floor(Math.log10(Number(this.label)) / 3) || 0;
          if (tier > 0) {
            const scaled = Number(this.label) / Math.pow(10, tier * 3);
            labelNumber = scaled.toFixed(1).replace(".0", "") + SI_SYMBOL[tier];
          }
        }
        return labelNumber;
      }
      return this.label;
    }
  }
  getRender() {
    return h("div", { class: this.getCssClassMap() }, h("span", { class: "notification-badge__wrapper" }, h("slot", null), h("span", { class: "notification-badge__circle" }, this.getBadgeLabel())), h("slot", { name: "after-badge" }));
  }
  render() {
    return h(Host, null, this.type !== "nav-icon" ? h("div", { class: "notification-badge-border", tabIndex: 0, onClick: this.clickHandler }, this.getRender()) : this.getRender());
  }
  getCssClassMap() {
    return classnames(`notification-badge`, this.label && `notification-badge--label`, this.type && `notification-badge--${this.type}`);
  }
  get hostElement() {
    return getElement(this);
  }
};
NotificationBadge.style = notificationBadgeCss;
export {
  MegaMenu as app_mega_menu,
  MainNavigationMobile as app_navigation_main_mobile,
  NavigationSectorMobile as app_navigation_sector_mobile,
  AppNavigationUserMenu as app_navigation_user_menu,
  NavIcon as scale_nav_icon,
  NavMain as scale_nav_main,
  NavSegment as scale_nav_segment,
  NotificationBadge as scale_notification_badge
};
//# sourceMappingURL=app-mega-menu_8.entry-KOVFEKYL.js.map
