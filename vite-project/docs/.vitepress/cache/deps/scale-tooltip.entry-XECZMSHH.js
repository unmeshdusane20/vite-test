import {
  arrow,
  computePosition,
  flip,
  offset,
  shift
} from "./chunk-TEJSZTTM.js";
import {
  isClickOutside
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

// node_modules/@telekom/scale-components/dist/esm/scale-tooltip.entry.js
var tooltipCss = ":host{--radius:var(--telekom-radius-small);--background:var(--telekom-color-background-surface-highlight);--color:var(--telekom-color-text-and-icon-white-standard);--font-weight:var(--telekom-typography-font-weight-regular);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing:var(--telekom-spacing-composition-space-02)\n    var(--telekom-spacing-composition-space-04);--arrow-size:12px;--transition-delay-hide:var(--telekom-motion-duration-instant);--transition-duration-hide:var(--telekom-motion-duration-immediate);--transition-timing-function-hide:var(--telekom-motion-easing-standard);--transition-duration-show:var(--telekom-motion-duration-immediate);--transition-timing-function-show:var(--telekom-motion-easing-standard);--z-index:var(--scl-z-index-70);display:contents;position:relative;box-sizing:border-box}[part='tooltip']{position:absolute;z-index:var(--z-index);top:0;left:0;background:var(--background);color:var(--color);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);padding:var(--spacing);border-radius:var(--radius);transition-property:opacity;transition-duration:var(--transition-duration-show);transition-timing-function:var(--transition-timing-function-show)}[part='tooltip'][aria-hidden='true']{opacity:0;transition-delay:var(--transition-delay-hide);transition-duration:var(--transition-duration-hide);transition-timing-function:var(--transition-timing-function-hide);pointer-events:none}[part='trigger']{}[part='arrow']{position:absolute;z-index:-1;background:var(--background);width:var(--arrow-size);height:var(--arrow-size);transform:rotate(45deg)}@media screen and (-ms-high-contrast: active){[part='tooltip']{border:1px solid yellow}}";
var id = 0;
var Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tooltipBeforeShow = createEvent(this, "scale-before-show", 7);
    this.tooltipShow = createEvent(this, "scale-show", 7);
    this.tooltipBeforeHide = createEvent(this, "scale-before-hide", 7);
    this.tooltipHide = createEvent(this, "scale-hide", 7);
    this.componentId = `tooltip-${++id}`;
    this.content = "";
    this.placement = "top";
    this.disabled = false;
    this.distance = 10;
    this.arrowOffset = -4;
    this.arrowPadding = 8;
    this.opened = false;
    this.trigger = "hover focus";
    this.flip = true;
    this.mouseOverTooltip = false;
    this.update = async () => {
      if (this.disabled || this.triggerEl == null) {
        return;
      }
      const { x, y, placement, middlewareData } = await computePosition(this.triggerEl, this.tooltipEl, {
        placement: this.placement,
        middleware: [
          offset(this.distance),
          ...this.flip ? [flip()] : [],
          arrow({ element: this.arrowEl, padding: this.arrowPadding }),
          shift({ crossAxis: true })
        ]
      });
      Object.assign(this.tooltipEl.style, {
        left: `${x}px`,
        top: `${y}px`
      });
      const { x: arrowX, y: arrowY } = middlewareData.arrow;
      const [side] = placement.split("-");
      const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[side];
      Object.assign(this.arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : "",
        top: arrowY != null ? `${arrowY}px` : "",
        right: "",
        bottom: "",
        [staticSide]: `${this.arrowOffset}px`
      });
    };
    this.handleBlur = () => {
      if (this.hasTrigger("focus")) {
        this.hideTooltip();
      }
    };
    this.handleClick = () => {
      if (this.hasTrigger("click")) {
        this.opened && !this.hasTrigger("focus") ? this.hideTooltip() : this.showTooltip();
      }
    };
    this.handleFocus = () => {
      if (this.hasTrigger("focus")) {
        this.showTooltip();
      }
    };
    this.handleKeyDown = (event) => {
      if (this.opened && event.key === "Escape") {
        event.stopPropagation();
        this.hideTooltip();
      }
    };
    this.handleMouseOver = () => {
      if (this.hasTrigger("hover")) {
        this.showTooltip();
      }
    };
    this.handleMouseOut = () => {
      if (!this.mouseOverTooltip) {
        if (this.hasTrigger("hover")) {
          this.hideTooltip();
        }
      }
    };
    this.handleTooltipMouseOver = () => {
      this.mouseOverTooltip = true;
    };
    this.handleTooltipBlur = () => {
      this.mouseOverTooltip = false;
      this.handleMouseOut();
    };
    this.hasTrigger = (triggerType) => {
      const triggers = this.trigger.split(" ");
      return triggers.includes(triggerType);
    };
  }
  handleOpenChange() {
    this.opened ? this.showTooltip() : this.hideTooltip();
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: "beta" });
    if (this.hostElement.hasAttribute("open")) {
      statusNote({
        tag: "deprecated",
        message: "The `open` prop is deprecated in favor of `opened`",
        source: this.hostElement
      });
    }
    const children = Array.from(this.hostElement.children).filter((x) => !x.hasAttribute("slot"));
    if (children.length === 0) {
      statusNote({
        tag: "warning",
        message: "An element is required, if using text, wrap it in a `<span>`",
        type: "warn",
        source: this.hostElement
      });
      return;
    }
    this.triggerEl = children[0];
    this.triggerEl.addEventListener("blur", this.handleBlur, true);
    this.triggerEl.addEventListener("click", this.handleClick, true);
    this.triggerEl.addEventListener("focus", this.handleFocus, true);
    this.triggerEl.addEventListener("mouseover", this.handleMouseOver, true);
    this.triggerEl.addEventListener("mouseout", this.handleMouseOut, true);
  }
  disconnectedCallback() {
    this.triggerEl.removeEventListener("blur", this.handleBlur, true);
    this.triggerEl.removeEventListener("click", this.handleClick, true);
    this.triggerEl.removeEventListener("focus", this.handleFocus, true);
    this.triggerEl.removeEventListener("mouseover", this.handleMouseOver, true);
    this.triggerEl.removeEventListener("mouseout", this.handleMouseOut, true);
  }
  handleOutsideClick(event) {
    if (isClickOutside(event, this.hostElement)) {
      this.hideTooltip();
    }
  }
  componentDidUpdate() {
    this.update();
    if (this.opened) {
      this.showTooltip();
    }
  }
  componentDidRender() {
    this.update();
  }
  async showTooltip() {
    if (this.opened) {
      return;
    }
    const scaleShow = this.tooltipBeforeShow.emit();
    if (scaleShow.defaultPrevented) {
      this.opened = false;
      return;
    }
    this.opened = true;
    this.update();
  }
  async hideTooltip() {
    if (!this.opened) {
      return;
    }
    const tooltipBeforeHide = this.tooltipBeforeHide.emit();
    if (tooltipBeforeHide.defaultPrevented) {
      this.opened = true;
      return;
    }
    this.opened = false;
    this.update();
  }
  render() {
    return h(Host, { onKeyDown: this.handleKeyDown }, this.styles && h("style", null, this.styles), h("span", { part: "trigger", "aria-describedby": this.componentId }, h("slot", null)), !this.disabled && h("div", { part: "tooltip", role: "tooltip", "aria-hidden": this.opened ? "false" : "true", ref: (el) => this.tooltipEl = el, id: this.componentId, onMouseOver: this.handleTooltipMouseOver, onMouseLeave: this.handleTooltipBlur }, h("slot", { name: "content" }, this.content), h("div", { "aria-hidden": "true", part: "arrow", ref: (el) => this.arrowEl = el })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "opened": ["handleOpenChange"]
    };
  }
};
Tooltip.style = tooltipCss;
export {
  Tooltip as scale_tooltip
};
//# sourceMappingURL=scale-tooltip.entry-XECZMSHH.js.map
