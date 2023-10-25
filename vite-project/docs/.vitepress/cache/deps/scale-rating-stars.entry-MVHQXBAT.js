import {
  emitEvent
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

// node_modules/@telekom/scale-components/dist/esm/scale-rating-stars.entry.js
var ratingStarsCss = ":host{--stars-color:var(--telekom-color-text-and-icon-primary-standard);--stars-hover-color:var(--telekom-color-text-and-icon-primary-hovered);--stars-active-color:var(--telekom-color-text-and-icon-primary-pressed);--stars-inactive-color:transparent;--stars-placeholder-color:var(--telekom-color-ui-border-standard);--stars-placeholder-hover-color:var(--telekom-color-ui-border-hovered);--stars-disabled-color:var(--telekom-color-text-and-icon-disabled);--stars-spacing:var(--telekom-spacing-composition-space-02);--stars-transition:color var(--telekom-motion-duration-immediate);--stars-size:24px;--label-font:var(--telekom-text-style-ui);--infotext-font:var(--telekom-text-style-body);--infotext-font-small:var(--telekom-text-style-body);--infotext-color:var(--telekom-color-text-and-icon-additional);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard)}[star-size='small'],[size='small']{--stars-size:16px}[part='container']{display:inline-flex;flex-direction:column;position:relative}[part='range-slider']{position:absolute;border:0;margin:0;left:calc(-1 * var(--stars-size));bottom:0;z-index:2;width:calc(100% + var(--stars-size) * 2);opacity:0;height:var(--stars-size)}@media (hover: hover){[part='range-slider']{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}}input[type='range']::-webkit-slider-thumb{-webkit-appearance:none;border:0;height:var(--stars-size);width:var(--stars-size);border-radius:50%;background:#ffffff;cursor:pointer;margin-left:0px;margin-top:0}[part='content']{display:flex;align-items:center}[part='wrapper']{display:inline-flex;border-radius:var(--telekom-spacing-composition-space-03);margin-left:calc(-1 * var(--stars-spacing))}[part='wrapper']:hover [part='star'] [part='selected-star']{opacity:1}[part='star']>*{pointer-events:none}[part='label']{font:var(--label-font);margin-bottom:var(--telekom-spacing-composition-space-04);white-space:nowrap}[part='infotext']{margin-left:var(--telekom-spacing-composition-space-04);display:flex;align-items:center;font:var(--infotext-font);color:var(--infotext-color);white-space:nowrap}:host([size='small']) [part='infotext']{font:var(--infotext-font-small)}[part='star']{--decimal-width:100%;display:inline-flex;position:relative;color:var(--stars-color);cursor:pointer;padding:0 var(--stars-spacing)}[part='placeholder-star']{display:inline-flex;color:var(--stars-placeholder-color);transition:var(--stars-transition)}[part='selected-star']{color:var(--stars-inactive-color);margin-left:0px;position:relative;transition:var(--stars-transition)}.icon-clip{overflow:hidden;position:absolute;width:var(--decimal-width);height:100%}[part='star'][data-half]{--decimal-width:calc(50% - var(--stars-spacing))}[part='star'][data-selected]{--stars-placeholder-color:transparent}[part='star'][data-half]{--stars-placeholder-color:currentColor}[part='star'][data-selected] [part='selected-star']{color:var(--stars-color)}@media (hover: hover){[part='wrapper']:hover{--stars-color:var(--stars-hover-color);--stars-placeholder-color:transparent}[part='wrapper']:hover [part='star']{--decimal-width:100%}[part='wrapper']:hover [part='star'][data-half]{--stars-placeholder-color:transparent}[part='wrapper']:hover [part='selected-star']{color:var(--stars-color)}[part='star']:hover~[part='star'] [part='selected-star']{color:var(--stars-inactive-color)}[part='star']:hover~[part='star'] [part='placeholder-star']{color:var(--stars-placeholder-hover-color)}}[part='wrapper']:active{--stars-color:var(--stars-active-color)}:host(:focus-within) [part='wrapper'],[part='wrapper']:focus{outline:var(--focus-outline)}:host(.readonly) [part='wrapper']{--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.disabled) [part='label'],:host(.disabled) [part='infotext']{color:var(--stars-disabled-color)}:host(.disabled) [part='wrapper']{--stars-color:var(--stars-disabled-color);--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.hideLabel) [part='label']{visibility:hidden;height:0;margin-bottom:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='star'] [part='placeholder-star']{color:var(--telekom-color-text-and-icon-inverted-standard)}[part='star'][data-selected] [part='placeholder-star']{color:var(--stars-inactive-color)}[part='star']:hover~[part='star'] [part='placeholder-star']{color:var(--telekom-color-text-and-icon-inverted-standard)}[part='wrapper']:hover [part='placeholder-star']{color:var(--stars-inactive-color)}}";
var sizes = {
  small: 16,
  large: 24
};
var ratingStarCount = 0;
var RatingStars = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.ratingStarId = `scale-rating-star-${ratingStarCount++}`;
    this.starSize = "large";
    this.size = "large";
    this.minRating = 0;
    this.maxRating = 5;
    this.max = 5;
    this.rating = 0;
    this.readonly = false;
    this.disabled = false;
    this.ariaLabelTranslation = "$rating out of $max stars";
    this.label = "Rating";
    this.hideLabel = false;
    this.handleInput = (ev) => {
      const input = ev.composedPath()[0];
      const value = Number(input.value);
      switch (true) {
        case value < this.minRating:
          input.value = this.minRating.toString();
          break;
        case value > this.max:
          input.value = this.max.toString();
          break;
      }
      this.rating = Number(input.value);
      emitEvent(this, "scaleChange", { value: this.rating });
    };
    this.handleStarClick = (ev) => {
      const star = ev.composedPath()[0];
      const starValue = Number(star.dataset.value);
      const input = this.host.shadowRoot.querySelector("input");
      input.focus();
      if (starValue === 1 && this.rating === 1 && this.minRating === 0) {
        this.rating = this.minRating;
      } else {
        this.rating = starValue;
      }
      emitEvent(this, "scaleChange", { value: this.rating });
    };
  }
  componentWillRender() {
    if (this.maxRating !== 5) {
      this.max = this.maxRating;
      statusNote({
        tag: "deprecated",
        message: 'Property "maxRating" is deprecated. Please use the "max" property!',
        type: "warn",
        source: this.host
      });
    }
    if (this.minRating !== 0) {
      statusNote({
        tag: "deprecated",
        message: 'Property "minRating" is deprecated and will be deleted upon the next release',
        type: "warn",
        source: this.host
      });
    }
    if (this.starSize !== "large") {
      this.size = this.starSize;
      statusNote({
        tag: "deprecated",
        message: 'Property "starSize" is deprecated. Please use the "size" property!',
        type: "warn",
        source: this.host
      });
    }
    this.rating = Math.round(this.rating);
  }
  // constructs the aria message for the current rating
  getRatingText() {
    const filledText = this.ariaLabelTranslation.replace(/\$rating/g, `${this.rating}`).replace(/\$maxRating/g, `${this.max}`).replace(/\$max/g, `${this.max}`);
    return filledText;
  }
  renderStar(index, selected = false, rating) {
    const size = sizes[this.size];
    const isWholeNumber = rating % 1 === 0;
    const isLastNumber = Math.ceil(rating) === index;
    return h("div", {
      part: "star",
      "data-value": index,
      "data-selected": selected,
      "data-half": isLastNumber && !isWholeNumber,
      onMouseUp: !this.readonly && this.handleStarClick,
      // sets up first star to be the resetter above the input element
      style: { zIndex: index === 1 ? "5" : "auto" }
    }, h("scale-icon-action-favorite", { size, part: "placeholder-star" }), h("div", { class: "icon-clip" }, h("scale-icon-action-favorite", { size, selected: true, part: "selected-star" })));
  }
  renderRating() {
    const stars = [];
    const roundedRating = Math.ceil(this.rating);
    const max = this.max;
    for (let index = 1; index <= max; index++) {
      const isSelected = roundedRating >= index;
      stars.push(this.renderStar(index, isSelected, this.rating));
    }
    return stars;
  }
  render() {
    return h(Host, { class: {
      hideLabel: this.hideLabel,
      disabled: this.disabled,
      readonly: this.readonly
    } }, h("div", { part: "container" }, h("label", { id: `${this.ratingStarId}-label`, part: "label", htmlFor: this.ratingStarId }, this.label), h("div", { part: "content" }, h("div", { part: "wrapper", "aria-valuetext": this.getRatingText(), "aria-orientation": "horizontal", "aria-describedby": this.infoText ? `${this.ratingStarId}-infotext` : false }, h("input", { disabled: this.disabled, readonly: this.readonly, part: "range-slider", type: this.readonly ? "number" : "range", id: this.ratingStarId, min: 0, max: this.max + 1, value: this.rating, step: "1", "aria-labelledby": `${this.ratingStarId}-label`, "aria-readonly": this.readonly ? "true" : false, "aria-valuemin": this.minRating, "aria-valuemax": this.max, "aria-valuenow": this.rating, "aria-valuetext": this.getRatingText(), onInput: !this.readonly && this.handleInput }), this.renderRating()), this.infoText && h("div", { part: "infotext", id: `${this.ratingStarId}-infotext` }, this.infoText))));
  }
  get host() {
    return getElement(this);
  }
};
RatingStars.style = ratingStarsCss;
export {
  RatingStars as scale_rating_stars
};
//# sourceMappingURL=scale-rating-stars.entry-MVHQXBAT.js.map
