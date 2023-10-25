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

// node_modules/@telekom/scale-components/dist/esm/scale-chart-stack-card.entry.js
var chartStackCardCss = ":host{--scl-chart-stack-card-color:var(--telekom-color-additional-blue-600)}.chart-stack-card{color:var(--color-text);--scl-chart-stack-card-color:var(--telekom-color-additional-blue-600)}.chart-stack-card .header{height:var(--telekom-spacing-composition-space-08);font-size:var(--telekom-typography-font-size-headline-3);font-weight:var(--telekom-typography-font-weight-extra-bold);line-height:var(--telekom-typography-line-spacing-tight);margin-bottom:var(--telekom-spacing-composition-space-08)}.chart-stack-card .bar{display:flex;justify-content:space-between;margin-bottom:var(--telekom-spacing-composition-space-06)}.chart-stack-card .bar__item{background-color:var(--scl-chart-stack-card-color);height:var(--telekom-spacing-composition-space-10);flex:1}.chart-stack-card .bar__item:first-of-type{border-top-left-radius:var(--telekom-radius-small);border-bottom-left-radius:var(--telekom-radius-small)}.chart-stack-card .bar__item:last-of-type{border-top-right-radius:var(--telekom-radius-small);border-bottom-right-radius:var(--telekom-radius-small)}.chart-stack-card .legend{display:flex;flex-direction:column;height:calc(var(--telekom-spacing-composition-space-06) * 10)}.chart-stack-card .spacer{padding:0 var(--telekom-spacing-composition-space-04)}.chart-stack-card .legend .legend__row__item{display:flex;line-height:var(--telekom-typography-line-spacing-standard)}.chart-stack-card .legend .legend__row{display:flex;justify-content:space-between}.chart-stack-card .legend .legend__row:last-child{padding-bottom:var(--telekom-spacing-composition-space-10)}.chart-stack-card .legend .legend__item{height:10px;width:10px;background-color:var(--scl-chart-stack-card-color);border-radius:100%;align-self:center;margin-right:var(--telekom-spacing-composition-space-03)}.chart-stack-card .legend .legend__label{font-weight:var(--type-weight-bold);font-size:var(--telekom-spacing-composition-space-06);line-height:200%}";
var ChartStackCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.readData = (data) => {
      try {
        return Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
      } catch (error) {
        return Array.isArray(data) ? data : [];
      }
    };
  }
  getOpacity(item, index) {
    return JSON.stringify(index === 0 ? 1 : +item.percentage / 100);
  }
  getCardStyle() {
    return `
      .card:after {
          content: '';
          display: block;
          background: linear-gradient(0deg, white, rgba(255,255,255, 0));
          height: 2rem;
          margin-top: -2rem;
          position: relative;
        }

      .card__body: {
        padding-bottom: 0 !important;
      }
  `;
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, type: "warn" });
  }
  render() {
    return h(Host, null, h("div", { class: this.getCssClassMap() }, h("scale-card", { styles: this.getCardStyle() }, h("div", { class: "header" }, this.heading), h("div", { class: "bar" }, this.readData(this.data).sort((a, b) => b.percentage - a.percentage).map((item, index) => {
      if (+item.percentage > 0) {
        return h("div", { class: "bar__item", style: {
          opacity: this.getOpacity(item, index),
          flex: JSON.stringify(+item.percentage)
        } });
      }
    })), h("div", { class: "legend" }, this.readData(this.data).sort((a, b) => b.percentage - a.percentage).map((item, index) => h("div", { class: "legend__row" }, h("div", { class: "legend__row__item" }, h("div", { class: "legend__item", style: {
      opacity: this.getOpacity(item, index)
    } }), h("div", { class: "legend__label spacer" }, item.type)), h("div", { class: "legend__row__item" }, h("div", { class: "spacer" }, item.value), h("div", { class: "spacer" }, item.percentage, "%"))))))));
  }
  getCssClassMap() {
    return classnames("chart-stack-card");
  }
  get hostElement() {
    return getElement(this);
  }
};
ChartStackCard.style = chartStackCardCss;
export {
  ChartStackCard as scale_chart_stack_card
};
//# sourceMappingURL=scale-chart-stack-card.entry-QQA7VKHN.js.map
