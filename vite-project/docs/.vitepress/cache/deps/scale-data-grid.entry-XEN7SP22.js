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

// node_modules/@telekom/scale-components/dist/esm/scale-data-grid.entry.js
var CheckboxCell = {
  defaults: {
    sortBy: "number"
  },
  getLongestContent({ rows, columnIndex }) {
    return rows[0][columnIndex];
  },
  render: ({ field, content, component, rowIndex, columnIndex }) => {
    const { style = "checkbox", editable = false, label } = field;
    const props = {
      checked: content,
      disabled: !editable,
      label
    };
    if (editable) {
      props.onScaleChange = (ev) => {
        const { value } = ev.detail;
        component.rows[rowIndex][columnIndex] = value;
        component.triggerEditEvent(value, rowIndex, columnIndex);
      };
    }
    switch (style) {
      case "switch":
        return h("scale-switch", Object.assign({ size: "small" }, props));
      default:
        return h("scale-checkbox", Object.assign({}, props));
    }
  }
};
var DateCell = {
  defaults: {
    sortBy: "text"
  },
  render: ({ content, isAutoWidthCheck }) => {
    let value = content;
    if (isAutoWidthCheck) {
      value = value.replace(/[0-9]/g, "8");
    }
    return h("p", { class: `scl-body` }, value);
  }
};
var EmailCell = {
  defaults: {
    sortBy: "text"
  },
  render: ({ content }) => {
    const emailNoProtocol = content.replace(/^mailto:/i, "");
    return h("scale-link", { href: content }, emailNoProtocol);
  }
};
var GraphCell = {
  defaults: {
    sortBy: "number"
  },
  render: ({ field, content }) => {
    const { style = "progress", min = 0, max = 100 } = field;
    const progress = parseFloat(((content - min) / (max - min) * 100).toPrecision(String(content).replace(".", "").length));
    switch (style) {
      case "bar":
        return h(
          "div",
          { class: `tbody__bar-cell` },
          h("scale-progress-bar", {
            class: "data-grid-progress-bar",
            "aria-hidden": "true",
            percentage: progress,
            // showStatus={true}
            mute: true
          }),
          h("p", { class: `scl-body` }, content)
        );
      default:
        return h("scale-progress-bar", { class: "data-grid-progress-bar", percentage: progress, showStatus: true, mute: true });
    }
  }
};
var LinkCell = {
  defaults: {
    sortBy: "text"
  },
  render: ({ content }) => {
    const urlNoProtocol = content.replace(/^https?\:\/\//i, "");
    return h("scale-link", { href: content, target: "_blank" }, urlNoProtocol);
  }
};
var HTMLCell = {
  defaults: {},
  getLongestContent({ rows, columnIndex }) {
    return rows[0][columnIndex];
  },
  render: ({ content, component }) => {
    return content && h("scale-button", { variant: "secondary", size: "small", "icon-only": true, "inner-aria-label": `Activate to ${content.isExpanded ? "collapse" : "expand"} content`, onClick: () => {
      content.isExpanded = !content.isExpanded;
      component.forceRender++;
    } }, content.isExpanded ? h("scale-icon-navigation-collapse-up", { size: 14 }) : h("scale-icon-navigation-collapse-down", { size: 14 }));
  }
};
var NumberCell = {
  defaults: {
    textAlign: "right",
    sortBy: "number"
  },
  render: ({
    field,
    content,
    // component,
    // rowIndex,
    // columnIndex,
    isAutoWidthCheck
  }) => {
    const { precision = Infinity, decimalSymbol = ".", groupSymbol = "", prefix = "", suffix = "" } = field;
    let value = content;
    if (isAutoWidthCheck) {
      value = Number(value.toString().replace(/[0-9]/g, "8"));
    }
    if (precision < 100) {
      value = Number(value).toFixed(precision);
    } else {
      value = value.toString();
    }
    if (groupSymbol || decimalSymbol !== ".") {
      const parts = value.split(".");
      if (groupSymbol) {
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, groupSymbol);
      }
      value = parts.join(decimalSymbol);
    }
    if (prefix || suffix) {
      value = prefix + value + suffix;
    }
    return h("p", { class: `scl-body`, style: { textAlign: "right" } }, value);
  }
};
var SelectCell = {
  defaults: {
    sortBy: "text"
  },
  render: ({ field, content, component, rowIndex, columnIndex, isAutoWidthCheck }) => {
    const { options, editable = false, label } = field;
    if (isAutoWidthCheck) {
      return h("p", { class: `scl-body`, style: { paddingRight: "56px" } }, content);
    }
    const props = {
      disabled: !editable,
      value: content,
      label
    };
    if (editable) {
      props.onScaleChange = ({ detail }) => {
        const { value } = detail;
        component.rows[rowIndex][columnIndex] = value;
        component.triggerEditEvent(value, rowIndex, columnIndex);
      };
    }
    return h("scale-dropdown-select", Object.assign({ floatingStrategy: "fixed" }, props), options.map((option) => {
      return h("scale-dropdown-select-item", { value: option }, option);
    }));
  }
};
var TagsCell = {
  defaults: {
    sortBy: "text"
  },
  render: ({ content }) => {
    const tags = content.split(",").map((s) => s.trim());
    return h("ul", { class: `tbody__tag-list` }, tags.map((tag) => h(
      "li",
      null,
      h("scale-tag", { size: "small", type: "strong" }, tag)
    )));
  }
};
var TelephoneCell = {
  defaults: {
    sortBy: "text"
  },
  render: ({ content }) => {
    const telephoneNoProtocol = content.replace(/^tel:/i, "");
    return h("scale-link", { href: content }, telephoneNoProtocol);
  }
};
var TextCell = {
  defaults: {
    sortBy: "text"
  },
  render: ({ field, content, component, rowIndex, columnIndex, isAutoWidthCheck }) => {
    const { variant = "body", editable = false, iconPrefix, iconSuffix, label } = field;
    if (isAutoWidthCheck && editable) {
      return h("p", { class: `scl-body`, style: { paddingRight: "26px" } }, content);
    }
    if (editable) {
      const props = {
        type: "text",
        value: content,
        label
      };
      props.onScaleChange = ({ detail }) => {
        const { value } = detail;
        component.rows[rowIndex][columnIndex] = value;
        component.triggerEditEvent(value, rowIndex, columnIndex);
      };
      return h("scale-text-field", Object.assign({}, props));
    } else {
      let value = content;
      if (isAutoWidthCheck) {
        value += "w";
      }
      return h(
        "div",
        { class: `tbody__text-cell` },
        iconPrefix && h("span", { class: `tbody__text-cell-prefix` }, h(`scale-icon-${iconPrefix}`)),
        h("p", { class: `scl-${variant}` }, value),
        iconSuffix && h("span", { class: `tbody__text-cell-suffix` }, h(`scale-icon-${iconSuffix}`))
      );
    }
  }
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var ActionsCell = {
  defaults: {},
  render: ({ content }) => {
    return h("div", { class: `tbody__actions` }, content.map((action) => {
      const { label } = action, props = __rest(action, ["label"]);
      if (typeof label === "object" && "__html" in label) {
        return h("scale-button", Object.assign({ size: "small", innerHTML: label.__html }, props));
      }
      return h("scale-button", Object.assign({ size: "small" }, props), label);
    }));
  }
};
var CELL_TYPES = {
  checkbox: CheckboxCell,
  date: DateCell,
  email: EmailCell,
  graph: GraphCell,
  html: HTMLCell,
  link: LinkCell,
  number: NumberCell,
  select: SelectCell,
  tags: TagsCell,
  telephone: TelephoneCell,
  text: TextCell,
  actions: ActionsCell
};
var DEFAULT_CELL_TYPE = "text";
var CELL_DEFAULTS = {
  maxWidth: Infinity,
  minWidth: 20,
  resizable: true,
  sortable: false,
  sortBy: "text",
  textAlign: "left",
  visible: true,
  width: "auto"
};
var dataGridCss = ".scl-body{margin:0;font:var(--telekom-text-style-body)}.scl-label{margin:0;font:var(--telekom-text-style-small)}.scl-h1{margin:0;font:var(--telekom-text-style-heading-1)}.scl-h2{margin:0;font:var(--telekom-text-style-heading-2)}.scl-h3{margin:0;font:var(--telekom-text-style-heading-3)}.scl-h4{margin:0;font:var(--telekom-text-style-heading-4)}.scl-h5{margin:0;font:var(--telekom-text-style-heading-5)}.scl-h6{margin:0;font:var(--telekom-text-style-heading-6)}:host{font-family:var(--telekom-typography-font-family-sans);font-size:var(--telekom-typography-font-size-body);font-weight:var(--telekom-typography-font-weight-regular);line-height:var(--telekom-typography-line-spacing-standard);color:var(--telekom-color-text-and-icon-standard)}.data-grid input,.data-grid select{letter-spacing:inherit;font-weight:inherit;font-family:inherit;line-height:inherit}.data-grid{position:relative;display:block;background:var(--telekom-color-ui-state-fill-standard);border-radius:var(--telekom-radius-large);border:1px solid var(--telekom-color-ui-faint);overflow:hidden}.data-grid--hide-border{border:none}.data-grid__auto-width-check{opacity:0}.data-grid__title-block{display:flex;align-items:center;justify-content:flex-end;padding-right:var(--telekom-spacing-composition-space-06);padding-left:var(--telekom-spacing-composition-space-08)}.data-grid__heading{flex-grow:1}.data-grid__title-block ::slotted(*){margin-left:var(--telekom-spacing-composition-space-04)}.data-grid__settings-menu{margin-left:var(--telekom-spacing-composition-space-04)}.data-grid__scroll-container{overflow:auto;overflow-x:overlay;overflow-y:overlay;ms-overflow-style:-ms-autohiding-scrollbar;scrollbar-gutter:stable}.data-grid__table{border-spacing:0;border-collapse:collapse;overflow:hidden}.data-grid--hide-menu .data-grid__settings-menu{display:none}.data-grid:not(.data-grid--hide-menu) .data-grid__title-block{min-height:72px}.data-grid--hide-menu .data-grid__title-block{padding-right:var(--telekom-spacing-composition-space-06)}.thead{display:block;white-space:nowrap;border-bottom:1px solid var(--telekom-color-ui-faint);position:relative;background:var(--telekom-color-ui-state-fill-standard);z-index:1}.data-grid--freeze-header .thead{z-index:30;background-color:var(--telekom-color-background-canvas)}.thead-sortable{cursor:pointer}.thead-sortable:focus{box-shadow:inset 0 0 0 var(--telekom-spacing-composition-space-02)\n    var(--telekom-color-functional-focus-standard)}.thead__cell{display:inline-flex;align-items:center;height:var(--telekom-spacing-composition-space-10);text-align:left;user-select:none;position:relative;padding:0 var(--telekom-spacing-composition-space-06);color:var(--telekom-color-text-and-icon-additional)}.thead__cell--numbered{text-align:right;justify-content:flex-end}.thead__cell--selection{justify-content:center;text-align:center}.thead__cell--selection xds-checkbox::part(container){justify-content:center}.thead__title{color:var(--telekom-color-text-and-icon-standard)}.thead__text{font-size:var(--telekom-typography-font-size-small);line-height:var(--telekom-typography-line-spacing-standard);position:relative}.thead__arrow-top,.thead__arrow-bottom{position:absolute;display:none !important;top:-2px;left:-16px}.thead__sort-prompt{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;background:none;border:0;opacity:1;cursor:pointer}.thead__divider{position:absolute;right:calc(-1 * var(--telekom-spacing-composition-space-04));bottom:0px;height:100%;padding:19px var(--telekom-spacing-composition-space-04) 0px;box-sizing:border-box;cursor:col-resize;z-index:1}.thead__divider-line{pointer-events:none;height:100%;width:1px;background:var(--telekom-color-ui-faint)}.thead__cell:first-child{padding-left:var(--telekom-spacing-composition-space-08)}.thead__cell:focus{outline:none}.thead__cell[aria-sort='ascending'] .thead__arrow-top{display:inline-flex !important}.thead__cell[aria-sort='descending'] .thead__arrow-bottom{display:inline-flex !important}.thead__cell[aria-sort]:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}.thead__cell[aria-sort='none']:hover .thead__arrow-top,.thead__cell[aria-sort='none']:hover .thead__arrow-bottom{display:none !important}.thead__cell[aria-sort='ascending']:hover .thead__arrow-top{color:var(--telekom-color-text-and-icon-primary-hovered)}.thead__cell[aria-sort='descending']:hover .thead__arrow-bottom{color:var(--telekom-color-text-and-icon-primary-hovered)}.tbody{display:block}.tbody__row{display:block;white-space:nowrap}.tbody__mobile-title{display:none}.tbody__mobile-label{display:none}.tbody__cell{display:inline-block;margin:8px;padding:8px;overflow:hidden;}.tbody__cell--numbered{text-align:right}.tbody__cell--selection{justify-content:center;text-align:center}.tbody__cell--selection scale-checkbox::part(container),.tbody__cell--selection scale-checkbox [part='container']{justify-content:center}.tbody__cell scale-checkbox{width:auto}.tbody__nested{white-space:nowrap;padding:0px;margin:0px}.tbody__nested-cell{display:block;padding:var(--telekom-spacing-composition-space-06);margin:0px}.tbody__cell:first-of-type{margin-left:var(--telekom-spacing-composition-space-06);}.tbody__nested-cell:first-child{margin-left:0px}.data-grid--shade-alternate .tbody__row:nth-of-type(even),.data-grid--shade-alternate .tbody__nested:nth-of-type(even){background:var(--telekom-color-background-surface-subtle)}.data-grid__auto-width-check .tbody__cell{padding:0}.tbody__tag-list{list-style:none;padding:0;margin:0}.tbody__tag-list li{display:inline-block;margin-right:8px}.tbody__tag-list li:last-child{margin-right:0}.data-grid input[type='checkbox']{display:block;height:14px;margin:5px 4px}.tbody__text-cell{display:flex;align-items:center}.tbody__text-cell-prefix{display:inline-flex;align-items:center;margin-right:0.5em}.tbody__text-cell-suffix{display:inline-flex;align-items:center;margin-left:0.5em}.tbody__cell p{overflow:hidden;text-overflow:ellipsis}.tbody__cell scale-link{overflow:hidden;text-overflow:ellipsis}.tbody__bar-cell{display:inline-flex;width:100%}.tbody__cell scale-progress-bar{flex-grow:1}.tbody__actions scale-button{margin-right:var(--telekom-spacing-composition-space-04)}.data-grid-progress-bar::part(progress-bar){min-width:50px;max-width:200px}.data-grid-progress-bar::part(status){padding-top:0}.info{height:44px;position:relative;border-top:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-subtle);display:flex;justify-content:center}.info__selection{position:absolute;bottom:0;line-height:54px;left:var(--telekom-spacing-composition-space-08)}.data-grid--hide-border:not(.data-grid--mobile) .info__pagination{border-bottom:1px solid var(--telekom-color-ui-subtle);border-right:1px solid var(--telekom-color-ui-subtle)}.data-grid--mobile{border:none;background:none}.data-grid--mobile .data-grid__title-block{padding-left:0;padding-right:0}.data-grid--hide-menu.data-grid--mobile .data-grid__title-block{padding-right:0}.data-grid--mobile .data-grid__settings-menu{right:0}.data-grid--mobile .data-grid__scroll-container{height:auto !important}.data-grid--mobile .data-grid__table{display:block;height:auto !important}.data-grid--mobile .thead{display:none}.data-grid--mobile .tbody{display:block}.data-grid--mobile .tbody__row{display:block;position:relative;white-space:initial;margin:0 0 var(--telekom-spacing-composition-space-04);padding:var(--telekom-spacing-composition-space-08);border-radius:var(--telekom-radius-standard);background:var(--telekom-color-background-surface);border:1px solid var(--telekom-color-ui-faint)}.data-grid--mobile .tbody__row:hover{background:var(--telekom-color-background-surface)}.data-grid--mobile .tbody__mobile-title{display:block;margin-bottom:var(--telekom-spacing-composition-space-04)}.data-grid--mobile .tbody__mobile-label{display:block}.data-grid--mobile .tbody__cell{display:flex;align-items:center;width:auto !important;padding:5px 0;margin:0;min-height:var(--telekom-spacing-composition-space-08);line-height:var(--telekom-spacing-composition-space-08);overflow:auto;overflow-x:hidden}.data-grid--mobile .tbody__cell--used-as-mobile-title{display:none}.data-grid--mobile .tbody__mobile-label{display:block;width:100px;flex-shrink:0;color:var(--telekom-color-text-and-icon-additional);font-size:var(--telekom-typography-font-size-small);font-weight:var(--telekom-typography-font-weight-medium)}.data-grid--mobile .tbody__cell:first-child{margin-left:0px}.data-grid--mobile .tbody__cell--selection{position:absolute;top:19px;right:12px}.data-grid--mobile .tbody__cell--numbered{position:absolute;top:19px;right:56px}.data-grid--mobile .tbody__cell scale-text-field,.data-grid--mobile .tbody__cell scale-dropdown{width:100%}.data-grid--mobile .tbody__nested{width:auto !important}.data-grid--mobile .tbody__nested-cell{padding:0;margin-bottom:var(--telekom-spacing-composition-space-04)}.data-grid--mobile.data-grid--shade-alternate .tbody__row:nth-of-type(even){background:var(--telekom-color-background-surface)}.data-grid--mobile .info{height:auto;border-top:none;text-align:center}.data-grid--mobile .info__selection{position:relative;left:0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";
var resizeObserver;
var name = "data-grid";
var DataGrid = class {
  /* 6. Lifecycle Events (call order) */
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleEdit = createEvent(this, "scale-edit", 7);
    this.scaleEditLegacy = createEvent(this, "scaleEdit", 7);
    this.scaleSort = createEvent(this, "scale-sort", 7);
    this.scaleSortLegacy = createEvent(this, "scaleSort", 7);
    this.forceRender = 0;
    this.paginationStart = 0;
    this.scrollY = 0;
    this.freezeHeader = false;
    this.heading = "";
    this.hideBorder = false;
    this.hideHeader = false;
    this.hideInfo = false;
    this.hideMenu = false;
    this.numbered = false;
    this.pageSize = Infinity;
    this.selectable = false;
    this.selection = [];
    this.shadeAlternate = true;
    this.visible = true;
    this.sortableColumnTitle = "Activate to sort column";
    this.activeSortingIndex = -1;
    this.contentWidth = 100;
    this.dataNeedsCheck = true;
    this.hasData = false;
    this.isMobile = false;
    this.isPagination = false;
    this.isSortable = false;
    this.lastContainerWidth = 100;
    this.mobileTitleIndex = -1;
    this.needsAutoWidthParse = false;
    this.needsColumnResize = false;
    this.numberColumnWidth = 0;
    this.selectionColumnWidth = 22;
    this.handleMenuListClick = (event) => {
      const menuItems = ["sortBy", "toggleVisibility"];
      const currentMenuItemsIndex = menuItems.indexOf(event.target.id);
      if (currentMenuItemsIndex > -1) {
        const inactiveMenuItem = this.hostElement.shadowRoot.querySelector(`#${menuItems[1 - currentMenuItemsIndex]}List`);
        if (inactiveMenuItem) {
          inactiveMenuItem.setAttribute("opened", "false");
        }
      }
    };
    this.onDividerMove = this.onDividerMove.bind(this);
    this.onDividerUp = this.onDividerUp.bind(this);
    this.applyResponsiveClasses = this.applyResponsiveClasses.bind(this);
    this.updateColumnStretching = this.updateColumnStretching.bind(this);
  }
  componentWillLoad() {
    this.fieldsHandler();
    this.rowsHandler();
  }
  componentWillUpdate() {
  }
  componentDidRender() {
    if (this.needsAutoWidthParse) {
      this.calculateAutoWidths();
    }
    setTimeout(() => {
      if (this.needsColumnResize) {
        this.updateColumnStretching();
      }
    });
  }
  componentDidLoad() {
    this.addResizeObserver();
  }
  componentDidUpdate() {
  }
  disconnectedCallback() {
    this.removeResizeObserver();
  }
  /* 7. Listeners */
  fieldsHandler() {
    this.parseFields();
    this.checkForMobileTitle();
    this.checkForSortableFields();
    this.dataNeedsCheck = true;
  }
  rowsHandler() {
    if (this.paginationStart > this.rows.length) {
      this.paginationStart = this.rows.length - this.rows.length % this.pageSize;
    }
    this.parseRows();
    this.setInitialRowProps();
    this.resetSortingToggle();
    this.dataNeedsCheck = true;
    this.needsAutoWidthParse = true;
    this.needsColumnResize = true;
    if (
      // when we run out of items on the current page
      this.rows.length <= this.paginationStart && // and we are NOT on the first page
      this.paginationStart - this.pageSize > -1
    ) {
      this.paginationStart = this.paginationStart - this.pageSize;
    }
  }
  /* 8. Public Methods */
  /* 9. Local Methods */
  parseFields() {
    if (this.fields && typeof this.fields === "string") {
      this.fields = JSON.parse(this.fields);
    }
  }
  parseRows() {
    if (this.rows && typeof this.rows === "string") {
      this.rows = JSON.parse(this.rows);
    }
  }
  setInitialRowProps() {
    if (!this.rows || !this.rows.length) {
      return;
    }
    this.rows.forEach((row, i) => {
      row.initialIndex = i;
      row.selected = false;
    });
    this.isPagination = this.pageSize <= this.rows.length - 1;
  }
  checkHasData() {
    if (!this.fields) {
      return false;
    }
    for (let i = 0; i < this.fields.length; i++) {
      if (!this.fields[i].type) {
        this.fields[i].type = DEFAULT_CELL_TYPE;
      }
      if (!CELL_TYPES[this.fields[i].type]) {
        console.warn(`Unrecognised field type: "${this.fields[i].type}"`);
        return false;
      }
    }
    if (!this.rows || !this.rows.length) {
      return false;
    }
    for (let i = 0; i < this.rows.length; i++) {
      if (this.rows[i].length !== this.fields.length) {
        console.warn(`Unable to render ${this.heading && `"${this.heading}" `}table: row data length not equal to supplied fields.`);
        return false;
      }
    }
    return true;
  }
  checkForMobileTitle() {
    this.mobileTitleIndex = -1;
    if (!this.fields) {
      return;
    }
    this.fields.every(({ mobileTitle }, i) => {
      if (mobileTitle) {
        this.mobileTitleIndex = i;
        return false;
      }
      return true;
    });
  }
  checkForSortableFields() {
    this.isSortable = false;
    if (!this.fields) {
      return;
    }
    this.fields.forEach(({ sortable }) => {
      if (sortable) {
        this.isSortable = true;
      }
    });
  }
  getCssClassMap() {
    return classnames(name, !this.isMobile && `${name}--desktop`, this.isMobile && `${name}--mobile`, this.shadeAlternate && `${name}--shade-alternate`, this.freezeHeader && `${name}--freeze-header`, this.hideBorder && `${name}--hide-border`, this.hideMenu && `${name}--hide-menu`);
  }
  polyfillMousePosition(e) {
    if (e.changedTouches && e.changedTouches.length) {
      e.x = e.changedTouches[0].pageX;
      e.y = e.changedTouches[0].pageY;
    }
    if (e.x === void 0) {
      e.x = e.clientX;
      e.y = e.clientY;
    }
  }
  getDefaultLongestContent({ rows, columnIndex }) {
    let maxLength = 0;
    let longestContent;
    rows.forEach((row) => {
      const length = row[columnIndex].toString().length;
      if (length > maxLength) {
        longestContent = row[columnIndex];
        maxLength = length;
      }
    });
    return longestContent;
  }
  // Selection handlers
  toggleSelectAll() {
    if (!this.elToggleSelectAll) {
      return;
    }
    this.rows.forEach((row) => row.selected = this.elToggleSelectAll.checked);
    this.updateReadableSelection();
    this.forceRender++;
  }
  toggleRowSelect({ target }, rowIndex) {
    this.rows[rowIndex].selected = target.checked;
    this.updateReadableSelection();
    this.forceRender++;
  }
  updateReadableSelection() {
    this.selection.length = 0;
    this.rows.forEach((row) => row.selected && this.selection.push(row));
    const selectAll = this.hostElement.shadowRoot.querySelector(".thead__cell--selection scale-checkbox");
    selectAll.checked = !!this.selection.length;
  }
  // Sorting handlers
  toggleTableSorting(sortDirection, columnIndex, type) {
    if (this.activeSortingIndex > -1 && this.activeSortingIndex !== columnIndex) {
      this.fields[this.activeSortingIndex].sortDirection = "none";
    }
    this.activeSortingIndex = columnIndex;
    const newSortDirection = sortDirection === "none" ? "ascending" : sortDirection === "ascending" ? "descending" : "none";
    this.fields[columnIndex].sortDirection = newSortDirection;
    this.sortTable(newSortDirection, type, columnIndex);
  }
  sortTable(sortDirection, type, columnIndex) {
    if (sortDirection === "none") {
      this.rows.sort((a, b) => {
        return a.initialIndex - b.initialIndex;
      });
    } else {
      switch (CELL_TYPES[type] && CELL_TYPES[type].defaults && CELL_TYPES[type].defaults.sortBy || CELL_DEFAULTS.sortBy) {
        case "text":
          if (sortDirection === "ascending") {
            this.rows.sort((a, b) => {
              const textA = a[columnIndex].toLowerCase();
              const textB = b[columnIndex].toLowerCase();
              return textA < textB ? -1 : textA > textB ? 1 : 0;
            });
          } else {
            this.rows.sort((a, b) => {
              const textA = a[columnIndex].toLowerCase();
              const textB = b[columnIndex].toLowerCase();
              return textA > textB ? -1 : textA < textB ? 1 : 0;
            });
          }
          break;
        case "number":
          if (sortDirection === "ascending") {
            this.rows.sort((a, b) => {
              return Number(a[columnIndex]) - Number(b[columnIndex]);
            });
          } else {
            this.rows.sort((a, b) => {
              return Number(b[columnIndex]) - Number(a[columnIndex]);
            });
          }
          break;
      }
    }
    this.forceRender++;
    this.triggerSortEvent(sortDirection, type, columnIndex);
  }
  resetSortingToggle() {
    if (this.activeSortingIndex > -1) {
      this.fields[this.activeSortingIndex].sortDirection = "none";
    }
    this.activeSortingIndex = -1;
  }
  // Column resize handlers
  onDividerDown(e) {
    this.polyfillMousePosition(e);
    e.preventDefault();
    this.activeDivider = e.target;
    e.target.downX = e.x;
    this.activeDivider.interactiveWidth = 0;
    window.addEventListener("mousemove", this.onDividerMove);
    window.addEventListener("touchmove", this.onDividerMove);
    window.addEventListener("mouseup", this.onDividerUp);
    window.addEventListener("touchend", this.onDividerUp);
  }
  onDividerMove(e) {
    this.polyfillMousePosition(e);
    const { width, min, max } = this.activeDivider.dataset;
    const diff = e.x - this.activeDivider.downX;
    const newWidth = Math.min(Number(max), Math.max(Number(min), Number(width) + diff));
    const adjustedDiff = newWidth - Number(width);
    this.activeDivider.interactiveWidth = newWidth;
    this.activeDivider.style.transform = `translateX(${adjustedDiff}px)`;
  }
  onDividerUp() {
    const { index } = this.activeDivider.dataset;
    if (this.activeDivider.interactiveWidth) {
      this.fields[Number(index)].width = this.activeDivider.interactiveWidth;
    }
    this.activeDivider.style.transform = `translateX(0px)`;
    window.removeEventListener("mousemove", this.onDividerMove);
    window.removeEventListener("touchmove", this.onDividerMove);
    window.removeEventListener("mouseup", this.onDividerUp);
    window.removeEventListener("touchend", this.onDividerUp);
    this.needsColumnResize = true;
    this.updateColumnStretching();
    this.forceRender++;
  }
  // Column visibility toggle handlers
  toggleVisibilityMenu(e) {
    e.preventDefault();
    const visibilityToggle = this.hostElement.shadowRoot.querySelector(".visibility-toggle");
    const menu = visibilityToggle.children[1];
    if (visibilityToggle.style.display === "none") {
      visibilityToggle.style.display = "block";
      menu.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    } else {
      visibilityToggle.style.display = "none";
    }
  }
  toggleColumnVisibility(value, columnIndex) {
    this.fields[columnIndex].visible = value;
    this.forceRender++;
    this.needsColumnResize = true;
    this.updateColumnStretching();
  }
  // Resize handlers
  addResizeObserver() {
    if (!resizeObserver) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target.offsetParent === null) {
            return;
          }
          entry.target.applyResponsiveClasses(entry);
          entry.target.updateColumnStretching();
        }
      });
    }
    this.elMmainContainer = this.hostElement.shadowRoot.querySelector(`.${name}`);
    this.elMmainContainer.applyResponsiveClasses = this.applyResponsiveClasses;
    this.elMmainContainer.updateColumnStretching = this.updateColumnStretching;
    resizeObserver.observe(this.elMmainContainer);
  }
  removeResizeObserver() {
    if (this.elMmainContainer) {
      resizeObserver.unobserve(this.elMmainContainer);
    }
  }
  applyResponsiveClasses() {
    const newIsMobile = this.elMmainContainer.offsetWidth <= 500;
    if (this.isMobile !== newIsMobile) {
      this.forceRender++;
    }
    this.isMobile = newIsMobile;
  }
  updateColumnStretching() {
    if (this.needsAutoWidthParse) {
      return;
    }
    const container = this.elMmainContainer;
    const containerWidth = container.offsetWidth - 2;
    const hasContainerWidthChanged = this.lastContainerWidth !== containerWidth;
    if (!hasContainerWidthChanged && !this.needsColumnResize) {
      return;
    }
    this.needsColumnResize = false;
    this.lastContainerWidth = containerWidth;
    if (container.offsetWidth <= 500) {
      return;
    }
    const targetContentWidth = (() => {
      let total = 0;
      total += 8;
      if (this.numbered) {
        total += this.numberColumnWidth + 32;
      }
      if (this.selectable) {
        total += this.selectionColumnWidth + 32;
        if (this.numbered) {
          total -= 16;
        }
      }
      this.fields.forEach(({ visible = true, width }) => {
        if (visible) {
          total += width + 32;
        }
      });
      return total;
    })();
    this.contentWidth = Math.max(targetContentWidth, containerWidth);
    const diff = containerWidth - targetContentWidth;
    if (diff <= 0) {
      this.fields.forEach((field) => field.stretchWidth = 0);
    } else {
      let totalSetWeight = 0;
      let unsetColsCount = 0;
      this.fields.forEach(({ visible = true, stretchWeight }) => {
        if (!visible) {
          return;
        }
        if (typeof stretchWeight === "number") {
          totalSetWeight += stretchWeight;
        } else {
          unsetColsCount++;
        }
      });
      const remainderWeight = Math.max(0, 1 - totalSetWeight);
      totalSetWeight = Math.max(1, totalSetWeight);
      this.fields.forEach((field) => {
        const { visible = true, stretchWeight } = field;
        if (!visible) {
          return;
        }
        let weight = 0;
        if (typeof stretchWeight === "number") {
          weight = stretchWeight / totalSetWeight;
        } else if (remainderWeight > 0) {
          weight = remainderWeight / unsetColsCount;
        }
        field.stretchWidth = diff * weight;
      });
    }
    this.forceRender++;
  }
  // Auto column width handlers
  calculateAutoWidths() {
    let isVisible = false;
    const columns = this.hostElement.shadowRoot.querySelectorAll(`.${name}__auto-width-check td`);
    columns.forEach((cell) => {
      if (!isVisible && cell.offsetParent !== null) {
        isVisible = true;
      }
      if (!isVisible) {
        return;
      }
      this.fields[cell.dataset.columnindex].width = cell.clientWidth;
    });
    if (!isVisible) {
      return;
    }
    setTimeout(() => {
      this.needsAutoWidthParse = false;
      this.forceRender++;
    });
  }
  // Event triggers
  triggerSortEvent(sortDirection, type, columnIndex) {
    const data = {
      rows: this.rows,
      type,
      sortDirection,
      columnIndex
    };
    emitEvent(this, "scaleSort", data);
  }
  triggerEditEvent(value, rowIndex, columnIndex) {
    const data = {
      rows: this.rows,
      rowIndex,
      columnIndex,
      value
    };
    emitEvent(this, "scaleEdit", data);
    this.forceRender++;
  }
  onTableScroll() {
    if (!this.freezeHeader || this.hideHeader) {
      return;
    }
    const scrollY = this.elScrollContainer.scrollTop;
    this.elTableHead.style.transform = `translateY(${scrollY}px)`;
  }
  renderSettingsMenu() {
    var _a, _b, _c;
    return h("scale-menu-flyout", { class: `${name}__settings-menu` }, h("scale-button", { slot: "trigger", variant: "secondary", "icon-only": true, "data-sortable": this.isSortable }, h("scale-icon-service-settings", { accessibilityTitle: "Table options" })), h("scale-menu-flyout-list", null, this.isSortable && h("scale-menu-flyout-item", { id: "sortBy", onClick: this.handleMenuListClick }, h("scale-icon-action-sort", { slot: "prefix" }), ((_a = this.localization) === null || _a === void 0 ? void 0 : _a.sortBy) || "Sort By", h("scale-menu-flyout-list", { slot: "sublist", id: "sortByList" }, this.fields.map(({ label, type, sortable, sortDirection = "none" }, columnIndex) => {
      if (!sortable) {
        return "";
      }
      return h("scale-menu-flyout-item", { "onScale-select": () => this.toggleTableSorting(sortDirection, columnIndex, type) }, sortDirection === "ascending" && h("scale-icon-navigation-collapse-up", { size: 16, slot: "prefix" }), sortDirection === "descending" && h("scale-icon-navigation-collapse-down", { size: 16, slot: "prefix" }), sortDirection === "none" && h("scale-icon-navigation-collapse-up", { size: 16, slot: "prefix", style: { opacity: "0" } }), label || type);
    }))), h("scale-menu-flyout-item", { id: "toggleVisibility", onClick: this.handleMenuListClick }, h("scale-icon-action-hide-password", { slot: "prefix" }), ((_b = this.localization) === null || _b === void 0 ? void 0 : _b.toggle) || "Toggle Visibility", h("scale-menu-flyout-list", { slot: "sublist", "close-on-select": "false", id: "toggleVisibilityList" }, this.fields.map(({ label, type, visible = CELL_TYPES[type].defaults.visible !== void 0 ? CELL_TYPES[type].defaults.visible : CELL_DEFAULTS.visible }, columnIndex) => {
      return h("scale-menu-flyout-item", { checkable: "checkbox", checked: !!visible, "onScale-select": () => this.toggleColumnVisibility(!visible, columnIndex) }, label || type);
    }))), this.selectable && h("scale-menu-flyout-item", { "onScale-select": () => {
      this.elToggleSelectAll.checked = !this.elToggleSelectAll.checked;
      this.toggleSelectAll();
    } }, h("scale-icon", { slot: "prefix", path: "M20.9328 10.6668C20.5132 10.6668 20.1731 11.0069 20.1731 11.4265V20.3269H1.5194V1.67309H16.5049C16.9245 1.67309 17.2646 1.33292 17.2646 0.913386C17.2646 0.49385 16.9245 0.153687 16.5049 0.153687H0.759699C0.340163 0.153687 0 0.49385 0 0.913386V21.0866C0 21.5062 0.340163 21.8463 0.759699 21.8463H20.9328C21.3523 21.8463 21.6925 21.5062 21.6925 21.0866V11.4265C21.6925 11.0069 21.3524 10.6668 20.9328 10.6668ZM23.7774 0.653387C23.4807 0.356739 22.9997 0.356739 22.703 0.653387L10.3293 13.0272L7.25501 9.9529C6.9583 9.65625 6.47732 9.65625 6.18061 9.9529C5.88396 10.2496 5.88396 10.7306 6.18061 11.0273L9.7921 14.6388C9.94045 14.7871 10.1349 14.8613 10.3293 14.8613C10.5237 14.8613 10.7181 14.7871 10.8665 14.6388L23.7774 1.72778C24.0741 1.43108 24.0741 0.950095 23.7774 0.653387Z" }), ((_c = this.localization) === null || _c === void 0 ? void 0 : _c.select) || "Select / Deselect All"), h("slot", { name: "menu" })));
  }
  renderTable() {
    if (this.needsAutoWidthParse) {
      return this.renderAutoWidthCheck();
    }
    return h("div", { ref: (el) => this.elScrollContainer = el, class: `${name}__scroll-container`, style: { height: this.height || "auto" }, onScroll: () => this.onTableScroll() }, h("table", { class: `${name}__table` }, this.renderTableHead(), this.renderTableBody()));
  }
  renderAutoWidthCheck() {
    this.numberColumnWidth = this.rows.length.toString().length * 9;
    const autoCols = [];
    this.fields.forEach(({ type, width = CELL_TYPES[type].defaults.width || CELL_DEFAULTS.width }, columnIndex) => {
      if (width === "auto") {
        autoCols.push(columnIndex);
      }
    });
    if (!autoCols.length) {
      this.needsAutoWidthParse = false;
      return this.renderTable();
    }
    return h("table", { class: `${name}__auto-width-check ${name}__table` }, h("tr", { class: `tbody__row` }, autoCols.map((columnIndex) => {
      const field = this.fields[columnIndex];
      const { type, cell = CELL_TYPES[type] } = field;
      const getLongestContent = cell.getLongestContent || this.getDefaultLongestContent;
      const content = getLongestContent({
        rows: this.rows,
        columnIndex,
        field
      });
      return h("td", { class: `tbody__cell`, style: { width: "auto" }, "data-columnindex": columnIndex }, cell.render({
        field,
        content,
        component: this,
        isAutoWidthCheck: true
      }));
    })));
  }
  renderTableHead() {
    return h("thead", { ref: (el) => this.elTableHead = el, class: `thead ${this.hideHeader ? "sr-only" : ""}` }, h("tr", { class: `thead__row` }, this.numbered && this.renderTableHeadNumberedCell(), this.selectable && this.renderTableHeadSelectableCell(), this.fields.map(({
      type,
      label = "",
      // Params can be set optionally in the fields options, in the cell type
      // descriptor class, or falls back to common defaults
      visible = CELL_TYPES[type].defaults.visible !== void 0 ? CELL_TYPES[type].defaults.visible : CELL_DEFAULTS.visible,
      sortable,
      sortDirection = "none",
      resizable = CELL_TYPES[type].defaults.resizable !== void 0 ? CELL_TYPES[type].defaults.resizable : CELL_DEFAULTS.resizable,
      width = CELL_TYPES[type].defaults.width || CELL_DEFAULTS.width,
      minWidth = CELL_TYPES[type].defaults.minWidth || CELL_DEFAULTS.minWidth,
      maxWidth = CELL_TYPES[type].defaults.maxWidth || CELL_DEFAULTS.maxWidth,
      textAlign = CELL_TYPES[type].defaults.textAlign || CELL_DEFAULTS.textAlign,
      stretchWidth = 0
    }, columnIndex) => {
      if (!visible) {
        return;
      }
      const props = {
        class: `thead__cell`,
        style: {
          width: `calc(${width}px + ${stretchWidth}px)`,
          "justify-content": textAlign
        },
        "data-type": type
      };
      if (sortable) {
        props["aria-sort"] = sortDirection;
      }
      return h("th", Object.assign({ title: sortable ? this.sortableColumnTitle : void 0 }, props, sortable ? {
        onKeyDown: (event) => {
          if (["Enter", " "].includes(event.key)) {
            this.toggleTableSorting(sortDirection, columnIndex, type);
          }
        },
        onClick: (e) => {
          const clickedElement = e.target;
          if (!clickedElement.matches(".thead__divider")) {
            this.toggleTableSorting(sortDirection, columnIndex, type);
          }
        },
        tabindex: 0,
        class: `${props.class} thead-sortable`
      } : {}), h("div", { class: `thead__title` }, h("span", { class: `thead__text` }, sortable && h("scale-icon-content-sort-indicator-up", { size: 16, class: `thead__arrow-top` }), sortable && h("scale-icon-content-sort-indicator-down", { size: 16, class: `thead__arrow-bottom` }), label)), resizable && h("div", { class: `thead__divider`, "data-index": columnIndex, "data-width": width, "data-min": minWidth, "data-max": maxWidth, onMouseDown: (e) => this.onDividerDown(e), onTouchStart: (e) => this.onDividerDown(e), "aria-hidden": "true" }, h("div", { class: `thead__divider-line` })));
    })));
  }
  renderTableHeadNumberedCell() {
    return h("th", { class: `thead__cell  thead__cell--numbered`, style: { width: this.numberColumnWidth + "px" } }, h("span", { class: "scl-body" }, "#"));
  }
  renderTableHeadSelectableCell() {
    const style = {
      width: this.selectionColumnWidth + "px"
    };
    if (this.numbered) {
      style.paddingLeft = "0px";
    }
    return h("th", { class: `thead__cell thead__cell--selection`, style, title: "Select" }, h("scale-checkbox", { ref: (el) => this.elToggleSelectAll = el, onScaleChange: () => this.toggleSelectAll(), hideLabel: true, "aria-label": "Select" }));
  }
  renderTableBody() {
    return h("tbody", { class: `tbody` }, (() => {
      const rows = [];
      const total = this.rows.length;
      const start = this.paginationStart;
      const end = Math.min(total, this.paginationStart + this.pageSize);
      for (let rowIndex = start; rowIndex < end; rowIndex++) {
        const rowData = this.rows[rowIndex];
        const rowNestedContent = [];
        let isNestedExpanded = false;
        rows.push(h("tr", { class: `tbody__row` }, this.renderMobileTitle(rowData), this.numbered && this.renderTableBodyNumberedCell(rowIndex), this.selectable && this.renderTableBodySelectableCell(rowIndex), rowData.map((cellContent, columnIndex) => {
          const field = this.fields[columnIndex];
          const visible = field.visible !== void 0 ? field.visible : CELL_TYPES[field.type].defaults.visible !== void 0 ? CELL_TYPES[field.type].defaults.visible : CELL_DEFAULTS.visible;
          if (!visible) {
            return;
          }
          if (field.type === "html") {
            if (!cellContent) {
              return this.renderTableCell(field, null, rowIndex, columnIndex);
            }
            if (!!cellContent.isExpanded) {
              isNestedExpanded = true;
            }
            rowNestedContent.push({
              content: cellContent
            });
          }
          return this.renderTableCell(field, cellContent, rowIndex, columnIndex);
        })));
        if (rowNestedContent.length) {
          rows.push(h("div", { class: `tbody__nested`, style: {
            width: this.contentWidth + "px",
            display: isNestedExpanded ? "block" : "none"
          } }, h("td", { class: `tbody__nested-cell` }, rowNestedContent.map(({ content }) => {
            return content && h("div", { ref: (el) => {
              if (el) {
                let child = el.lastElementChild;
                while (child) {
                  el.removeChild(child);
                  child = el.lastElementChild;
                }
                el.appendChild(content);
              }
            } });
          }))));
        }
      }
      return rows;
    })());
  }
  renderMobileTitle(rowData) {
    if (this.mobileTitleIndex === -1) {
      return h("h5", { class: `tbody__mobile-title scl-h5` }, " ");
    }
    return h("h5", { class: `tbody__mobile-title scl-h5` }, rowData[this.mobileTitleIndex]);
  }
  renderTableBodyNumberedCell(rowIndex) {
    return h("td", { class: `tbody__cell tbody__cell--numbered`, style: { width: this.numberColumnWidth + "px" } }, h("p", { class: "scl-body" }, rowIndex + 1));
  }
  renderTableBodySelectableCell(rowIndex) {
    const style = {
      width: this.selectionColumnWidth + "px"
    };
    if (this.numbered) {
      style.marginLeft = "0px";
      style.paddingLeft = "0px";
    }
    return h("td", { title: this.rows[rowIndex][0], class: `tbody__cell tbody__cell--selection`, style }, h("scale-checkbox", { checked: this.rows[rowIndex].selected, onScaleChange: (e) => this.toggleRowSelect(e, rowIndex), hideLabel: true }));
  }
  renderTableCell(field, content, rowIndex, columnIndex) {
    const cell = CELL_TYPES[field.type];
    const {
      label,
      // Use custom field, or default defined in class, or fallback default
      width = cell.defaults.width || CELL_DEFAULTS.width,
      stretchWidth = 0,
      mobileTitle
      // For text cells
    } = field;
    return h("td", { class: `tbody__cell${mobileTitle ? ` tbody__cell--used-as-mobile-title` : ``}`, style: { width: `calc(${width}px + ${stretchWidth}px)` } }, h("div", { class: `tbody__mobile-label` }, label), cell.render({
      field,
      content,
      component: this,
      rowIndex,
      columnIndex
    }));
  }
  renderTableInfo() {
    return h("div", { class: `info` }, this.selectable && !!this.selection.length && h("div", { class: `info__selection` }, `${this.selection.length} row${this.selection.length > 1 ? "s" : ""} selected`), this.isPagination && h("scale-pagination", { class: `info__pagination`, hideBorder: !this.isMobile, startElement: this.paginationStart, totalElements: this.rows.length, pageSize: this.pageSize, onScalePagination: ({ detail }) => this.paginationStart = detail.startElement }));
  }
  /* 10. Render */
  render() {
    if (this.dataNeedsCheck) {
      this.hasData = this.checkHasData();
    }
    return h(Host, { style: {
      display: this.visible ? "block" : "none"
    } }, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("div", { class: `${name}__title-block` }, this.heading && h("h4", { class: `${name}__heading scl-h5` }, this.heading), h("div", null, h("slot", null)), this.hasData && this.renderSettingsMenu()), this.hasData && this.renderTable(), this.hasData && !this.hideInfo && !this.needsAutoWidthParse && (this.selectable || this.isPagination) && this.renderTableInfo()));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "fields": ["fieldsHandler"],
      "rows": ["rowsHandler"]
    };
  }
};
DataGrid.style = dataGridCss;
export {
  DataGrid as scale_data_grid
};
/*! Bundled license information:

@telekom/scale-components/dist/esm/scale-data-grid.entry.js:
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
//# sourceMappingURL=scale-data-grid.entry-XEN7SP22.js.map
