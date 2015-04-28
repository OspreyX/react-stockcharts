/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpReStock"];
/******/ 	window["webpackJsonpReStock"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"react-stockcharts-dashboard","1":"react-stockcharts-home"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {
	module.exports = window.React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window.d3;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var d3 = __webpack_require__(2);
	
	var ReStock = __webpack_require__(55);
	
	var ChartCanvas = ReStock.ChartCanvas
		, XAxis = ReStock.XAxis
		, YAxis = ReStock.YAxis
		, AreaSeries = ReStock.AreaSeries
		, Translate = ReStock.Translate
		, Chart = ReStock.Chart
		, DataSeries = ReStock.DataSeries
		, EventCapture = ReStock.EventCapture
		, MouseCoordinates = ReStock.MouseCoordinates
		, CrossHair = ReStock.CrossHair
		, TooltipContainer = ReStock.TooltipContainer
		, OHLCTooltip = ReStock.OHLCTooltip
		, OverlaySeries = ReStock.OverlaySeries
		, LineSeries = ReStock.LineSeries
		, MovingAverageTooltip = ReStock.MovingAverageTooltip
		, EdgeContainer = ReStock.EdgeContainer
		, EdgeIndicator = ReStock.EdgeIndicator
		, CurrentCoordinate = ReStock.CurrentCoordinate
		, ChartWidthMixin = __webpack_require__(53)
		, InitialStateMixin = __webpack_require__(52)
	;
	
	module.exports = {
		init:function(data) {
			var AreaChartWithZoomPan = React.createClass({displayName: "AreaChartWithZoomPan",
				mixins: [InitialStateMixin, ChartWidthMixin],
				handleMATooltipClick:function(overlay) {
					console.log('You clicked on ', overlay, ' handle your onclick event here...');
				},
				render:function() {
					if (!this.state.width) return React.createElement("div", null);
	
					var parseDate = d3.time.format("%Y-%m-%d").parse
					var dateRange = { from: parseDate("2012-06-01"), to: parseDate("2012-12-31")}
					var dateFormat = d3.time.format("%Y-%m-%d");
	
					return (
						React.createElement(ChartCanvas, {
							width: this.state.width, height: 500, 
							margin: {left: 65, right: 90, top:30, bottom: 30}, data: data, ref: "eventStore"}, 
							React.createElement(Chart, {id: 1}, 
								React.createElement(XAxis, {axisAt: "bottom", orient: "bottom", ticks: 6}), 
								React.createElement(YAxis, {axisAt: "right", orient: "right"}), 
								React.createElement(DataSeries, {yAccessor: function(d)  {return d.close;}, xAccessor: function(d)  {return d.date;}}, 
									React.createElement(AreaSeries, null), 
									React.createElement(OverlaySeries, {id: 0, type: "sma", options: { period: 50}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 1, type: "sma", options: { period: 150}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 2, type: "sma", options: { period: 250}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 3, type: "sma", options: { period: 350}}, 
										React.createElement(LineSeries, null)
									), 
									React.createElement(OverlaySeries, {id: 4, type: "sma", options: { period: 450}}, 
										React.createElement(LineSeries, null)
									)
								)
							), 
							React.createElement(CurrentCoordinate, {forChart: 1}), 
							React.createElement(CurrentCoordinate, {forChart: 1, forOverlay: 1}), 
							React.createElement(EdgeContainer, null, 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 0}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "first", 
									orient: "left", 
									edgeAt: "left", 
									forChart: 1, 
									forOverlay: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "first", 
									orient: "left", 
									edgeAt: "left", 
									forChart: 1}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 2}
									), 
								React.createElement(EdgeIndicator, {
									className: "horizontal", 
									itemType: "last", 
									orient: "right", 
									edgeAt: "right", 
									forChart: 1, 
									forOverlay: 3}
									)
							), 
							React.createElement(MouseCoordinates, {forChart: 1, xDisplayFormat: dateFormat, yDisplayFormat: function(y)  {return y.toFixed(2);}}, 
								React.createElement(CrossHair, null)
							), 
							React.createElement(EventCapture, {mouseMove: true, zoom: true, pan: true, mainChart: 1}), 
							React.createElement(TooltipContainer, null, 
								React.createElement(OHLCTooltip, {forChart: 1, origin: [-60, -20]}), 
								React.createElement(MovingAverageTooltip, {forChart: 1, onClick: this.handleMATooltipClick, origin: [-60, -10]})
							)
						)
					);
				}
			});
	
			return AreaChartWithZoomPan;
		}
	}


