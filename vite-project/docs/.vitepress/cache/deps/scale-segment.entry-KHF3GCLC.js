import {
  emitEvent
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

// node_modules/@telekom/scale-components/dist/esm/scale-segment.entry.js
var segmentCss = ":host{--background-color-selected:var(--telekom-color-ui-base);--button-radius:6px;--padding-top-bottom:var(--telekom-spacing-composition-space-03);--height:28px;--font:var(--telekom-text-style-caption-bold);--label-disabled:var(--telekom-color-text-and-icon-disabled);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color:var(--telekom-color-text-and-icon-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-medium:var(--telekom-text-style-ui-bold);--height-medium:36px;--font-large:var(--telekom-text-style-ui-bold);--height-large:40px;--background-color-hover:var(--telekom-color-ui-state-fill-hovered);--background-color-active:var(--telekom-color-ui-state-fill-pressed);display:flex;align-items:center;justify-content:center;flex:1}.segment{box-sizing:border-box;position:relative;border:0;height:100%;width:100%;border-radius:var(--button-radius);padding-top:var(--padding-top-bottom);padding-bottom:var(--padding-top-bottom);transition:var(--transition);background-color:transparent;padding:0}.segment--mask{box-sizing:border-box;display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:100%;border-radius:var(--button-radius);background-color:transparent;font:var(--font);transition:var(--transition);white-space:nowrap;color:var(--color);line-height:1}button.segment--small.segment--selected .segment--mask{padding-left:var(--telekom-spacing-composition-space-04);padding-right:var(--telekom-spacing-composition-space-05)}button.segment--icon-only.segment--small .segment--mask{padding-left:var(--telekom-spacing-composition-space-06);padding-right:var(--telekom-spacing-composition-space-06)}button.segment--small .segment--mask{padding-left:0.625rem;padding-right:0.625rem}.segment--small{height:var(--height)}.segment--medium{height:var(--height-medium)}button.segment--medium.segment--selected .segment--mask{padding-left:var(--telekom-spacing-composition-space-05);padding-right:var(--telekom-spacing-composition-space-06)}button.segment--medium .segment--mask{font:var(--font-medium);padding-left:0.875rem;padding-right:0.875rem}.segment--large{height:var(--height-large)}button.segment--large.segment--selected .segment--mask{padding-left:var(--telekom-spacing-composition-space-06);padding-right:var(--telekom-spacing-composition-space-07)}button.segment--large .segment--mask{font:var(--font-large);padding-left:var(--telekom-spacing-composition-space-06);padding-right:var(--telekom-spacing-composition-space-07)}.segment--selected{background-color:var(--background-color-selected);box-shadow:var(--telekom-shadow-raised-standard)}.segment--selected .segment--mask{color:var(--color-selected)}.segment--disabled.segment--selected .segment--mask{color:var(--label-disabled)}.segment--disabled:not(.segment--selected) .segment--mask{color:var(--label-disabled);background-color:transparent}.segment--left-sibling-selected{border-radius:0 var(--button-radius) var(--button-radius) 0;margin-left:0;clip-path:inset(-2.75rem -2.75rem -2.75rem 0);backface-visibility:hidden;overflow:hidden}.segment--right-sibling-selected{border-radius:var(--button-radius) 0 0 var(--button-radius);clip-path:inset(-2.75rem 0 -2.75rem -2.75rem);margin-right:0;backface-visibility:hidden;overflow:hidden;position:relative}.segment--left-right-sibling-selected{clip-path:inset(-2.75rem 0 -2.75rem 0);border-radius:0;margin-left:0;margin-right:0;backface-visibility:hidden}.segment:not(.segment--disabled):hover .segment--mask{background-color:var(--background-color-hover)}.segment:not(.segment--disabled):active .segment--mask{background-color:var(--background-color-active)}.segment:focus{box-shadow:var(--telekom-shadow-raised-standard);outline:var(--telekom-spacing-composition-space-02) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:var(--telekom-spacing-composition-space-01);z-index:40;position:relative}.segment:not(.segment--selected):focus{outline-offset:0}.segment--left-right-sibling-selected:focus,.segment--right-sibling-selected:focus,.segment--left-sibling-selected:focus{clip-path:none}.segment:not(.segment--icon-only) scale-icon-action-checkmark,.segment scale-icon-action-close{margin-right:var(--telekom-spacing-composition-space-03)}.segment:not(.segment--selected) scale-icon-action-checkmark{visibility:hidden !important}.segment scale-icon-action-checkmark{vertical-align:middle}.segment--selected:not(.segment--icon-only) .icon-container{display:none !important}.segment .success-icon-container{display:none}.segment--selected .success-icon-container{display:flex;justify-content:center;align-items:center}.icon-container{height:100%;display:flex;justify-content:center;align-items:center}.segment--selected .icon-container{color:var(--color-selected)}";
var i = 0;
var Segment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleClick = createEvent(this, "scale-click", 7);
    this.scaleClickLegacy = createEvent(this, "scaleClick", 7);
    this.size = "small";
    this.selected = false;
    this.disabled = false;
    this.ariaLangSelected = "selected";
    this.ariaLangDeselected = "deselected";
    this.ariaDescriptionTranslation = "$selected";
    this.handleClick = (event) => {
      if (parseInt(this.selectedIndex, 10) + 1 === this.position) {
        return;
      }
      event.preventDefault();
      this.selected = !this.selected;
      emitEvent(this, "scaleClick", {
        id: this.segmentId,
        selected: this.selected
      });
    };
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  componentWillLoad() {
    if (this.segmentId == null) {
      this.segmentId = "segment-" + i++;
    }
  }
  componentDidUpdate() {
    this.handleIcon();
  }
  getAriaDescriptionTranslation() {
    const replaceSelected = this.selected ? this.ariaLangSelected : this.ariaLangDeselected;
    const filledText = this.ariaDescriptionTranslation.replace(/\$position/g, `${this.position}`).replace(/\$selected/g, `${replaceSelected}`);
    return filledText;
  }
  handleIcon() {
    Array.from(this.hostElement.childNodes).forEach((child) => {
      if (child.nodeType === 1 && child.nodeName.substr(0, 10) === "SCALE-ICON") {
        const icon = this.hostElement.querySelector(child.nodeName);
        switch (this.size) {
          case "small":
            icon.setAttribute("size", "14");
            break;
          case "medium":
            icon.setAttribute("size", "16");
            break;
          case "large":
            icon.setAttribute("size", "20");
            break;
        }
        icon.style.display = "inline-flex";
        icon.style.marginRight = "4px";
        this.hasIcon = true;
      }
      if (child.nodeType === 3 && this.hostElement.childNodes.length === 1) {
        this.textOnly = true;
        const span = document.createElement("span");
        child.parentNode.insertBefore(span, child);
        span.appendChild(child);
      }
      if (child.nodeType === 1 && child.nodeName.substr(0, 10) === "SCALE-ICON" && this.hostElement.childNodes.length === 1) {
        this.iconOnly = true;
        this.hostElement.setAttribute("icon-only", "true");
        const icon = this.hostElement.querySelector(child.nodeName);
        icon.style.marginRight = "0px";
        this.selected ? icon.setAttribute("selected", "") : icon.removeAttribute("selected");
      }
    });
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("button", { ref: (el) => this.focusableElement = el, class: this.getCssClassMap(), id: this.segmentId, onClick: this.handleClick, disabled: this.disabled, type: "button", style: { width: this.width }, "aria-label": this.ariaLabelSegment, "aria-pressed": this.selected, part: this.getBasePartMap(), "aria-description": this.getAriaDescriptionTranslation() }, h("div", { class: "segment--mask" }, !this.iconOnly && h("div", { class: "success-icon-container" }, h("scale-icon-action-checkmark", { size: this.size === "small" ? 14 : this.size === "medium" ? 16 : 20, class: "scale-icon-action-checkmark", "aria-hidden": "true", selected: true })), h("div", { class: "icon-container" }, h("slot", { name: "segment-icon" })), h("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap("basePart");
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap("css");
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === "basePart" ? "" : "segment--";
    return classnames("segment", this.size && `${prefix}${this.size}`, this.selected && `${prefix}selected`, this.disabled && `${prefix}disabled`, this.adjacentSiblings && `${prefix}${this.adjacentSiblings.replace(/ /g, "-")}-sibling-selected`, this.hasIcon && `${prefix}has-icon`, this.iconOnly && `${prefix}icon-only`);
  }
  get hostElement() {
    return getElement(this);
  }
};
Segment.style = segmentCss;
export {
  Segment as scale_segment
};
//# sourceMappingURL=scale-segment.entry-KHF3GCLC.js.map
