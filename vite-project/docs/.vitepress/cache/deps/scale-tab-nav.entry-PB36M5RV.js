import {
  statusNote
} from "./chunk-VGXEJTC4.js";
import {
  classnames
} from "./chunk-2EMOA6GN.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-3SL7DDGR.js";

// node_modules/@telekom/scale-components/dist/esm/scale-tab-nav.entry.js
var tabNavCss = ":host{--tab-height:3rem;--tab-spacing-horizontal:var(--telekom-spacing-composition-space-05);--tab-spacing-vertical:var(--telekom-spacing-composition-space-06);--tab-radius:var(--telekom-radius-small);--tab-border-size:var(--telekom-line-weight-standard);--tab-border-size-selected:var(--telekom-line-weight-highlight);--tab-border-size-selected:3px;--tab-border-color:var(--telekom-color-ui-subtle);--tab-height-large:3.25rem;--tab-spacing-horizontal-large:var(--telekom-spacing-composition-space-06);--tab-spacing-vertical-large:0.875rem}";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var HOME = "Home";
var END = "End";
var TabNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.small = false;
    this.size = "small";
  }
  handleSelect(event) {
    const nextTab = event.target;
    if (this.getAllEnabledTabs().includes(nextTab)) {
      this.selectTab(nextTab);
    }
  }
  handleKeydown(event) {
    const target = event.target;
    let nextTab;
    if (target.getAttribute("role") !== "tab") {
      return;
    }
    if (event.altKey) {
      return;
    }
    switch (event.key) {
      case ARROW_LEFT:
        nextTab = this.getPreviousTab();
        break;
      case ARROW_RIGHT:
        nextTab = this.getNextTab();
        break;
      case HOME:
        nextTab = this.getFirstTab();
        break;
      case END:
        nextTab = this.getLastTab();
        break;
      default:
        return;
    }
    event.preventDefault();
    this.selectTab(nextTab);
  }
  connectedCallback() {
    if (!this.el.hasAttribute("role")) {
      this.el.setAttribute("role", "tablist");
    }
  }
  componentDidRender() {
    Promise.all([
      customElements.whenDefined("scale-tab-header"),
      customElements.whenDefined("scale-tab-panel")
    ]).then(() => {
      this.linkPanels();
      this.propagateSizeToTabs();
    });
    if (this.small !== false) {
      statusNote({
        tag: "deprecated",
        message: 'Property "small" is deprecated. Please use css overwrite!',
        type: "warn",
        source: this.el
      });
    }
  }
  getAllTabs() {
    return Array.from(this.el.querySelectorAll("scale-tab-header"));
  }
  getAllEnabledTabs() {
    return Array.from(this.el.querySelectorAll("scale-tab-header:not([disabled])"));
  }
  getAllPanels() {
    return Array.from(this.el.querySelectorAll("scale-tab-panel"));
  }
  getPreviousTab() {
    const tabs = this.getAllEnabledTabs();
    const index = tabs.findIndex((tab) => tab.selected) - 1;
    return tabs[(index + tabs.length) % tabs.length];
  }
  getNextTab() {
    const tabs = this.getAllEnabledTabs();
    const index = tabs.findIndex((tab) => tab.selected) + 1;
    return tabs[index % tabs.length];
  }
  getFirstTab() {
    const tabs = this.getAllEnabledTabs();
    return tabs[0];
  }
  getLastTab() {
    const tabs = this.getAllEnabledTabs();
    return tabs[tabs.length - 1];
  }
  linkPanels() {
    const tabs = this.getAllEnabledTabs();
    const selectedTab = tabs.find((x) => x.selected) || tabs[0];
    tabs.forEach((tab) => {
      const panel = tab.nextElementSibling;
      tab.setAttribute("aria-controls", panel.id);
      panel.setAttribute("aria-labelledby", tab.id);
    });
    this.selectTab(selectedTab);
  }
  reset() {
    const tabs = this.getAllEnabledTabs();
    const panels = this.getAllPanels();
    tabs.forEach((tab) => tab.selected = false);
    panels.forEach((panel) => panel.hidden = true);
  }
  findPanelForTab(tab) {
    const panelId = tab.getAttribute("aria-controls");
    return this.el.querySelector(`#${panelId}`);
  }
  selectTab(nextTab) {
    const nextPanel = this.findPanelForTab(nextTab);
    this.reset();
    nextPanel.hidden = false;
    nextTab.selected = true;
  }
  /**
   * Sets or removes the `large` prop in `scale-tab-header` and `scale-tab-panel` children.
   */
  propagateSizeToTabs() {
    const action = this.size === "large" ? "setAttribute" : "removeAttribute";
    const tabs = this.getAllTabs();
    const panels = this.getAllPanels();
    [...tabs, ...panels].forEach((child) => child[action]("size", "large"));
  }
  render() {
    return h(Host, { class: "scale-tab-nav" }, this.styles && h("style", null, this.styles), h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, h("slot", { name: "tab" }), h("slot", { name: "panel" })));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap("basePart");
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap("css");
  }
  getCssOrBasePartMap(mode) {
    const component = "tab-nav";
    const prefix = mode === "basePart" ? "" : `${component}--`;
    return classnames(component, `${prefix}`);
  }
  get el() {
    return getElement(this);
  }
};
TabNav.style = tabNavCss;
export {
  TabNav as scale_tab_nav
};
//# sourceMappingURL=scale-tab-nav.entry-PB36M5RV.js.map
