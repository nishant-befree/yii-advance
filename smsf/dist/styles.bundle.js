webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/images/backgrounds/header-bg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "header-bg.dd77444bb5637a2469ec.png";

/***/ }),

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../@swimlane/ngx-datatable/release/assets/fonts/data-table.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "data-table.bce071e976865da51100.eot";

/***/ }),

/***/ "../../../../@swimlane/ngx-datatable/release/assets/fonts/data-table.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "data-table.7ae4f0ebf816c33da874.svg";

/***/ }),

/***/ "../../../../@swimlane/ngx-datatable/release/assets/fonts/data-table.ttf":
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),

/***/ "../../../../@swimlane/ngx-datatable/release/assets/fonts/data-table.woff":
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../@swimlane/ngx-datatable/release/assets/icons.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\r\n\r\n@font-face {\r\n  font-family: \"data-table\";\r\n  src:url(" + __webpack_require__("../../../../@swimlane/ngx-datatable/release/assets/fonts/data-table.eot") + ");\r\n  src:url(" + __webpack_require__("../../../../@swimlane/ngx-datatable/release/assets/fonts/data-table.eot") + "?#iefix) format(\"embedded-opentype\"),\r\n    url(" + __webpack_require__("../../../../@swimlane/ngx-datatable/release/assets/fonts/data-table.woff") + ") format(\"woff\"),\r\n    url(" + __webpack_require__("../../../../@swimlane/ngx-datatable/release/assets/fonts/data-table.ttf") + ") format(\"truetype\"),\r\n    url(" + __webpack_require__("../../../../@swimlane/ngx-datatable/release/assets/fonts/data-table.svg") + "#data-table) format(\"svg\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n\r\n}\r\n\r\n[data-icon]:before {\r\n  font-family: \"data-table\" !important;\r\n  content: attr(data-icon);\r\n  font-style: normal !important;\r\n  font-weight: normal !important;\r\n  font-variant: normal !important;\r\n  text-transform: none !important;\r\n  speak: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n[class^=\"datatable-icon-\"]:before,\r\n[class*=\" datatable-icon-\"]:before {\r\n  font-family: \"data-table\" !important;\r\n  font-style: normal !important;\r\n  font-weight: normal !important;\r\n  font-variant: normal !important;\r\n  text-transform: none !important;\r\n  speak: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.datatable-icon-filter:before {\r\n  content: \"b\";\r\n}\r\n.datatable-icon-collapse:before {\r\n  content: \"a\";\r\n}\r\n.datatable-icon-expand:before {\r\n  content: \"c\";\r\n}\r\n.datatable-icon-close:before {\r\n  content: \"d\";\r\n}\r\n.datatable-icon-up:before {\r\n  content: \"e\";\r\n}\r\n.datatable-icon-down:before {\r\n  content: \"f\";\r\n}\r\n.datatable-icon-sort:before {\r\n  content: \"g\";\r\n}\r\n.datatable-icon-done:before {\r\n  content: \"h\";\r\n}\r\n.datatable-icon-done-all:before {\r\n  content: \"i\";\r\n}\r\n.datatable-icon-search:before {\r\n  content: \"j\";\r\n}\r\n.datatable-icon-pin:before {\r\n  content: \"k\";\r\n}\r\n.datatable-icon-add:before {\r\n  content: \"m\";\r\n}\r\n.datatable-icon-left:before {\r\n  content: \"o\";\r\n}\r\n.datatable-icon-right:before {\r\n  content: \"p\";\r\n}\r\n.datatable-icon-skip:before {\r\n  content: \"q\";\r\n}\r\n.datatable-icon-prev:before {\r\n  content: \"r\";\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../@swimlane/ngx-datatable/release/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * angular2-data-table v\"9.3.1\" (https://github.com/swimlane/angular2-data-table)\r\n * Copyright 2016\r\n * Licensed under MIT\r\n */\r\n.ngx-datatable {\r\n  display: block;\r\n  overflow: hidden;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  /**\r\n   * Vertical Scrolling Adjustments\r\n   */\r\n  /**\r\n   * Horizontal Scrolling Adjustments\r\n   */\r\n  /**\r\n   * Fixed Header Height Adjustments\r\n   */\r\n  /**\r\n   * Fixed row height adjustments\r\n   */\r\n  /**\r\n   * Shared Styles\r\n   */\r\n  /**\r\n   * Header Styles\r\n   */\r\n  /**\r\n   * Body Styles\r\n   */\r\n  /**\r\n   * Footer Styles\r\n   */ }\r\n  .ngx-datatable [hidden] {\r\n    display: none !important; }\r\n  .ngx-datatable *, .ngx-datatable *:before, .ngx-datatable *:after {\r\n    box-sizing: border-box; }\r\n  .ngx-datatable.scroll-vertical .datatable-body {\r\n    overflow-y: auto; }\r\n    .ngx-datatable.scroll-vertical .datatable-body .datatable-row-wrapper {\r\n      position: absolute; }\r\n  .ngx-datatable.scroll-horz .datatable-body {\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch; }\r\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\r\n    white-space: nowrap; }\r\n    .ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\r\n      white-space: nowrap;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis; }\r\n  .ngx-datatable.fixed-row .datatable-scroll {\r\n    white-space: nowrap; }\r\n    .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\r\n      white-space: nowrap; }\r\n      .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\r\n        overflow: hidden;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis; }\r\n  .ngx-datatable .datatable-body-row,\r\n  .ngx-datatable .datatable-header-inner {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-flow: row;\r\n    -o-flex-flow: row;\r\n    flex-flow: row; }\r\n  .ngx-datatable .datatable-body-cell,\r\n  .ngx-datatable .datatable-header-cell {\r\n    vertical-align: top;\r\n    display: inline-block;\r\n    line-height: 1.625;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    -o-user-select: none;\r\n    user-select: none; }\r\n    .ngx-datatable .datatable-body-cell:focus,\r\n    .ngx-datatable .datatable-header-cell:focus {\r\n      outline: none; }\r\n  .ngx-datatable .datatable-row-left,\r\n  .ngx-datatable .datatable-row-right {\r\n    z-index: 9; }\r\n  .ngx-datatable .datatable-row-left,\r\n  .ngx-datatable .datatable-row-center,\r\n  .ngx-datatable .datatable-row-right {\r\n    position: relative; }\r\n  .ngx-datatable .datatable-header {\r\n    display: block;\r\n    overflow: hidden; }\r\n    .ngx-datatable .datatable-header .datatable-header-inner {\r\n      -webkit-box-align: stretch;\r\n          -ms-flex-align: stretch;\r\n              align-items: stretch;\r\n      -webkit-align-items: stretch; }\r\n    .ngx-datatable .datatable-header .datatable-header-cell {\r\n      position: relative;\r\n      display: inline-block; }\r\n      .ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\r\n        cursor: pointer; }\r\n      .ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\r\n        cursor: move; }\r\n      .ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\r\n        line-height: 100%;\r\n        vertical-align: middle;\r\n        display: inline-block;\r\n        cursor: pointer; }\r\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\r\n        display: inline-block;\r\n        position: absolute;\r\n        right: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 5px;\r\n        padding: 0 4px;\r\n        visibility: hidden;\r\n        cursor: ew-resize; }\r\n      .ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\r\n        visibility: visible; }\r\n  .ngx-datatable .datatable-body {\r\n    position: relative;\r\n    z-index: 10;\r\n    display: block; }\r\n    .ngx-datatable .datatable-body .datatable-scroll {\r\n      display: inline-block; }\r\n    .ngx-datatable .datatable-body .datatable-row-detail {\r\n      overflow-y: hidden; }\r\n    .ngx-datatable .datatable-body .datatable-row-wrapper {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n      flex-direction: column; }\r\n    .ngx-datatable .datatable-body .datatable-body-row {\r\n      outline: none; }\r\n      .ngx-datatable .datatable-body .datatable-body-row > div {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex; }\r\n  .ngx-datatable .datatable-footer {\r\n    display: block;\r\n    width: 100%; }\r\n    .ngx-datatable .datatable-footer .datatable-footer-inner {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      width: 100%; }\r\n    .ngx-datatable .datatable-footer .selected-count .page-count {\r\n      -webkit-box-flex: 1;\r\n          -ms-flex: 1 1 40%;\r\n              flex: 1 1 40%; }\r\n    .ngx-datatable .datatable-footer .selected-count .datatable-pager {\r\n      -webkit-box-flex: 1;\r\n          -ms-flex: 1 1 60%;\r\n              flex: 1 1 60%; }\r\n    .ngx-datatable .datatable-footer .page-count {\r\n      -webkit-box-flex: 1;\r\n          -ms-flex: 1 1 20%;\r\n              flex: 1 1 20%; }\r\n    .ngx-datatable .datatable-footer .datatable-pager {\r\n      -webkit-box-flex: 1;\r\n          -ms-flex: 1 1 80%;\r\n              flex: 1 1 80%;\r\n      text-align: right; }\r\n      .ngx-datatable .datatable-footer .datatable-pager .pager,\r\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\r\n        padding: 0;\r\n        margin: 0;\r\n        display: inline-block;\r\n        list-style: none; }\r\n      .ngx-datatable .datatable-footer .datatable-pager .pager li, .ngx-datatable .datatable-footer .datatable-pager .pager li a {\r\n        outline: none; }\r\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\r\n        cursor: pointer;\r\n        display: inline-block; }\r\n      .ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\r\n        cursor: not-allowed; }", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../@swimlane/ngx-datatable/release/themes/material.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-datatable.material {\r\n  background: #FFF;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);\r\n  /**\r\n\t * Shared Styles\r\n\t */\r\n  /**\r\n\t * Global Row Styles\r\n\t */\r\n  /**\r\n\t * Header Styles\r\n\t */\r\n  /**\r\n\t * Body Styles\r\n\t */\r\n  /**\r\n\t * Footer Styles\r\n\t */ }\r\n  .ngx-datatable.material.striped .datatable-row-odd {\r\n    background: #eee; }\r\n  .ngx-datatable.material.single-selection .datatable-body-row.active,\r\n  .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active,\r\n  .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active,\r\n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\r\n    background-color: #304FFE;\r\n    color: #FFF; }\r\n  .ngx-datatable.material.single-selection .datatable-body-row.active:hover,\r\n  .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover,\r\n  .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,\r\n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\r\n    background-color: #193AE4;\r\n    color: #FFF; }\r\n  .ngx-datatable.material.single-selection .datatable-body-row.active:focus,\r\n  .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus,\r\n  .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,\r\n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\r\n    background-color: #2041EF;\r\n    color: #FFF; }\r\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,\r\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\r\n    background-color: #eee;\r\n    transition-property: background;\r\n    transition-duration: .3s;\r\n    transition-timing-function: linear; }\r\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,\r\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\r\n    background-color: #ddd; }\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell:hover,\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\r\n    background-color: #eee;\r\n    transition-property: background;\r\n    transition-duration: .3s;\r\n    transition-timing-function: linear; }\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell:focus,\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\r\n    background-color: #ddd; }\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active,\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\r\n    background-color: #304FFE;\r\n    color: #FFF; }\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\r\n    background-color: #193AE4;\r\n    color: #FFF; }\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,\r\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\r\n    background-color: #2041EF;\r\n    color: #FFF; }\r\n  .ngx-datatable.material .empty-row {\r\n    height: 50px;\r\n    text-align: left;\r\n    padding: .5rem 1.2rem;\r\n    vertical-align: top;\r\n    border-top: 0; }\r\n  .ngx-datatable.material .loading-row {\r\n    text-align: left;\r\n    padding: .5rem 1.2rem;\r\n    vertical-align: top;\r\n    border-top: 0; }\r\n  .ngx-datatable.material .datatable-header .datatable-row-left,\r\n  .ngx-datatable.material .datatable-body .datatable-row-left {\r\n    background-color: #FFF;\r\n    background-position: 100% 0;\r\n    background-repeat: repeat-y;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }\r\n  .ngx-datatable.material .datatable-header .datatable-row-right,\r\n  .ngx-datatable.material .datatable-body .datatable-row-right {\r\n    background-position: 0 0;\r\n    background-color: #fff;\r\n    background-repeat: repeat-y;\r\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }\r\n  .ngx-datatable.material .datatable-header {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\r\n    .ngx-datatable.material .datatable-header .datatable-header-cell {\r\n      text-align: left;\r\n      padding: .5rem 1.2rem;\r\n      font-weight: 400;\r\n      color: #757575;\r\n      vertical-align: bottom; }\r\n      .ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\r\n        position: relative; }\r\n      .ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\r\n        transition: opacity 400ms ease, -webkit-transform 400ms ease;\r\n        transition: transform 400ms ease, opacity 400ms ease;\r\n        transition: transform 400ms ease, opacity 400ms ease, -webkit-transform 400ms ease;\r\n        opacity: .5;\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1); }\r\n      .ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\r\n        content: \" \";\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        margin: -30px 0 0 -30px;\r\n        height: 60px;\r\n        width: 60px;\r\n        background: #eee;\r\n        border-radius: 100%;\r\n        opacity: 1;\r\n        -webkit-filter: none;\r\n                filter: none;\r\n        -webkit-transform: scale(0);\r\n                transform: scale(0);\r\n        z-index: 9999;\r\n        pointer-events: none; }\r\n      .ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\r\n        border-right: none; }\r\n    .ngx-datatable.material .datatable-header .resize-handle {\r\n      border-right: solid 1px #eee; }\r\n  .ngx-datatable.material .datatable-body .datatable-row-detail {\r\n    background: #f5f5f5;\r\n    padding: 10px; }\r\n  .ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\r\n    text-align: left;\r\n    padding: .5rem 1.2rem;\r\n    vertical-align: top;\r\n    border-top: 0;\r\n    transition: width 0.3s ease; }\r\n  .ngx-datatable.material .datatable-body .progress-linear {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 5px;\r\n    padding: 0;\r\n    margin: 0;\r\n    position: absolute; }\r\n    .ngx-datatable.material .datatable-body .progress-linear .container {\r\n      display: block;\r\n      position: relative;\r\n      overflow: hidden;\r\n      width: 100%;\r\n      height: 5px;\r\n      -webkit-transform: translate(0, 0) scale(1, 1);\r\n      transform: translate(0, 0) scale(1, 1);\r\n      background-color: #aad1f9; }\r\n      .ngx-datatable.material .datatable-body .progress-linear .container .bar {\r\n        transition: all .2s linear;\r\n        -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\r\n        animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\r\n        transition: -webkit-transform .2s linear;\r\n        transition: transform .2s linear;\r\n        transition: transform .2s linear, -webkit-transform .2s linear;\r\n        background-color: #106cc8;\r\n        position: absolute;\r\n        left: 0;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 100%;\r\n        height: 5px; }\r\n  .ngx-datatable.material .datatable-footer {\r\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\r\n    font-size: 16px; }\r\n    .ngx-datatable.material .datatable-footer .page-count {\r\n      line-height: 50px;\r\n      height: 50px;\r\n      padding: 0 1.2rem; }\r\n    .ngx-datatable.material .datatable-footer .datatable-pager {\r\n      margin: 0 10px; }\r\n      .ngx-datatable.material .datatable-footer .datatable-pager li {\r\n        vertical-align: middle; }\r\n        .ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\r\n          color: rgba(0, 0, 0, 0.26) !important;\r\n          background-color: transparent !important; }\r\n        .ngx-datatable.material .datatable-footer .datatable-pager li.active a {\r\n          background-color: rgba(158, 158, 158, 0.2);\r\n          font-weight: bold; }\r\n      .ngx-datatable.material .datatable-footer .datatable-pager a {\r\n        height: 22px;\r\n        min-width: 24px;\r\n        line-height: 22px;\r\n        padding: 0 6px;\r\n        border-radius: 3px;\r\n        margin: 6px 3px;\r\n        text-align: center;\r\n        vertical-align: top;\r\n        color: rgba(0, 0, 0, 0.54);\r\n        text-decoration: none;\r\n        vertical-align: bottom; }\r\n        .ngx-datatable.material .datatable-footer .datatable-pager a:hover {\r\n          color: rgba(0, 0, 0, 0.75);\r\n          background-color: rgba(158, 158, 158, 0.2); }\r\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\r\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\r\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\r\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\r\n        font-size: 20px;\r\n        line-height: 20px;\r\n        padding: 0 3px; }\r\n\r\n/**\r\n * Checkboxes\r\n**/\r\n.datatable-checkbox {\r\n  position: relative;\r\n  margin: 0;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  padding: 10px 0; }\r\n  .datatable-checkbox input[type='checkbox'] {\r\n    position: relative;\r\n    margin: 0 1rem 0 0;\r\n    cursor: pointer;\r\n    outline: none; }\r\n    .datatable-checkbox input[type='checkbox']:before {\r\n      transition: all 0.3s ease-in-out;\r\n      content: \"\";\r\n      position: absolute;\r\n      left: 0;\r\n      z-index: 1;\r\n      width: 1rem;\r\n      height: 1rem;\r\n      border: 2px solid #f2f2f2; }\r\n    .datatable-checkbox input[type='checkbox']:checked:before {\r\n      -webkit-transform: rotate(-45deg);\r\n      transform: rotate(-45deg);\r\n      height: .5rem;\r\n      border-color: #009688;\r\n      border-top-style: none;\r\n      border-right-style: none; }\r\n    .datatable-checkbox input[type='checkbox']:after {\r\n      content: \"\";\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 1rem;\r\n      height: 1rem;\r\n      background: #fff;\r\n      cursor: pointer; }\r\n\r\n/**\r\n * Progress bar animations\r\n */\r\n@-webkit-keyframes query {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(35%) scale(0.3, 1);\r\n            transform: translateX(35%) scale(0.3, 1); }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-50%) scale(0, 1);\r\n            transform: translateX(-50%) scale(0, 1); } }\r\n@keyframes query {\r\n  0% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(35%) scale(0.3, 1);\r\n            transform: translateX(35%) scale(0.3, 1); }\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-50%) scale(0, 1);\r\n            transform: translateX(-50%) scale(0, 1); } }\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../@swimlane/ngx-datatable/release/index.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../@swimlane/ngx-datatable/release/themes/material.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../@swimlane/ngx-datatable/release/assets/icons.css"), "");

// module

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[3]);
//# sourceMappingURL=styles.bundle.js.map