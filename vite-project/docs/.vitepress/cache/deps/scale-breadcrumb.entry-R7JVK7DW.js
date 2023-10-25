import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-breadcrumb.entry.js
var breadcrumbCss = ":host{--spacing-left:calc(-1 * var(--telekom-spacing-composition-space-04));--font-size-list-item:var(--telekom-typography-font-size-caption);--color-separator:var(--telekom-color-text-and-icon-additional);--spacing-y-item:var(--telekom-spacing-composition-space-03);--spacing-x-item:var(--telekom-spacing-composition-space-04);--color-link:var(--telekom-color-text-and-icon-additional);--radius-link:var(--telekom-radius-standard);--color-link-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-link-active:var(--telekom-color-text-and-icon-primary-pressed);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--font-current:var(--telekom-text-style-caption-bold);--color-current:var(--telekom-color-text-and-icon-standard)}.breadcrumb{margin-left:var(--spacing-left)}.breadcrumb__list{display:flex;list-style:none;margin-top:0;padding-left:0;margin-bottom:0}.breadcrumb__list-item{display:inline-flex;font-size:var(--font-size-list-item);align-items:center}.breadcrumb__separator{display:flex;color:var(--color-separator)}.breadcrumb__item,.breadcrumb__link{padding:var(--spacing-y-item) var(--spacing-x-item)}.breadcrumb__link{text-decoration:none;color:var(--color-link);border-radius:var(--radius-link)}.breadcrumb__link:hover{color:var(--color-link-hover)}.breadcrumb__link:active{color:var(--color-link-active)}.breadcrumb__link:focus{outline:var(--focus-outline)}.breadcrumb__current{font:var(--font-current);color:var(--color-current)}";
var Breadcrumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.linksArray = [];
    this.separatorSlot = null;
  }
  componentWillLoad() {
    if (this.linksArray.length === 0) {
      this.setLinksArray();
    }
    this.separatorSlot = this.hostElement.querySelector('[slot="separator"]');
  }
  componentDidLoad() {
    const observer = new MutationObserver(() => {
      this.setLinksArray();
    });
    observer.observe(this.hostElement, {
      attributes: false,
      childList: true,
      subtree: true
    });
    this.mo = observer;
  }
  disconnectedCallback() {
    if (this.mo) {
      this.mo.disconnect();
    }
  }
  setLinksArray() {
    this.linksArray = Array.from(this.hostElement.children).filter((element) => element.slot === "");
  }
  render() {
    const isLast = (index) => index === this.linksArray.length - 1;
    const getCurrentAttr = (index) => isLast(index) === true ? { "aria-current": "page" } : void 0;
    return h(Host, null, this.styles && h("style", null, this.styles), h("nav", { "aria-label": "Breadcrumb", class: this.getCssClassMap(), part: "base" }, h("ol", { class: "breadcrumb__list", part: "list" }, this.linksArray.map((element, index) => {
      const separator = this.separatorSlot != null ? h("span", { class: "breadcrumb__separator", part: "separator", innerHTML: this.separatorSlot.innerHTML }) : h("span", { class: "breadcrumb__separator", part: "separator" }, this.separator || h("scale-icon-navigation-right", { size: 12 }));
      return h("li", { class: "breadcrumb__list-item", part: "list-item" }, element.href || element.tagName === "SCALE-LINK" ? h("a", Object.assign({ href: element.href, class: classnames(isLast(index) && "breadcrumb__current", "breadcrumb__link"), part: classnames(isLast(index) && "current", "link") }, getCurrentAttr(index)), element.textContent) : h("span", { class: classnames(isLast(index) && "breadcrumb__current", "breadcrumb__item"), part: classnames(isLast(index) && "current", "item") }, element.textContent), isLast(index) ? null : separator);
    }))));
  }
  getCssClassMap() {
    return classnames("breadcrumb");
  }
  get hostElement() {
    return getElement(this);
  }
};
Breadcrumb.style = breadcrumbCss;
export {
  Breadcrumb as scale_breadcrumb
};
//# sourceMappingURL=scale-breadcrumb.entry-R7JVK7DW.js.map
