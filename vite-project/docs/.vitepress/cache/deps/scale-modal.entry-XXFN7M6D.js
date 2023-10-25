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

// node_modules/@telekom/scale-components/dist/esm/scale-modal.entry.js
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
  const matches = [];
  if (depth >= maxDepth) {
    return matches;
  }
  const traverseSlot = ($slot) => {
    const assignedNodes = $slot.assignedNodes().filter((node) => node.nodeType === 1);
    if (assignedNodes.length > 0) {
      const $slotParent = assignedNodes[0].parentElement;
      return queryShadowRoot($slotParent, skipNode, isMatch, maxDepth, depth + 1);
    }
    return [];
  };
  const children = Array.from(root.children || []);
  for (const $child of children) {
    if (skipNode($child)) {
      continue;
    }
    if (isMatch($child)) {
      matches.push($child);
    }
    if ($child.shadowRoot != null) {
      matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
    } else if ($child.tagName === "SLOT") {
      matches.push(...traverseSlot($child));
    } else {
      matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
    }
  }
  return matches;
}
function isHidden($elem) {
  return $elem.hasAttribute("hidden") || $elem.hasAttribute("aria-hidden") && $elem.getAttribute("aria-hidden") !== "false" || // A quick and dirty way to check whether the element is hidden.
  // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
  // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
  // we won't be able to catch it here. We accept it due to the huge performance benefits.
  $elem.style.display === `none` || $elem.style.opacity === `0` || $elem.style.visibility === `hidden` || $elem.style.visibility === `collapse`;
}
function isDisabled($elem) {
  return $elem.hasAttribute("disabled") || $elem.hasAttribute("aria-disabled") && $elem.getAttribute("aria-disabled") !== "false";
}
function isFocusable($elem) {
  if ($elem.getAttribute("tabindex") === "-1" || isHidden($elem) || isDisabled($elem)) {
    return false;
  }
  return (
    // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
    $elem.hasAttribute("tabindex") || // Anchor tags or area tags with a href set
    ($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) && $elem.hasAttribute("href") || // Form elements which are not disabled
    $elem instanceof HTMLButtonElement || $elem instanceof HTMLInputElement || $elem instanceof HTMLTextAreaElement || $elem instanceof HTMLSelectElement || // IFrames
    $elem instanceof HTMLIFrameElement
  );
}
function animateTo(element, keyframes, options) {
  const anim = element.animate(keyframes, Object.assign(Object.assign({}, options), { fill: "both" }));
  anim.addEventListener("finish", () => {
    anim.commitStyles();
    anim.cancel();
  });
  return anim;
}
var keyframeDefaults = {
  easing: "cubic-bezier(0.390, 0.575, 0.565, 1.000)"
};
var KEYFRAMES = {
  fadeIn: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 1 })
  ],
  fadeOut: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 0 })
  ],
  fadeInTop: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), {
      opacity: 0,
      /**
       * we are not using transform here to avoid breaking positioning for nested fixed elements (i.e. a flyout menu in an animated modal)
       * see 'fixed' section @link https://developer.mozilla.org/en-US/docs/Web/CSS/position
       */
      top: "-3rem"
    }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 1, top: 0 })
  ]
};
var modalCss = ":host{--spacing-x:var(--telekom-spacing-composition-space-06);--background-overlay:var(\n    --telekom-color-background-backdrop,\n    rgba(108, 108, 108, 0.7)\n  );--max-height-window:calc(\n    100vh - (2 * var(--telekom-spacing-composition-space-19))\n  );--radius-window:var(--telekom-radius-large);--box-shadow-window:var(--telekom-shadow-top);--background-window:var(--telekom-color-background-surface);--color-window:var(--telekom-color-text-and-icon-standard);--size-window-small:calc(\n    (6 * var(--telekom-spacing-unit-x14, 3.5rem)) +\n      (5 * var(--telekom-spacing-composition-space-10))\n  );--size-window-default:calc(\n    (8 * var(--telekom-spacing-unit-x14, 3.5rem)) +\n      (7 * var(--telekom-spacing-composition-space-10))\n  );--size-window-large:calc(\n    (12 * var(--telekom-spacing-unit-x14, 3.5rem)) +\n      (11 * var(--telekom-spacing-composition-space-10))\n  );--spacing-x-header:var(--telekom-spacing-composition-space-08);--spacing-y-header:var(--telekom-spacing-composition-space-08);--border-bottom-header-has-scroll:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-subtle);--font-family-heading:var(--telekom-typography-font-family-sans);--font-size-heading:var(--telekom-typography-font-size-callout);--font-weight-heading:var(--telekom-typography-font-weight-extra-bold);--spacing-close-button:var(--telekom-spacing-composition-space-04);--radius-close-button:var(--telekom-radius-standard);--transition-close-button:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--box-shadow-close-button-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus-standard);--color-close-button:var(--telekom-color-text-and-icon-standard);--color-close-button-hover:var(--telekom-color-primary-hovered);--color-close-button-active:var(--telekom-color-primary-pressed);--spacing-x-body-wrapper:var(--telekom-spacing-composition-space-08);--spacing-y-body:var(--telekom-spacing-composition-space-08);--spacing-actions:var(--telekom-spacing-composition-space-06)\n    var(--telekom-spacing-composition-space-08)\n    var(--telekom-spacing-composition-space-08);--spacing-x-actions-slotted:var(--telekom-spacing-composition-space-04);--background-actions-has-scroll:var(\n    --telekom-color-background-surface-subtle\n  )}.modal{top:0;left:0;width:100%;bottom:0;display:none;z-index:100;position:fixed;background:var(--background-overlay);box-sizing:border-box;align-items:center;justify-content:center;padding-left:var(--spacing-x);padding-right:var(--spacing-x)}.modal.modal--is-open{display:flex}.modal__backdrop{top:0;left:0;width:100%;height:100%;z-index:0;position:absolute}.modal__window{width:100%;height:auto;display:flex;z-index:1;position:relative;overflow-y:auto;flex-direction:column;background-color:var(--background-window);color:var(--color-window);max-height:var(--max-height-window);min-height:var(--min-height-window);border-radius:var(--radius-window);box-shadow:var(--box-shadow-window)}.modal__window .modal__body-wrapper{overflow-y:auto;flex-shrink:1;flex-grow:1}.modal--size-small .modal__window{max-width:var(--size-window-small)}.modal--size-default .modal__window{max-width:var(--size-window-default)}.modal--size-large .modal__window{max-width:var(--size-window-large)}@media (max-height: 30em){.modal__window{max-height:calc(100vh - var(--telekom-spacing-composition-space-08))}}.modal__window:after{top:0;left:0;width:100%;border:1px solid transparent;height:100%;content:'';display:block;position:absolute;box-sizing:border-box;pointer-events:none;border-radius:var(--radius-window)}.modal__header{display:flex;align-items:flex-start;flex-shrink:0;justify-content:space-between;margin-left:var(--spacing-x-header);margin-right:var(--spacing-x-header);padding-top:var(--spacing-y-header);padding-bottom:var(--spacing-y-header)}.modal--has-scroll .modal__header{border-bottom:var(--border-bottom-header-has-scroll)}.modal__heading{margin:0;font-family:var(--font-family-heading);font-size:var(--font-size-heading);font-weight:var(--font-weight-heading)}.modal__close-button{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;padding:var(--spacing-close-button);margin-bottom:calc(-2 * var(--spacing-close-button));border:0;border-radius:var(--radius-close-button);outline:none;color:var(--color-close-button);background:transparent;transition:var(--transition-close-button);transform:translate(\n    var(--spacing-close-button),\n    calc(-1 * var(--spacing-close-button))\n  );appearance:none;cursor:pointer;user-select:none}.modal__close-button:focus{box-shadow:var(--box-shadow-close-button-focus)}.modal__close-button:hover{color:var(--color-close-button-hover)}.modal__close-button:active{color:var(--color-close-button-active)}.modal__body-wrapper{padding-left:var(--spacing-x-body-wrapper);padding-right:var(--spacing-x-body-wrapper)}.modal--has-body .modal__body-wrapper{min-height:var(--telekom-spacing-related-lg)}.modal--has-body .modal__body{margin-top:0;margin-bottom:0}.modal--has-body:not(.modal--has-actions) .modal__body{margin-bottom:var(--spacing-y-body)}.modal--has-scroll.modal--has-body .modal__body{margin-top:var(--spacing-y-body);margin-bottom:var(--spacing-y-body)}.modal--has-body .modal__body ::slotted(*){font:var(--telekom-text-style-body)}.modal--has-body .modal__body ::slotted(*:not([slot]):first-child){margin-top:0}.modal--has-body .modal__body ::slotted(*:not([slot]):last-of-type){margin-bottom:0}.modal__actions{display:none;flex-shrink:0;justify-content:flex-end;padding:var(--spacing-actions)}.modal__actions ::slotted(*){margin-left:var(--spacing-x-actions-slotted)}.modal--has-actions .modal__actions{display:flex}.modal--align-actions-left .modal__actions{justify-content:flex-start}.modal--has-scroll .modal__actions{background-color:var(--background-actions-has-scroll)}";
var supportsResizeObserver = "ResizeObserver" in window;
var Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleOpen = createEvent(this, "scale-open", 7);
    this.scaleOpenLegacy = createEvent(this, "scaleOpen", 7);
    this.scaleBeforeClose = createEvent(this, "scale-before-close", 7);
    this.scaleBeforeCloseLegacy = createEvent(this, "scaleBeforeClose", 7);
    this.scaleClose = createEvent(this, "scale-close", 7);
    this.scaleCloseLegacy = createEvent(this, "scaleClose", 7);
    this.size = "default";
    this.opened = false;
    this.duration = 200;
    this.closeButtonLabel = "Close";
    this.closeButtonTitle = "Close";
    this.omitCloseButton = false;
    this.alignActions = "right";
    this.allowInjectingStyleToBody = false;
    this.isOpen = this.opened || false;
    this.hasActionsSlot = false;
    this.hasBody = false;
    this.hasScroll = false;
    this.bodyOverflowValue = "";
    this.focusableElements = [];
    this.handleKeypress = (event) => {
      if (!this.isOpen) {
        return;
      }
      if (event.key === "Escape") {
        this.emitBeforeClose("ESCAPE_KEY");
      }
    };
    this.handleTopFocus = () => {
      this.attemptFocus(this.getLastFocusableElement());
    };
    this.handleBottomFocus = () => {
      this.attemptFocus(this.getFirstFocusableElement());
    };
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  /**
   * Set `hasActionsSlot` and `hasBody`.
   */
  componentWillRender() {
    const actionSlots = this.hostElement.querySelectorAll('[slot="action"]');
    const bodySlot = Array.from(this.hostElement.shadowRoot.querySelectorAll("slot")).find((x) => !x.name);
    this.hasActionsSlot = actionSlots.length > 0;
    if (bodySlot != null) {
      this.hasBody = bodySlot.assignedElements().length > 0;
    }
  }
  emitBeforeClose(trigger) {
    const emittedEvents = emitEvent(this, "scaleBeforeClose", { trigger });
    const prevented = emittedEvents.some((event) => event.defaultPrevented);
    if (!prevented) {
      this.opened = false;
    }
  }
  componentDidLoad() {
    this.focusableElements = queryShadowRoot(this.hostElement.shadowRoot, (el) => isHidden(el) || el.matches("[data-focus-trap-edge]"), isFocusable);
    if (supportsResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        this.setHasScroll();
      });
      this.resizeObserver.observe(this.modalBody);
    }
    this.setHasScroll();
  }
  setHasScroll() {
    const container = this.modalBody;
    this.hasScroll = container.scrollHeight > container.clientHeight;
  }
  getFirstFocusableElement() {
    return this.focusableElements[0];
  }
  getLastFocusableElement() {
    return this.focusableElements[this.focusableElements.length - 1];
  }
  attemptFocus(element) {
    if (element == null) {
      this.closeButton.focus();
      return;
    }
    element.focus();
  }
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
      if (this.allowInjectingStyleToBody) {
        this.bodyOverflowValue = document.body.style.overflow;
        document.body.style.setProperty("overflow", "hidden");
      }
    } else {
      this.close();
      if (this.allowInjectingStyleToBody) {
        document.body.style.setProperty("overflow", this.bodyOverflowValue);
      }
    }
  }
  open() {
    this.isOpen = true;
    try {
      animateTo(this.modalWindow, KEYFRAMES.fadeInTop, {
        duration: this.duration,
        delay: this.duration * 0.5
      });
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeIn, {
        duration: this.duration
      });
      anim.addEventListener("finish", () => {
        this.attemptFocus(this.getFirstFocusableElement());
        emitEvent(this, "scaleOpen");
      });
      this.hostElement.addEventListener("keydown", this.handleKeypress);
    } catch (err) {
      emitEvent(this, "scaleOpen");
    }
  }
  close() {
    try {
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeOut, {
        duration: this.duration
      });
      anim.addEventListener("finish", () => {
        this.isOpen = false;
        emitEvent(this, "scaleClose");
      });
      this.hostElement.removeEventListener("keydown", this.handleKeypress);
    } catch (err) {
      this.isOpen = false;
      emitEvent(this, "scaleClose");
    }
  }
  render() {
    return h(Host, null, this.styles && h("style", null, this.styles), h("div", { ref: (el) => this.modalContainer = el, class: this.getCssClassMap(), part: classnames("base", this.isOpen && "open") }, h("div", { class: "modal__backdrop", part: "backdrop", onClick: () => this.emitBeforeClose("BACKDROP") }), h("div", { "data-focus-trap-edge": true, onFocus: this.handleTopFocus, tabindex: "0" }), h("div", { class: "modal__window", part: classnames("window", this.size && `size-${this.size}`), ref: (el) => this.modalWindow = el, role: "dialog", "aria-modal": "true", "aria-label": this.heading }, h("div", { class: "modal__header", part: classnames("header", this.hasScroll && "has-scroll") }, h("h2", { class: "modal__heading", part: "heading" }, this.heading), !this.omitCloseButton && h("button", { ref: (el) => this.closeButton = el, class: "modal__close-button", part: "close-button", onClick: () => this.emitBeforeClose("CLOSE_BUTTON"), "aria-label": this.closeButtonLabel, title: this.closeButtonTitle }, h("slot", { name: "close-icon" }, h("scale-icon-action-circle-close", { decorative: true })))), h("div", { ref: (el) => this.modalBody = el, class: "modal__body-wrapper", part: classnames("body-wrapper", this.hasBody && "has-body") }, h("div", { class: "modal__body", part: classnames("body", this.hasBody && "has-body") }, h("slot", null))), h("div", { class: "modal__actions", part: classnames("actions", `align-${this.alignActions}`, this.hasActionsSlot && "has-actions", this.hasScroll && "has-scroll") }, h("slot", { name: "action" }))), h("div", { "data-focus-trap-edge": true, onFocus: this.handleBottomFocus, tabindex: "0" })));
  }
  getCssClassMap() {
    return classnames("modal", this.isOpen && "modal--is-open", this.hasActionsSlot && "modal--has-actions", `modal--align-actions-${this.alignActions}`, this.hasScroll && "modal--has-scroll", this.hasBody && "modal--has-body", this.size && `modal--size-${this.size}`);
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
Modal.style = modalCss;
export {
  Modal as scale_modal
};
/*! Bundled license information:

@telekom/scale-components/dist/esm/scale-modal.entry.js:
  (**
   * @license
   * Scale https://github.com/telekom/scale
   *
   * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
   *
   * This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at https://mozilla.org/MPL/2.0/.
   *)
*/
//# sourceMappingURL=scale-modal.entry-XXFN7M6D.js.map