/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(54)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/css-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/autoprefixer-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/sass-loader/index.js?outputStyle=expanded!/c/Ragu/Work/GC/opensource/react-stockcharts/docs/stylesheets/re-stock.scss", function() {
			var newContent = require("!!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/css-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/autoprefixer-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/sass-loader/index.js?outputStyle=expanded!/c/Ragu/Work/GC/opensource/react-stockcharts/docs/stylesheets/re-stock.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(56)();
	exports.push([module.id, "/* Move down content because we have a fixed navbar that is 50px tall */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/* #MainContainer {\n   position: fixed;\n   top: 50px;\n   padding-left: 100px;\n} */\naside table {\n  border: 1;\n  border-spacing: 1px;\n  border-collapse: collapse;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  aside table tbody > tr > td, aside table tbody > tr > th, aside table tfoot > tr > td, aside table tfoot > tr > th, aside table thead > tr > td, aside table thead > tr > th {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #DDD; }\n\na.button {\n  background: transparent url("+__webpack_require__(78)+") 0 0 no-repeat;\n  width: 203px;\n  height: 80px;\n  padding-left: 60px;\n  color: #fff !important; }\n  a.button small {\n    display: inline;\n    font-size: 13px;\n    margin-top: 15px; }\n\n.jumbotron {\n  background: steelblue;\n  padding: 0px;\n  color: white; }\n  .jumbotron a {\n    color: yellow; }\n\n.top-spacing {\n  padding-top: 10px; }\n\n.navbar {\n  background-color: steelblue; }\n  .navbar a {\n    color: white; }\n\n/*\n * Top navigation\n * Hide default border to remove 1px line.\n */\n.navbar-fixed-top {\n  border: 0; }\n\n/*\n * Sidebar\n */\n/* Hide for mobile, show later */\n.sidebar {\n  display: none; }\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 51px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /* Scrollable contents if viewport is shorter than content. */\n    background-color: #f5f5f5;\n    border-right: 1px solid #eee; } }\n\n/* Sidebar navigation */\n.nav-sidebar {\n  margin-right: -21px;\n  /* 20px padding + 1px border */\n  margin-bottom: 20px;\n  margin-left: -20px; }\n  .nav-sidebar > li > a {\n    padding-right: 20px;\n    padding-left: 20px; }\n  .nav-sidebar > .active a, .nav-sidebar > .active a:hover, .nav-sidebar > .active a:focus {\n    color: #fff;\n    background-color: #428bca; }\n\n/*\n * Main content\n */\n.main {\n  padding: 20px; }\n\n@media (min-width: 768px) {\n  .main {\n    padding-right: 40px;\n    padding-left: 40px; } }\n\n.main .page-header {\n  margin-top: 0; }\n", ""]);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(54)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/css-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/autoprefixer-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/sass-loader/index.js?outputStyle=expanded!/c/Ragu/Work/GC/opensource/react-stockcharts/src/styles/react-stockcharts.scss", function() {
			var newContent = require("!!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/css-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/autoprefixer-loader/index.js!/c/Ragu/Work/GC/opensource/react-stockcharts/node_modules/sass-loader/index.js?outputStyle=expanded!/c/Ragu/Work/GC/opensource/react-stockcharts/src/styles/react-stockcharts.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(56)();
	exports.push([module.id, "body {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 13px; }\n\n.react-stockchart .axis path, .react-stockchart .axis line {\n  fill: none;\n  stroke: #000000; }\n.react-stockchart .current-coordinate {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 3px; }\n.react-stockchart .grid.axis path, .react-stockchart .grid.axis line {\n  fill: none;\n  stroke: #000000;\n  shape-rendering: crispEdges;\n  opacity: 0.2; }\n.react-stockchart .y.axis path {\n  display: none; }\n.react-stockchart .candle .up {\n  fill: #6BA583;\n  stroke: #6BA583;\n  stroke-width: 1px;\n  shape-rendering: crispEdges; }\n.react-stockchart .candle .down {\n  fill: #ff0000;\n  stroke: #ff0000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges; }\n.react-stockchart .candle line {\n  stroke: #000000; }\n.react-stockchart .wick .up, .react-stockchart .wick .down {\n  stroke: #000000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges; }\n.react-stockchart .line {\n  fill: none;\n  stroke-width: 1px; }\n.react-stockchart .line-stroke {\n  shape-rendering: crispEdges;\n  stroke: steelblue; }\n.react-stockchart .overlay-stroke {\n  stroke: steelblue; }\n.react-stockchart .yin {\n  fill: none;\n  stroke: #ff0000;\n  stroke-width: 2px; }\n.react-stockchart .yang {\n  fill: none;\n  stroke: #6BA583;\n  stroke-width: 2px; }\n.react-stockchart .point_figure_up {\n  fill: none;\n  stroke: green;\n  stroke-width: 1px; }\n.react-stockchart .point_figure_down {\n  fill: none;\n  stroke: #ff0000;\n  stroke-width: 1px; }\n.react-stockchart .area {\n  fill: lightsteelblue;\n  opacity: 0.5; }\n.react-stockchart .backgroundText {\n  text-anchor: middle;\n  fill: #8a8a8a;\n  opacity: 0.15; }\n.react-stockchart .cross-hair {\n  stroke: #000000;\n  stroke-width: 1px;\n  shape-rendering: crispEdges;\n  opacity: 0.2; }\n.react-stockchart .horizontal2 .textbg {\n  opacity: 0.95;\n  fill: #f0e68c; }\n.react-stockchart .horizontal2 text {\n  fill: #757575; }\n.react-stockchart .horizontal3 .textbg {\n  opacity: 0.95;\n  fill: #000000; }\n.react-stockchart .horizontal3 text {\n  fill: #757575; }\n.react-stockchart .edge-coordinate .textbg {\n  opacity: 0.95; }\n.react-stockchart .edge-coordinate text {\n  fill: #ffffff; }\n.react-stockchart .vertical .textbg, .react-stockchart .horizontal .textbg {\n  opacity: 0.9;\n  fill: #8a8a8a; }\n.react-stockchart .vertical text, .react-stockchart .horizontal text {\n  fill: #ffffff; }\n.react-stockchart .grab {\n  cursor: grab;\n  cursor: -webkit-grab; }\n.react-stockchart .grabbing {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n.react-stockchart .crosshair {\n  cursor: crosshair; }\n.react-stockchart .toottip-hover {\n  pointer-events: all;\n  cursor: pointer; }\n.react-stockchart .histogram .bar {\n  fill: steelblue;\n  opacity: 0.3;\n  stroke: none; }\n.react-stockchart .histogram .up {\n  fill: #6BA583;\n  opacity: 0.3;\n  stroke: none; }\n.react-stockchart .histogram .down {\n  fill: #ff0000;\n  opacity: 0.3;\n  stroke: none; }\n.react-stockchart .histogram line.up {\n  stroke: #6BA583; }\n.react-stockchart .histogram line.down {\n  stroke: #ff0000; }\n.react-stockchart .ma-container rect {\n  fill: none;\n  stroke: none; }\n  .react-stockchart .ma-container rect:hover {\n    fill: #8a8a8a;\n    opacity: 0.3; }\n.react-stockchart .ma-container line {\n  stroke-width: 4px; }\n.react-stockchart .legend {\n  font-size: 11px; }\n  .react-stockchart .legend .tooltip-label {\n    fill: steelblue;\n    font-weight: bold; }\n", ""]);

/***/ },
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var InitialStateMixin = {
		getInitialState:function() {
			return {};
		}
	};
	
	module.exports = InitialStateMixin;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ChartWidthMixin = {
		handleWindowResize:function() {
			var w = $(this.getDOMNode()).parent().width();
			console.log('width = ', w);
	
			this.setState({
				width: w
			});
		},
		componentWillUnMount:function() {
			window.removeEventListener("resize", this.handleWindowResize);
		},
		componentDidMount:function() {
			window.addEventListener("resize", this.handleWindowResize);
			var w = $(this.getDOMNode()).parent().width();
			this.setState({
				width: w
			});
		},
	};
	
	module.exports = ChartWidthMixin;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

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
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
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
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
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
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
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
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
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


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// common components
	exports.ChartCanvas = __webpack_require__(58);
	exports.DataTransform = __webpack_require__(57);
	
	exports.XAxis = __webpack_require__(59);
	exports.YAxis = __webpack_require__(60);
	exports.Chart = __webpack_require__(61);
	exports.DataSeries = __webpack_require__(62);
	
	// chart types & Series
	exports.AreaSeries = __webpack_require__(63);
	exports.LineSeries = __webpack_require__(64);
	exports.CandlestickSeries = __webpack_require__(65);
	exports.OverlaySeries = __webpack_require__(66);
	exports.HistogramSeries = __webpack_require__(67);
	// interaction components
	exports.EventCapture = __webpack_require__(68);
	exports.MouseCoordinates = __webpack_require__(69);
	exports.CrossHair = __webpack_require__(70);
	exports.VerticalMousePointer = __webpack_require__(71);
	exports.CurrentCoordinate = __webpack_require__(76);
	
	// Tooltips
	exports.TooltipContainer = __webpack_require__(72);
	exports.OHLCTooltip = __webpack_require__(73);
	exports.MovingAverageTooltip = __webpack_require__(74);
	
	// misc
	exports.EdgeContainer = __webpack_require__(75);
	exports.EdgeIndicator = __webpack_require__(77);


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var EventCaptureMixin = __webpack_require__(79);
	var ChartContainerMixin = __webpack_require__(80);
	var DataTransformMixin = __webpack_require__(82);
	
	var polyLinearTimeScale = __webpack_require__(83);
	
	var doNotPassThrough = ['transformType', 'options', 'children', 'namespace'];
	
	function updatePropsToChild(child, data, props, from, to) {
		if (from === undefined) from = Math.max(data.length - 30, 0);
		if (to === undefined) to = data.length - 1;
		//child.props.data = data.filter();
		if (child.type === Chart.type || child.type === DataTransform.type) {
			child.props.data = data;
			child.props._width = props.width || props._width;
			child.props._height = props.height || props._height;
			child.props._indexAccessor = props._indexAccessor;
			child.props._polyLinear = props.polyLinear;
			if (props.polyLinear)
				child.props._xScale = polyLinearTimeScale(child.props._indexAccessor);
		}
	}
	
	var DataTransform = React.createClass({displayName: "DataTransform",
		mixins: [DataTransformMixin, ChartContainerMixin, EventCaptureMixin],
		propTypes: {
			_height: React.PropTypes.number,
			_width: React.PropTypes.number,
	
			data: React.PropTypes.any.isRequired,
			transformType: React.PropTypes.string.isRequired, // stockscale, none
			options: React.PropTypes.object
		},
		getInitialState:function() {
			return {};
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.DataTransform",
				transformType: "none"
			};
		},
	
		renderChildren:function(height, width) {
			var children = React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				var props = {};
				Object.keys(this.props)
					.filter(function(eachProp)  {return doNotPassThrough.indexOf(eachProp) === -1;})
					.forEach(function(key)  {return props[key] = this.props[key];}.bind(this));
	
				Object.keys(this.state.passThroughProps)
					.forEach(function(key)  {return props[key] = this.state.passThroughProps[key];}.bind(this));
	
				// console.log(Object.keys(props));
				return React.addons.cloneWithProps(newChild, props);
			}.bind(this));
			return this._renderChildren(children);
		},
		render:function() {
			return (
				React.createElement("g", null, this.renderChildren())
			);
		}
	});
	
	module.exports = DataTransform;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	// var TestUtils = React.addons.TestUtils;
	
	var Chart = __webpack_require__(61);
	var EventCaptureMixin = __webpack_require__(79);
	var ChartContainerMixin = __webpack_require__(80);
	
	var ChartCanvas = React.createClass({displayName: "ChartCanvas",
		mixins: [ChartContainerMixin, EventCaptureMixin],
		propTypes: {
			width: React.PropTypes.number.isRequired
			, height: React.PropTypes.number.isRequired
			, margin: React.PropTypes.object
			, interval: React.PropTypes.string.isRequired
		},
		getAvailableHeight:function(props) {
			return props.height - props.margin.top - props.margin.bottom;
		},
		getAvailableWidth:function(props) {
			return props.width - props.margin.left - props.margin.right;
		},
		getInitialState:function() {
			return {};
		},
		getDefaultProps:function() {
			return {
				margin: {top: 20, right: 30, bottom: 30, left: 80},
				interval: "D"
			};
		},
		renderChildren:function() {
	
			var children = React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				if ('ReStock.DataTransform' === newChild.props.namespace) {
					newChild = React.addons.cloneWithProps(newChild, {
						data: this.props.data,
						interval: this.props.interval
					});
				}
				return React.addons.cloneWithProps(newChild, {
					_width: this.getAvailableWidth(this.props)
					, _height: this.getAvailableHeight(this.props)
				});
			}.bind(this));
			return this._renderChildren(children);
		},
		render:function() {
	
			var transform = 'translate(' + this.props.margin.left + ',' +  this.props.margin.top + ')';
			var clipPath = '<clipPath id="chart-area-clip">'
								+ '<rect x="0" y="0" width="' + this.getAvailableWidth(this.props) + '" height="' + this.getAvailableHeight(this.props) + '" />'
							+ '</clipPath>';
	
			var children = this.renderChildren();
	
			return (
				React.createElement("svg", {width: this.props.width, height: this.props.height}, 
					React.createElement("defs", {dangerouslySetInnerHTML: { __html: clipPath}}), 
					React.createElement("g", {transform: transform}, children)
				)
			);
		}
	});
	
	module.exports = ChartCanvas;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(81);
	
	var XAxis = React.createClass({displayName: "XAxis",
		mixins: [PureRenderMixin],
		propTypes: {
			axisAt: React.PropTypes.oneOfType([
						React.PropTypes.oneOf(['top', 'bottom', 'middle'])
						, React.PropTypes.number
					]).isRequired,
			orient: React.PropTypes.oneOf(['top', 'bottom']).isRequired,
			innerTickSize: React.PropTypes.number,
			outerTickSize: React.PropTypes.number,
			tickFormat: React.PropTypes.func,
			tickPadding: React.PropTypes.number,
			tickSize: React.PropTypes.number,
			ticks: React.PropTypes.number,
			tickValues: React.PropTypes.array
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.XAxis",
				showGrid: false
			};
		},
		getInitialState:function() {
			return {};
		},
		componentWillMount:function() {
			this.state.xAxis = d3.svg.axis();
		},
		componentDidMount:function() {
			this.updateAxis();
		},
		componentDidUpdate:function() {
			this.updateAxis();
		},
		updateAxis:function() {
			var axis = d3.svg.axis()
				.scale(this.props._xScale)
				.orient(this.props.orient)
				//.innerTickSize(this.props.showGrid ? this.props.innerTickSize : 5)
				//.outerTickSize(this.props.showGrid ? this.props.outerTickSize : 5)
				//.tickPadding(this.props.showGrid ? 5 : 10)
				;
			if (this.props.orient) axis.orient(this.props.orient);
			if (this.props.innerTickSize) axis.innerTickSize(this.props.innerTickSize);
			if (this.props.outerTickSize) axis.outerTickSize(this.props.outerTickSize);
			if (this.props.tickFormat) {
				if (this.props._xScale.isPolyLinear && this.props._xScale.isPolyLinear())
					console.warn('Cannot set tickFormat on a poly linear scale, ignoring tickFormat on XAxis');
				else
					axis.tickFormat(this.props.tickFormat)
			};
			if (this.props.tickPadding) axis.tickPadding(this.props.tickPadding);
			if (this.props.tickSize) axis.tickSize(this.props.tickSize);
			if (this.props.ticks) axis.ticks(this.props.ticks);
			if (this.props.tickValues) axis.tickValues(this.props.tickValues);
			d3.select(this.getDOMNode()).call(axis);
		},
		render:function() {
			var axisAt = this.props.axisAt
				, range = this.props._yScale.range();
			if (this.props.axisAt === 'top') axisAt = Math.min(range[0], range[1]);
			if (this.props.axisAt === 'bottom') axisAt = Math.max(range[0], range[1]);
			if (this.props.axisAt === 'middle') axisAt = (range[0] + range[1]) / 2;
	
			return (
				React.createElement("g", {className: "x axis", transform: 'translate(0, ' + axisAt + ')'})
			);
		}
	});
	
	module.exports = XAxis;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1)
		, d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(81);
	
	
	var YAxis = React.createClass({displayName: "YAxis",
		mixins: [PureRenderMixin],
		propTypes: {
			axisAt: React.PropTypes.oneOfType([
						React.PropTypes.oneOf(['left', 'right', 'middle'])
						, React.PropTypes.number
					]).isRequired,
			orient: React.PropTypes.oneOf(['left', 'right']).isRequired,
			innerTickSize: React.PropTypes.number,
			outerTickSize: React.PropTypes.number,
			tickFormat: React.PropTypes.func,
			tickPadding: React.PropTypes.number,
			tickSize: React.PropTypes.number,
			ticks: React.PropTypes.number,
			tickValues: React.PropTypes.array,
			percentScale: React.PropTypes.bool,
			axisPadding: React.PropTypes.number
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.YAxis",
				showGrid: false,
				axisPadding: 0
			};
		},
		getInitialState:function() {
			return {};
		},
	
		componentDidMount:function() {
			this.updateAxis();
		},
		componentDidUpdate:function() {
			this.updateAxis();
		},
		updateAxis:function() {
			var scale = this.props._yScale;
			if (this.props.percentScale) scale = scale.copy().domain([0, 1]);
	
			var axis = d3.svg.axis()
				.scale(scale)
				.orient(this.props.orient)
				//.innerTickSize(this.props.showGrid ? this.props.innerTickSize : 5)
				//.outerTickSize(this.props.showGrid ? this.props.outerTickSize : 5)
				//.tickPadding(this.props.showGrid ? 5 : 10)
				;
			if (this.props.orient) axis.orient(this.props.orient);
			if (this.props.innerTickSize) axis.innerTickSize(this.props.innerTickSize);
			if (this.props.outerTickSize) axis.outerTickSize(this.props.outerTickSize);
			if (this.props.tickFormat) axis.tickFormat(this.props.tickFormat);
			if (this.props.tickPadding) axis.tickPadding(this.props.tickPadding);
			if (this.props.tickSize) axis.tickSize(this.props.tickSize);
			if (this.props.ticks) axis.ticks(this.props.ticks);
			if (this.props.tickValues) axis.tickValues(this.props.tickValues);
	
			d3.select(this.getDOMNode()).call(axis);
		},
		render:function() {
			var axisAt = this.props.axisAt
				, range = this.props._xScale.range();
			if (this.props.axisAt === 'left') axisAt = Math.min(range[0], range[1]) + this.props.axisPadding;
			if (this.props.axisAt === 'right') axisAt = Math.max(range[0], range[1]) + this.props.axisPadding;
			if (this.props.axisAt === 'middle') axisAt = (range[0] + range[1]) / 2 + this.props.axisPadding;
	
			return (
				React.createElement("g", {className: "y axis", transform: 'translate(' + axisAt + ', 0)'})
			);
		}
	});
	
	module.exports = YAxis;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Overlays have to be calculated here so scales can be modified according to that
	
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		ScaleUtils = __webpack_require__(84),
		OverlayUtils = __webpack_require__(85),
		Utils = __webpack_require__(86),
		overlayColors = Utils.overlayColors;
		// logger = require('./utils/logger')
	
	var pluck = Utils.pluck;
	var keysAsArray = Utils.keysAsArray;
	
	function getOverlayFromList(overlays, id) {
		return overlays.map(function(each)  {return [each.id, each];})
			.filter(function(eachMap)  {return eachMap[0] === id;})
			.map(function(eachMap)  {return eachMap[1];})[0];
	}
	
	var Chart = React.createClass({displayName: "Chart",
		statics: {
			getWidth:function(props) { return props.width || props._width; },
			getHeight:function(props) { return props.height || props._height; }
		},
		propTypes: {
			data: React.PropTypes.array.isRequired,
			height: React.PropTypes.number,
			width: React.PropTypes.number,
			origin: React.PropTypes.oneOfType([
						React.PropTypes.array
						, React.PropTypes.func
					]).isRequired,
			id: React.PropTypes.number.isRequired,
			_height: React.PropTypes.number,
			_width: React.PropTypes.number,
			// _showCurrent: React.PropTypes.bool,
			// if xScale and/or yScale is passed as props
			// the user needs to set 
			// xDomainUpdate=false and yDomainUpdate=false
			// in order for this component to NOT update the scale on change of data
			xScale: React.PropTypes.func,
			yScale: React.PropTypes.func,
			xDomainUpdate: React.PropTypes.bool,
			yDomainUpdate: React.PropTypes.bool,
			// _mouseXY: React.PropTypes.array,
			_chartData: React.PropTypes.object.isRequired,
			_updateMode: React.PropTypes.object.isRequired
			/*,
			_currentItem: React.PropTypes.object,
			_lastItem: React.PropTypes.object,
			_currentMouseXY: React.PropTypes.array,
			_currentXYValue: React.PropTypes.array*/
		},
		mixins: [React.addons.PureRenderMixin],
		getDefaultProps:function() {
			return {
				namespace: "ReStock.Chart",
				transformDataAs: "none",
				yDomainUpdate: true,
				origin: [0, 0]
			};
		},/*
		identifyOverlaysToAdd(props) {
			var overlaysToAdd = [];
			React.Children.forEach(props.children, (child) => {
				if (/DataSeries$/.test(child.props.namespace)) {
					React.Children.forEach(child.props.children, (grandChild) => {
						if (/OverlaySeries$/.test(grandChild.props.namespace)) {
							var overlay = getOverlayFromList(props._chartData.overlays, grandChild.props.id)
							var yAccessor = OverlayUtils.getYAccessor(grandChild.props);
							if (overlay === undefined) {
								overlay = {
									id: grandChild.props.id,
									yAccessor: yAccessor,
									options: grandChild.props.options,
									type: grandChild.props.type,
									tooltipLabel: OverlayUtils.getToolTipLabel(grandChild.props),
									stroke: grandChild.stroke || overlayColors(grandChild.props.id)
								};
								overlaysToAdd.push(overlay);
							}
						}
					});
				}
			})
			return overlaysToAdd;
		},
		componentWillNOTMount() {
			var _chartData = this.props._chartData;
	
			var scales = this.defineScales(this.props);
			var accessors = this.getXYAccessors(this.props);
			// identify overlays
			var overlaysToAdd = this.identifyOverlaysToAdd(this.props);
			_chartData = _chartData.set({ overlays: overlaysToAdd });
			// console.log(overlaysToAdd);
			// calculate overlays
			this.calculateOverlays(this.props.fullData, _chartData.overlays);
	
			var overlayValues = this.updateOverlayFirstLast(this.props.data, _chartData.overlays)
			_chartData = _chartData.set( { overlayValues: overlayValues } ); // replace everything
	
			var overlayYAccessors = pluck(keysAsArray(_chartData.overlays), 'yAccessor');
	
			scales = this.updateScales(this.props
				, [accessors.xAccessor]
				, [accessors.yAccessor].concat(overlayYAccessors)
				, scales.xScale
				, scales.yScale);
	
			_chartData = _chartData.set({ accessors: accessors });
			_chartData = _chartData.set({ scales: scales });
	
			var last = Utils.cloneMe(this.props.data[this.props.data.length - 1]);
			_chartData = _chartData.set({ lastItem: last });
	
			var first = Utils.cloneMe(this.props.data[0]);
			_chartData = _chartData.set({ firstItem: first });
	
			this.setState({ chartData: _chartData });
		},
		componentWillNOTReceiveProps(nextProps) {
			// ignoring  _mouseXY, _currentItem, _lastItem
	
			var scaleRecalculationNeeded = (Chart.getWidth(this.props) !== Chart.getWidth(nextProps)
				|| Chart.getHeight(this.props) !== Chart.getHeight(nextProps)
				|| this.props.xScale !== nextProps.xScale
				|| this.props.yScale !== nextProps.yScale
				|| this.props.xDomainUpdate !== nextProps.xDomainUpdate
				|| this.props.yDomainUpdate !== nextProps.yDomainUpdate)
	
			var _updateMode = nextProps._updateMode;
			var _chartData = nextProps._chartData;
			var overlaysToAdd = this.identifyOverlaysToAdd(nextProps);
	
			var overlays = _chartData.overlays;
			if (overlaysToAdd.length > 0)
				overlays = overlays.push(overlaysToAdd);
	
			if (this.props.data !== nextProps.data) {
				scaleRecalculationNeeded = true;
			}
			// console.log(this.props._chartData.overlays !== nextProps._chartData.overlays);
			if (this.state.chartData.overlays !== overlays) { //or if the data interval changes
				// TODO
				// if any overlay.toBeRemoved = true then overlays.splice that one out
				this.calculateOverlays(nextProps.fullData, overlays);
	
				_updateMode = _updateMode.set({ immediate: false });
	
	
				scaleRecalculationNeeded = true;
			}
			if (scaleRecalculationNeeded) {
				var scales = this.defineScales(nextProps, this.state.chartData.scales.xScale, this.state.chartData.scales.yScale);
				var xyAccessors = this.getXYAccessors(nextProps);
	
				_updateMode = _updateMode.set({ immediate: false });
				var overlayYAccessors = pluck(keysAsArray(overlays), 'yAccessor');
	
	
				var overlayValues = this.updateOverlayFirstLast(nextProps.data, _chartData.overlays)
				_chartData = _chartData.set( { overlayValues: overlayValues } ); // replace everything
	
				// console.log(xyAccessors, overlayYAccessors);
	
				scales = this.updateScales(nextProps
					, [xyAccessors.xAccessor]
					, [xyAccessors.yAccessor].concat(overlayYAccessors)
					, scales.xScale
					, scales.yScale);
	
				_chartData = _chartData.set({ accessors: xyAccessors });
				_chartData = _chartData.set({ scales: scales });
	
				var last = Utils.cloneMe(nextProps.data[nextProps.data.length - 1]);
				_chartData = _chartData.set({ lastItem: last });
	
				var first = Utils.cloneMe(nextProps.data[0]);
				_chartData = _chartData.set({ firstItem: first });
	
				this.setState({ chartData: _chartData });
			} else {
				this.setState({ chartData: nextProps._chartData });
			}
		},
		calculateOverlays(data, overlays) {
			overlays
				.filter((eachOverlay) => eachOverlay.id !== undefined)
				.forEach((overlay) => {
					OverlayUtils.calculateOverlay(data, overlay);
				});
			// console.table(data);
			// console.log(overlays);
		},
		updateOverlayFirstLast(data,
			overlays) {
	
			console.log('updateOverlayFirstLast');
	
			var overlayValues = [];
	
			overlays
				.forEach((eachOverlay, idx) => {
					// console.log(JSON.stringify(first), Object.keys(first), yAccessor(first));
					overlayValues.push({
						id: eachOverlay.id,
						first: OverlayUtils.firstDefined(data, eachOverlay.yAccessor),
						last: OverlayUtils.lastDefined(data, eachOverlay.yAccessor)
					})
				})
			// console.log(_overlayValues);
			return overlayValues;
		},
		defineScales(props, xScaleFromState, yScaleFromState) {
			var xScale = props.xScale || xScaleFromState || props._xScale,
				yScale = props.yScale || yScaleFromState;
	
			if (xScale === undefined) {
				var each = props.data[0];
				if (typeof each === 'object') {
					Object.keys(each).forEach((key) => {
						if (Object.prototype.toString.call(each[key]) === '[object Date]') {
							xScale = d3.time.scale();
						}
					});
				}
				if (xScale === undefined) xScale = d3.scale.linear();
				//xScale = polyLinearTimeScale();
			}
			if (yScale === undefined) {
				yScale = d3.scale.linear();
			}
			return { xScale: xScale, yScale: yScale };
		},
		getXYAccessors(props) {
			var accessor = { xAccessor: null, yAccessor: null };
	
			React.Children.forEach(props.children, (child) => {
				if (['ReStock.DataSeries']
						.indexOf(child.props.namespace) > -1) {
					if (child.props) {
						var xAccesor = props._stockScale ? props._indexAccessor : child.props.xAccessor
						accessor.xAccessor = xAccesor;
						accessor.yAccessor = child.props.yAccessor;
					}
				}
			});
			// yAccessors.push(overlayY);
	
			return accessor;
		},
		updateScales(props, xAccessors, yAccessors, xScale, yScale) {
			console.log('updateScales');
	
			var result = ScaleUtils.flattenData(props.data, xAccessors, yAccessors);
	
			if (props.xScale === undefined || props.xDomainUpdate) {
				xScale.range([0, Chart.getWidth(props)]);
				// if polylinear scale then set data
				if (xScale.data !== undefined) {
					xScale.data(props.data);
				} else {
					// else set the domain
					xScale.domain(d3.extent(result.xValues));
				}
			}
	
			if (props.yScale === undefined || props.yDomainUpdate) {
				yScale.range([Chart.getHeight(props), 0]);
				var domain = d3.extent(result.yValues);
				//var extraPadding = Math.abs(domain[0] - domain[1]) * 0.05;
				//yScale.domain([domain[0] - extraPadding, domain[1] + extraPadding]);
				yScale.domain(domain);
			}
			return {
				xScale: xScale.copy(),
				yScale: yScale.copy()
			};
		},*/
		renderChildren:function() {
			return React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				if (['ReStock.DataSeries', 'ReStock.ChartOverlay', 'ReStock.XAxis', 'ReStock.YAxis']
					.indexOf(child.props.namespace) < 0) return child;
	
				var newChild = child;
				newChild = React.addons.cloneWithProps(newChild, {
					_xScale: this.props._chartData.scales.xScale,
					_yScale: this.props._chartData.scales.yScale,
					data: this.props.data,
					_xAccessor: this.props._indexAccessor
				});
				newChild = this.updatePropsForDataSeries(newChild);
				if (newChild.props.xAccessor !== undefined && this.props._stockScale) {
					console.warn('xAccessor defined in DataSeries will override the indexAccessor of the polylinear scale. This might not be the right configuration');
					console.warn('Either remove the xAccessor configuration on the DataSeries or change the polyLinear=false in Translate');
				}
				return newChild;
			}.bind(this), this);
		},
		updatePropsForDataSeries:function(child) {
			if ("ReStock.DataSeries" === child.props.namespace) {
				// console.log(this.state.chartData.overlays);
				return React.addons.cloneWithProps(child, {
					//_showCurrent: this.props._showCurrent,
					//_mouseXY: this.props._mouseXY,
					//_currentItem: this.state.chartData.currentItem,
					//_lastItem: this.props._chartData.lastItem,
					//_firstItem: this.props._chartData.firstItem,
					/*_currentMouseXY: this.props._currentMouseXY,
					_currentXYValue: this.props._currentXYValue,*/
					_overlays: this.props._chartData.overlays,
					_updateMode: this.props._updateMode,
					_pan: this.props._pan,
					_isMainChart: this.props._isMainChart
				});
			}
			return child;
		},
		render:function() {
			var height = this.props._height;
			var width = this.props._width;
			var origin = typeof this.props.origin === 'function' ? this.props.origin(width, height) : this.props.origin;
			var transform = 'translate(' + origin[0] + ',' +  origin[1] + ')';
			if (this.props._pan && !this.props._isMainChart) {
			// if (this.props._pan) {
				return React.createElement("g", null)
			}
			// console.log(this.props._chartData);
			return (
				React.createElement("g", {transform: transform}, this.renderChildren())
			);
		}
	});
	
	module.exports = Chart;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// DataSeries has to hold OverlaySeries since DataSeries might define the xAccessor and it needs to be sent to OverlaySeries
	// Data series has to pass the current mouse position to the children so this has no benefit
	//     of PureRenderMixin
	
	var React = __webpack_require__(1),
		PureRenderMixin = __webpack_require__(81),
		Utils = __webpack_require__(86),
		d3 = __webpack_require__(2),
		OverlayUtils = __webpack_require__(85),
		overlayColors = Utils.overlayColors;
	
	function getOverlayFromList(overlays, id) {
		return overlays.map(function(each)  {return [each.id, each];})
			.filter(function(eachMap)  {return eachMap[0] === id;})
			.map(function(eachMap)  {return eachMap[1];})[0];
	}
	
	var DataSeries = React.createClass({displayName: "DataSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			xAccessor: React.PropTypes.func,
			_xAccessor: React.PropTypes.func,
			yAccessor: React.PropTypes.func.isRequired,
	
			_xScale: React.PropTypes.func,
			_yScale: React.PropTypes.func,
	
			/*_currentItem: React.PropTypes.object,
			_lastItem: React.PropTypes.object,
			_firstItem: React.PropTypes.object,*/
			_overlays: React.PropTypes.array,
			_updateMode: React.PropTypes.object
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.DataSeries"
			};
		},
		renderChildren:function() {
			var newChildren = React.Children.map(this.props.children, function(child)  {
				var newChild = child;
	
				if (typeof child.type === 'string') return newChild;
	
				if (/Series$/.test(newChild.props.namespace)) {
					newChild = React.addons.cloneWithProps(newChild, {
						_xScale: this.props._xScale,
						_yScale: this.props._yScale,
						_xAccessor: (this.props.xAccessor || this.props._xAccessor),
						_yAccessor: this.props.yAccessor,
						data: this.props.data
					});
					if (/OverlaySeries$/.test(newChild.props.namespace)) {
						var key = newChild.props.id;
						var overlay = getOverlayFromList(this.props._overlays, newChild.props.id);
						newChild = React.addons.cloneWithProps(newChild, {
							_overlay: overlay,
							_pan: this.props._pan,
							_isMainChart: this.props._isMainChart
						});
					}
				}
				return newChild;
			}.bind(this), this);
	
			return newChildren;
		},
		render:function() {
			//throw new Error();
			// console.log('rendering dataseries...');
			/*if (this.props._pan) {
				return <g></g>
			}*/
			return (
				React.createElement("g", {style: { "clipPath": "url(#chart-area-clip)"}}, this.renderChildren())
			);
		}
	});
	
	module.exports = DataSeries;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(81);
	
	var AreaSeries = React.createClass({displayName: "AreaSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired,
			data: React.PropTypes.array.isRequired
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.AreaSeries"
			}
		},
		getPath:function() {
			var props = this.props;
			var dataSeries = d3.svg.line()
				.defined(function(d, i) {
						return (props._yAccessor(d) !== undefined);
						//nreturn false;
					})
				.x(function(d) { return props._xScale(props._xAccessor(d)); })
				.y(function(d) { return props._yScale(props._yAccessor(d)); });
			return dataSeries(props.data);
		},
		getArea:function() {
			var props = this.props, height = props._yScale.range()[0];
			var areaSeries = d3.svg.area()
				.defined(function(d, i) {
						return (props._yAccessor(d) !== undefined);
						// return false;
					})
				.x(function(d) { return props._xScale(props._xAccessor(d)); })
				.y0(height - 1)
				.y1(function(d) { return props._yScale(props._yAccessor(d)); });
	
			return areaSeries(props.data);
		},
		render:function() {
			return (
				React.createElement("g", null, 
					React.createElement("path", {d: this.getPath(), className: "line line-stroke"}), 
					React.createElement("path", {d: this.getArea(), className: "area"})
				)
			);
		}
	});
	
	module.exports = AreaSeries;
	
	/*				
	
	*/

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(81);
	
	
	var LineSeries = React.createClass({displayName: "LineSeries",
		// mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired,
			data: React.PropTypes.array.isRequired,
			className: React.PropTypes.string,
			stroke: React.PropTypes.string
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.LineSeries",
				className: "line "
			}
		},
		getPath:function() {
			// console.log('LineSeries.getPath');
			var props = this.props;
			var dataSeries = d3.svg.line()
				.defined(function(d, i) {
						return (props._yAccessor(d) !== undefined);
						//nreturn false;
					})
				.x(function(d) { return props._xScale(props._xAccessor(d)); })
				.y(function(d) { return props._yScale(props._yAccessor(d)); });
			return dataSeries(props.data);
		},
		render:function() {
			var className = this.props.className.concat((this.props.stroke !== undefined) ? '' : ' line-stroke');
			// console.log('%s, %s, %s', className, this.props.className, this.props.stroke);
	
			return (
				React.createElement("g", null, 
					React.createElement("path", {d: this.getPath(), stroke: this.props.stroke, fill: "none", className: className})
				)
			);
		}
	});
	
	module.exports = LineSeries;
	
	/*				
	
	*/

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(81);
	
	
	var CandlestickSeries = React.createClass({displayName: "CandlestickSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired
		},
		statics: {
			yAccessor: function(d)  {return {open: d.open, high: d.high, low: d.low, close: d.close};}
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.CandlestickSeries"
			}
		},
		getWicks:function() {
			var wicks = this.props.data
					.filter(function (d) { return d.close !== undefined; })
					.map(function(d, idx) {
						var ohlc = this.props._yAccessor(d);
	
						var x1 = Math.round(this.props._xScale(this.props._xAccessor(d))),
							y1 = this.props._yScale(ohlc.high),
							x2 = x1,
							y2 = this.props._yScale(ohlc.low),
							className = (ohlc.open >= ohlc.close) ? 'up' : 'down';
						var path = 'M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2;
						//return <path key={idx} d={path} className={className} />
						/* */
						return React.createElement("line", {key: idx, 
										className: className, 
										x1: x1, 
										y1: y1, 
										x2: x2, 
										y2: y2})
					}, this);
			return wicks;
		},
		getCandles:function() {
			var width = this.props._xScale(this.props._xAccessor(this.props.data[this.props.data.length - 1]))
				- this.props._xScale(this.props._xAccessor(this.props.data[0]));
			var cw = (width / (this.props.data.length)) * 0.5;
			var candleWidth = Math.floor(cw) % 2 === 0 ? Math.floor(cw) : Math.round(cw); // 
			var candles = this.props.data
					.filter(function (d) { return d.close !== undefined; })
					.map(function(d, idx) {
						var ohlc = this.props._yAccessor(d);
						var x = Math.round(this.props._xScale(this.props._xAccessor(d)))
								- (candleWidth === 1 ? 0 : 0.5 * candleWidth),
							y = this.props._yScale(Math.max(ohlc.open, ohlc.close)),
							height = Math.abs(this.props._yScale(ohlc.open) - this.props._yScale(ohlc.close)),
							className = (ohlc.open <= ohlc.close) ? 'up' : 'down';
						if (ohlc.open === ohlc.close) {
							return React.createElement("line", {key: idx, x1: x, y1: y, x2: x + candleWidth, y2: y})
						}
						if (candleWidth <= 1) {
							return React.createElement("line", {className: className, key: idx, x1: x, y1: y, x2: x, y2: y + height})
						}
						return React.createElement("rect", {key: idx, className: className, 
									x: x, 
									y: y, 
									width: candleWidth, 
									height: height})
					}, this);
			return candles;
		},
		render:function() {
			return (
				React.createElement("g", null, 
					React.createElement("g", {className: "wick", key: "wicks"}, 
						this.getWicks()
					), 
					React.createElement("g", {className: "candle", key: "candles"}, 
						this.getCandles()
					)
				)
			);
		}
	});
	
	module.exports = CandlestickSeries;
	
	/*				
	
	*/

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1),
		PureRenderMixin = __webpack_require__(81),
		Utils = __webpack_require__(86),
		OverlayUtils = __webpack_require__(85);
	
	var OverlaySeries = React.createClass({displayName: "OverlaySeries",
		//namespace: "ReStock.OverlaySeries",
		mixins: [PureRenderMixin],
		/*shouldComponentUpdate(nextProps, nextState) {
			return false;
		},*/
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			// _yAccessor: React.PropTypes.func.isRequired,
			_overlay: React.PropTypes.object.isRequired,
			data: React.PropTypes.array.isRequired,
			type: React.PropTypes.oneOf(['sma', 'ema']),
			options: React.PropTypes.object.isRequired,
			id: React.PropTypes.number.isRequired,
			stroke: React.PropTypes.string
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.OverlaySeries"
			};
		},/*
		componentWillMount: function () {
			var overlay = {
				id: newChild.props.id,
				yAccessor: OverlayUtils.getYAccessor(newChild.props),
				options: newChild.props.options,
				type: newChild.props.type,
				tooltipLabel: OverlayUtils.getToolTipLabel(newChild.props),
				stroke: newChild.stroke || overlayColors(newChild.props.id)
			};
		},*/
		componentWillUnMount:function() {
			console.log('componentWillUnMount');
			console.log('componentWillUnMount');
			console.log('componentWillUnMount');
			console.log('componentWillUnMount');
			console.log('componentWillUnMount');
			// unregister self
			this.props._overlay.set(null);
		},
		componentWillReceiveProps:function(nextProps) {
			// if things change reset the overlay TODO
	
			// if optinos have changed - update the options
			if (this.props.options !== nextProps.options) {
				console.log('updating props.....');
				// var overlay = this.props._overlays[key];
				this.props._overlay.set('options', nextProps.options);
			}
		},
		renderChildren:function() {
			return React.Children.map(this.props.children, function(child)  {
				var newChild = child;
	
				if (typeof child.type === 'string') return newChild;
	
				if (/Series$/.test(newChild.props.namespace)) {
					newChild = React.addons.cloneWithProps(newChild, {
						_xScale: this.props._xScale,
						_yScale: this.props._yScale,
						_xAccessor: (this.props.xAccessor || this.props._xAccessor),
						_yAccessor: this.props._overlay.yAccessor,
						data: this.props.data,
						stroke: this.props._overlay.stroke,
						className: "overlay"
					});
				}
				return newChild;
			}.bind(this), this);
		},
		render:function() {
			// console.log('OverlaySeries.render');
			if (this.props._overlay.yAccessor === undefined) return null;
			if (this.props._pan && this.props._isMainChart) {
				return React.createElement("g", null)
			}
			return (
				React.createElement("g", null, this.renderChildren())
			);
		}
	});
	
	module.exports = OverlaySeries;
	
	//


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		PureRenderMixin = __webpack_require__(81);
	
	
	var HistogramSeries = React.createClass({displayName: "HistogramSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			_xScale: React.PropTypes.func.isRequired,
			_yScale: React.PropTypes.func.isRequired,
			_xAccessor: React.PropTypes.func.isRequired,
			_yAccessor: React.PropTypes.func.isRequired,
			baseAt: React.PropTypes.oneOfType([
						React.PropTypes.oneOf(['top', 'bottom', 'middle'])
						, React.PropTypes.number
					]).isRequired,
			direction: React.PropTypes.oneOf(['up', 'down']).isRequired,
			className: React.PropTypes.oneOfType([
						React.PropTypes.func, React.PropTypes.string
					]).isRequired,
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.HistogramSeries",
				baseAt: 'bottom',
				direction: 'up',
				className: 'bar'
			}
		},
		getBars:function() {
			var base = this.props.baseAt === 'top'
						? 0
						: this.props.baseAt === 'bottom'
							? this.props._yScale.range()[0]
							: this.props.baseAt === 'middle'
								? (this.props._yScale.range()[0] + this.props._yScale.range()[1]) / 2
								: this.props.baseAt;
	
			var dir = this.props.direction === 'up' ? -1 : 1;
	
			var getClassName = function()  {return this.props.className;}.bind(this);
			if (typeof this.props.className === 'function') {
				getClassName = this.props.className;
			}
			var width = Math.abs(this.props._xScale.range()[0] - this.props._xScale.range()[1]);
			var barWidth = width / (this.props.data.length) * 0.5;
			var bars = this.props.data
					.filter(function(d)  {return this.props._yAccessor(d) !== undefined;}.bind(this) )
					.map(function(d, idx)  {
						var yValue = this.props._yAccessor(d);
						var x = Math.round(this.props._xScale(this.props._xAccessor(d))) - 0.5 * barWidth,
							className = getClassName(d) ,
							y, height;
						if (dir > 0) {
							y = base;
							height = this.props._yScale.range()[0] - this.props._yScale(yValue);
						} else {
							y = this.props._yScale(yValue);
							height = base - y;
						}
	
						if (Math.round(barWidth) <= 1) {
							return React.createElement("line", {key: idx, className: className, 
										x1: Math.round(x), y1: Math.round(y), 
										x2: Math.round(x), y2: Math.round(y + height)})
						}
						return React.createElement("rect", {key: idx, className: className, 
									x: Math.round(x), 
									y: Math.round(y), 
									width: Math.round(barWidth), 
									height: Math.round(height)})
					}.bind(this), this);
			return bars;
		},
		render:function() {
			return (
				React.createElement("g", {className: "histogram"}, 
					this.getBars()
				)
			);
		}
	});
	
	module.exports = HistogramSeries;
	
	/*				
	
	*/

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var Utils = __webpack_require__(86)
	
	var EventCapture = React.createClass({displayName: "EventCapture",
		propTypes: {
			mainChart: React.PropTypes.number.isRequired,
			mouseMove: React.PropTypes.bool.isRequired,
			zoom: React.PropTypes.bool.isRequired,
			zoomMultiplier: React.PropTypes.number.isRequired,
			pan: React.PropTypes.bool.isRequired,
			panSpeedMultiplier: React.PropTypes.number.isRequired,
			defaultFocus: React.PropTypes.bool.isRequired,
	
			_chartData: React.PropTypes.object.isRequired,
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
			_eventStore: React.PropTypes.object.isRequired,
			_zoomEventStore: React.PropTypes.object
		},
		getInitialState:function() {
			return {
				dragOrigin: [0, 0],
				defaultFocus: false
			};
		},
		componentWillMount:function() {
			this.setState({
				className: this.props.className,
				inFocus: this.props.defaultFocus
			});
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.EventCapture"
				, mouseMove: false
				, zoom: false
				, zoomMultiplier: 1
				, pan: false
				, panSpeedMultiplier: 1
				, className: "crosshair"
				, defaultFocus: false
			}
		},
		toggleFocus:function() {
			this.setFocus(!this.state.defaultFocus);
		},
		setFocus:function(focus) {
			this.setState({
				defaultFocus: focus
			});
		},
		handleEnter:function() {
			if (this.props._eventStore) {
				// console.log('in');
				this.props._eventStore.get().mouseOver.set({'value': true});
			}
		},
		handleLeave:function() {
			if (this.props._eventStore) {
				// console.log('out');
				var eventData = this.props._eventStore.get();
				this.props._eventStore.get().mouseOver.set({'value': false});
				this.props._eventStore.get().set({ pan: false });
				this.setState({
					dragging: false,
					dragOrigin: [0, 0],
					className: this.props.className
				})
			}
		},
		handleWheel:function(e) {
			if (this.props.zoom
					&& this.props._eventStore
					//&& this.props._eventStore.get().inFocus.value
					&& this.state.inFocus
					&& this.props._zoomEventStore) {
				e.stopPropagation();
				e.preventDefault();
				var zoomDir = e.deltaY > 0 ? this.props.zoomMultiplier : -this.props.zoomMultiplier;
				//console.log(zoomDir);
	
				this.props._zoomEventStore.get().set({ zoom : zoomDir });
			}
		},
		handleMouseMove:function(e) {
			if (this.props._eventStore && this.props.mouseMove) {
				var eventData = this.props._eventStore.get();
				var newPos = Utils.mousePosition(e);
				//var oldPos = eventData.mouseXY;
				var startPos = this.state.dragOrigin;
				if (! (startPos[0] === newPos[0] && startPos[1] === newPos[1])) {
					if (this.state.dragging) {
						eventData = eventData.set({
							dx: (newPos[0] - startPos[0]) * this.props.panSpeedMultiplier,
							dragOriginDomain: this.state.dragOriginDomain
						});
	
					}
					eventData = eventData.set( { mouseXY: newPos } );
					eventData = eventData.set({ pan: this.state.dragging });
					// console.log('eventData....', eventData);
				}
			}
		},
		handleMouseDown:function(e) {
			if (this.props._eventStore) {
				// this.props._eventStore.get().inFocus.set({'value': true});
				var inFocus = true
				if (this.props.pan && this.props._zoomEventStore) {
					this.setState({
						dragging: true,
						dragOrigin: Utils.mousePosition(e),
						dragOriginDomain: this.props._chartData.scales.xScale.domain(),
						className: "grabbing",
						inFocus: inFocus
					})
				} else {
					this.setState({
						inFocus: inFocus
					})
				}
			}
			e.preventDefault();
		},
		handleMouseUp:function(e) {
			if (this.props.pan && this.props._zoomEventStore) {
	
				this.props._eventStore.get().set({ pan: false })
				this.setState({
					dragging: false,
					dragOrigin: [0, 0],
					className: this.props.className
				})
			}
			e.preventDefault();
		},
		render:function() {
			return (
				React.createElement("rect", {
					className: this.state.className, 
					width: this.props._width, height: this.props._height, style: {opacity: 0}, 
					onMouseEnter: this.handleEnter, 
					onMouseLeave: this.handleLeave, 
					onMouseMove: this.handleMouseMove, 
					onMouseDown: this.handleMouseDown, 
					onMouseUp: this.handleMouseUp, 
					onWheel: this.handleWheel}
					)
			);
		}
	});
	
	module.exports = EventCapture;
	
	/*				
	
	*/

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var EdgeCoordinate = __webpack_require__(87)
	var Utils = __webpack_require__(86)
	
	// Should not use xScale and yScale here as MouseCoordinate is common across all charts
	// if it is made to be inside a Chart another Chart might be displayed over it
	var MouseCoordinates = React.createClass({displayName: "MouseCoordinates",
		propTypes: {
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
			_show: React.PropTypes.bool.isRequired,
			_mouseXY: React.PropTypes.array.isRequired,
			_chartData: React.PropTypes.object.isRequired,
			_currentItem: React.PropTypes.object.isRequired,
	
			forChart: React.PropTypes.number.isRequired, 
			xDisplayFormat: React.PropTypes.func.isRequired,
			yDisplayFormat: React.PropTypes.func.isRequired
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return nextProps._currentItem != this.props._currentItem
					|| nextProps._mouseXY !== this.props._mouseXY
					|| nextProps._show !== this.props._show
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.MouseCoordinates",
				_show: false,
				snapX: true,
				xDisplayFormat: Utils.displayDateFormat,
				yDisplayFormat: Utils.displayNumberFormat,
			}
		},
		renderChildren:function() {
			var chartData = this.props._chartData;
			var item = this.props._currentItem.data;
			
	
			var xValue = chartData.accessors.xAccessor(item);
			var xDisplayValue = this.props._dateAccessor === undefined
				? xValue
				: this.props._dateAccessor(item);
	
			var yValue = chartData.scales.yScale.invert(this.props._mouseXY[1]);
	
			if (xValue === undefined || yValue === undefined) return null;
			var x = this.props.snapX ? Math.round(chartData.scales.xScale(xValue)) : this.props._mouseXY[0];
			var y = this.props._mouseXY[1];
	
			//console.log(xValue, this.props.xDisplayFormat(xValue));
			//console.log(yValue, this.props.yDisplayFormat(yValue));
	
			return React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				return React.addons.cloneWithProps(newChild, {
					_width: this.props._width
					, _height: this.props._height
					, _mouseXY: [x, y]
					, _xDisplayValue: this.props.xDisplayFormat(xDisplayValue)
					, _yDisplayValue: this.props.yDisplayFormat(yValue)
				});
			}.bind(this), this);
		},
		render:function() {
			var children = null;
			if (this.props._show) {
				children = this.renderChildren();
			};
	
			return (
				React.createElement("g", {className: this.props._show ? 'show' : 'hide'}, 
					children
				)
			);
		}
	});
	
	module.exports = MouseCoordinates;
	
	
	/*
	
	
	
	*/

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var EdgeCoordinate = __webpack_require__(87)
	var Utils = __webpack_require__(86)
	
	var CrossHair = React.createClass({displayName: "CrossHair",
		propTypes: {
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
			_mouseXY: React.PropTypes.array.isRequired,
			_xDisplayValue: React.PropTypes.string.isRequired,
			_yDisplayValue: React.PropTypes.string.isRequired,
			yAxisPad: React.PropTypes.number.isRequired
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return nextProps._mouseXY !== this.props._mouseXY
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.CrossHair",
				yAxisPad: 5
			}
		},
		render:function() {
			return (
				React.createElement("g", {className: 'crosshair '}, 
					React.createElement(EdgeCoordinate, {
						type: "horizontal", 
						className: "horizontal", 
						show: true, 
						x1: 0, y1: this.props._mouseXY[1], 
						x2: this.props._width + this.props.yAxisPad, y2: this.props._mouseXY[1], 
						coordinate: this.props._yDisplayValue, 
						edgeAt: this.props._width + this.props.yAxisPad, 
						orient: "right"}
						), 
					React.createElement(EdgeCoordinate, {
						type: "vertical", 
						className: "horizontal", 
						show: true, 
						x1: this.props._mouseXY[0], y1: 0, 
						x2: this.props._mouseXY[0], y2: this.props._height, 
						coordinate: this.props._xDisplayValue, 
						edgeAt: this.props._height, 
						orient: "bottom"}
						)
				)
			);
		}
	});
	
	module.exports = CrossHair;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var EdgeCoordinate = __webpack_require__(87)
	var Utils = __webpack_require__(86)
	
	var VerticalMousePointer = React.createClass({displayName: "VerticalMousePointer",
		propTypes: {
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
			_mouseXY: React.PropTypes.array.isRequired,
			_xDisplayValue: React.PropTypes.string.isRequired,
			_yDisplayValue: React.PropTypes.string.isRequired,
			yAxisPad: React.PropTypes.number.isRequired
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return nextProps._mouseXY !== this.props._mouseXY
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.VerticalMousePointer",
				yAxisPad: 10
			}
		},
		render:function() {
			return (
				React.createElement("g", {className: 'crosshair '}, 
					React.createElement(EdgeCoordinate, {
						type: "vertical", 
						className: "horizontal", 
						show: true, 
						x1: this.props._mouseXY[0], y1: 0, 
						x2: this.props._mouseXY[0], y2: this.props._height, 
						coordinate: this.props._xDisplayValue, 
						edgeAt: this.props._height, 
						orient: "bottom"}
						)
					
				)
			);
		}
	});
	
	module.exports = VerticalMousePointer;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var TooltipContainer = React.createClass({displayName: "TooltipContainer",
		propTypes: {
			_currentItems: React.PropTypes.array.isRequired,
			_charts: React.PropTypes.array.isRequired
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return nextProps._charts !== this.props._charts || nextProps._currentItems !== this.props._currentItems;
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.TooltipContainer"
			}
		},
		renderChildren:function() {
			return React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				var chart = this.props._charts.filter(function(chart)  {return chart.id === newChild.props.forChart;})[0];
				var currentItem = this.props._currentItems.filter(function(item)  {return item.id === newChild.props.forChart;})[0];
				newChild = React.addons.cloneWithProps(newChild, {
					_currentItem: currentItem.data
				});
				if (/MovingAverageTooltip$/.test(newChild.props.namespace)) {
					newChild = React.addons.cloneWithProps(newChild, {
						_overlays: chart.overlays
					});
				}
				return newChild;
			}.bind(this));
		},
		render:function() {
			return (
				React.createElement("g", {className: "toottip-hover"}, 
					this.renderChildren()
				)
			);
		}
	});
	
	module.exports = TooltipContainer;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Utils = __webpack_require__(86)
	
	var billion = 1 * 1000 * 1000 * 1000;
	var million = 1 * 1000 * 1000;
	var thousand = 1 * 1000;
	
	var OHLCTooltip = React.createClass({displayName: "OHLCTooltip",
		propTypes: {
			_currentItem: React.PropTypes.object.isRequired,
			accessor: React.PropTypes.func.isRequired,
			xDisplayFormat: React.PropTypes.func.isRequired,
			origin: React.PropTypes.array.isRequired,
		},
		shouldComponentUpdate:function(nextProps, nextState) {
			return (nextProps._currentItem !== this.props._currentItem);
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.OHLCTooltip",
				accessor: function(d)  {return {date: d.date, open: d.open, high: d.high, low: d.low, close: d.close, volume: d.volume}},
				xDisplayFormat: Utils.displayDateFormat,
				origin: [0, 0]
			}
		},
		render:function() {
			var displayDate, fromDate, toDate, open, high, low, close, volume;
	
			displayDate = fromDate = toDate = open = high = low = close = volume = "n/a";
			var item = this.props.accessor(this.props._currentItem);
	
			if (item !== undefined && item.close !== undefined) {
				volume = (item.volume / billion > 1)
					? (item.volume / billion).toFixed(2) + "b"
					: (item.volume / million > 1)
						? (item.volume / million).toFixed(2) + "m"
						: (item.volume / thousand > 1)
							? (item.volume / thousand).toFixed(2) + "k"
							: item.volume;
	
				displayDate = this.props.xDisplayFormat(item.date);
				open = Utils.displayNumberFormat(item.open);
				high = Utils.displayNumberFormat(item.high);
				low = Utils.displayNumberFormat(item.low);
				close = Utils.displayNumberFormat(item.close);
			}
	
			return (
				React.createElement("g", {transform: "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")"}, 
					React.createElement("text", {x: 0, y: 0, className: "legend"}, 
						React.createElement("tspan", {key: "label", x: 0, dy: "5", className: "tooltip-label"}, "Date: "), 
						React.createElement("tspan", {key: "value"}, displayDate), 
						React.createElement("tspan", {key: "label_O", className: "tooltip-label"}, " O: "), React.createElement("tspan", {key: "value_O"}, open), 
						React.createElement("tspan", {key: "label_H", className: "tooltip-label"}, " H: "), React.createElement("tspan", {key: "value_H"}, high), 
						React.createElement("tspan", {key: "label_L", className: "tooltip-label"}, " L: "), React.createElement("tspan", {key: "value_L"}, low), 
						React.createElement("tspan", {key: "label_C", className: "tooltip-label"}, " C: "), React.createElement("tspan", {key: "value_C"}, close), 
						React.createElement("tspan", {key: "label_Vol", className: "tooltip-label"}, " Vol: "), React.createElement("tspan", {key: "value_Vol"}, volume)
					)
				)
			);
		}
	});
	
	module.exports = OHLCTooltip;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Utils = __webpack_require__(86)
	
	var SingleMAToolTip = React.createClass({displayName: "SingleMAToolTip",
		propTypes: {
			origin: React.PropTypes.array.isRequired,
			color: React.PropTypes.string.isRequired,
			displayName: React.PropTypes.string.isRequired,
			value: React.PropTypes.string.isRequired,
			onClick: React.PropTypes.func
		},
		getDefaultProps:function() {
	
		},
		handleClick:function(overlay) {
			if (this.props.onClick) {
				this.props.onClick(overlay);
			}
		},
		render:function() {
			var translate = "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")";
			return (
				React.createElement("g", {transform: translate}, 
					React.createElement("line", {x1: 0, y1: 2, x2: 0, y2: 28, stroke: this.props.color}), 
					React.createElement("text", {x: 5, y: 11, className: "legend"}, 
						React.createElement("tspan", {className: "tooltip-label"}, this.props.displayName), 
						React.createElement("tspan", {x: "5", dy: "15"}, this.props.value)
					), 
					React.createElement("rect", {x: 0, y: 0, width: 55, height: 30, onClick: this.handleClick.bind(this, this.props.overlay)})
				)
			);
		}
	});
	
	
	var MovingAverageTooltip = React.createClass({displayName: "MovingAverageTooltip",
		propTypes: {
			_currentItem: React.PropTypes.object.isRequired,
			_overlays: React.PropTypes.array.isRequired,
			displayFormat: React.PropTypes.func.isRequired,
			origin: React.PropTypes.array.isRequired,
			onClick: React.PropTypes.func
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.MovingAverageTooltip",
				displayFormat: Utils.displayNumberFormat,
				origin: [0, 10],
				width: 65
			}
		},
		render:function() {
			return (
				React.createElement("g", {transform: "translate(" + this.props.origin[0] + ", " + this.props.origin[1] + ")", className: "ma-container"}, 
					this.props._overlays.map(function(eachOverlay, idx)  {
						var yValue = eachOverlay.yAccessor(this.props._currentItem);
						// console.log(yValue);
						var yDisplayValue = yValue ? this.props.displayFormat(yValue) : "n/a";
						return React.createElement(SingleMAToolTip, {
							key: idx, 
							origin: [this.props.width * idx, 0], 
							color: eachOverlay.stroke, 
							displayName: eachOverlay.tooltipLabel, 
							value: yDisplayValue, 
							overlay: eachOverlay, 
							onClick: this.props.onClick})
					}.bind(this))
				)
			);
		}
	});
	
	module.exports = MovingAverageTooltip;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var EdgeContainer = React.createClass({displayName: "EdgeContainer",
		propTypes: {
			_currentItems: React.PropTypes.array.isRequired,
			_charts: React.PropTypes.array.isRequired,
			_height: React.PropTypes.number.isRequired,
			_width: React.PropTypes.number.isRequired,
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.EdgeContainer",
			}
		},
		renderChildren:function() {
			return React.Children.map(this.props.children, function(child)  {
				if (typeof child.type === 'string') return child;
				var newChild = child;
				if (/EdgeIndicator$/.test(newChild.props.namespace)) {
					var chart = this.props._charts.filter(function(chart)  {return chart.id === newChild.props.forChart;})[0];
					var currentItem = this.props._currentItems.filter(function(item)  {return item.id === newChild.props.forChart;})[0];
					newChild = React.addons.cloneWithProps(newChild, {
						_width: this.props._width,
						_chart: chart,
						_currentItem: currentItem
					});
				}
				return newChild;
			}.bind(this));
		},
		render:function() {
			return React.createElement("g", null, this.renderChildren())
		}
	});
	
	module.exports = EdgeContainer;
	


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1),
		PureRenderMixin = __webpack_require__(81),
		Utils = __webpack_require__(86);
	
	var CurrentCoordinate = React.createClass({displayName: "CurrentCoordinate",
		//namespace: "ReStock.DataSeries",
		mixins: [PureRenderMixin],
		propTypes: {
			forChart: React.PropTypes.number.isRequired,
			forOverlay: React.PropTypes.number,
			yAccessor: React.PropTypes.func,
			r: React.PropTypes.number.isRequired,
			className: React.PropTypes.string,
	
			_show: React.PropTypes.bool.isRequired,
			_chartData: React.PropTypes.object.isRequired,
			_currentItem: React.PropTypes.object.isRequired,
		},
		getDefaultProps:function() {
			return {
				namespace: "ReStock.CurrentCoordinate",
				r: 3
			};
		},
		render:function() {
	
			var chartData = this.props._chartData;
			var item = this.props._currentItem.data;
			var fill = 'black';
	
			if (! this.props._show || item === undefined) return null;
			var yAccessor =  this.props.yAccessor || chartData.accessors.yAccessor;
	
			if (this.props.forOverlay !== undefined) {
				var overlays = chartData.overlays
					.filter(function(each)  {return each.id === this.props.forOverlay;}.bind(this));
	
				if (overlays.length != 1) {
					console.warn('Unique overlay with id={%s} not found', this.props.forOverlay);
					throw new Error('Unique overlay not found');
				}
				fill = overlays[0].stroke;
				yAccessor = overlays[0].yAccessor;
			}
	
			var xValue = chartData.accessors.xAccessor(item);
			var yValue = yAccessor(item);
	
			if (yValue === undefined) return null;
	
			var x = Math.round(chartData.scales.xScale(xValue)) + chartData.origin[0];
			var y = Math.round(chartData.scales.yScale(yValue)) + chartData.origin[1];
	
			return (
				React.createElement("circle", {className: this.props.className, cx: x, cy: y, r: this.props.r, fill: fill})
			);
		}
	});
	
	module.exports = CurrentCoordinate;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	var Utils = __webpack_require__(86)
	var EdgeCoordinate = __webpack_require__(87)
	
	
	var EdgeIndicator = React.createClass({displayName: "EdgeIndicator",
		propTypes: {
			type: React.PropTypes.oneOf(['horizontal']).isRequired,
			className: React.PropTypes.string,
			itemType: React.PropTypes.oneOf(['first', 'last', 'current']).isRequired,
			orient: React.PropTypes.oneOf(['left', 'right']),
			edgeAt: React.PropTypes.oneOf(['left', 'right']),
	
			forChart: React.PropTypes.number.isRequired,
			forOverlay: React.PropTypes.number, // undefined means main Data series of that chart
	
			displayFormat: React.PropTypes.func.isRequired,
	
			_width: React.PropTypes.number,
			_currentItem: React.PropTypes.object.isRequired,
			_chart: React.PropTypes.object.isRequired,
		},
		getDefaultProps:function() {
			return {
				type: 'horizontal',
				orient: 'left',
				edgeAt: 'left',
				displayFormat: Utils.displayNumberFormat,
				yAxisPad: 5,
				namespace: "ReStock.EdgeIndicator"
			};
		},/*
		shouldComponentUpdate(nextProps, nextState) {
			if (nextProps.itemType === 'current') {
				return 
			} else {
	
			}
		},*/
		renderEdge:function() {
			var edge = null, item, yAccessor;
			if (this.props.forOverlay !== undefined
					&& this.props._chart.overlays.length > 0
					&& this.props._chart.overlayValues.length > 0) {
	
				var overlay = this.props._chart.overlays
					.filter(function(eachOverlay)  {return eachOverlay.id === this.props.forOverlay;}.bind(this));
				var overlayValue = this.props._chart.overlayValues
					.filter(function(eachOverlayValue)  {return eachOverlayValue.id === this.props.forOverlay;}.bind(this));
	
				// console.log(overlay, overlayValue);
				if (overlay.length !== 1) {
					console.warn('%s overlays found with id %s, correct the OverlaySeries so there is exactly one for each id', overlay.length, newChild.props.forOverlay)
					throw new Error('Unable to identify unique Overlay for the id');
				}
				if (overlayValue.length !== 1 && overlay.length === 1) {
					console.warn('Something is wrong!!!, There should be 1 overlayValue, report the issue on github');
				}
	
				item = this.props.itemType === 'first'
					? overlayValue[0].first
					: this.props.itemType === 'last'
						? overlayValue[0].last
						: this.props._currentItem;
				yAccessor = overlay[0].yAccessor;
	
				if (item !== undefined) {
					var yValue = yAccessor(item), xValue = this.props._chart.accessors.xAccessor(item);
					var x1 = Math.round(this.props._chart.scales.xScale(xValue)), y1 = Math.round(this.props._chart.scales.yScale(yValue));
					var edgeX = this.props.edgeAt === 'left'
						? 0 - this.props.yAxisPad
						: this.props._width + this.props.yAxisPad
	
					edge = React.createElement(EdgeCoordinate, {
							type: this.props.type, 
							className: "edge-coordinate", 
							fill: overlay[0].stroke, 
							show: true, 
							x1: x1 + this.props._chart.origin[0], y1: y1 + this.props._chart.origin[1], 
							x2: edgeX + this.props._chart.origin[0], y2: y1 + this.props._chart.origin[1], 
							coordinate: this.props.displayFormat(yValue), 
							edgeAt: edgeX, 
							orient: this.props.orient}
							)
				}
			} else if (this.props.forOverlay === undefined) {
				item = this.props.itemType === 'first'
					? this.props._chart.firstItem
					: this.props.itemType === 'last'
						? this.props._chart.lastItem
						: this.props._currentItem;
				yAccessor = this.props._chart.accessors.yAccessor;
	
				if (item !== undefined && yAccessor !== null) {
					var yValue = yAccessor(item);
					var xValue = this.props._chart.accessors.xAccessor(item);
	
					var x1 = Math.round(this.props._chart.scales.xScale(xValue)), y1 = Math.round(this.props._chart.scales.yScale(yValue));
					var edgeX = this.props.edgeAt === 'left'
						? 0 - this.props.yAxisPad
						: this.props._width + this.props.yAxisPad
	
					edge = React.createElement(EdgeCoordinate, {
							type: this.props.type, 
							className: "edge-coordinate", 
							show: true, 
							x1: x1 + this.props._chart.origin[0], y1: y1 + this.props._chart.origin[1], 
							x2: edgeX + this.props._chart.origin[0], y2: y1 + this.props._chart.origin[1], 
							coordinate: this.props.displayFormat(yValue), 
							edgeAt: edgeX, 
							orient: this.props.orient}
							)
				}
			}
			return edge;
		},
		render:function() {
			return this.renderEdge();
		}
	});
	
	module.exports = EdgeIndicator;
	
	/*
	<EdgeCoordinate
					type={this.props.type}
					className={this.props.className}
					show={true}
					x1={this.props._x1} y1={this.props._y1}
					x2={this.props._width + this.props.yAxisPad} y2={this.props._mouseXY[1]}
					coordinate={this.props._yDisplayValue}
					edgeAt={this.props._width + this.props.yAxisPad}
					orient="right"
					/>
	*/

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAABQCAQAAADykSIGAAAF1UlEQVR4Ae3df4zXdR3A8cfnvnccd7i7gwMiCCE6BzlwImVFpqgnykANZ66RawHTQJrnVizJymwENKUcJSBjsEqyJrIEQiHQSoutWBA4BYwLGCi/Tu7O7pDv/fj0R2vfHdx9J3ef7925vR9/v/577j6/vrfXO9IjgrhYkb4K0OR9jc4BEMUATHe7z/mEAkF3anLI3/3e85rbRvm4VSr1pOAV9zmUiXK17cq96+de8IbzChQrkdLihLQgSfmGSmlwRiug0Bh3qjJAjZvsJYoZ5W/KbfZVZ2XkGaifFm9rFiTnI4o1OOVCJdaZ5owJjkYx291sszvELjRYP41OCpJSZIgWx7S6WMomU2x1WxTfbqMaFWpdLM/HpJzUKEhGuRJn1WrfcLuVmxrFq822yCPaV6a/ejWCZAzTx3Fp7etjoflWRPEbPunTdnU4NkzacUEyRoocFmtf5FYv2hfFaQWKvN/h2Eixw4LuiJKnwgFNURwjL8vYCK2OCLrn8jVMNf+LUijdCy5f4UZfpn8mSn+14Ubfk4/EmWfdTJQRmbHwSNwjL4+Zt8IT/48yKuvYSUEuP7O0/X7SlPlLyTbWLElBH0OktKjXqIkLvjTGmRt9trGkBfkGKtLWOWc0k4kSZR0LcqFYscJ2fuTKRMk6FnSnTBQfWiHKEP9W7y+e95y0D6LUvab5jGbDnZcDIcr9nga8bYkVmmVzmW97UAngVtvkQIiy2mwZ/1Sl3kRjXWGoQVJa1Kl1yn67xX5sqIzvWSgHQpQtpuisp82RAyHKq67TWevcKwdClM2m6qxlquRAiLLIAp31davkQIgy0xqd9QdTNUlYiDLCHmU67wnzBQlHedFtuqLFp+wRJBjls3bqqvW+JEgwymqzdVXaEGcFiUU5ariuu9NGQUJRStVKwncsFiQUpcJbkrDUtwQJRRltvyQsN0+QUJThjkrCEgsECUXp65wkPOqHgoSi8I4huu4BKwSJRdlqsq4Lvz8mGuVhi3XdYKcFlxylwGilWuRpViCtSKMydQbbKE/XHDRDpEytYucUapKvRUqdg9KCDqOMV60OQLFhykGeRW7QNcs9q1mk1buOawRQapTdgg6jEBmjVEqMBu84BRjpdf103ikV3gMMMlQpYk1qHRDLKvylcFCD9txlvUjnxKZ7QXv6GS22W9DJ/5D8srX6unSt5lkpyEkUxllpoktz2GwvCxKNUmCsY04DmOwbJiv0Qeyy0q+kBQlHqfQSfukh9QBK3WCiq1UYKaWtFsdUe9NOrzksyEkUbvQbg+11vTptPWSpPG21+qYnBTmOwpV2Krno/xwne0nkYrEptgpyHIW5lqPKMhk73KR9fzJJkPMo+Q65HL/wU3vFRrvHo1IAjuJyAK1KNAhyHIUqTwLS6ANIe8YsrJYyE8+6RwpjHBDkPEqBLSpd6BXbLMYKzMUCU12Hq+wT5DwKhR43RwEyfm3fBVHGmdF9UUIU+KhbXKHASc2W9Y4oIUrGOHtDlA9/lCBECVGe0uLBEKWno3zBn7HO6xZjCR7GAmN9Bdd7VdCx9o8gyETJMpTNGjMxX6nvYoG0pVio1hNYa5b2BfnKFWurUY1mmShZhjpymcfNwT9MskElrhLbhx2m+6NrsNJ8/3Epwsav813Z9zXej5ywzQaft12e5ebhKQ9odYvXzHCjQR6x26UIu/GOJLMZ73cq/MwqMSL3qfKWL+qcsEWyuvftkAz7Vo/0vm2rYTPx2d63lzjs8D7f+zZ4hyMIWgkHEPSuKCXqNETxm8YYb084gKBXXL4m2GV/FK/1NY/5Qa+4fIUb/WO+b00U3+05p1Wo7/EbfXgkLvMv5e6K4iJbTLLB3eIefSQOL4+RjabZoTKKucY25dab5b0ee3kMn1lKPWOaGteqjmLyTfJbA5zxE5sc0BQOIOjWD5L9XOkOcw1Qo9Ieohj6mGCRSYKe9LL7M8fUQr6BprjZtUZJCbrTOdX+apNNkIkiHEDQm/wXb4bZSIeJkMcAAAAASUVORK5CYII="

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var EventCapture = __webpack_require__(68);
	var MouseCoordinates = __webpack_require__(69);
	var Utils = __webpack_require__(86);
	
	var Freezer = __webpack_require__(90);
	// Let's create a freezer store
	function getLongValue(value) {
		if (value instanceof Date) {
			return value.getTime();
		}
		return value;
	}
	var EventCaptureMixin = {
		doesContainChart:function() {
			var children = Array.isArray(this.props.children)
				? this.props.children
				: [this.props.children];
	
			return children
				.filter(function(child)  {return /Chart$/.test(child.props.namespace);})
				.length > 0;
		},
		componentWillMount:function() {
			var passThroughProps = {};
			if (this.isDataDransform && this.isDataDransform()) {
				passThroughProps = this.transformData(this.props);
			}
	
			if (this.doesContainChart()) {
				// console.log('EventCaptureMixin.componentWillMount', this.state);
				var eventStore = new Freezer({
					mouseXY: [0, 0],
					mouseOver: { value: false },
					inFocus: { value: true } // TODO change to false later
				});
				var zoomEventStore = new Freezer({
					zoom: 0
				});
				var chartStore  = new Freezer({
					charts: [],
					updateMode: { immediate : true }
				});
	
				var currentItemStore = new Freezer({
					currentItems: [],
					viewPortXRange: [],
					viewPortXDelta: 30
				});
				var fullData, data, stockScale = passThroughProps._stockScale || this.props._stockScale;
				if (passThroughProps && stockScale) {
					currentItemStore.get().set({ interval : 'D' });
	
					//fullData = passThroughProps.data[currentItemStore.get().interval];
					fullData = passThroughProps.data;
					data = fullData[currentItemStore.get().interval];
				} else {
					fullData = this.props.data;
					data = fullData;
				}
	
				React.Children.forEach(this.props.children, function(child)  {
					if ("ReStock.Chart" === child.props.namespace) {
						var chartProps = child.props;
	
						var dimensions = this.getDimensions(this.props, chartProps);
						var threshold = dimensions.width / 4;
						if (data.length > threshold) {
							data = data.slice(data.length - threshold);
						}
	
						//var charts = chartStore.get().charts.push(this.createChartData(child.props.id));
						//var _chartData = charts[charts.length - 1];
						var _chartData = this.getChartDataFor(this.props, chartProps, data, fullData, passThroughProps);
						_chartData.id = child.props.id;
	
	
						chartStore.get().charts.push(_chartData);
					}
				}.bind(this));
	
				var stores = {
						eventStore: eventStore,
						chartStore: chartStore,
						currentItemStore: currentItemStore,
						zoomEventStore: zoomEventStore,
						fullData: fullData,
						data: data,
						passThroughProps: passThroughProps
					};
	
				console.log(Object.keys(stores));
				// console.log(stores);
				this.setState(stores);
			} else {
				this.setState({
					passThroughProps: passThroughProps
				});
			}
		},
		getEventStore:function() {
			return this.state.eventStore;
		},
		updateEventStore:function(eventStore, zoomEventStore) {
			this.unListen();
	
			var newState = {
				eventStore: eventStore,
				chartStore: this.state.chartStore,
				currentItemStore: this.state.currentItemStore,
				zoomEventStore: zoomEventStore || this.state.zoomEventStore
			};
			this.setState(newState, function()  { this.listen(newState) }.bind(this));
		},
		componentWillUnmount:function() {
			if (this.doesContainChart()) {
				this.unListen();
			}
		},
		unListen:function() {
			if (this.state.eventStore !== undefined) {
				this.state.eventStore.off('update', this.eventListener);
			}
			if (this.state.chartStore !== undefined) {
				this.state.chartStore.off('update', this.dataListener);
			}
			if (this.state.zoomEventStore !== undefined) {
				this.state.zoomEventStore.off('update', this.zoomEventListener);
			}
		},
		eventListener:function(d) {
			//console.log('events updated...', d);
			//this.state.chartStore.get().currentItem.set({value : new Date().getTime()});
			if (this.state.chartStore.get().updateMode.immediate) {
				this.state.chartStore.get().charts.forEach(function(chart)  {
					this.updateCurrentItemForChart(chart);
				}.bind(this));
				if (this.state.eventStore.get().pan) {
					requestAnimationFrame(function()  {
	
						var mainChart = this.state.currentItemStore.get().mainChart;
						var chart = this.getChartForId(mainChart);
						//var domain = chart.scales.xScale.domain();
						var domain = this.state.eventStore.get().dragOriginDomain;
						var domainRange = domain[1] - domain[0];
	
						// domainRange = domain[1] - domain[0];
						// get width of mainChart
						var fullData = this.state.fullData[this.state.currentItemStore.get().interval];
						var last = fullData[fullData.length - 1];
						var first = fullData[0];
	
						var domainStart = Math.round(getLongValue(domain[0]) - this.state.eventStore.get().dx/chart.width * domainRange)
						if (domainStart < getLongValue(chart.accessors.xAccessor(first)) - Math.floor(domainRange/3)) {
							domainStart = getLongValue(chart.accessors.xAccessor(first)) - Math.floor(domainRange/3)
						} else {
							domainStart = Math.min(getLongValue(chart.accessors.xAccessor(last))
								+ Math.ceil(domainRange/3), domainStart + domainRange) - domainRange;
						}
	
						/*console.log('pan in progress...', this.state.eventStore.get().dx, domain[0], domainRange
							, new Date(domainStart));*/
	
						var domainL = domainStart, domainR = domainStart + domainRange
						if (domain[0] instanceof Date) {
							domainL = new Date(domainL);
							domainR = new Date(domainR);
						}
	
						this.state.currentItemStore.get().viewPortXRange.set([domainL, domainR]);
	
						var data = this.calculateViewableData();
	
						// update the viewPortXRange
						// this.state.currentItemStore.get().viewPortXRange
	
						React.Children.forEach(this.props.children, function(child)  {
							if ("ReStock.Chart" === child.props.namespace) {
								var _chartData = this.getChartForId(child.props.id);
	
								_chartData = this.updateChartDataFor(_chartData, data.data)
	
								_chartData.scales.xScale.domain([domainL, domainR]);
								//_chartData.scales.xScale.domain(this.state.currentItemStore.get().viewPortXRange);
							}
						}.bind(this))
	/*					var thisChart = this.getChartForId(mainChart);
						thisChart = this.updateChartDataFor(thisChart, data)
						thisChart.scales.xScale.domain([domainL, domainR]);
	*/					//var newXScale = this.updateXScaleDomain(chart.scales.xScale, [domainL, domainR])
	
						//chart.scales.set({ xScale: newXScale });
	
						/*this.setState({
							data: data
						})*/
						this.setState({
							data: data.data
						})
						// this.forceUpdate();
					}.bind(this));
				} else {
					/*requestAnimationFrame(() => {
						this.forceUpdate();
					});*/
					this.forceUpdate();
				}
			}
		},
		componentWillReceiveProps:function(nextProps) {
			if (this.doesContainChart()) {
				/*console.log('EventCaptureMixin.componentWillReceiveProps');
				console.log('EventCaptureMixin.componentWillReceiveProps');
				console.log('EventCaptureMixin.componentWillReceiveProps');*/
	
				var passThroughProps;
				if (this.isDataDransform && this.isDataDransform()) {
					passThroughProps = this.transformData(this.props);
				}
	
				React.Children.forEach(nextProps.children, function(child)  {
					if ("ReStock.Chart" === child.props.namespace) {
	
	
						var chartProps = child.props;
	
						var _chartData = this.getChartDataFor(nextProps, chartProps, nextProps.data, nextProps.data, passThroughProps);
						_chartData.id = child.props.id;
	
						var chartData = this.getChartForId(child.props.id);
						chartData.reset(_chartData);
					}
				}.bind(this))
	
				//this.calculateViewableData();
			}
		},
		calculateViewableData:function() {
			var xRange = this.state.currentItemStore.get().viewPortXRange;
			var fullData = this.getFullData()[this.state.currentItemStore.get().interval];
			var data = this.state.data;
	
			if (xRange.length > 0) {
				var mainChart = this.state.currentItemStore.get().mainChart,
					chart = this.getChartForId(mainChart);
	
				var leftX = Utils.getClosestItemIndexes(fullData, xRange[0], chart.accessors.xAccessor);
				var rightX = Utils.getClosestItemIndexes(fullData, xRange[1], chart.accessors.xAccessor);
							console.log('whoa whoa whoa');
				var currentInterval = this.state.currentItemStore.get().interval;
				var filteredData = fullData.slice(leftX.left, rightX.right);
				if (this.state.passThroughProps && this.state.passThroughProps._stockScale
						&& filteredData.length > chart.width / 3) {
					if (this.state.passThroughProps._multiInterval && currentInterval ==='D' ) {
						var interval = 'W';
						this.state.currentItemStore.get().set({ interval : interval });
						fullData = this.state.fullData[interval];
	
						leftX = Utils.getClosestItemIndexes(fullData, xRange[0], chart.accessors.xAccessor);
						rightX = Utils.getClosestItemIndexes(fullData, xRange[1], chart.accessors.xAccessor);
						filteredData = fullData.slice(leftX.left, rightX.right);
	
					} else if (this.state.passThroughProps._multiInterval && currentInterval ==='W' ) {
						var interval = 'M';
						this.state.currentItemStore.get().set({ interval : interval });
						fullData = this.state.fullData[interval];
	
						leftX = Utils.getClosestItemIndexes(fullData, xRange[0], chart.accessors.xAccessor);
						rightX = Utils.getClosestItemIndexes(fullData, xRange[1], chart.accessors.xAccessor);
						filteredData = fullData.slice(leftX.left, rightX.right);
					} else {
						var l = getLongValue(chart.accessors.xAccessor(this.state.data[0]));
						var r = getLongValue(chart.accessors.xAccessor(this.state.data[this.state.data.length - 1]));
						this.state.currentItemStore.get().set({ viewPortXRange : [l, r] });
						return {
							data: this.state.data
						};
					}
				} else if (this.state.passThroughProps && this.state.passThroughProps._stockScale
						&& (currentInterval === 'W' || currentInterval === 'M')) {
					// TODO if zoom in, try to go from M to W or W to D if possible
				} else if (filteredData.length / chart.width < .03) {
					var l = getLongValue(chart.accessors.xAccessor(this.state.data[0]));
					var r = getLongValue(chart.accessors.xAccessor(this.state.data[this.state.data.length - 1]));
					this.state.currentItemStore.get().set({ viewPortXRange : [l, r] });
	
					return {
						data: this.state.data
					};
				}
				return {
					data: filteredData
				};
			}
			return {
				data: data
			}
		},
		zoomEventListener:function(d) {
			//console.log('events updated...', d);
			//this.state.chartStore.get().currentItem.set({value : new Date().getTime()});
			if (this.state.chartStore.get().updateMode.immediate) {
	
	
				var zoomData = this.state.zoomEventStore.get(),
					zoomDir = zoomData.zoom,
					mainChart = this.state.currentItemStore.get().mainChart,
					chart = this.getChartForId(mainChart);
	
				// console.log('************UPDATING NOW**************- zoomDir = ', zoomDir, mainChart);
	
				this.updateCurrentItemForChart(chart);
	
				var item = this.getCurrentItemForChart(mainChart).data,
					domain = chart.scales.xScale.domain(),
					centerX = chart.accessors.xAccessor(item),
					leftX = centerX - domain[0],
					rightX = domain[1] - centerX,
					zoom = Math.pow(1 + Math.abs(zoomDir)/2 , zoomDir),
					domainL = (getLongValue(centerX) - ( leftX * zoom)),
					domainR = (getLongValue(centerX) + (rightX * zoom));
	
				var domainRange = Math.abs(domain[1] - domain[0]);
				var fullData = this.state.fullData[this.state.currentItemStore.get().interval];
				var last = fullData[fullData.length - 1];
				var first = fullData[0];
	
				domainL = Math.max(getLongValue(chart.accessors.xAccessor(first)) - Math.floor(domainRange/3), domainL)
				domainR = Math.min(getLongValue(chart.accessors.xAccessor(last)) + Math.floor(domainRange/3), domainR)
	
				if (centerX instanceof Date) {
					domainL = new Date(domainL);
					domainR = new Date(domainR);
				}
	
	
	
	
				this.state.currentItemStore.get().viewPortXRange.set([domainL, domainR]);
	
				requestAnimationFrame(function()  {
					var data = this.calculateViewableData();
					console.log(domainL, domainR);
					var passThroughProps = this.state.passThroughProps;
	
					React.Children.forEach(this.props.children, function(child)  {
						if ("ReStock.Chart" === child.props.namespace) {
	/*
	
	
	*/
							var _chartData = this.getChartForId(child.props.id);
	
							_chartData = this.updateChartDataFor(_chartData, data.data)
							_chartData.scales.xScale.domain(this.state.currentItemStore.get().viewPortXRange);
						}
					}.bind(this))
	
	
					this.setState({
						data: data.data
					})
				}.bind(this));
	
				// find mainChart
				// get new domainL & R
				// if (this.props.changeIntervalIfNeeded) is present
				//		call this.props.changeIntervalIfNeeded
				//		if ^ returns false
				//			requestAnimationFrame and send down new data
				//			update currentItem
				//		if true
				//			update currentItem
				// else
				//		requestAnimationFrame and send down new data
				//		update currentItem
	
			}
		},
		dataListener:function(d) {
			// console.log('data updated from ', this.state.chartStore.get().currentItem, ' to ', d);
			if (this.state.chartStore.get().updateMode.immediate) {
				requestAnimationFrame(function () {
					// console.log('************UPDATING NOW**************');
					// console.log(this.state.chartStore.get().charts[0].overlays);
					this.forceUpdate();
				}.bind(this));
			}
		},
		componentDidMount:function() {
			if (this.doesContainChart()) {
				// this.state.chartStore.get().updateMode.set({ immediate: true });
				this.listen(this.state);
			}
		},
		componentDidUpdate:function() {
			if (this.doesContainChart()) {
				if (! this.state.chartStore.get().updateMode.immediate)
					this.state.chartStore.get().updateMode.set({ immediate: true });
			}
		},
		listen:function(stores) {
			// console.log('begining to listen...', stores);
	
			stores.eventStore.on('update', this.eventListener);
			// stores.chartStore.on('update', this.dataListener);
			stores.zoomEventStore.on('update', this.zoomEventListener);
			// stores.chartStore.get().currentItem.getListener().on('update', this.dataListener);
		},
		updatePropsForEventCapture:function(child) {
			if ("ReStock.EventCapture" === child.props.namespace) {
				// find mainChart and add to zoomeventstores
				if (this.state.currentItemStore.get().mainChart === undefined
					|| this.state.currentItemStore.get().mainChart !== child.props.mainChart) {
	
					this.state.currentItemStore.get().set({ mainChart: child.props.mainChart });
				}
				return React.addons.cloneWithProps(child, {
					_eventStore: this.state.eventStore,
					_zoomEventStore: this.state.zoomEventStore,
					_chartData: this.getChartForId(child.props.mainChart)
				}); 
			}
			return child;
		},
		updatePropsForCurrentCoordinate:function(child) {
			if ("ReStock.CurrentCoordinate" === child.props.namespace) {
				var chart = this.getChartForId(child.props.forChart);
				var currentItem = this.getCurrentItemForChart(child.props.forChart);
	
				return React.addons.cloneWithProps(child, {
					_show: this.state.eventStore.get().mouseOver.value,
					_chartData: chart,
					_currentItem: currentItem
				});
			}
			return child;
		},
		updatePropsForMouseCoordinates:function(child) {
			if ("ReStock.MouseCoordinates" === child.props.namespace) {
				var chart = this.getChartForId(child.props.forChart);
				var currentItem = this.getCurrentItemForChart(child.props.forChart);
	
				return React.addons.cloneWithProps(child, {
					_show: this.state.eventStore.get().mouseOver.value,
					_mouseXY: this.state.eventStore.get().mouseXY,
					_chartData: chart,
					_currentItem: currentItem
				});
			}
			return child;
		},
		updatePropsForTooltipContainer:function(child) {
			if ("ReStock.TooltipContainer" === child.props.namespace) {
				return React.addons.cloneWithProps(child, {
					_currentItems: this.state.currentItemStore.get().currentItems,
					_charts: this.state.chartStore.get().charts
				});
			}
			return child;
		},
		updatePropsForEdgeContainer:function(child) {
			if ("ReStock.EdgeContainer" === child.props.namespace) {
				return React.addons.cloneWithProps(child, {
					_currentItems: this.state.currentItemStore.get().currentItems,
					_charts: this.state.chartStore.get().charts
				});
			}
			return child;
		},
		updatePropsForChart:function(child) {
			var newChild = child;
				console.log('here here...........');
			if ("ReStock.Chart" === child.props.namespace) {
				if (this.state.eventStore && this.state.chartStore) {
					var _chartData = this.getChartForId(newChild.props.id);
					newChild = React.addons.cloneWithProps(newChild, {
						_updateMode: this.state.chartStore.get().updateMode,
						_chartData: _chartData,
						data: this.getData(),
						//_pan: this.state.eventStore.get().pan,
						//_isMainChart: newChild.props.id === this.state.currentItemStore.get().mainChart/**/
					});
				}
			}
			return newChild;
		},
		getData:function(range) {
			return this.state.data;
		},
		getFullData:function() {
			return this.state.fullData;
		},
		getChartForId:function(chartId) {
			var charts = this.state.chartStore.get().charts;
			var filteredCharts = charts.filter(function(eachChart)  {return eachChart.id === chartId;});
			if (filteredCharts.length > 1) {
				var errorMessage = ("multiple charts with the same id " +  chartId + " found");
				console.warn(errorMessage);
				throw new Error(errorMessage);
			}
			if (filteredCharts.length === 0) {
				charts = charts.push(createChartData(chartId));
				return this.getChartForId(chartId);
			}
			return filteredCharts[0];
		},
		createChartData:function(chartId) {
			var chart = {
					id: chartId,
					scales: { xScale: null, yScale: null },
					accessors: { xAccessor: null, yAccessor: null },
					lastItem: {},
					firstItem: {},
					overlays: [],
					overlayValues: []
				};
			return chart;
		},
		getCurrentItemForChart:function(chartId) {
			var currentItems = this.state.currentItemStore.get().currentItems;
			var filteredCurrentItems = currentItems.filter(function(each)  {return each.id === chartId;});
			if (filteredCurrentItems.length > 1) {
				var errorMessage = ("multiple filteredCurrentItems with the same id " +  chartId + " found");
				console.warn(errorMessage);
				throw new Error(errorMessage);
			}
			if (filteredCurrentItems.length === 0) {
				var currentItem = {
					id: chartId,
					data: {}
				};
				currentItems = currentItems.push(currentItem);
				return this.getCurrentItemForChart(chartId);
			}
			return filteredCurrentItems[0];
		},
		updateCurrentItemForChart:function(chartData) {
			var currentItem = this.getCurrentItemForChart(chartData.id);
			var mouseXY = this.state.eventStore.get().mouseXY;
			if (chartData.scales.xScale === null) {
				console.warn('Verify if the the <Chart id=... > matches with the forChart=... This error likely because a Chart defined with id={%s} is not found', chartData.id);
			}
			var xValue = chartData.scales.xScale.invert(mouseXY[0]);
			var item = Utils.getClosestItem(this.getData(), xValue, chartData.accessors.xAccessor);
	
			currentItem = currentItem.data.reset(item);
			// console.log(currentItem);
		},
		_renderChildren:function(children) {
			if (this.doesContainChart()) {
				return React.Children.map(children, function(child)  {
					if (typeof child.type === 'string') return child;
					var newChild = child;
					newChild = this.updatePropsForEventCapture(child);
					newChild = this.updatePropsForMouseCoordinates(newChild);
					newChild = this.updatePropsForTooltipContainer(newChild);
					newChild = this.updatePropsForEdgeContainer(newChild);
					newChild = this.updatePropsForChart(newChild);
					newChild = this.updatePropsForCurrentCoordinate(newChild);
					return newChild;
				}.bind(this));
			}
			return children;
		}
	};
	
	module.exports = EventCaptureMixin;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1),
		d3 = __webpack_require__(2),
		ScaleUtils = __webpack_require__(84),
		OverlayUtils = __webpack_require__(85),
		Utils = __webpack_require__(86),
		Chart = __webpack_require__(61),
		overlayColors = Utils.overlayColors;
	var pluck = Utils.pluck;
	var keysAsArray = Utils.keysAsArray;
	
	
	function getOverlayFromList(overlays, id) {
		return overlays.map(function(each)  {return [each.id, each];})
			.filter(function(eachMap)  {return eachMap[0] === id;})
			.map(function(eachMap)  {return eachMap[1];})[0];
	}
	
	
	var ChartContainerMixin = {
		getDimensions:function(_props, chartProps) {
	
			var availableWidth = _props._width || this.getAvailableWidth(_props);
			var availableHeight = _props._height || this.getAvailableHeight(_props);
	
			var width = chartProps.width || availableWidth;
			var height = chartProps.height || availableHeight
	
			return {
				availableWidth: availableWidth,
				availableHeight: availableHeight,
				width: width,
				height: height
			}
		},
		getChartDataFor:function(_props, chartProps, data, fullData, passThroughProps) {
			var dimensions = this.getDimensions(_props, chartProps);
	
			var scales = this.defineScales(chartProps, data, passThroughProps);
	
			var accessors = this.getXYAccessors(chartProps, passThroughProps);
			// identify overlays
			var overlaysToAdd = this.identifyOverlaysToAdd(chartProps);
			// console.log(overlaysToAdd);
			// calculate overlays
			this.calculateOverlays(fullData, overlaysToAdd);
	
			var overlayYAccessors = pluck(keysAsArray(overlaysToAdd), 'yAccessor');
	
			var xyValues = ScaleUtils.flattenData(data, [accessors.xAccessor], [accessors.yAccessor].concat(overlayYAccessors));
	
			var overlayValues = this.updateOverlayFirstLast(data, overlaysToAdd)
	
			scales = this.updateScales(
				xyValues
				, scales
				, data
				, dimensions.width
				, dimensions.height);
	
			var last = Utils.cloneMe(data[data.length - 1]);
			var first = Utils.cloneMe(data[0]);
			var origin = typeof chartProps.origin === 'function'
				? chartProps.origin(dimensions.availableWidth, dimensions.availableHeight)
				: chartProps.origin;
	
			var drawableWidth = scales.xScale(accessors.xAccessor(data[data.length - 1]))
				- scales.xScale(accessors.xAccessor(data[0]));
	
			var _chartData = {
					width: dimensions.width,
					height: dimensions.height,
					drawableWidth: drawableWidth,
					origin: origin,
					overlayValues: overlayValues,
					overlays: overlaysToAdd,
					accessors: accessors,
					scales: scales,
					lastItem: last,
					firstItem: first
				};
			return _chartData;
		},
		defineScales:function(props, data, passThroughProps) {
			var xScale = props.xScale || props._xScale,
				yScale = props.yScale;
	
			if (xScale === undefined && passThroughProps) xScale = passThroughProps._xScale;
	
			if (xScale === undefined) {
				var each = data[0];
				if (typeof each === 'object') {
					Object.keys(each).forEach(function(key)  {
						if (Object.prototype.toString.call(each[key]) === '[object Date]') {
							xScale = d3.time.scale();
						}
					});
				}
				if (xScale === undefined) xScale = d3.scale.linear();
				//xScale = polyLinearTimeScale();
			}
			if (yScale === undefined) {
				yScale = d3.scale.linear();
			}
			return { xScale: xScale, yScale: yScale };
		},
		getXYAccessors:function(props, passThroughProps) {
			var accessor = { xAccessor: null, yAccessor: null };
	
			React.Children.forEach(props.children, function(child)  {
				if (['ReStock.DataSeries']
						.indexOf(child.props.namespace) > -1) {
					if (child.props) {
	
						var xAccesor = passThroughProps !== undefined && passThroughProps._stockScale
							? passThroughProps._indexAccessor
							: child.props.xAccessor
						accessor.xAccessor = xAccesor;
						accessor.yAccessor = child.props.yAccessor;
					}
				}
			});
			// yAccessors.push(overlayY);
	
			return accessor;
		},
		identifyOverlaysToAdd:function(props) {
			var overlaysToAdd = [];
			React.Children.forEach(props.children, function(child)  {
				if (/DataSeries$/.test(child.props.namespace)) {
					React.Children.forEach(child.props.children, function(grandChild)  {
						if (/OverlaySeries$/.test(grandChild.props.namespace)) {
							// var overlay = getOverlayFromList(overlays, grandChild.props.id)
							var key = OverlayUtils.getYAccessorKey(props.id, grandChild.props);
							var overlay = {
								id: grandChild.props.id,
								chartId: props.id,
								key: key,
								yAccessor: function(d)  {return d[key];},
								options: grandChild.props.options,
								type: grandChild.props.type,
								tooltipLabel: OverlayUtils.getToolTipLabel(grandChild.props),
								stroke: grandChild.stroke || overlayColors(grandChild.props.id)
							};
							overlaysToAdd.push(overlay);
						}
					});
				}
			})
			return overlaysToAdd;
		},
		calculateOverlays:function(fullData, overlays) {
			if (Array.isArray(fullData)) {
				overlays
					.filter(function(eachOverlay)  {return eachOverlay.id !== undefined;})
					.forEach(function(overlay)  {
						OverlayUtils.calculateOverlay(fullData, overlay);
					});
			} else {
				Object.keys(fullData)
					.filter(function(key)  {return ['D', 'W', 'M'].indexOf(key) > -1;})
					.forEach(function(key)  {
						overlays
							.filter(function(eachOverlay)  {return eachOverlay.id !== undefined;})
							.forEach(function(overlay)  {
								OverlayUtils.calculateOverlay(fullData[key], overlay);
							});
					})
			}
			// console.log(overlays);
		},
		updateOverlayFirstLast:function(data,
			overlays) {
	
			// console.log('updateOverlayFirstLast');
	
			var overlayValues = [];
	
			overlays
				.forEach(function(eachOverlay, idx)  {
					// console.log(JSON.stringify(first), Object.keys(first), yAccessor(first));
					overlayValues.push({
						id: eachOverlay.id,
						first: OverlayUtils.firstDefined(data, eachOverlay.yAccessor),
						last: OverlayUtils.lastDefined(data, eachOverlay.yAccessor)
					})/**/
				})
			// console.log(_overlayValues);
			return overlayValues;
		},
		updateScales:function(xyValues, scales, data, width, height) {
			console.log('updateScales');
	
	
			scales.xScale.range([0, width]);
			// if polylinear scale then set data
			if (scales.xScale.isPolyLinear && scales.xScale.isPolyLinear()) {
				scales.xScale.data(data);
			} else {
				// else set the domain
				scales.xScale.domain(d3.extent(xyValues.xValues));
			}
	
			scales.yScale.range([height, 0]);
	
			var domain = d3.extent(xyValues.yValues);
			//var extraPadding = Math.abs(domain[0] - domain[1]) * 0.05;
			//yScale.domain([domain[0] - extraPadding, domain[1] + extraPadding]);
			scales.yScale.domain(domain);
	
			return {
				xScale: scales.xScale.copy(),
				yScale: scales.yScale.copy()
			};
		},
	
		updateChartDataFor:function(_chartData, data) {
			console.log('updateChartDataFor');
			var scales = _chartData.scales;
	
			var accessors = _chartData.accessors;
	
			var overlayValues = this.updateOverlayFirstLast(data, _chartData.overlays)
			_chartData = _chartData.set( { overlayValues: overlayValues } ); // replace everything
	
			var overlayYAccessors = pluck(keysAsArray(_chartData.overlays), 'yAccessor');
	
	
			var xyValues = ScaleUtils.flattenData(data, [accessors.xAccessor], [accessors.yAccessor].concat(overlayYAccessors));
	
			scales = this.updateScales(
				xyValues
				, scales
				, data
				, _chartData.width
				, _chartData.height);
	
			_chartData = _chartData.set({ scales: scales });
	
			var last = Utils.cloneMe(data[data.length - 1]);
			_chartData = _chartData.set({ lastItem: last });
	
			var first = Utils.cloneMe(data[0]);
			_chartData = _chartData.set({ firstItem: first });
			return _chartData;
		}
	};
	
	module.exports = ChartContainerMixin;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var shallowEqual = __webpack_require__(91);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReStockPureRenderMixin = {
		shouldComponentUpdate: function(nextProps, nextState) {
			var extraCheck = (typeof this.extraShouldComponentUpdate === "function")
				? this.extraShouldComponentUpdate
				: function(nextProps, nextState, actualCheck)  {return actualCheck;}
			var actualCheck = !shallowEqual(this.props, nextProps) ||
					!shallowEqual(this.state, nextState)
			return extraCheck(nextProps, nextState, actualCheck);
		}
	};
	
	module.exports = ReStockPureRenderMixin;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ChartTransformer = __webpack_require__(88);
	
	var DataTransformMixin = {
		isDataDransform:function() {
			return true;
		},
		transformData:function(props) {
			var transformer = ChartTransformer.getTransformerFor(props.transformType);
			var passThroughProps = transformer(props.data, props.options, props)
			// console.log('passThroughProps-------', passThroughProps);
	
			// this.setState({ passThroughProps: passThroughProps });
			return passThroughProps;
		}
	};
	
	module.exports = DataTransformMixin;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(2);
	
	var polylineartimescale = function(indexAccessor) {
		return guided_scale([0, 1], indexAccessor, d3.scale.linear());
	};
	
	function guided_scale(drawableData, indexAccessor, backingLinearScale) {
		//var  = 'week'; //valid values 'day', 'week', 'month'
	
		var d3_time_scaleSteps = [
			{ step: 864e5, f: function (d, i) {return d.date !== undefined && true ;}},  // 1-day
			{ step: 1728e5, f: function (d, i) {return d.date !== undefined && (i % 2 == 0) ;}},  // 2-day
			{ step: 8380e5, f: function (d, i, arr) {
					if (d.startOfMonth) return true;
					var list = [];
					if ((i - 2) >= 0) list.push(arr[i - 2]);
					if ((i - 1) >= 0) list.push(arr[i - 1]);
					list.push(arr[i]);
					if ((i + 1) <= arr.length - 1) list.push(arr[i + 1]);
					if ((i + 2) <= arr.length - 1) list.push(arr[i + 2]);
					var sm = list
								.map(function (d) { return d.startOfMonth; })
								.reduce(function(prev, curr) {
										return prev || curr;
									});
					return sm ? false : d.startOfWeek;
				}},  // 1-week
			{ step: 3525e6, f: function (d) {return d.startOfMonth; }},  // 1-month
			{ step: 7776e6, f: function (d) {return d.startOfQuarter; }},  // 3-month
			{ step: 31536e6, f: function (d) {return d.startOfYear; }},  // 1-year
			{ step: 91536e15, f: function (d) {return d.date !== undefined && (d.startOfYear && d.date.getFullYear() % 2 == 0); }}  // 2-year
		];
		var timeScaleStepsBisector = d3.bisector(function(d) { return d.step; }).left;
		var __BISECT = d3.bisector(function(d) { return indexAccessor(d); }).left;
		var tickFormat = [
			[d3.time.format("%Y"), function(d) { return d.startOfYear; }],
			[d3.time.format("%b %Y"), function(d) { return d.startOfQuarter; }],
			[d3.time.format("%b"), function(d) { return d.startOfMonth; }],
			[d3.time.format("%d %b"), function(d) { return d.startOfWeek; }],
			[d3.time.format("%a %d "), function(d) { return true; }]
		];
		function formater(d) {
			var i = 0, format = tickFormat[i];
			while (!format[1](d)) format = tickFormat[++i];
			var tickDisplay = format[0](d.date);
			// console.log(tickDisplay);
			return tickDisplay;
		};
	
		var ticks;
	
		function scale(x) {
			return backingLinearScale(x);
		};
		scale.isPolyLinear = function() {
			return true;
		}
		scale.invert = function(x) {
			return backingLinearScale.invert(x);
		};
		scale.data = function(x) {
			if (!arguments.length) {
				return drawableData;
			} else {
				drawableData = x;
				//this.domain([drawableData.first().index, drawableData.last().index]);
				this.domain([indexAccessor(drawableData[0]), indexAccessor(drawableData[drawableData.length - 1])]);
				return scale;
			}
		};
		scale.domain = function(x) {
			if (!arguments.length) return backingLinearScale.domain();
			//console.log("before = %s, after = %s", JSON.stringify(backingLinearScale.domain()), JSON.stringify(x))
			var d = [Math.floor(x[0]), Math.ceil(x[1])]
	
			backingLinearScale.domain(d);
			return scale;
		};
		scale.range = function(x) {
			if (!arguments.length) return backingLinearScale.range();
			backingLinearScale.range(x);
			return scale;
		};
		scale.rangeRound = function(x) {
			return backingLinearScale.range(x);
		};
		scale.clamp = function(x) {
			if (!arguments.length) return backingLinearScale.clamp();
			backingLinearScale.clamp(x);
			return scale;
		};
		scale.interpolate = function(x) {
			if (!arguments.length) return backingLinearScale.interpolate();
			backingLinearScale.interpolate(x);
			return scale;
		};
	
		scale.ticks = function(m) {
	
			var start, end, count = 0;
			drawableData.forEach(function (d, i) {
				if (d.date !== undefined) {
					if (start === undefined) start = d;
					end = d;
					count++;
				}
			});
			m = (count/drawableData.length) * m;
			var span = (end.date.getTime() - start.date.getTime());
			var target = span/m;
			/*
			console.log(drawableData[drawableData.length - 1].date
				, drawableData[0].date
				, span
				, m
				, target
				, timeScaleStepsBisector(d3_time_scaleSteps, target)
				);
			*/
			var ticks = drawableData
							.filter(d3_time_scaleSteps[timeScaleStepsBisector(d3_time_scaleSteps, target)].f)
							.map(function(d, i) {return indexAccessor(d);})
							;
			// return the index of all the ticks to be displayed,
			//console.log(target, span, m, ticks);
			return ticks;
		};
		scale.tickFormat = function(ticks) {
			return function(d) {
				// for each index received from ticks() function derive the formatted output
				var tickIndex = __BISECT(drawableData, d);
				return formater(drawableData[tickIndex]) ;
				//return formater(d) ;
			};
		}
	
		scale.nice = function(m) {
			backingLinearScale.nice(m);
			return scale;
		};
		scale.copy = function() {
			return guided_scale(drawableData, indexAccessor, backingLinearScale.copy());
		};
		return scale;
	}
	
	
	module.exports = polylineartimescale

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function pushToValues(values, eachValue) {
		if (typeof eachValue === 'object' && Object.keys(eachValue).length > 0) {
			Object.keys(eachValue).forEach(function (key) {
				if (!isNaN(eachValue[key])) {
					values.push(eachValue[key]);
				}
			});
		} else {
			if (!isNaN(eachValue)) {
				values.push(eachValue);
			}
		}
	}
	
	
	var ScaleUtils = {
		flattenData:function(data, xAccessors, yAccessors) {
			console.log(xAccessors, yAccessors);
			var xValues = [];
			var yValues = [];
			data.forEach( function(row)  {
				xAccessors.forEach( function(xAccessor)  {
					var x = xAccessor(row);
					if (x !== undefined) {
						pushToValues(xValues, x);
					}
				});
				yAccessors.forEach( function(yAccessor)  {
					var y = yAccessor(row);
					if (y !== undefined) {
						pushToValues(yValues, y);
					}
				});
			})
			return {
				xValues: xValues,
				yValues: yValues
			};
		}
	}
	module.exports = ScaleUtils;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(86);
	var MACalculator = __webpack_require__(89);
	
	var OverlayUtils = {
		getToolTipLabel:function(props) {
			if (props.type === "sma" || props.type === "ema") {
				var tooltip = props.type.toUpperCase() + '(' + props.options.period + ')';
				return tooltip;
			}
			return 'N/A';
		},/*
		getYAccessor(chartId, props) {
			if (props.type === "sma" || props.type === "ema") {
				var key = props.type + props.options.period + '_chart_' + chartId;
				return (d) => d[key];
			}
			return false;
		},*/
		getYAccessorKey:function(chartId, props) {
			if (props.type === "sma" || props.type === "ema") {
				var key = props.type + props.options.period + '_chart_' + chartId;
				return key;
			}
			return false;
		},
		calculateOverlay:function(data, overlay) {
			console.log(overlay);
			if (overlay.type === 'sma') {
				data = MACalculator.calculateSMA(data, overlay.options.period, overlay.key, overlay.options.pluck);
			} else if (overlay.type === 'ema') {
				data = MACalculator.calculateEMA(data, overlay.options.period, overlay.key, overlay.options.pluck);
			}
			return data;
		},
		firstDefined:function(data, accessor) {
			var each;
			for (var i = 0; i < data.length; i++) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			};
			return Utils.cloneMe(each);
		},
		lastDefined:function(data, accessor) {
			var each;
			for (var i = data.length - 1; i >= 0; i--) {
				if (accessor(data[i]) === undefined) continue;
				each = data[i];
				// console.log(i, each, accessor(each));
				break;
			};
			return Utils.cloneMe(each);
		}
	}
	
	module.exports = OverlayUtils;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var d3 = __webpack_require__(2);
	
	var overlayColors = d3.scale.category10();
	
	function Utils() {
	}
	
	Utils.overlayColors = overlayColors;
	Utils.cloneMe = function(obj) {
		if(obj == null || typeof(obj) !== 'object')
			return obj;
		if (obj instanceof Date) {
			return new Date(obj.getTime());
		}
		var temp = {};//obj.constructor(); // changed
	
		for(var key in obj) {
			if(obj.hasOwnProperty(key)) {
				temp[key] = Utils.cloneMe(obj[key]);
			}
		}
		return temp;
	}
	Utils.displayDateFormat = d3.time.format("%Y-%m-%d");
	Utils.displayNumberFormat = function(x) {
		return Utils.numberWithCommas(x.toFixed(2));
	};
	Utils.numberWithCommas = function(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	Utils.isNumeric = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	Utils.mousePosition = function(e) {
		var container = e.currentTarget,
			rect = container.getBoundingClientRect(),
			x = e.clientX - rect.left - container.clientLeft,
			y = e.clientY - rect.top - container.clientTop,
			xy = [ Math.round(x), Math.round(y) ];
		return xy;
	}
	Utils.getValue = function(d) {
		if (d instanceof Date) {
			return d.getTime();
		}
		return d;
	}
	Utils.getClosestItem = function(array, value, accessor) {
		var lo = 0, hi = array.length - 1;
		while (hi - lo > 1) {
			var mid = Math.round((lo + hi)/2);
			if (accessor(array[mid]) <= value) {
				lo = mid;
			} else {
				hi = mid;
			}
		}
		if (accessor(array[lo]) === value) hi = lo;
		var closest = (Math.abs(accessor(array[lo]) - value) < Math.abs(accessor(array[hi]) - value))
							? array[lo]
							: array[hi]
		//console.log(array[lo], array[hi], closest, lo, hi);
		return Utils.cloneMe(closest);
	}
	Utils.getClosestItemIndexes = function(array, value, accessor) {
		var lo = 0, hi = array.length - 1;
		while (hi - lo > 1) {
			var mid = Math.round((lo + hi)/2);
			if (accessor(array[mid]) <= value) {
				lo = mid;
			} else {
				hi = mid;
			}
		}
		if (accessor(array[lo]) === value) hi = lo;
		//console.log(array[lo], array[hi], closestIndex, lo, hi);
		return { left: lo, right: hi };
	}
	Utils.pluck = function(array, key) {
		return array.map(function(each)  {return each[key];})
	}
	Utils.keysAsArray = function(obj) {
		return Object.keys(obj)
			.filter(function(key)  {return obj[key] !== null;})
			.map(function(key)  {return obj[key];});
	}
	Utils.sum = function(array) {
		return array.reduce(function(d1, d2)  {return d1 + d2;});
	}
	
	module.exports = Utils;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var React = __webpack_require__(1);
	
	var EdgeCoordinate = React.createClass({displayName: "EdgeCoordinate",
		propTypes: {
			type: React.PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
			coordinate: React.PropTypes.any.isRequired,
			x1: React.PropTypes.number.isRequired,
			y1: React.PropTypes.number.isRequired,
			x2: React.PropTypes.number.isRequired,
			y2: React.PropTypes.number.isRequired,
			orient: React.PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
			rectWidth: React.PropTypes.number
		},
		getDefaultProps:function() {
			return {
				orient: 'left'
			};
		},
		render:function() {
			if (!this.props.show) return null;
	
			var displayCoordinate = this.props.coordinate;
			var rectWidth = this.props.rectWidth
				? this.props.rectWidth
				: (this.props.type === 'horizontal')
					? 60
					: 100,
				rectHeight = 20;
	
			var edgeXRect, edgeYRect, edgeXText, edgeYText;
	
			if (this.props.type === 'horizontal') {
	
				edgeXRect = (this.props.orient === 'right') ? this.props.edgeAt + 1 : this.props.edgeAt - rectWidth - 1;
				edgeYRect = this.props.y1 - (rectHeight / 2);
				edgeXText = (this.props.orient === 'right') ? this.props.edgeAt + (rectWidth / 2) : this.props.edgeAt - (rectWidth / 2);
				edgeYText = this.props.y1;
			} else {
				edgeXRect = this.props.x1 - (rectWidth / 2);
				edgeYRect = (this.props.orient === 'bottom') ? this.props.edgeAt : this.props.edgeAt - rectHeight;
				edgeXText = this.props.x1;
				edgeYText = (this.props.orient === 'bottom') ? this.props.edgeAt + (rectHeight / 2) : this.props.edgeAt - (rectHeight / 2);
			}
			var coordinateBase = null, coordinate = null;
			if (displayCoordinate !== undefined) {
					coordinateBase = (React.createElement("rect", {key: 1, className: "textbg", 
										x: edgeXRect, 
										y: edgeYRect, 
										height: rectHeight, width: rectWidth, fill: this.props.fill}));
					coordinate = (React.createElement("text", {key: 2, x: edgeXText, 
										y: edgeYText, 
										style: {"textAnchor": "middle"}, 
										dy: ".32em"}, displayCoordinate));
			}
			return (
				React.createElement("g", {className: (this.props.show ? 'show ' : 'hide ') + this.props.className}, 
						React.createElement("line", {className: "cross-hair", 
							x1: this.props.x1, y1: this.props.y1, 
							x2: this.props.x2, y2: this.props.y2}), 
						coordinateBase, 
						coordinate
				)
			);
		}
	});
	
	module.exports = EdgeCoordinate;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var StockScaleTransformer = __webpack_require__(92);
	var HeikinAshiTransformer = __webpack_require__(93);
	
	var ChartTransformer = {
		getTransformerFor:function(type) {
			if (type === "none")
				return function(d)  {return d;};
			if (type === "stockscale")
				return StockScaleTransformer;
			if (type === "heikinashi")
				return HeikinAshiTransformer;
			return false;
		},
		filter:function(data, dateAccesor, fromDate, toDate) {
			var filteredData = data.filter(function(each)  {
				var filtered = dateAccesor(each).getTime() > fromDate.getTime() && dateAccesor(each).getTime() < toDate.getTime()
				return filtered;
			});
			return filteredData;
		}
	}
	
	module.exports = ChartTransformer;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(86);
	
	var pluck = Utils.pluck;
	var sum = Utils.sum;
	
	function MACalculator() {
	
	};
	MACalculator.calculateSMA = function(data, period, key, pluckKey) {
		console.log('calculateSMA');
	
		var l = data.length - 1;//, key = 'sma' + period;
		var maKey = pluckKey || 'close';
	
		data.map(function(each, i)  {return data.slice(i - period, i);})
			.filter(function(array)  {return array.length === period && array.length > 0;})
			.map(function(array)  {return pluck(array, maKey);})
			.map(function(array)  {return sum(array);})
			.map(function(sum)  {return sum / period;})
			.reverse()
			.forEach(function(avg, i)  {
				// Object.defineProperty(data[l - i], key, { value: avg });
				data[l - i][key] = avg;
				// console.log(data[l - i][key]);
			})
		if (key === 'sma53_chart_2') {
			console.table(data);
		}
		return data;
	}
	
	MACalculator.calculateEMA = function (data, period) {
		console.log('calculating EMA');
		return false;
	}
	
	module.exports = MACalculator;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var Freezer = __webpack_require__(94);
	module.exports = Freezer;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var stockScale = __webpack_require__(83);
	
	var defaultOptions = {
		dateAccesor: function(d)  {return d.date;},
		indexAccessor: function(d)  {return d._idx;},
		indexMutator: function(d, i)  {d._idx = i;}
	}
	
	function StockScaleTransformer(data, options) {
		if (options === undefined) options = defaultOptions;
		var dateAccesor = options.dateAccesor;
		var dateMutator = options.dateMutator || function(d, date) {d.date = date};
		var indexMutator = options.indexMutator;
	
		var prevDate;
		var responseData = {}
		responseData.D = data
			//.filter((each) => Math.random() > 0.9)
			.map(function(each, i)  {
				var row = each;
				// console.log(each);
				//console.log(row);
				indexMutator(row,  i);
	
				row.startOfWeek = false;
				row.startOfMonth = false;
				row.startOfQuarter = false;
				row.startOfYear = false;
				var date = dateAccesor(row);
				//row.displayDate = dateFormat(date);
				if (prevDate !== undefined) {
					// According to ISO calendar
					// Sunday = 0, Monday = 1, ... Saturday = 6
					// day of week of today < day of week of yesterday then today is start of week
					row.startOfWeek = date.getDay() < prevDate.getDay();
					// month of today != month of yesterday then today is start of month
					row.startOfMonth = date.getMonth() != prevDate.getMonth();
					//if start of month and month % 3 === 0 then it is start of quarter
					row.startOfQuarter = row.startOfMonth && date.getMonth() % 3 === 0;
					// year of today != year of yesterday then today is start of year
					row.startOfYear = date.getYear() != prevDate.getYear();
				}
				prevDate = date;
				return row;
			});
		// console.table(responseData);
		responseData.W = buildWeeklyData(responseData.D, indexMutator, dateAccesor, dateMutator);
		responseData.M = buildMonthlyData(responseData.D, indexMutator, dateAccesor, dateMutator);
	
		// console.table(responseData.W);
	
		return {
				data: responseData,
				_dateAccessor: dateAccesor,
				_dateMutator: dateMutator,
				_indexAccessor: options.indexAccessor,
				_indexMutator: indexMutator,
				// _indexMutator: indexMutator,
				_stockScale: true,
				_xScale: stockScale(options.indexAccessor),
				_multiInterval: true
			};
	}
	
	function buildWeeklyData(daily, indexMutator, dateAccesor, dateMutator) {
		var weekly = [], prevWeek, eachWeek = {};
		for (var i = 0; i < daily.length; i++) {
			var d = daily[i];
	
			if (dateAccesor(eachWeek)) indexMutator(eachWeek,  i);
	
			dateMutator(eachWeek, dateAccesor(d));
	
			eachWeek.startOfWeek = eachWeek.startOfWeek || d.startOfWeek;
			eachWeek.startOfMonth = eachWeek.startOfMonth || d.startOfMonth;
			eachWeek.startOfQuarter = eachWeek.startOfQuarter || d.startOfQuarter;
			eachWeek.startOfYear = eachWeek.startOfYear || d.startOfYear;
	
			if (!eachWeek.open) eachWeek.open = d.open;
			if (!eachWeek.high) eachWeek.high = d.high;
			if (!eachWeek.low) eachWeek.low = d.low;
	
			eachWeek.close = d.close;
	
			eachWeek.high = Math.max(eachWeek.high, d.high);
			eachWeek.low = Math.min(eachWeek.low, d.low);
	
			if (!eachWeek.volume) eachWeek.volume = 0;
			eachWeek.volume += d.volume;
	
			if (d.startOfWeek) {
				if (prevWeek) {
					eachWeek.trueRange = Math.max(
						eachWeek.high - eachWeek.low
						, eachWeek.high - prevWeek.close
						, eachWeek.low - prevWeek.close
					);
				}
				prevWeek = eachWeek
				weekly.push(eachWeek);
				eachWeek = {};
			}
		}
		return weekly;
	}
	
	function buildMonthlyData(daily, indexMutator, dateAccesor) {
		var monthly = [], prevMonth, eachMonth = {};
		for (var i = 0; i < daily.length; i++) {
			var d = daily[i];
	
			if (!eachMonth.date) indexMutator(eachMonth,  i);
	
			eachMonth.date = dateAccesor(d);
	
			eachMonth.startOfMonth = eachMonth.startOfMonth || d.startOfMonth;
			eachMonth.startOfQuarter = eachMonth.startOfQuarter || d.startOfQuarter;
			eachMonth.startOfYear = eachMonth.startOfYear || d.startOfYear;
	
			if (!eachMonth.open) eachMonth.open = d.open;
			if (!eachMonth.high) eachMonth.high = d.high;
			if (!eachMonth.low) eachMonth.low = d.low;
	
			eachMonth.close = d.close;
	
			eachMonth.high = Math.max(eachMonth.high, d.high);
			eachMonth.low = Math.min(eachMonth.low, d.low);
	
			if (!eachMonth.volume) eachMonth.volume = 0;
			eachMonth.volume += d.volume;
	
			if (d.startOfMonth) {
				eachMonth.startOfWeek = d.startOfWeek;
				if (prevMonth) {
					eachMonth.trueRange = Math.max(
						eachMonth.high - eachMonth.low
						, eachMonth.high - prevMonth.close
						, eachMonth.low - prevMonth.close
					);
				}
				prevMonth = eachMonth
				monthly.push(eachMonth);
				eachMonth = {};
			}
		}
		return monthly;
	}
	
	module.exports = StockScaleTransformer;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var excludeList = ['transformType', 'options', 'children', 'namespace'];
	
	
	function HeikinAshiTransformer(data, options, props) {
		if (options === undefined) options = {};
		var dateAccesor = options.dateAccesor || props._dateAccessor;
		var dateMutator = options.dateMutator || props._dateMutator;
		var indexAccessor = options.indexAccessor || props._indexAccessor;
		var indexMutator = options.indexMutator || props._indexMutator;
	
		if (props._multiInterval && props._stockScale) {
			
			var haData = {};
			Object.keys(data)
				.forEach(function(key)  {return haData[key] = buildHA(data[key], indexAccessor, indexMutator, dateAccesor, dateMutator);});
			var response = {};
	
			Object.keys(props)
				.filter(function(key)  {return excludeList.indexOf(key) < 0;})
				.forEach(function(key)  {return response[key] = props[key];});
	
			response.data = haData;
	
			return response;
		}
		return {
			data: data
		};
	}
	
	function buildHA(data, indexAccessor, indexMutator, dateAccesor, dateMutator) {
		var prevEach;
	
		var haData = data.map(function (d, i) {
			var each = {};
			indexMutator(each, indexAccessor(d));
			each.close = (d.open + d.high + d.low + d.close) / 4;
	
			dateMutator(each, dateAccesor(d));
			//each.displayDate = d.displayDate;
	
			if (!prevEach) {
				each.open = d.open;
				each.high = d.high;
				each.low = d.low;
			} else {
				each.open = (prevEach.open + prevEach.close) / 2;
				each.high = Math.max(each.open, d.high, each.close);
				each.low = Math.min(each.open, d.low, each.close);
				each.trueRange = Math.max(
						d.high - d.low
						, d.high - prevEach.close
						, d.low - prevEach.close
					);
			}
			each.volume = d.volume;
	
			each.startOfWeek = d.startOfWeek;
			each.startOfMonth = d.startOfMonth;
			each.startOfQuarter = d.startOfQuarter;
			each.startOfYear = d.startOfYear;
	
			prevEach = each;
			return each;
		});
		// console.table(haData);
		return haData;
	};
	
	module.exports = HeikinAshiTransformer;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__( 95 ),
		Emitter = __webpack_require__( 98 ),
		Mixins = __webpack_require__( 96 ),
		Frozen = __webpack_require__( 97 )
	;
	
	//#build
	var Freezer = function( initialValue ) {
		var me = this;
	
		// Immutable data
		var frozen;
	
		var notify = function notify( eventName, node, options ){
			if( eventName == 'listener' )
				return Frozen.createListener( node );
	
			var updated = Frozen.update( eventName, node, options );
	
			if( !updated )
				return Utils.error( 'Can\'t udpate. The node is not in the freezer.' );
	
			return updated;
		};
	
		// Create the frozen object
		frozen = Frozen.freeze( initialValue, notify );
	
		// Listen to its changes immediately
		var listener = frozen.getListener();
	
		// Updating flag to trigger the event on nextTick
		var updating = false;
	
		listener.on( 'immediate', function( prevNode, updated ){
			if( prevNode != frozen )
				return;
	
			frozen = updated;
	
			// Trigger on next tick
			if( !updating ){
				updating = true;
				Utils.nextTick( function(){
					updating = false;
					me.trigger( 'update', frozen );
				});
			}
		});
	
		Utils.addNE( this, {
			get: function(){
				return frozen;
			},
			set: function( node ){
				var newNode = notify( 'reset', frozen, node );
				newNode.__.listener.trigger( 'immediate', frozen, newNode );
			}
		});
	
		Utils.addNE( this, { getData: this.get, setData: this.set } );
	
		// The event store
		this._events = [];
	}
	
	Freezer.prototype = Utils.createNonEnumerable({}, Emitter);
	//#build
	
	module.exports = Freezer;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//#build
	var global = (new Function("return this")());
	
	var Utils = {
		extend: function( ob, props ){
			for( var p in props ){
				ob[p] = props[p];
			}
			return ob;
		},
	
		createNonEnumerable: function( obj, proto ){
			var ne = {};
			for( var key in obj )
				ne[key] = {value: obj[key] };
			return Object.create( proto || {}, ne );
		},
	
		error: function( message ){
			var err = new Error( message );
			if( console )
				return console.error( err );
			else
				throw err;
		},
	
		each: function( o, clbk ){
			var i,l,keys;
			if( o && o.constructor == Array ){
				for (i = 0, l = o.length; i < l; i++)
					clbk( o[i], i );
			}
			else {
				keys = Object.keys( o );
				for( i = 0, l = keys.length; i < l; i++ )
					clbk( o[ keys[i] ], keys[i] );
			}
		},
	
		addNE: function( node, attrs ){
			for( var key in attrs ){
				Object.defineProperty( node, key, {
					enumerable: false,
					configurable: true,
					writable: true,
					value: attrs[ key ]
				});
			}
		},
	
		// nextTick - by stagas / public domain
	  	nextTick: (function () {
	      var queue = [],
				dirty = false,
				fn,
				hasPostMessage = !!global.postMessage,
				messageName = 'nexttick',
				trigger = (function () {
					return hasPostMessage
						? function trigger () {
						global.postMessage(messageName, '*');
					}
					: function trigger () {
						setTimeout(function () { processQueue() }, 0);
					};
				}()),
				processQueue = (function () {
					return hasPostMessage
						? function processQueue (event) {
							if (event.source === global && event.data === messageName) {
								event.stopPropagation();
								flushQueue();
							}
						}
						: flushQueue;
	      	})()
	      ;
	
	      function flushQueue () {
	          while (fn = queue.shift()) {
	              fn();
	          }
	          dirty = false;
	      }
	
	      function nextTick (fn) {
	          queue.push(fn);
	          if (dirty) return;
	          dirty = true;
	          trigger();
	      }
	
	      if (hasPostMessage) global.addEventListener('message', processQueue, true);
	
	      nextTick.removeListener = function () {
	          global.removeEventListener('message', processQueue, true);
	      }
	
	      return nextTick;
	  })()
	};
	//#build
	
	
	module.exports = Utils;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__( 95 );
	
	//#build
	
	/**
	 * Creates non-enumerable property descriptors, to be used by Object.create.
	 * @param  {Object} attrs Properties to create descriptors
	 * @return {Object}       A hash with the descriptors.
	 */
	var createNE = function( attrs ){
		var ne = {};
	
		for( var key in attrs ){
			ne[ key ] = {
				writable: true,
				configurable: true,
				enumerable: false,
				value: attrs[ key]
			}
		}
	
		return ne;
	}
	
	var commonMethods = {
		set: function( attr, value ){
			var attrs = attr;
	
			if( typeof value != 'undefined' ){
				attrs = {};
				attrs[ attr ] = value;
			}
	
			return this.__.notify( 'merge', this, attrs );
		},
	
		getListener: function(){
			return this.__.notify( 'listener', this );
		},
	
		toJS: function(){
			var js;
			if( this.constructor == Array ){
				js = new Array( this.length );
			}
			else {
				js = {};
			}
	
			Utils.each( this, function( child, i ){
				if( child && child.__ )
					js[ i ] = child.toJS();
				else
					js[ i ] = child;
			});
	
			return js;
		}
	};
	
	var arrayMethods = Utils.extend({
		push: function( el ){
			return this.append( [el] );
		},
	
		append: function( els ){
			if( els && els.length )
				return this.__.notify( 'splice', this, [this.length, 0].concat( els ) );
			return this;
		},
	
		pop: function(){
			if( !this.length )
				return this;
	
			return this.__.notify( 'splice', this, [this.length -1, 1] );
		},
	
		unshift: function( el ){
			return this.prepend( [el] );
		},
	
		prepend: function( els ){
			if( els && els.length )
				return this.__.notify( 'splice', this, [0, 0].concat( els ) );
			return this;
		},
	
		shift: function(){
			if( !this.length )
				return this;
	
			return this.__.notify( 'splice', this, [0, 1] );
		},
	
		splice: function( index, toRemove, toAdd ){
			return this.__.notify( 'splice', this, arguments );
		}
	}, commonMethods );
	
	var FrozenArray = Object.create( Array.prototype, createNE( arrayMethods ) );
	
	var Mixins = {
	
	Hash: Object.create( Object.prototype, createNE( Utils.extend({
		remove: function( keys ){
			var filtered = [],
				k = keys
			;
	
			if( keys.constructor != Array )
				k = [ keys ];
	
			for( var i = 0, l = k.length; i<l; i++ ){
				if( this.hasOwnProperty( k[i] ) )
					filtered.push( k[i] );
			}
	
			if( filtered.length )
				return this.__.notify( 'remove', this, filtered );
			return this;
		},
	
		reset: function( attrs ) {
			return this.__.notify( 'replaceself', this, attrs );
		}
	
	}, commonMethods))),
	
	List: FrozenArray,
	arrayMethods: arrayMethods
	};
	//#build
	
	module.exports = Mixins;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__( 95 ),
		Mixins = __webpack_require__( 96),
		Emitter = __webpack_require__(98)
	;
	
	//#build
	var Frozen = {
		freeze: function( node, notify ){
			if( node && node.__ ){
				return node;
			}
	
			var me = this,
				frozen, mixin, cons
			;
	
			if( node.constructor == Array ){
				frozen = this.createArray( node.length );
			}
			else {
				frozen = Object.create( Mixins.Hash );
			}
	
			Utils.addNE( frozen, { __: {
				listener: false,
				parents: [],
				notify: notify,
				dirty: false
			}});
	
			// Freeze children
			Utils.each( node, function( child, key ){
				cons = child && child.constructor;
				if( cons == Array || cons == Object ){
					child = me.freeze( child, notify );
				}
	
				if( child && child.__ )
					me.addParent( child, frozen );
	
				frozen[ key ] = child;
			});
	
			Object.freeze( frozen );
	
			return frozen;
		},
	
		update: function( type, node, options ){
			if( !this[ type ])
				return Utils.error( 'Unknown update type: ' + type );
	
			return this[ type ]( node, options );
		},
	
		reset: function( node, value ){
			var me = this,
				frozen
			;
	
			if( value && value.__ ){
				frozen = value;
				frozen.__.listener = value.__.listener;
				frozen.__.parents = [];
	
				// Set back the parent on the children
				// that have been updated
				this.fixChildren( frozen, node );
				Utils.each( frozen, function( child ){
					if( child && child.__ ){
						me.removeParent( node );
						me.addParent( child, frozen );
					}
				});
			}
			else {
				frozen = this.freeze( node, node.__.notify );
			}
	
			return frozen;
		},
	
		merge: function( node, attrs ){
			var me = this,
				frozen = this.copyMeta( node ),
				notify = node.__.notify,
				val, cons, key, isFrozen
			;
	
			Utils.each( node, function( child, key ){
				isFrozen = child && child.__;
	
				if( isFrozen ){
					me.removeParent( child, node );
				}
	
				val = attrs[ key ];
				if( !val ){
					if( isFrozen )
						me.addParent( child, frozen );
					return frozen[ key ] = child;
				}
	
				cons = val && val.constructor;
	
				if( cons == Array || cons == Object )
					val = me.freeze( val, notify );
	
				if( val && val.__ )
					me.addParent( val, frozen );
	
				delete attrs[ key ];
	
				frozen[ key ] = val;
			});
	
			for( key in attrs ) {
				val = attrs[ key ];
				cons = val && val.constructor;
	
				if( cons == Array || cons == Object )
					val = me.freeze( val, notify );
	
				if( val && val.__ )
					me.addParent( val, frozen );
	
				frozen[ key ] = val;
			}
	
			Object.freeze( frozen );
	
			this.refreshParents( node, frozen );
	
			return frozen;
		},
		replaceself: function( node, attrs ) {
			var me = this,
				frozen = this.copyMeta( node ),
				notify = node.__.notify,
				val, cons, key
			;
			for( key in attrs ) {
				val = attrs[ key ];
				cons = val && val.constructor;
	
				if( cons == Array || cons == Object )
					val = me.freeze( val, notify );
	
				if( val && val.__ )
					me.addParent( val, frozen );
	
				frozen[ key ] = val;
			}
	
			Object.freeze( frozen );
	
			this.refreshParents( node, frozen );
	
			return frozen;
		},
		remove: function( node, attrs ){
			var me = this,
				frozen = this.copyMeta( node ),
				isFrozen
			;
	
			Utils.each( node, function( child, key ){
				isFrozen = child && child.__;
	
				if( isFrozen ){
					me.removeParent( child, node );
				}
	
				if( attrs.indexOf( key ) != -1 ){
					return;
				}
	
				if( isFrozen )
					me.addParent( child, frozen );
	
				frozen[ key ] = child;
			});
	
			Object.freeze( frozen );
			this.refreshParents( node, frozen );
	
			return frozen;
		},
	
		splice: function( node, args ){
			var me = this,
				frozen = this.copyMeta( node ),
				index = args[0],
				deleteIndex = index + args[1],
				notify = node.__.notify,
				con, child
			;
	
			// Clone the array
			Utils.each( node, function( child, i ){
	
				if( child && child.__ ){
					me.removeParent( child, node );
	
					// Skip the nodes to delete
					if( i < index || i>= deleteIndex )
						me.addParent( child, frozen );
				}
	
				frozen[i] = child;
			});
	
			// Prepare the new nodes
			if( args.length > 1 ){
				for (var i = args.length - 1; i >= 2; i--) {
					child = args[i];
					con = child && child.constructor;
	
					if( con == Array || con == Object )
						child = this.freeze( child, notify );
	
					if( child && child.__ )
						this.addParent( child, frozen );
	
					args[i] = child;
				}
			}
	
			// splice
			Array.prototype.splice.apply( frozen, args );
	
			Object.freeze( frozen );
			this.refreshParents( node, frozen );
	
			return frozen;
		},
	
		refresh: function( node, oldChild, newChild, returnUpdated ){
			var me = this,
				frozen = this.copyMeta( node ),
				__
			;
	
			Utils.each( node, function( child, key ){
				if( child == oldChild ){
					child = newChild;
				}
	
				if( child && (__ = child.__) ){
					if( __.dirty ){
						child = me.refresh( child, __.dirty[0], __.dirty[1], true );
					}
	
					me.removeParent( child, node );
					me.addParent( child, frozen );
				}
	
				frozen[ key ] = child;
			});
	
			Object.freeze( frozen );
	
			// If the node was dirty, clean it
			node.__.dirty = false;
	
			if( returnUpdated )
				return frozen;
	
			this.refreshParents( node, frozen );
		},
	
		fixChildren: function( node, oldNode ){
			var me = this;
			Utils.each( node, function( child ){
				if( !child || !child.__ )
					return;
	
				// If the child is linked to the node,
				// maybe its children are not linked
				if( child.__.parents.indexOf( node ) != -1 )
					return me.fixChildren( child );
	
				// If the child wasn't linked it is sure
				// that it wasn't modified. Just link it
				// to the new parent
				if( child.__.parents.length == 1 )
					return child.__.parents = [ node ];
	
				if( oldNode )
					me.removeParent( child, oldNode );
	
				me.addParent( node );
			});
		},
	
		clean: function( node ){
			return this.refresh( node, __.dirty[0], __.dirty[1], true );
		},
	
		copyMeta: function( node ){
			var me = this,
				frozen
			;
	
			if( node.constructor == Array ){
				frozen = this.createArray( node.length );
			}
			else {
				frozen = Object.create( Mixins.Hash );
			}
	
			var __ = node.__;
			Utils.addNE( frozen, {__: {
				notify: __.notify,
				listener: __.listener,
				parents: __.parents.slice( 0 ),
				dirty: false
			}});
	
			return frozen;
		},
	
		refreshParents: function( oldChild, newChild ){
			var __ = oldChild.__,
				i
			;
	
			if( __.listener )
				this.trigger( newChild, 'update', newChild );
	
			if( !__.parents.length ){
				if( __.listener ){
					__.listener.trigger( 'immediate', oldChild, newChild );
				}
			}
			else {
				for (i = __.parents.length - 1; i >= 0; i--) {
					if( i == 0 )
						this.refresh( __.parents[i], oldChild, newChild, false );
					else
						this.markDirty( __.parents[i], [oldChild, newChild] );
				}
			}
		},
	
		markDirty: function( node, dirt ){
			var __ = node.__,
				i
			;
			__.dirty = dirt;
	
			for ( i = __.parents.length - 1; i >= 0; i-- ) {
				this.markDirty( __.parents[i], dirt );
			}
		},
	
		removeParent: function( node, parent ){
			var parents = node.__.parents,
				index = parents.indexOf( parent )
			;
	
			if( index != -1 ){
				parents.splice( index, 1 );
			}
		},
	
		addParent: function( node, parent ){
			var parents = node.__.parents,
				index = parents.indexOf( parent )
			;
	
			if( index == -1 ){
				parents[ parents.length ] = parent;
			}
		},
	
		trigger: function( node, eventName, param ){
			var listener = node.__.listener,
				ticking = listener.ticking
			;
	
			listener.ticking = param;
			if( !ticking ){
				Utils.nextTick( function(){
					var updated = listener.ticking;
					listener.ticking = false;
					listener.trigger( eventName, updated );
				});
			}
		},
	
		createListener: function( frozen ){
			var l = frozen.__.listener;
	
			if( !l ) {
				l = Object.create(Emitter, {
					_events: {
						value: {},
						writable: true
					}
				});
	
				frozen.__.listener = l;
			}
	
			return l;
		},
	
		createArray: (function(){
			// Set createArray method
			if( [].__proto__ )
				return function( length ){
					var arr = new Array( length );
					arr.__proto__ = Mixins.List;
					return arr;
				}
			return function( length ){
				var arr = new Array( length ),
					methods = Mixins.arrayMethods
				;
				for( var m in methods ){
					arr[ m ] = methods[ m ];
				}
				return arr;
			}
		})()
	};
	//#build
	
	module.exports = Frozen;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__( 95 );
	
	//#build
	
	// The prototype methods are stored in a different object
	// and applied as non enumerable properties later
	var emitterProto = {
		on: function( eventName, listener, once ){
			var listeners = this._events[ eventName ] || [];
	
			listeners.push({ callback: listener, once: once});
			this._events[ eventName ] =  listeners;
	
			return this;
		},
	
		once: function( eventName, listener ){
			this.on( eventName, listener, true );
		},
	
		off: function( eventName, listener ){
			if( typeof eventName == 'undefined' ){
				this._events = {};
			}
			else if( typeof listener == 'undefined' ) {
				this._events[ eventName ] = [];
			}
			else {
				var listeners = this._events[ eventName ] || [],
					i
				;
	
				for (i = listeners.length - 1; i >= 0; i--) {
					if( listeners[i] === listener )
						listeners.splice( i, 1 );
				}
			}
	
			return this;
		},
	
		trigger: function( eventName ){
			var args = [].slice.call( arguments, 1 ),
				listeners = this._events[ eventName ] || [],
				onceListeners = [],
				i, listener
			;
	
			// Call listeners
			for (i = 0; i < listeners.length; i++) {
				listener = listeners[i];
	
				if( listener.callback )
					listener.callback.apply( null, args );
				else {
					// If there is not a callback, remove!
					listener.once = true;
				}
	
				if( listener.once )
					onceListeners.push( i );
			}
	
			// Remove listeners marked as once
			for( i = onceListeners.length - 1; i >= 0; i-- ){
				listeners.splice( onceListeners[i], 1 );
			}
	
			return this;
		}
	};
	
	// Methods are not enumerable so, when the stores are
	// extended with the emitter, they can be iterated as
	// hashmaps
	var Emitter = Utils.createNonEnumerable( emitterProto );
	//#build
	
	module.exports = Emitter;

/***/ }
/******/ ]);
//# sourceMappingURL=react-stockcharts-docs-core.js.map