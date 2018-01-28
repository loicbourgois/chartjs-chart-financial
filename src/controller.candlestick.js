'use strict';

module.exports = function(Chart) {

	Chart.defaults.candlestick = Object.assign({}, Chart.defaults.financial);
	Chart.defaults.candlestick.scales = {
		xAxes: [ Object.assign({}, Chart.defaults.financial.scales.xAxes[0]) ],
		yAxes: [ Object.assign({}, Chart.defaults.financial.scales.yAxes[0]) ]
	};

	Chart.controllers.candlestick = Chart.controllers.financial.extend({
		dataElementType: Chart.elements.Candlestick,

/*/
		getElementOptions: function() {
			return this.chart.options.elements.candlestick;
		},
/*/

		updateRectangle: function(rectangle, options) {
			Chart.controllers.financial.prototype.updateRectangle.apply(
				this,
				[
					rectangle,
					options ? options : this.chart.options.elements.candlestick
				]
			);
		}
/**/
	});

};
